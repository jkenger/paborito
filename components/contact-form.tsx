"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Implement form submission
    // For now, just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+63 XXX XXX XXXX"
          className="text-base py-5 px-4"
        />
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
