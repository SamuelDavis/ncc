import React, { useContext } from "react"
import Layout from "../components/Layout/Layout"
import { LanguageContext } from "../contexts/Language"
export default function() {
  const {
    NEWSLETTERS: { HEADER },
  } = useContext(LanguageContext)
  return (
    <Layout className="Newsletters">
      <h1>{HEADER}</h1>
      <hr />
    </Layout>
  )
}
