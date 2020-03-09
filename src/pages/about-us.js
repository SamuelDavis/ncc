import React, { useContext } from "react"
import Default from "../layouts/Default"
import LanguageContext from "../contexts/Language"
import "./about-us.scss"
import { INSTAGRAM_EMBED_HREF, VALUES } from "../data"
import acronymSrc from "../images/acronym.png"
import { FlareIcon, FormattedText } from "../components"
import InstagramEmbed from "react-instagram-embed"
import { FaSadCry, FaSpinner } from "react-icons/all"

export default function() {
  const {
    SITE_ACRONYM,
    ABOUT_HEADING,
    ABOUT_VERSES,
    ABOUT_VERSES_CITATION,
    ABOUT_PROGRAMS_HEADING,
    ABOUT_PROGRAMS,
    ABOUT_ORIGIN_HEADING,
    ABOUT_ORIGIN,
    ABOUT_VALUES_HEADING,
    ABOUT_PHOTO_JOURNAL,
  } = useContext(LanguageContext)
  return (
    <Default className={"AboutUs"}>
      <h1>{ABOUT_HEADING}</h1>
      <section className={"AboutUs__Verses"}>
        <ol>
          <FormattedText text={ABOUT_VERSES} type={"li"} />
        </ol>
        <small>{ABOUT_VERSES_CITATION}</small>
      </section>
      <article>
        <div>
          <section>
            <h2>
              <FlareIcon />
              {ABOUT_PROGRAMS_HEADING}
            </h2>
            <p>{ABOUT_PROGRAMS}</p>
            <img className={"acronym"} src={acronymSrc} alt={SITE_ACRONYM} />
          </section>
          <section>
            <h2>
              <FlareIcon />
              {ABOUT_ORIGIN_HEADING}
            </h2>
            <FormattedText text={ABOUT_ORIGIN} />
          </section>
        </div>
        <section>
          <h2>
            <FlareIcon />
            {ABOUT_VALUES_HEADING}
          </h2>
          <ul>
            {VALUES.map(({ label, text }, i) => (
              <li key={i}>
                <strong>{label}</strong> - <i>{text}</i>
              </li>
            ))}
          </ul>
          <section className={"AboutUs__PhotoJournal"}>
            <p>{ABOUT_PHOTO_JOURNAL}</p>
            <InstagramEmbed
              url={INSTAGRAM_EMBED_HREF}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => <FaSpinner />}
              onFailure={() => <FaSadCry />}
            />
          </section>
        </section>
      </article>
    </Default>
  )
}
