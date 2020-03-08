import React, { useContext } from "react"
import Default from "../layouts/Default"
import LanguageContext from "../contexts/Language"
import { FlareIcon } from "../components"
import "./index.scss"
import Calendar from "../components/Calendar"

export default function() {
  const {
    HOME_HEADING,
    HOME_SUB_HEADING,
    HOME_MISSION_HEADING,
    HOME_MISSION,
    HOME_NOTE,
    SITE_NAME,
    [`MONTH_${new Date().getMonth()}`]: MONTH,
    WORD_CALENDAR,
  } = useContext(LanguageContext)
  return (
    <Default className={"Home"}>
      <section>
        <h1 style={{ marginBottom: 0 }}>
          <FlareIcon />
          {HOME_HEADING}
        </h1>
        <h2>{HOME_SUB_HEADING}</h2>
      </section>
      <section className={"Home__Mission"}>
        <h2>
          <FlareIcon />
          {HOME_MISSION_HEADING}
        </h2>
        <p>{HOME_MISSION}</p>
      </section>
      <section>
        <p>{HOME_NOTE}</p>
      </section>
      <section>
        <h2>
          <FlareIcon />
          {SITE_NAME} - {MONTH} {WORD_CALENDAR}
        </h2>
        <Calendar agenda={true} />
      </section>
    </Default>
  )
}
