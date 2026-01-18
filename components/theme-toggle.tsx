"use client"

import { Sun01Icon, Moon01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted/50 transition-colors"
      aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} mode`}
    >
      {resolvedTheme === "light" ? (
        <HugeiconsIcon icon={Moon01Icon} className="w-5 h-5 text-muted-foreground" />
      ) : (
        <HugeiconsIcon icon={Sun01Icon} className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  )
}
