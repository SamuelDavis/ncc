import React, {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react"
import { DEFAULT_LOCALE, TRANSLATIONS } from "../data"

const LOCALE_STORAGE_KEY = "LOCALE"
const LanguageContext = createContext(TRANSLATIONS[DEFAULT_LOCALE])

function LanguageProvider({ children = [], ...props }) {
  const [locale, setLocale] = useState(DEFAULT_LOCALE)
  const languageProxy = new Proxy(
    { locale, setLocale, ...TRANSLATIONS },
    {
      get(target, key) {
        if (key in target) return target[key]
        if (locale in target && key in target[locale])
          return target[locale][key]
        if (key in target[DEFAULT_LOCALE]) return target[DEFAULT_LOCALE][key]
        throw new Error(`Missing language key: ${key}`)
      },
    }
  )

  // LOAD LOCALE
  useEffect(() => {
    const localLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    const browserLocale = (window.navigator.languages === undefined
        ? window.navigator.language
        : window.navigator.languages[0]
    ).slice(0, 2)
    setLocale(localLocale || browserLocale || DEFAULT_LOCALE)
  }, [])

  // SAVE LOCALE
  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }, [locale])

  return (
    <LanguageContext.Provider value={languageProxy} {...props}>
      {children}
    </LanguageContext.Provider>
  )
}

function LanguageSelect({ languages = Object.keys(TRANSLATIONS) }) {
  const { locale, setLocale } = useContext(LanguageContext)

  return (
    <Fragment>
      {languages
        .filter(loc => loc !== locale)
        .map((loc, i) => {
          const {
            SITE_TRANSLATION_PROMPT = TRANSLATIONS[DEFAULT_LOCALE]
              .SITE_TRANSLATION_PROMPT,
          } =
            loc in TRANSLATIONS
              ? TRANSLATIONS[loc]
              : TRANSLATIONS[DEFAULT_LOCALE]
          return (
            <button key={i} onClick={() => setLocale(loc)}>
              {SITE_TRANSLATION_PROMPT}
            </button>
          )
        })}
    </Fragment>
  )
}

export { LanguageProvider, LanguageSelect }
export default LanguageContext
