import React from "react"
import { LanguageProvider } from "./src/contexts/Language"

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
)
