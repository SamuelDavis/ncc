import { FaFacebook, FaInstagram, FaPhone, MdMail } from "react-icons/all"
import React from "react"

function link(href, render) {
  return { href, render }
}

export const SOCIAL_LINKS = [
  link("https://www.facebook.com/neighborhoodcc.org/", <FaFacebook />),
  link("https://www.instagram.com/neighborhood_care_center/", <FaInstagram />),
]

export const TEL_LINK = link(
  "tel:7042555500",
  <span>
    <FaPhone />
    704.255.5500
  </span>
)
export const CONTACT_LINKS = [
  TEL_LINK,
  link("mailto:admin@neighborhoodcc.org", <MdMail />),
]

export const HEADER_NAV_LINKS = [
  link("https://pushpay.com/pay/neighborhoodcarecenter", "DONATE"),
  link(
    "http://www.signupgenius.com/go/5080f48abaa22a2f58-volunteer",
    "SIGN_IN"
  ),
]
export const NEWSLETTERS_LINK = link("/newsletters/", "NEWSLETTERS")
export const MAIN_NAV_LINKS = [
  link("/about-us/", "ABOUT"),
  link("/programs/", "PROGRAMS"),
  link("/iserve/", "VOLUNTEER"),
]

export const ADDRESS = ["19711 Smith Circle", "Cornelius, NC 28031"]
export const VOLUNTEER_HREF =
  "http://www.signupgenius.com/go/5080F48ABAA22A2F58-volunteer%20"
