import React, { useContext } from "react"
import Layout from "../components/Layout/Layout"
import { LanguageContext } from "../contexts/Language"
export default function() {
  const { NEWSLETTERS_HEADER } = useContext(LanguageContext)
  return (
    <Layout className="Newsletters">
      <h1>{NEWSLETTERS_HEADER}</h1>
      <hr />
    </Layout>
  )
}
