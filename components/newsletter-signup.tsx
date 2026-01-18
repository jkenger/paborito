"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Simulate API call - replace with actual newsletter API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setEmail("")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center" role="status" aria-live="polite">
        <p className="text-secondary font-medium">Thanks for subscribing!</p>
        <p className="text-sm opacity-70 mt-1">You&apos;ll receive updates on new products and farming tips.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-1"
          aria-label="Email address"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shrink-0"
        >
          {isSubmitting ? "..." : "Subscribe"}
        </Button>
      </div>
      {error && (
        <p className="text-sm text-destructive-foreground" role="alert">
          {error}
        </p>
      )}
      <p className="text-xs opacity-60">
        Get updates on new products, farming tips, and special offers.
      </p>
    </form>
  )
}
