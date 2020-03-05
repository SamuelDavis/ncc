import React, { useEffect, useState } from "react"
import "./Carousel.css"

const carouselRequire = require.context(
  "../../static/images/carousel",
  false,
  /.*\.jpe?g$/
)
let CAROUSEL_IMAGES = []
carouselRequire.keys().forEach(function(key) {
  CAROUSEL_IMAGES.push(carouselRequire(key))
})

export default function Carousel({ transitionSpeed = 5000 }) {
  const [visibleIndex, setVisibleIndex] = useState(
    Math.floor(Math.random() * CAROUSEL_IMAGES.length)
  )
  useEffect(() => {
    const carouselInterval = window.setInterval(
      () =>
        setVisibleIndex(
          (visibleIndex + 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length
        ),
      transitionSpeed
    )
    return () => clearInterval(carouselInterval)
  }, [visibleIndex, transitionSpeed])
  return (
    <div className="Carousel">
      {CAROUSEL_IMAGES.map((src, i) => (
        <img
          className={i === visibleIndex ? "active" : null}
          key={i}
          src={src}
          alt={`carousel ${i + 1}`}
        />
      ))}
    </div>
  )
}
