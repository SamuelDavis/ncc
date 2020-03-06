import React, { useContext } from "react"
import Default from "../layouts/Default"
import LanguageContext from "../contexts/Language"
import "./about-us.scss"
import { PHOTO_JOURNAL_HREF, VALUES } from "../data"
import acronymSrc from "../images/acronym.png"
import photoJournalSrc from "../images/photo_journal.jpg"
import { FlareIcon, FormattedText } from "../components"
import { Link } from "gatsby"

export default function() {
  const {
    SITE_ACRONYM,
    NAV_PHOTO_JOURNAL,
    ABOUT_HEADING,
    ABOUT_VERSES,
    ABOUT_VERSES_CITATION,
    ABOUT_PROGRAMS_HEADING,
    ABOUT_PROGRAMS,
    ABOUT_ORIGIN_HEADING,
    ABOUT_ORIGIN,
    ABOUT_VALUES_HEADING,
  } = useContext(LanguageContext)
  return (
    <Default className={"AboutUs"}>
      <h1>{ABOUT_HEADING}</h1>
      <section className={"AboutUs__Verses"}>
        <ol>
          <FormattedText text={ABOUT_VERSES} type={"li"}/>
        </ol>
        <small>{ABOUT_VERSES_CITATION}</small>
      </section>
      <article>
        <div>
          <section>
            <h2>
              <FlareIcon/>
              {ABOUT_PROGRAMS_HEADING}
            </h2>
            <p>{ABOUT_PROGRAMS}</p>
            <img className={"acronym"} src={acronymSrc} alt={SITE_ACRONYM}/>
          </section>
          <section>
            <h2>
              <FlareIcon/>
              {ABOUT_ORIGIN_HEADING}
            </h2>
            <FormattedText text={ABOUT_ORIGIN}/>
          </section>
        </div>
        <section>
          <h2>
            <FlareIcon/>
            {ABOUT_VALUES_HEADING}
          </h2>
          <ul>
            {VALUES.map(({ label, text }, i) => (
              <li key={i}>
                <strong>{label}</strong> - <i>{text}</i>
              </li>
            ))}
          </ul>
          <Link to={PHOTO_JOURNAL_HREF}>
            <img src={photoJournalSrc} alt={NAV_PHOTO_JOURNAL}/>
          </Link>
        </section>
      </article>
    </Default>
  )
}
