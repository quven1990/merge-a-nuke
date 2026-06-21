import { BetaAnalyticsDataClient } from "@google-analytics/data"
import { google } from "googleapis"
import { readFileSync } from "fs"

const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
const ga4PropertyId = process.env.GA4_PROPERTY_ID
const gscSiteUrl = process.env.GSC_SITE_URL

if (!credPath || !ga4PropertyId) {
  console.error("Missing GOOGLE_APPLICATION_CREDENTIALS or GA4_PROPERTY_ID")
  process.exit(1)
}

const creds = JSON.parse(readFileSync(credPath, "utf8"))

async function ga4() {
  const client = new BetaAnalyticsDataClient({ credentials: creds })
  const property = `properties/${ga4PropertyId}`
  const end = new Date()
  const start = new Date()
  start.setDate(end.getDate() - 28)
  const fmt = (d) => d.toISOString().slice(0, 10)

  const [overview, pages, channels, sources, daily] = await Promise.all([
    client.runReport({
      property,
      dateRanges: [{ startDate: fmt(start), endDate: fmt(end) }],
      metrics: [
        { name: "activeUsers" },
        { name: "sessions" },
        { name: "screenPageViews" },
        { name: "bounceRate" },
        { name: "averageSessionDuration" },
        { name: "engagedSessions" },
      ],
    }),
    client.runReport({
      property,
      dateRanges: [{ startDate: fmt(start), endDate: fmt(end) }],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 15,
    }),
    client.runReport({
      property,
      dateRanges: [{ startDate: fmt(start), endDate: fmt(end) }],
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
      metrics: [{ name: "sessions" }, { name: "activeUsers" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 10,
    }),
    client.runReport({
      property,
      dateRanges: [{ startDate: fmt(start), endDate: fmt(end) }],
      dimensions: [{ name: "sessionSource" }, { name: "sessionMedium" }],
      metrics: [{ name: "sessions" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 10,
    }),
    client.runReport({
      property,
      dateRanges: [{ startDate: fmt(start), endDate: fmt(end) }],
      dimensions: [{ name: "date" }],
      metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }],
      orderBys: [{ dimension: { dimensionName: "date" } }],
    }),
  ])

  return { overview: overview[0], pages: pages[0], channels: channels[0], sources: sources[0], daily: daily[0], range: { start: fmt(start), end: fmt(end) } }
}

async function gsc(siteUrl) {
  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  })
  const searchconsole = google.searchconsole({ version: "v1", auth })
  const sites = await searchconsole.sites.list()

  const end = new Date()
  const start = new Date()
  start.setDate(end.getDate() - 28)
  const fmt = (d) => d.toISOString().slice(0, 10)

  const querySite = async (url) => {
    const [overview, queries, pages, countries] = await Promise.all([
      searchconsole.searchanalytics.query({
        siteUrl: url,
        requestBody: { startDate: fmt(start), endDate: fmt(end), dimensions: [] },
      }),
      searchconsole.searchanalytics.query({
        siteUrl: url,
        requestBody: {
          startDate: fmt(start),
          endDate: fmt(end),
          dimensions: ["query"],
          rowLimit: 20,
        },
      }),
      searchconsole.searchanalytics.query({
        siteUrl: url,
        requestBody: {
          startDate: fmt(start),
          endDate: fmt(end),
          dimensions: ["page"],
          rowLimit: 15,
        },
      }),
      searchconsole.searchanalytics.query({
        siteUrl: url,
        requestBody: {
          startDate: fmt(start),
          endDate: fmt(end),
          dimensions: ["country"],
          rowLimit: 10,
        },
      }),
    ])
    return { overview: overview.data, queries: queries.data, pages: pages.data, countries: countries.data, siteUrl: url, range: { start: fmt(start), end: fmt(end) } }
  }

  const candidates = [
    siteUrl,
    "https://mergeanuke.site/",
    "https://mergeanuke.site",
    "sc-domain:mergeanuke.site",
  ].filter(Boolean)

  const errors = []
  for (const url of [...new Set(candidates)]) {
    try {
      const data = await querySite(url)
      return { ...data, sites: sites.data }
    } catch (e) {
      errors.push({ url, message: e.message })
    }
  }
  return { error: "all candidates failed", errors, sites: sites.data }
}

function rows(report) {
  return (report?.rows || []).map((r) => ({
    dims: r.dimensionValues?.map((d) => d.value),
    metrics: r.metricValues?.map((m) => m.value),
  }))
}

const ga = await ga4()
const g = await gsc(gscSiteUrl)

console.log(
  JSON.stringify(
    {
      ga4: {
        range: ga.range,
        overview: rows(ga.overview),
        pages: rows(ga.pages),
        channels: rows(ga.channels),
        sources: rows(ga.sources),
        daily: rows(ga.daily),
      },
      gsc: g,
    },
    null,
    2,
  ),
)
