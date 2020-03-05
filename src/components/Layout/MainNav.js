import React, { useContext, useEffect, useRef } from "react"
import { LanguageContext } from "../../contexts/Language"
import { Link } from "gatsby"
import mainNavSrc from "../../../static/images/main_nav.png"
import "./MainNav.scss"
import { MAIN_NAV_LINKS } from "../../variables"

function MainNavItem({ href, text, src, ...props }) {
  const el = useRef(null)
  useEffect(() => {
    function onResize() {
      if (el.current)
        el.current.style.height = window.getComputedStyle(el.current).width
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [el])
  return (
    <Link ref={el} to={href} {...props}>
      <h1 className="MainNav__Text">{text}</h1>
      <img src={src} alt={text} />
    </Link>
  )
}

export default function MainNav() {
  const { MAIN_NAV_ABOUT, MAIN_NAV_PROGRAMS, MAIN_NAV_VOLUNTEER } = useContext(
    LanguageContext
  )
  const MAIN_NAV = {
    ABOUT: MAIN_NAV_ABOUT,
    PROGRAMS: MAIN_NAV_PROGRAMS,
    VOLUNTEER: MAIN_NAV_VOLUNTEER,
  }
  return (
    <nav className="MainNav">
      {MAIN_NAV_LINKS.map(({ href, render }, i) => {
        return (
          <MainNavItem
            key={i}
            href={href}
            text={MAIN_NAV[render]}
            src={mainNavSrc}
          />
        )
      })}
    </nav>
  )
}
