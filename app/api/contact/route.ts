import { Resend } from "resend"
import { NextResponse } from "next/server"
import { escapeHtml, normalizePhilippinePhone } from "@/lib/email-html"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
    }

    const fields = body as Record<string, unknown>
    const name = typeof fields.name === "string" ? fields.name.trim() : ""
    const email = typeof fields.email === "string" ? fields.email.trim() : ""
    const message = typeof fields.message === "string" ? fields.message.trim() : ""
    const phone = typeof fields.phone === "string" ? fields.phone.trim() : ""

    if (!name || !email || !message || name.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "Enter a name, email, and message within the allowed lengths" },
        { status: 400 }
      )
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
      return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 })
    }

    const phoneDigits = phone ? normalizePhilippinePhone(phone) : null
    if (phone && !phoneDigits) {
      return NextResponse.json({ error: "Enter a valid phone number" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Paborito <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "info@paborito.ph"],
      replyTo: email,
      subject: `New Contact Inquiry from ${name.replace(/[\r\n]+/g, " ")}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1a472a; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">New Contact Inquiry</h1>
          </div>

          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #1a472a; margin-top: 0;">Contact Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #1a472a;">${escapeHtml(email)}</a>
                </td>
              </tr>
              ${phoneDigits ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  <a href="tel:+63${phoneDigits}" style="color: #1a472a;">+63 ${phoneDigits}</a>
                </td>
              </tr>
              ` : ""}
            </table>

            <h2 style="color: #1a472a; margin-top: 30px;">Message</h2>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
              <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
          </div>

          <div style="background-color: #1a472a; padding: 15px; text-align: center;">
            <p style="color: #ffffff; margin: 0; font-size: 12px;">
              This email was sent from the Paborito website contact form.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
