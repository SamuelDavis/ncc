import React, { useContext } from "react"
import { LanguageContext } from "../../contexts/Language"
import footerSrc from "../../../static/images/footer.png"
import { ExternalLink } from "../misc"
import "./Footer.scss"
import { ADDRESS, SOCIAL_LINKS, TEL_LINK } from "../../variables"

export default function Footer() {
  const {
    SITE_NAME,
    SITE_MISSION,
    FOOTER_CONTACT,
    FOOTER_MISSION1,
    FOOTER_MISSION2,
    FOOTER_BOTTOM_LEFT,
  } = useContext(LanguageContext)
  return (
    <footer>
      <div className="Footer__Content">
        <div className="Footer__Content__Logo">
          <img src={footerSrc} alt={SITE_NAME} />
        </div>
        <div className="Footer__Content__Contact">
          <h2>{FOOTER_CONTACT}</h2>
          <hr />
          <ExternalLink
            href={`https://www.google.com/maps/place/${ADDRESS.join(
              ", "
            ).replace(/ /g, "+")}`}
          >
            {ADDRESS.map((text, i) => (
              <div key={i}>{text}</div>
            ))}
          </ExternalLink>
          <br />
          <ExternalLink href={TEL_LINK.href}>{TEL_LINK.render}</ExternalLink>
        </div>
        <div className="Footer__Content__Mission">
          <h2>{SITE_MISSION}</h2>
          <hr />
          <p>{FOOTER_MISSION1}</p>
          <p>{FOOTER_MISSION2}</p>
        </div>
      </div>
      <div className="Footer__BottomStrip">
        <span>{FOOTER_BOTTOM_LEFT}</span>
        <nav>
          {SOCIAL_LINKS.map(({ href, render }, i) => (
            <ExternalLink key={i} href={href}>
              {render}
            </ExternalLink>
          ))}
        </nav>
      </div>
    </footer>
  )
}
