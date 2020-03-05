import React, { useContext } from "react"
import Layout from "../components/Layout/Layout"
import { LanguageContext } from "../contexts/Language"
import acronymSrc from "../../static/images/acronym.png"
import { FlareIcon } from "../components/misc"
import "./about-us.scss"
import { Link } from "gatsby"

const HEADER_VERSES = [
  "Shout for joy to the Lord, all the earth.",
  "Worship the Lord with gladness; come before him with joyful songs.",
]
const HEADER_VERSES_CITATION = "Psalm 100:1-2"

const CORE_VALUES = [
  {
    label: "Hope",
    content:
      "We believe true hope is found in a relationship with Jesus Christ and everyone can be transformed by God’s love and truth.",
  },
  {
    label: "Relationships",
    content:
      "We value diverse relationships and offer programs which foster personal interaction and learning from one another.",
  },
  {
    label: "Trust",
    content:
      "We continually create a safe-sharing environment that celebrates integrity, respect and authenticity.",
  },
  {
    label: "Empowerment",
    content:
      "We believe self-sufficiency is achievable, therefore, we will not short-circuit the process by doing for others what they can do for themselves.",
  },
  {
    label: "Dignity",
    content:
      "We believe every neighbor has God-given talents and abilities and is created to be a contributor.",
  },
  {
    label: "Effectiveness",
    content:
      "We believe the realities of our neighbors take precedence over organizational interests.",
  },
  {
    label: "Team",
    content:
      "We serve one another in humility recognizing that our words, actions and attitudes impact each other and our neighbors.  }",
  },
]

export default function() {
  const {
    ABOUT_HEADER,
    ABOUT_PROGRAMS_HEADER,
    ABOUT_PROGRAMS_CONTENT,
    ABOUT_PROGRAMS_ALT,
    ABOUT_ABOUT_HEADER,
    ABOUT_ABOUT_CONTENT1,
    ABOUT_ABOUT_CONTENT2,
    ABOUT_CORE_VALUES_HEADER,
    ABOUT_PHOTO_JOURNAL,
  } = useContext(LanguageContext)

  function Header(props) {
    return (
      <section {...props}>
        <h1>{ABOUT_HEADER}</h1>
        <h2 className="AboutUs__SubHeader">
          <ol className="AboutUs__Verses">
            {HEADER_VERSES.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ol>
          <i className="AboutUs__VersesCitation">{HEADER_VERSES_CITATION}</i>
        </h2>
      </section>
    )
  }

  function Sidebar(props) {
    return (
      <section {...props}>
        <h2>
          <FlareIcon />
          {ABOUT_CORE_VALUES_HEADER}
        </h2>
        <ul>
          {CORE_VALUES.map(({ label, content }) => (
            <li key={label}>
              <strong>{label}</strong> - <i>{content}</i>
            </li>
          ))}
        </ul>
        <Link to="/photo-journal">{ABOUT_PHOTO_JOURNAL}</Link>
      </section>
    )
  }

  return (
    <Layout className="AboutUs" Header={Header} Sidebar={Sidebar}>
      <section className="AboutUs__Programs">
        <h2>
          <FlareIcon />
          {ABOUT_PROGRAMS_HEADER}
        </h2>
        <p>{ABOUT_PROGRAMS_CONTENT}</p>
        <img src={acronymSrc} alt={ABOUT_PROGRAMS_ALT} />
      </section>
      <section>
        <h2>
          <FlareIcon />
          {ABOUT_ABOUT_HEADER}
        </h2>
        <p>{ABOUT_ABOUT_CONTENT1}</p>
        <p>{ABOUT_ABOUT_CONTENT2}</p>
      </section>
    </Layout>
  )
}
