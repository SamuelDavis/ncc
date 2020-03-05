import React, { useContext } from "react"
import { LanguageContext, LanguageSelect } from "../../contexts/Language"
import { ExternalLink } from "../misc"
import { Link } from "gatsby"
import headerSrc from "../../../static/images/header.png"
import "./Header.scss"
import {
  CONTACT_LINKS,
  HEADER_NAV_LINKS,
  NEWSLETTERS_LINK,
  SOCIAL_LINKS,
} from "../../variables"

export default function Header() {
  const {
    HEADER_TOP_RIGHT,
    SITE_NAME,
    TOP_NAV_DONATE,
    TOP_NAV_SIGN_IN,
    TOP_NAV_NEWSLETTERS,
  } = useContext(LanguageContext)
  const TOP_NAV = {
    DONATE: TOP_NAV_DONATE,
    SIGN_IN: TOP_NAV_SIGN_IN,
    NEWSLETTERS: TOP_NAV_NEWSLETTERS,
  }
  return (
    <header className="Header">
      <div className="Header__TopStrip">
        <nav>
          {[...CONTACT_LINKS, ...SOCIAL_LINKS].map(({ href, render }, i) => (
            <ExternalLink key={i} href={href}>
              {render}
            </ExternalLink>
          ))}
        </nav>
        <div>
          <span>{HEADER_TOP_RIGHT}</span>
        </div>
      </div>
      <nav className="Header__Nav">
        <Link to={"/"}>
          <img src={headerSrc} alt={SITE_NAME} />
        </Link>
        <LanguageSelect />
        {HEADER_NAV_LINKS.map(({ href, render }, i) => (
          <ExternalLink key={i} href={href}>
            {TOP_NAV[render]}
          </ExternalLink>
        ))}
        <Link to={NEWSLETTERS_LINK.href}>
          {TOP_NAV[NEWSLETTERS_LINK.render]}
        </Link>
      </nav>
    </header>
  )
}
