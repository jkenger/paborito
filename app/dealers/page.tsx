import { Metadata } from "next"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

// Lazy load form component
const PartnerApplicationForm = dynamic(
  () => import("@/components/partner-application-form").then((mod) => mod.PartnerApplicationForm),
  { loading: () => <div className="h-96 animate-pulse bg-muted rounded-lg" /> }
)
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { Icon, IconCircle, IconName } from "@/components/icons"
import { siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: `Become a Dealer | ${siteConfig.name}`,
  description: "Join the Paborito dealer network. Sell premium poultry health supplements in your area with exclusive territory rights and competitive margins.",
}

const dealerBenefits: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "money",
    title: "Competitive Margins",
    description: "Earn attractive profits with our dealer pricing structure designed for sustainable business growth.",
  },
  {
    icon: "territory",
    title: "Territory Rights",
    description: "Get exclusive rights to sell Paborito products in your designated area.",
  },
  {
    icon: "training",
    title: "Training & Support",
    description: "Receive comprehensive product training and ongoing sales support from our team.",
  },
  {
    icon: "package",
    title: "Marketing Materials",
    description: "Access to promotional materials, product samples, and marketing support.",
  },
  {
    icon: "delivery",
    title: "Reliable Supply",
    description: "Consistent product availability with efficient ordering and delivery systems.",
  },
  {
    icon: "growth",
    title: "Growth Potential",
    description: "Tap into the growing poultry industry with products trusted by hundreds of farms.",
  },
]

const requirements = [
  "Valid business registration or DTI permit",
  "Physical store or distribution capability",
  "Commitment to promoting Paborito products",
  "Basic knowledge of poultry farming (preferred)",
  "Storage space for product inventory",
]

const steps = [
  {
    number: "1",
    title: "Submit Application",
    description: "Fill out the dealer application form with your business details.",
  },
  {
    number: "2",
    title: "Review & Approval",
    description: "Our team will review your application and contact you within 3-5 business days.",
  },
  {
    number: "3",
    title: "Training",
    description: "Complete product training to understand our products and best practices.",
  },
  {
    number: "4",
    title: "Start Selling",
    description: "Receive your initial inventory and start serving farmers in your area.",
  },
]

export default function DealersPage() {
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
              Become a Paborito Dealer
            </h1>
            <p className="text-xl text-primary/80">
              Join our growing network of dealers across the Philippines and help farmers achieve better results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Become a Dealer */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Become part of a trusted brand serving hundreds of poultry farms nationwide
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealerBenefits.map((benefit, i) => (
              <StaggerItem key={i}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <IconCircle name={benefit.icon} size="xl" bgClassName="bg-secondary/20 mb-4" className="text-primary" />
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How to Get Started
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to become a Paborito dealer
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Dealer Requirements
              </h2>
              <p className="text-lg text-muted-foreground">
                We&apos;re looking for committed partners who share our passion for helping Filipino farmers succeed.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Icon name="check" size="md" className="text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Apply Now
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below to start your application as a Paborito dealer, distributor, or reseller.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="p-8">
                <CardContent className="p-0">
                  <PartnerApplicationForm defaultType="dealer" />
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <IconCircle name="message" size="xl" bgClassName="bg-secondary/20" className="text-primary" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Not Sure Which Partnership is Right for You?
                    </h3>
                    <p className="text-muted-foreground">
                      Our team can help you determine the best partnership model for your business. Reach out and let&apos;s discuss your goals.
                    </p>
                  </div>
                  <Button
                    render={<Link href="/contact" />}
                    variant="outline"
                    size="lg"
                    className="text-base px-8 py-6 shrink-0"
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Our team is ready to answer any questions about becoming a Paborito dealer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                render={<a href="#apply" />}
                size="lg"
                className="bg-destructive hover:bg-destructive/90 text-white text-base px-8 py-6"
              >
                Apply Now
              </Button>
              <Button
                render={<a href={`tel:${siteConfig.contact.phone}`} />}
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 text-base px-8 py-6"
              >
                Call Now
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
