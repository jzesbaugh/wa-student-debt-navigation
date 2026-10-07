# SEO and GitHub Pages launch notes

Working public URL used in this build:
`https://jzesbaugh.github.io/wa-student-debt-navigation/`

If the repository name or domain changes, search/replace that base URL in the HTML files plus `sitemap.xml`, `robots.txt`, and `llms.txt` before publishing.

## GitHub Pages
1. Create the public repository `wa-student-debt-navigation` (or update the URLs above if you choose another name).
2. Upload the contents of this folder to the repository root.
3. In GitHub: Settings → Pages → deploy from the `main` branch, root folder.
4. Confirm that `https://jzesbaugh.github.io/wa-student-debt-navigation/` resolves and that CSS/images load.

## Search launch
1. Add the live URL as a URL-prefix property in Google Search Console.
2. Submit `https://jzesbaugh.github.io/wa-student-debt-navigation/sitemap.xml`.
3. Use URL Inspection on the homepage and the Get Help page after launch.
4. Optionally add the site to Bing Webmaster Tools as well.
5. If you later use a custom domain, update every canonical/Open Graph URL, the sitemap, robots.txt, and `llms.txt`.

## What has already been added
- Unique page titles and meta descriptions
- Canonical URLs
- Open Graph and Twitter-card metadata
- Crawl/index directives
- JSON-LD WebSite/Person/WebPage structured data
- Sitemap and robots.txt
- Semantic, crawlable HTML with page-specific H1/H2 hierarchy
- Author/about context and source/methodology page
- Visible last-reviewed date on the Sources page
- SVG favicon and web manifest
- Supplemental `llms.txt` (emerging convention; not required by Google or guaranteed to affect AI discovery)

## Ongoing maintenance
Because this site discusses law and financial resources, re-check legal/resource claims on a regular schedule and update the visible `Last reviewed` date only after a substantive review.
