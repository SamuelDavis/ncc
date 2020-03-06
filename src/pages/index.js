import React, { useContext } from "react"
import Default from "../layouts/Default"
import LanguageContext from "../contexts/Language"

export default function() {
  const {
    HOME_HEADING,
    HOME_MISSION_HEADING,
    HOME_MISSION,
    HOME_NOTE,
  } = useContext(LanguageContext)
  return (
    <Default>
      <h1>{HOME_HEADING}</h1>
      <hr />
      <h2>{HOME_MISSION_HEADING}</h2>
      <p>{HOME_MISSION}</p>
      <hr />
      <p>{HOME_NOTE}</p>
    </Default>
  )
}
