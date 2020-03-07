import React, { useEffect, useRef, useState } from "react"
import "./Carousel.scss"
import { useWindowEvent } from "../hooks"

const carouselRequire = require.context(
  "../images/carousel",
  false,
  /.*\.jpe?g$/
)
const CAROUSEL_IMAGES = carouselRequire.keys().map(key => carouselRequire(key))

export function Carousel({
  children = CAROUSEL_IMAGES,
  speed = 5000,
  ...props
}) {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeRef = useRef(null)
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
  useEffect(() => {
    if (activeRef) {
      const interval = window.setInterval(() => {
        setActiveIndex((activeIndex + 1 + children.length) % children.length)
      }, speed)
      return () => window.clearInterval(interval)
    }
  }, [activeRef, activeIndex, speed, children])
  return (
    <div className={"Carousel"} ref={carouselRef} {...props}>
      {children.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={i}
          className={activeIndex === i ? "active" : null}
        />
      ))}
    </div>
  )
}
