import React, { useContext } from "react"
import { LanguageContext } from "../contexts/Language"
import Layout from "../components/Layout/Layout"
import { ExternalLink, FlareIcon } from "../components/misc"
import volunteerSidebarSrc from "../../static/images/volunteer_sidebar.png"
import { VOLUNTEER_HREF } from "../variables"
import "./iserve.scss"

function ContactForm() {
  return <ExternalLink href="https://formspree.io/">FormSpree</ExternalLink>
}

export default function() {
  const {
    VOLUNTEER_VOLUNTEER_HEADER,
    VOLUNTEER_VOLUNTEER_CONTENT,
    VOLUNTEER_VOLUNTEER_ACTION,
    VOLUNTEER_INVOLVED_HEADER,
    VOLUNTEER_INVOLVED_CONTENT,
    VOLUNTEER_EVENT_LIST_HEADER,
    VOLUNTEER_CONTACT_HEADER,
    VOLUNTEER_CONTACT_CONTENT,
    VOLUNTEER_CONTACT_FORM_HEADER,
    VOLUNTEER_SIDEBAR_ALT,
  } = useContext(LanguageContext)

  function Sidebar(props) {
    return (
      <section {...props}>
        <img src={volunteerSidebarSrc} alt={VOLUNTEER_SIDEBAR_ALT} />
      </section>
    )
  }

  return (
    <Layout className="IServe" Sidebar={Sidebar}>
      <section className="IServe__Volunteer">
        <h2>
          <FlareIcon />
          {VOLUNTEER_VOLUNTEER_HEADER}
        </h2>
        <p>{VOLUNTEER_VOLUNTEER_CONTENT}</p>
        <button>
          <ExternalLink href={VOLUNTEER_HREF}>
            {VOLUNTEER_VOLUNTEER_ACTION}
          </ExternalLink>
        </button>
      </section>
      <section>
        <h2>
          <FlareIcon />
          {VOLUNTEER_INVOLVED_HEADER}
        </h2>
        <p>{VOLUNTEER_INVOLVED_CONTENT}</p>
        <h5>{VOLUNTEER_EVENT_LIST_HEADER}</h5>
      </section>
      <section>
        <h2>
          <FlareIcon />
          {VOLUNTEER_CONTACT_HEADER}
        </h2>
        <p>{VOLUNTEER_CONTACT_CONTENT}</p>
        <strong>{VOLUNTEER_CONTACT_FORM_HEADER}</strong>
        <ContactForm />
      </section>
    </Layout>
  )
}
