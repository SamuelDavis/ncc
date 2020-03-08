import React, { useContext } from "react"
import Default from "../layouts/Default"
import LanguageContext from "../contexts/Language"
import { Link } from "gatsby"
import { CALENDAR_HREF, PROGRAMS } from "../data"
import "./programs.scss"
import { FormattedText } from "../components"
import Calendar from "../components/Calendar"

function ProgramItem({ name, desc, icon, ...props }) {
  return (
    <li {...props}>
      {typeof icon === "string" ? (
        <img className={"icon"} src={icon} alt={name} />
      ) : (
        icon
      )}
      <h2>{name}</h2>
      <FormattedText text={desc} />
    </li>
  )
}

export default function() {
  const {
    PROGRAMS_PROGRAMS_HEADING,
    PROGRAMS_UPCOMING_HEADING,
    PROGRAMS_CALENDAR_NAV,
  } = useContext(LanguageContext)
  return (
    <Default className={"Programs"}>
      <section>
        <h2>{PROGRAMS_PROGRAMS_HEADING}</h2>
        <hr />
        <ul className={"Programs__ProgramList"}>
          {PROGRAMS.map((program, i) => (
            <ProgramItem {...program} key={i} />
          ))}
        </ul>
      </section>
      <section>
        <h2>{PROGRAMS_UPCOMING_HEADING}</h2>
        <hr />
        <Link to={CALENDAR_HREF}>
          <Calendar agenda={true} />
          <button>{PROGRAMS_CALENDAR_NAV}</button>
        </Link>
      </section>
    </Default>
  )
}
