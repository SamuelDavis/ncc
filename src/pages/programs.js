import React, { useContext } from "react"
import { LanguageContext } from "../contexts/Language"
import Layout from "../components/Layout/Layout"
import { FlareIcon } from "../components/misc"

export default function() {
  const { PROGRAMS_PROGRAMS_HEADER, PROGRAMS_EVENTS_HEADER } = useContext(
    LanguageContext
  )
  return (
    <Layout className="Programs">
      <section>
        <h2>
          <FlareIcon />
          {PROGRAMS_PROGRAMS_HEADER}
        </h2>
      </section>
      <section>
        <h2>
          <FlareIcon />
          {PROGRAMS_EVENTS_HEADER}
        </h2>
      </section>
    </Layout>
  )
}
