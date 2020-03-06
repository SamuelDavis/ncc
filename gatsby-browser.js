import React from "react"
import { LanguageProvider } from "./src/contexts/Language"
import "./src/styles.scss"

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
)
