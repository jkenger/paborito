import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const partnerTypeLabels: Record<string, string> = {
  dealer: "Dealer",
  distributor: "Distributor",
  reseller: "Reseller",
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      partnerType,
      firstName,
      lastName,
      street,
      addressLine1,
      city,
      region,
      postalCode,
      phone,
      email,
      areaOfDistribution,
      notes,
    } = body

    // Validate required fields
    if (!partnerType || !firstName || !lastName || !street || !city || !region || !phone || !email || !areaOfDistribution) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      )
    }

    const fullName = `${firstName} ${lastName}`
    const partnerTypeLabel = partnerTypeLabels[partnerType] || partnerType

    // Build full address
    const addressParts = [street, addressLine1, city, region, postalCode].filter(Boolean)
    const fullAddress = addressParts.join(", ")

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Paborito <onboarding@resend.dev>",
      to: [process.env.PARTNER_EMAIL || process.env.CONTACT_EMAIL || "info@paborito.ph"],
      replyTo: email,
      subject: `New ${partnerTypeLabel} Application: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1a472a; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">New Partner Application</h1>
            <p style="color: #84cc16; margin: 10px 0 0 0; font-size: 18px;">${partnerTypeLabel}</p>
          </div>

          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #1a472a; margin-top: 0;">Applicant Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Full Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Partnership Type:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  <span style="background-color: #84cc16; color: #1a472a; padding: 4px 12px; border-radius: 4px; font-weight: bold;">
                    ${partnerTypeLabel}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  <a href="mailto:${email}" style="color: #1a472a;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  <a href="tel:+63${phone.replace(/\s/g, "")}" style="color: #1a472a;">+63 ${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Address:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${fullAddress}</td>
              </tr>
            </table>

            <h2 style="color: #1a472a; margin-top: 30px;">Area of Distribution</h2>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
              <p style="margin: 0; white-space: pre-wrap;">${areaOfDistribution}</p>
            </div>

            ${notes ? `
            <h2 style="color: #1a472a; margin-top: 30px;">Additional Information</h2>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
              <p style="margin: 0; white-space: pre-wrap;">${notes}</p>
            </div>
            ` : ""}
          </div>

          <div style="background-color: #1a472a; padding: 15px; text-align: center;">
            <p style="color: #ffffff; margin: 0; font-size: 12px;">
              This application was submitted through the Paborito website.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send application" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Partner application error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
