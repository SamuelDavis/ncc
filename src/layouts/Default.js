import React, { forwardRef, Fragment, useContext, useRef } from "react"
import { Link } from "gatsby"
import LanguageContext, { LanguageSelect } from "../contexts/Language"
import headerLogoSrc from "../images/header.png"
import footerLogoSrc from "../images/footer.png"
import mainNavSrc from "../images/main_nav.png"
import { ExternalLink, FormattedText } from "../components"
import {
  ABOUT_HREF,
  ADDRESS,
  CALENDAR_HREF,
  DONATE_HREF,
  EMAIL,
  FACEBOOK_HREF,
  HOME_HREF,
  INSTAGRAM_HREF,
  NEWSLETTERS_HREF,
  PROGRAMS_HREF,
  SIGN_IN_HREF,
  TEL,
  VOLUNTEER_HREF,
} from "../data"
import { FaFacebook, FaInstagram, FaPhone, MdMail } from "react-icons/all"
import { Carousel } from "../components/Carousel"
import "./Default.scss"
import { useWindowEvent } from "../hooks"

function TopBar() {
  const { SITE_MOTTO } = useContext(LanguageContext)
  return (
    <div className={"Header__TopBar"}>
      <nav>
        <ExternalLink href={`tel:${TEL}`}>
          <FaPhone />
        </ExternalLink>
        <ExternalLink href={`mailto:${EMAIL}`}>
          <MdMail />
        </ExternalLink>
        <ExternalLink href={FACEBOOK_HREF}>
          <FaFacebook />
        </ExternalLink>
        <ExternalLink href={INSTAGRAM_HREF}>
          <FaInstagram />
        </ExternalLink>
      </nav>
      <span>{SITE_MOTTO}</span>
    </div>
  )
}

function TopNav() {
  const { SITE_NAME, NAV_DONATE, NAV_SIGN_IN, NAV_NEWSLETTERS } = useContext(
    LanguageContext
  )
  return (
    <div className={"Header__TopNav"}>
      <Link to={HOME_HREF}>
        <img src={headerLogoSrc} alt={SITE_NAME} />
      </Link>
      <LanguageSelect />
      <nav className={"Header__TopNav__Items"}>
        <ExternalLink href={DONATE_HREF}>{NAV_DONATE}</ExternalLink>
        <ExternalLink href={SIGN_IN_HREF}>{NAV_SIGN_IN}</ExternalLink>
        <Link to={NEWSLETTERS_HREF}>{NAV_NEWSLETTERS}</Link>
      </nav>
    </div>
  )
}

const Header = forwardRef((_, ref) => (
  <header className={"Header"} ref={ref}>
    <TopBar />
    <TopNav />
  </header>
))

function MainNavItem({ href, text, style = {}, ...props }) {
  return (
    <Link
      className={"MainNav__Item"}
      to={href}
      style={{ backgroundImage: `url(${mainNavSrc})`, ...style }}
      {...props}
    >
      <h2>{text}</h2>
    </Link>
  )
}

function MainNav() {
  const {
    NAV_ABOUT_US,
    NAV_PROGRAMS,
    NAV_CALENDAR,
    NAV_VOLUNTEER,
  } = useContext(LanguageContext)
  return (
    <nav className={"MainNav"}>
      <MainNavItem href={ABOUT_HREF} text={NAV_ABOUT_US} />
      <MainNavItem href={PROGRAMS_HREF} text={NAV_PROGRAMS} />
      <MainNavItem href={CALENDAR_HREF} text={NAV_CALENDAR} />
      <MainNavItem href={VOLUNTEER_HREF} text={NAV_VOLUNTEER} />
    </nav>
  )
}

function Summary() {
  const {
    SITE_NAME,
    FOOTER_HEADING_CONTACT,
    FOOTER_HEADING_MISSION,
    FOOTER_MISSION,
  } = useContext(LanguageContext)
  return (
    <div className={"Footer__Summary"}>
      <img src={footerLogoSrc} alt={SITE_NAME} />
      <div>
        <h2>{FOOTER_HEADING_CONTACT}</h2>
        <hr />
        {ADDRESS.map((line, i) => (
          <Fragment key={i}>
            <span>{line}</span>
            <br />
          </Fragment>
        ))}
        <ExternalLink href={`tel:${TEL}`}>{TEL}</ExternalLink>
      </div>
      <div>
        <h2>{FOOTER_HEADING_MISSION}</h2>
        <hr />
        <FormattedText text={FOOTER_MISSION} />
      </div>
    </div>
  )
}

function BottomBar() {
  const { FOOTER_TAG } = useContext(LanguageContext)
  return (
    <div className={"Footer__BottomBar"}>
      <span>{FOOTER_TAG}</span>
      <nav>
        <ExternalLink href={FACEBOOK_HREF}>
          <FaFacebook />
        </ExternalLink>
        <ExternalLink href={INSTAGRAM_HREF}>
          <FaInstagram />
        </ExternalLink>
      </nav>
    </div>
  )
}

function Footer() {
  return (
    <footer className={"Footer"}>
      <Summary />
      <BottomBar />
    </footer>
  )
}

export default function({ children = [], className = "", ...props }) {
  const wrapperRef = useRef(null)
  const headerRef = useRef(null)

  useWindowEvent(
    "resize",
    () => {
      if (wrapperRef.current && headerRef.current)
        wrapperRef.current.style.marginTop = window.getComputedStyle(
          headerRef.current
        ).height
    },
    [wrapperRef, headerRef]
  )

  return (
    <div className={`Layout__Default ${className}`} ref={wrapperRef} {...props}>
      <Header ref={headerRef} />
      <Carousel />
      <MainNav />
      <main className={"Main"}>{children}</main>
      <Footer />
    </div>
  )
}
