"use client"

import { useState, useEffect } from "react"
import { ArrowUp01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled past 400px
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top"
      data-visible={isVisible}
      aria-label="Back to top"
    >
      <HugeiconsIcon icon={ArrowUp01Icon} className="w-5 h-5" />
    </button>
  )
}
