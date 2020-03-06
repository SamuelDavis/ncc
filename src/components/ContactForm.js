import React from "react"
import { ExternalLink } from "./index"

export default function({ className, ...props }) {
  return (
    <ExternalLink
      href="https://formspree.io/"
      className={`ContactForm ${className}`}
      {...props}
    >
      FormSpree
    </ExternalLink>
  )
}
