"use client"

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getStoredTheme(): Theme {
  const stored = localStorage.getItem("theme")
  return stored === "light" || stored === "dark" ? stored : "system"
}

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("storage", onChange)
  window.addEventListener("themechange", onChange)
  return () => {
    window.removeEventListener("storage", onChange)
    window.removeEventListener("themechange", onChange)
  }
}

function getServerTheme(): Theme {
  return "system"
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getStoredTheme, getServerTheme)
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const root = document.documentElement

    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        root.classList.add("dark")
        setResolvedTheme("dark")
      } else {
        root.classList.remove("dark")
        setResolvedTheme("light")
      }
    }

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      applyTheme(mediaQuery.matches)

      const handler = (e: MediaQueryListEvent) => applyTheme(e.matches)
      mediaQuery.addEventListener("change", handler)
      return () => mediaQuery.removeEventListener("change", handler)
    } else {
      applyTheme(theme === "dark")
    }
  }, [theme])

  const handleSetTheme = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme)
    window.dispatchEvent(new Event("themechange"))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
