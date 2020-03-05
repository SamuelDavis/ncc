import React, { useEffect, useRef } from "react"
import Carousel from "../Carousel"
import LayoutHeader from "./Header"
import MainNav from "./MainNav"
import Footer from "./Footer"
import "./Layout.scss"

export default function({
  children = [],
  Header = null,
  Sidebar = null,
  ...props
}) {
  const containerEl = useRef(null)
  const headerWrapperEl = useRef(null)
  useEffect(() => {
    if (containerEl.current && headerWrapperEl.current)
      containerEl.current.style.marginTop = window.getComputedStyle(
        headerWrapperEl.current.firstChild
      ).height
  }, [headerWrapperEl])
  return (
    <div ref={containerEl}>
      <section ref={headerWrapperEl}>
        <LayoutHeader />
      </section>
      <Carousel />
      <MainNav />
      <article {...props}>
        {!!Header && <Header className="header" />}
        <div className="container">
          <section className="content">{children}</section>
          {!!Sidebar && (
            <section className="sidebar">
              <Sidebar />
            </section>
          )}
        </div>
      </article>
      <Footer className="footer" />
    </div>
  )
}
