import { Metadata } from "next"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

// Lazy load form component
const ContactForm = dynamic(
  () => import("@/components/contact-form").then((mod) => mod.ContactForm),
  { loading: () => <div className="h-64 animate-pulse bg-muted rounded-lg" /> }
)
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: "Get in touch with Paborito Agribiotech Solutions. Contact us for product inquiries, orders, dealer information, or partnership opportunities.",
}

const contactMethods = [
  {
    icon: "📍",
    title: "Visit Us",
    content: siteConfig.contact.address,
    action: null,
  },
  {
    icon: "📞",
    title: "Call Us",
    content: siteConfig.contact.phone,
    action: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: "✉️",
    title: "Email Us",
    content: siteConfig.contact.email,
    action: `mailto:${siteConfig.contact.email}`,
  },
]

const inquiryTypes = [
  {
    icon: "🛒",
    title: "Product Inquiries",
    description: "Questions about our products, usage, or pricing",
  },
  {
    icon: "📦",
    title: "Bulk Orders",
    description: "Special pricing for large farm operations",
  },
  {
    icon: "🔧",
    title: "Technical Support",
    description: "Help with product application or dosage",
  },
  {
    icon: "💬",
    title: "General Questions",
    description: "Any other questions or feedback",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #F7A800 0%, #FFD54F 50%, #F7A800 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-primary/80">
              Have questions or ready to order? We&apos;re here to help you improve your farm&apos;s productivity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <StaggerItem key={i}>
                {method.action ? (
                  <a
                    href={method.action}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <span className="text-3xl">{method.icon}</span>
                    <div>
                      <div className="font-bold">{method.title}</div>
                      <div className="text-sm opacity-80">{method.content}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10">
                    <span className="text-3xl">{method.icon}</span>
                    <div>
                      <div className="font-bold">{method.title}</div>
                      <div className="text-sm opacity-80">{method.content}</div>
                    </div>
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact Form */}
            <FadeIn>
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <Card className="p-8">
                  <CardContent className="p-0">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </FadeIn>

            {/* Inquiry Types */}
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  How Can We Help?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We handle all types of inquiries from farmers and businesses.
                </p>
                <div className="space-y-4">
                  {inquiryTypes.map((type, i) => (
                    <Card key={i} className="p-5 hover:shadow-md transition-shadow">
                      <CardContent className="p-0 flex items-start gap-4">
                        <span className="text-3xl">{type.icon}</span>
                        <div>
                          <h3 className="font-bold text-primary mb-1">{type.title}</h3>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Dealer CTA */}
                <Card className="mt-6 p-5 bg-primary text-primary-foreground">
                  <CardContent className="p-0 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <span className="text-3xl">🏪</span>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">Become a Dealer or Distributor?</h3>
                      <p className="text-sm opacity-80">Apply through our dedicated partnership form.</p>
                    </div>
                    <Button
                      render={<Link href="/dealers#apply" />}
                      className="bg-destructive hover:bg-destructive/90 text-white shrink-0"
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground">
              {siteConfig.contact.address}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=14.480607,121.187931&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paborito Office Location"
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              <a
                href="https://www.google.com/maps?q=14.480607,121.187931"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-2"
              >
                Open in Google Maps
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
