import React, { useContext } from "react"
import LanguageContext from "../contexts/Language"
import Default from "../layouts/Default"
import { ExternalLink, FlareIcon, FormattedText } from "../components"
import { VOLUNTEER_EXTERNAL_HREF } from "../data"
import ContactForm from "../components/ContactForm"
import volunteerSidebarSrc from "../images/volunteer_sidebar.png"
import "./volunteer.scss"

export default function() {
  const {
    NAV_VOLUNTEER_EXTERNAL,
    VOLUNTEER_VOLUNTEER_HEADING,
    VOLUNTEER_VOLUNTEER,
    VOLUNTEER_INVOLVED_HEADING,
    VOLUNTEER_INVOLVED,
    VOLUNTEER_EVENTS_HEADING,
    VOLUNTEER_CONTACT_HEADING,
    VOLUNTEER_CONTACT,
    VOLUNTEER_FORM_HEADING,
    VOLUNTEER_SIDEBAR_ALT,
  } = useContext(LanguageContext)
  return (
    <Default className={"Volunteer"}>
      <article>
        <div>
          <section>
            <h2>
              <FlareIcon />
              {VOLUNTEER_VOLUNTEER_HEADING}
            </h2>
            <p>{VOLUNTEER_VOLUNTEER}</p>
            <ExternalLink href={VOLUNTEER_EXTERNAL_HREF}>
              <button>{NAV_VOLUNTEER_EXTERNAL}</button>
            </ExternalLink>
          </section>
          <section>
            <h2>
              <FlareIcon />
              {VOLUNTEER_INVOLVED_HEADING}
            </h2>
            <p>{VOLUNTEER_INVOLVED}</p>
            <p>{VOLUNTEER_EVENTS_HEADING}</p>
          </section>
          <section>
            <h2>
              <FlareIcon />
              {VOLUNTEER_CONTACT_HEADING}
            </h2>
            <FormattedText text={VOLUNTEER_CONTACT} />
          </section>
          <section>
            <h2>{VOLUNTEER_FORM_HEADING}</h2>
            <ContactForm className={"Volunteer__ContactForm"} />
          </section>
        </div>
        <section>
          <img src={volunteerSidebarSrc} alt={VOLUNTEER_SIDEBAR_ALT} />
        </section>
      </article>
    </Default>
  )
}
