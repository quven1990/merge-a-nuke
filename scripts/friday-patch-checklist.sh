#!/usr/bin/env bash
# Friday patch checklist for mergeanuke.site maintainers.
# Run after Nuke The Game ships a weekly Roblox update.

set -euo pipefail

echo "=== Merge a Nuke Wiki — Friday patch checklist ==="
echo ""
echo "[ ] 1. Verify codes in-game (ATOMIC, UPDATE2, BOOM) — update lib/codes-data.ts if expired"
echo "[ ] 2. Update commanders / raid copy if abilities or events changed"
echo "[ ] 3. Add PATCH_UPDATES entry in lib/updates-data.ts with date + highlights"
echo "[ ] 4. Mark new commander abilities verified (remove pending) only with in-game proof"
echo "[ ] 5. npm run build"
echo "[ ] 6. Deploy to production (push main → Cloudflare Pages)"
echo "[ ] 7. Wait for CI: cache purge → sleep 180s → IndexNow (cf-cache-purge.yml)"
echo "[ ] 8. Optional: Bing SubmitUrlbatch for changed URLs"
echo "[ ] 9. Check Bing Webmaster for new 5xx URLs within 24h"
echo ""
echo "Data review targets (site-data-review-iteration):"
echo "  - Bing InIndex, 5xx/day, weekly organic clicks"
echo "  - Commander query CTR on /commanders and detail pages"
echo ""
