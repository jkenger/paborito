"use client"

import { useState, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

function formatPhoneNumber(value: string): string {
  // Remove all non-digits
  let digits = value.replace(/\D/g, "")

  // Remove leading 0 or 63 (country code)
  if (digits.startsWith("63")) {
    digits = digits.slice(2)
  } else if (digits.startsWith("0")) {
    digits = digits.slice(1)
  }

  // Limit to 10 digits
  digits = digits.slice(0, 10)

  // Format as XXX XXX XXXX
  if (digits.length <= 3) {
    return digits
  } else if (digits.length <= 6) {
    return `${digits.slice(0, 3)} ${digits.slice(3)}`
  } else {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`
  }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [phone, setPhone] = useState("")

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: phone,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || "Failed to send message")
      }

      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-10" role="status" aria-live="polite">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div
          className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="text-base py-5 px-4"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="text-base py-5 px-4"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-base">Phone (Optional)</Label>
        <div className="flex">
          <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-input text-muted-foreground text-sm rounded-l-md">
            +63
          </span>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="XXX XXX XXXX"
            value={phone}
            onChange={handlePhoneChange}
            className="text-base py-5 px-4 rounded-l-none"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-base">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={5}
          required
          className="text-base py-4 px-4"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-destructive hover:bg-destructive/90 text-base py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
