#!/usr/bin/env bash
set -euo pipefail

HOST="${INDEXNOW_HOST:-mergeanuke.site}"
KEY="${INDEXNOW_KEY:-0db64cc9fdae45179c18788b5cc458d2}"
SITE_URL="https://${HOST}"
KEY_LOCATION="${SITE_URL}/${KEY}.txt"
SITEMAP_URL="${SITE_URL}/sitemap.xml"

# Official bulk submission endpoints (see IndexNow / Bing Webmaster docs).
ENDPOINTS=(
  "https://api.indexnow.org/indexnow"
  "https://www.bing.com/indexnow"
)

echo "Fetching sitemap: ${SITEMAP_URL}"
sitemap_xml=$(curl -fsS "$SITEMAP_URL")

url_list=$(
  printf '%s' "$sitemap_xml" | sed -n 's:.*<loc>\([^<]*\)</loc>.*:\1:p' | jq -R -s -c 'split("\n") | map(select(length > 0))'
)

url_count=$(echo "$url_list" | jq 'length')
if [ "$url_count" -eq 0 ]; then
  echo "::error::No URLs found in sitemap."
  exit 1
fi

payload=$(
  jq -n \
    --arg host "$HOST" \
    --arg key "$KEY" \
    --arg keyLocation "$KEY_LOCATION" \
    --argjson urlList "$url_list" \
    '{host: $host, key: $key, keyLocation: $keyLocation, urlList: $urlList}'
)

echo "Payload:"
echo "$payload" | jq .
echo ""
echo "Submitting ${url_count} URLs to IndexNow..."

primary_ok=false

for endpoint in "${ENDPOINTS[@]}"; do
  echo "POST ${endpoint}"
  http_code=$(
    curl -sS -o "/tmp/indexnow-response-$(echo "$endpoint" | tr '/:' '_').txt" -w "%{http_code}" -X POST "$endpoint" \
      -H "Content-Type: application/json; charset=utf-8" \
      -d "$payload"
  )

  echo "HTTP ${http_code}"
  response_file="/tmp/indexnow-response-$(echo "$endpoint" | tr '/:' '_').txt"
  if [ -s "$response_file" ]; then
    cat "$response_file"
    echo ""
  fi

  if [ "$http_code" = "200" ] || [ "$http_code" = "202" ]; then
    if [ "$endpoint" = "https://api.indexnow.org/indexnow" ]; then
      primary_ok=true
    fi
    continue
  fi

  if [ "$endpoint" = "https://api.indexnow.org/indexnow" ]; then
    echo "::error::IndexNow submission failed with HTTP ${http_code}"
    exit 1
  fi

  echo "::warning::Bing IndexNow endpoint returned HTTP ${http_code}; central API succeeded."
done

if [ "$primary_ok" != true ]; then
  echo "::error::IndexNow central API did not accept the submission."
  exit 1
fi

echo "IndexNow bulk submission accepted."
