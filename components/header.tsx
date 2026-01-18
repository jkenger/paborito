"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Call02Icon, Mail01Icon, Location01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@/components/ui/button"
import { siteConfig, navigation } from "@/lib/content"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Top Banner - Contact Info */}
      <div className="bg-primary text-primary-foreground text-sm py-2.5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-1">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:opacity-80">
                <HugeiconsIcon icon={Call02Icon} className="w-4 h-4" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="hidden sm:flex items-center gap-2 hover:opacity-80">
                <HugeiconsIcon icon={Mail01Icon} className="w-4 h-4" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
            <span className="hidden md:flex items-center gap-2">
              <HugeiconsIcon icon={Location01Icon} className="w-4 h-4" />
              <span>{siteConfig.contact.address}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground shadow-sm">
                PP
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary text-xl leading-tight">{siteConfig.name.toUpperCase()}</span>
                <span className="text-xs text-muted-foreground leading-tight hidden sm:block">{siteConfig.tagline}</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`px-4 py-2.5 text-base rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-medium bg-secondary/20"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                render={<Link href="/contact" />}
                className="bg-destructive hover:bg-destructive/90 shadow-sm text-base px-6 py-5"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-muted/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-primary my-1 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container mx-auto px-6 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block px-4 py-3 text-lg rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-primary font-medium bg-secondary/20"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                render={<Link href="/contact" onClick={() => setMobileMenuOpen(false)} />}
                className="w-full bg-destructive hover:bg-destructive/90 shadow-sm text-base py-6"
              >
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Backdrop overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
