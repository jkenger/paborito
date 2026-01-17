"use client"

import { useState, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function formatPhoneNumber(value: string): string {
  // Remove all non-digits
  let digits = value.replace(/\D/g, "")

  // Remove leading 0 (since +63 is already shown)
  if (digits.startsWith("0")) {
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

const partnerTypes = [
  { value: "dealer", label: "Dealer" },
  { value: "distributor", label: "Distributor" },
  { value: "reseller", label: "Reseller" },
]

const philippineRegions = [
  "NCR - National Capital Region",
  "CAR - Cordillera Administrative Region",
  "Region I - Ilocos Region",
  "Region II - Cagayan Valley",
  "Region III - Central Luzon",
  "Region IV-A - CALABARZON",
  "Region IV-B - MIMAROPA",
  "Region V - Bicol Region",
  "Region VI - Western Visayas",
  "Region VII - Central Visayas",
  "Region VIII - Eastern Visayas",
  "Region IX - Zamboanga Peninsula",
  "Region X - Northern Mindanao",
  "Region XI - Davao Region",
  "Region XII - SOCCSKSARGEN",
  "Region XIII - Caraga",
  "BARMM - Bangsamoro",
]

interface PartnerApplicationFormProps {
  defaultType?: "dealer" | "distributor" | "reseller"
}

export function PartnerApplicationForm({ defaultType }: PartnerApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [partnerType, setPartnerType] = useState(defaultType || "")
  const [region, setRegion] = useState("")
  const [phone, setPhone] = useState("")

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Implement form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    alert("Thank you for your application! We will review your details and contact you within 3-5 business days.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Partner Type */}
      <div className="space-y-2">
        <Label className="text-base font-semibold">Partnership Type <span className="text-destructive">*</span></Label>
        <Select value={partnerType} onValueChange={setPartnerType} required>
          <SelectTrigger className="w-full text-base py-5 px-4 h-auto rounded-md">
            <SelectValue placeholder="Select partnership type" />
          </SelectTrigger>
          <SelectContent>
            {partnerTypes.map((type) => (
              <SelectItem key={type.value} value={type.value} className="text-base py-3">
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Full Name */}
      <div className="space-y-2">
        <Label className="text-base font-semibold">Full Name <span className="text-destructive">*</span></Label>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            name="firstName"
            placeholder="First Name"
            required
            className="text-base py-5 px-4"
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            required
            className="text-base py-5 px-4"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <Label className="text-base font-semibold">Address <span className="text-destructive">*</span></Label>
        <div className="space-y-4">
          <Input
            name="street"
            placeholder="Street Name, Building, House No."
            required
            className="text-base py-5 px-4"
          />
          <Input
            name="addressLine1"
            placeholder="Barangay / Address Line 1"
            className="text-base py-5 px-4"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              name="city"
              placeholder="City / Municipality"
              required
              className="text-base py-5 px-4"
            />
            <Select value={region} onValueChange={setRegion} required>
              <SelectTrigger className="w-full text-base py-5 px-4 h-auto rounded-md">
                <SelectValue placeholder="Region / Province" />
              </SelectTrigger>
              <SelectContent>
                {philippineRegions.map((r) => (
                  <SelectItem key={r} value={r} className="text-base py-3">
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Input
            name="postalCode"
            placeholder="Postal Code"
            className="text-base py-5 px-4"
          />
        </div>
      </div>

      {/* Contact */}
      <div className="space-y-2">
        <Label className="text-base font-semibold">Contact <span className="text-destructive">*</span></Label>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-input text-muted-foreground text-sm rounded-l-md">
              +63
            </span>
            <Input
              name="phone"
              type="tel"
              placeholder="XXX XXX XXXX"
              value={phone}
              onChange={handlePhoneChange}
              required
              className="text-base py-5 px-4 rounded-l-none"
            />
          </div>
          <Input
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="text-base py-5 px-4"
          />
        </div>
      </div>

      {/* Area of Distribution */}
      <div className="space-y-2">
        <Label htmlFor="areaOfDistribution" className="text-base font-semibold">
          Area of Distribution <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="areaOfDistribution"
          name="areaOfDistribution"
          placeholder="Describe the areas/locations you plan to cover (e.g., specific cities, provinces, or regions)"
          rows={4}
          required
          className="text-base py-4 px-4"
        />
      </div>

      {/* Additional Notes */}
      <div className="space-y-2">
        <Label htmlFor="notes" className="text-base font-semibold">
          Additional Information (Optional)
        </Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Tell us about your business, experience in poultry/agriculture, or any questions you have"
          rows={3}
          className="text-base py-4 px-4"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-destructive hover:bg-destructive/90 text-base py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
}
