import React from "react"
import headerFlareSrc from "../../static/images/header_flare.png"

export function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

export function FlareIcon() {
  return <img src={headerFlareSrc} alt="icon" />
}
