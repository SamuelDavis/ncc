import React, { useContext } from "react"
import Layout from "../components/Layout/Layout"
import { LanguageContext } from "../contexts/Language"

export default function() {
  const { SITE_MISSION, HOME_HEADER, HOME_MISSION, HOME_NOTE } = useContext(
    LanguageContext
  )

  function Header(props) {
    return <h1 {...props}>{HOME_HEADER}</h1>
  }

  return (
    <Layout className="Home" Header={Header}>
      <h2>{SITE_MISSION}</h2>
      <p>{HOME_MISSION}</p>
      <p>{HOME_NOTE}</p>
    </Layout>
  )
}
