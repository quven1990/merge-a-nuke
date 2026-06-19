#!/usr/bin/env bash
set -euo pipefail

HOST="${INDEXNOW_HOST:-mergeanuke.site}"
KEY="${INDEXNOW_KEY:-0db64cc9fdae45179c18788b5cc458d2}"
SITE_URL="https://${HOST}"
KEY_LOCATION="${SITE_URL}/${KEY}.txt"
SITEMAP_URL="${SITE_URL}/sitemap.xml"
ENDPOINT="${INDEXNOW_ENDPOINT:-https://api.indexnow.org/indexnow}"

echo "Fetching sitemap: ${SITEMAP_URL}"
sitemap_xml=$(curl -fsS "$SITEMAP_URL")

url_list=$(
  printf '%s' "$sitemap_xml" | sed -n 's:.*<loc>\([^<]*\)</loc>.*:\1:p' | jq -R -s -c 'split("\n") | map(select(length > 0))'
)

if [ "$(echo "$url_list" | jq 'length')" -eq 0 ]; then
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

echo "Submitting $(echo "$url_list" | jq 'length') URLs to IndexNow..."
http_code=$(
  curl -sS -o /tmp/indexnow-response.txt -w "%{http_code}" -X POST "$ENDPOINT" \
    -H "Content-Type: application/json; charset=utf-8" \
    -d "$payload"
)

echo "IndexNow HTTP ${http_code}"
if [ -s /tmp/indexnow-response.txt ]; then
  cat /tmp/indexnow-response.txt
  echo ""
fi

if [ "$http_code" != "200" ] && [ "$http_code" != "202" ]; then
  echo "::error::IndexNow submission failed with HTTP ${http_code}"
  exit 1
fi

echo "IndexNow submission accepted."
