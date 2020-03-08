import React from "react"

const URL = "https://calendar.google.com/calendar/embed"
const PARAMS = {
  src: "alterimaging.com_3jd86apa8fqp1cu605o60apvbs@group.calendar.google.com",
  ctz: "America/New_York",
  title: "Neighborhood C.A.R.E. Center",
  showPrint: 0,
  showTabs: 0,
  showCalendars: 0,
}

export default function({ agenda = false, ...props }) {
  const src = `${URL}?${new URLSearchParams({
    ...PARAMS,
    mode: agenda ? "AGENDA" : "MONTH",
    showNav: agenda ? 0 : 1,
  })}`
  return (
    <iframe
      src={src}
      style={{ border: 0 }}
      width="100%"
      height="600"
      frameBorder="0"
      scrolling="no"
    />
  )
}
