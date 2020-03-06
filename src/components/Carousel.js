import React, { useRef } from "react"
import "./Carousel.scss"
import { useWindowEvent } from "../hooks"

const carouselRequire = require.context(
  "../images/carousel",
  false,
  /.*\.jpe?g$/
)
const CAROUSEL_IMAGES = carouselRequire.keys().map(key => carouselRequire(key))

export function Carousel() {
  const carouselRef = useRef(null)
  useWindowEvent(
    "resize",
    () => {
      if (carouselRef.current)
        carouselRef.current.style.height = window.getComputedStyle(
          carouselRef.current.firstChild
        ).height
    },
    [carouselRef]
  )
  return (
    <div className={"Carousel"} ref={carouselRef}>
      {CAROUSEL_IMAGES.map((src, i) => (
        <img key={i} src={src} alt={i} />
      ))}
    </div>
  )
}
