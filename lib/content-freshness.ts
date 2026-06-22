const CONTENT_LOCALE = "en-US"

/** Month + year label for codes SEO and on-page freshness (evaluated at build time). */
export function getContentMonthYear(date: Date = new Date()): string {
  return new Intl.DateTimeFormat(CONTENT_LOCALE, {
    month: "long",
    year: "numeric",
  }).format(date)
}

/** Full date for "last checked" labels (evaluated at build / deploy time). */
export function getContentCheckedDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat(CONTENT_LOCALE, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date)
}
