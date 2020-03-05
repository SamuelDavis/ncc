import React, {
  createContext,
  Fragment,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

const MESSAGES = {
  en: {
    SITE_TRANSLATION_PROMPT: "Read in English",
    SITE_NAME: "Neighborhood C.A.R.E. Center",
    SITE_MISSION: "Mission",
    TOP_NAV_DONATE: "Donate",
    TOP_NAV_SIGN_IN: "Volunteer Sign-In",
    TOP_NAV_NEWSLETTERS: "Newsletters",
    HEADER_TOP_RIGHT: "Meeting people where they are...",
    MAIN_NAV_ABOUT: "About",
    MAIN_NAV_PROGRAMS: "Programs",
    MAIN_NAV_VOLUNTEER: "Volunteer",
    FOOTER_CONTACT: "Contact",
    FOOTER_MISSION1:
      "Meeting people where they are and helping them become what God created them to be.",
    FOOTER_MISSION2:
      "Visit the Neighborhood Care Center to use our computers or WiFi for job applications & resumes. Center Hours are Mon/Wed 10:00am - 4pm & Sat 10:00am - 1pm.",
    FOOTER_BOTTOM_LEFT: "Designed by the Neighborhood C.A.R.E. Center",
    HOME_HEADER: "Welcome to the Neighborhood C.A.R.E. Center",
    HOME_MISSION:
      "To enrich the quality of life in our community by providing programs and resources that may not be otherwise available, while demonstrating the love of Christ to all people.",
    HOME_NOTE:
      "Please scroll down to learn about the programs and special events for the month of March. Feel free to contact us if you have any questions. We are here to partner with you.",
    ABOUT_HEADER:
      "Meeting people where they are and helping them become what God has created them to be.",
    ABOUT_SUB_HEADER:
      '"1 Shout for joy to the Lord, all the earth. 2 Worship the Lord with gladness; come before him with joyful songs."  – Psalm 100:1 – 2',
    ABOUT_PROGRAMS_HEADER: "Our Programs",
    ABOUT_PROGRAMS_CONTENT:
      "We guide our neighbors towards immediate and long-term solutions through relational and faith-based programs in a hope-filled environment. We want to empower people to have a stable future. Our volunteer program teams provide a listening ear and encouragement as they help individuals identify their choices and determine their next step.",
    ABOUT_PROGRAMS_ALT:
      "C: Connect poeple in need to community resources and volunteers to community partners. A: Advance people with life skill and recovery programs. R: Reduce pressures on single parents and families in distress. E: Equip the next generation for success.",
    ABOUT_ABOUT_HEADER: "Our Origin & Vision",
    ABOUT_ABOUT_CONTENT1:
      'The Neighborhood C.A.R.E. Center is a response to the invitation of the Holy Spirit for The Church to embed ourselves in the local community. John 1:14, "The Word became flesh and blood, and moved into the neighborhood."',
    ABOUT_ABOUT_CONTENT2:
      "In 2014, a compassion ministry team from Grace Covenant Church interviewed community leaders and residents to identify practical programs that would lead to individual betterment and spiritual transformation. The Neighborhood C.A.R.E. Center began operating in November, 2016 and is now connecting those who want to help neighbors with those neighbors who want help improving their lives.",
    ABOUT_CORE_VALUES_HEADER: "Core Values",
    ABOUT_PHOTO_JOURNAL: "Care Center Photo Journal",
    PROGRAMS_PROGRAMS_HEADER: "Our Programs",
    PROGRAMS_EVENTS_HEADER: "Upcoming Programs At the C.A.R.E Center",
    VOLUNTEER_VOLUNTEER_HEADER: "Volunteer",
    VOLUNTEER_VOLUNTEER_CONTENT:
      'Have a heart to serve our community? The Neighborhood C.A.R.E. Center has several volunteer opportunities each month for you to get involved. General volunteer opportunities do not require you to be a registered volunteer but opportunities that say "BADGE Required" indicate that before you can serve in this capacity you must complete our Volunteer Orientation Process which starts with attending Volunteer Orientation.',
    VOLUNTEER_VOLUNTEER_ACTION: "Volunteer Opportunities",
    VOLUNTEER_INVOLVED_HEADER: "Get Involved",
    VOLUNTEER_INVOLVED_CONTENT:
      "The next scheduled volunteer orientation session is for those who want to serve as a volunteer in one of our ongoing programs. If you are ready to serve, please register to attend the next scheduled orientation session listed below. All regular program volunteers ages 15 and above must go through our volunteer process before volunteering at the center. At the orientation session you will learn more about our vision, mission, serving roles and take a tour of the Center. Upon attending a volunteer orientation, you will be given a protection application which includes a background check that costs $15.00. Volunteers cannot sign up to serve “Badge Required” opportunities until they have cleared our protection application process.",
    VOLUNTEER_EVENT_LIST_HEADER:
      "Review the list of general volunteer opportunities and contact our center to help by donating time or items at the center. You do not need to be a registered volunteer to serve at the events listed below:",
    VOLUNTEER_CONTACT_HEADER: "Contact C.A.R.E. Team",
    VOLUNTEER_CONTACT_CONTENT:
      "Our center welcomes qualified individuals who have been through our orientation and protection application processes to volunteer for all our ministry programs. Are you thinking about serving but not sure which Neighborhood C.A.R.E. Center team is the best fit? Call our C.A.R.E. Center at (704) 255-5500 or use the form below to ask your question and discuss your areas of interest.",
    VOLUNTEER_SIDEBAR_ALT: "We serve God as we serve our neighbors.",
    NEWSLETTERS_HEADER: "The Neighborhood C.A.R.E Center News Letter",
  },
  es: {
    SITE_TRANSLATION_PROMPT: "Leer en Español",
    HOME_MISSION:
      "Para enriquecer la calidad de vida de nuestra comunidad al proporcionarles programas y recursos que de otro modo no estarían disponibles, mientras compartimos el amor de Cristo con todos nuestros semejantes.",
    HOME_NOTE:
      "Bajando en esta página encontrarás todos los programas y eventos que tenemos para el mes de marzo. No dudes en contactarnos si tienes alguna pregunta. Estamos aqui para ayudarte.",
    VOLUNTEER_SIDEBAR_ALT:
      "Servimos a Dios cuando servimos a nuestros vecinos.",
  },
}
const DEFAULT_LOCALE = "en"
const LOCALE_STORAGE_KEY = "LOCALE"
export const LanguageContext = createContext(MESSAGES[DEFAULT_LOCALE])

function getLocaleFromBrowser() {
  const storedValue = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (storedValue) return storedValue
  const language =
    window.navigator.languages !== undefined
      ? window.navigator.languages[0]
      : window.navigator.language
  return language.slice(0, 2) || DEFAULT_LOCALE
}

export function LanguageProvider({ children = [], ...props }) {
  const checkedLanguagePreference = useRef(false)
  const [locale, setLocale] = useState(null)
  useLayoutEffect(() => {
    if (!checkedLanguagePreference.current) {
      setLocale(getLocaleFromBrowser())
      checkedLanguagePreference.current = true
    }
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }, [locale])
  const messageProxy = new Proxy(
    { locale, setLocale, ...MESSAGES },
    {
      get(target, prop) {
        if (prop in target) return target[prop]
        if (prop in target[locale]) return target[locale][prop]
        return target[DEFAULT_LOCALE][prop]
      },
    }
  )
  if (!locale) return <div>...</div>
  return (
    <LanguageContext.Provider {...props} value={messageProxy}>
      {children}
    </LanguageContext.Provider>
  )
}

export function LanguageSelect({ languages = Object.keys(MESSAGES) }) {
  const { locale, setLocale } = useContext(LanguageContext)

  return (
    <Fragment>
      {languages
        .filter(loc => loc !== locale)
        .map((loc, i) => {
          const {
            SITE_TRANSLATION_PROMPT = MESSAGES[DEFAULT_LOCALE]
              .SITE_TRANSLATION_PROMPT,
          } = loc in MESSAGES ? MESSAGES[loc] : MESSAGES[DEFAULT_LOCALE]
          return (
            <button key={i} onClick={() => setLocale(loc)}>
              {SITE_TRANSLATION_PROMPT}
            </button>
          )
        })}
    </Fragment>
  )
}
