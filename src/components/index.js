import React, { createElement, Fragment } from "react"
import headerFlareSrc from "../images/header_flare.png"

export function ExternalLink({ href, children = [], ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

export function FlareIcon() {
  return <img className={"icon"} src={headerFlareSrc} alt="icon" />
}

export function FormattedText({ text, type = "p", ...props }) {
  const texts = text.split("\n")
  return texts.length === 1 ? (
    createElement(type, props, text)
  ) : (
    <Fragment>
      {texts.map((text, i) => createElement(type, { ...props, key: i }, text))}
    </Fragment>
  )
}
