import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ContactForm } from "@/components/contact-form"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { FloatingProducts } from "@/components/floating-products"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import {
  siteConfig,
  heroContent,
  trustStats,
  valuePropositions,
  products,
  testimonials,
  aboutContent,
  faqs,
  partnershipContent,
} from "@/lib/content"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="py-20 md:py-28"
        style={{
          background: "linear-gradient(135deg, #F7A800 0%, #FFD54F 50%, #F7A800 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn className="space-y-8">
              <Badge className="bg-white/90 text-primary text-sm px-3 py-1">{heroContent.badge}</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                {heroContent.headline}
              </h1>
              <p className="text-xl text-primary/80">
                {heroContent.subheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-white text-base px-8 py-6">
                  <Link href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/80 border-primary text-primary text-base px-8 py-6">
                  <Link href={heroContent.secondaryCta.href}>{heroContent.secondaryCta.label}</Link>
                </Button>
              </div>
            </FadeIn>
            <FloatingProducts />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustStats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
                <div className="text-base opacity-80">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose {siteConfig.name}?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scientifically formulated supplements for optimal poultry health
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Video Placeholder */}
            <FadeIn className="order-2 lg:order-1" delay={0.2}>
              <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-dashed border-muted-foreground/30 bg-muted/50">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-destructive/90 flex items-center justify-center shadow-lg mb-4 cursor-pointer hover:bg-destructive transition-colors">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-base text-muted-foreground font-medium">Product Video</span>
                  <span className="text-sm text-muted-foreground/60 mt-1">Learn what our products can do</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded">
                  2:30
                </div>
              </div>
            </FadeIn>

            {/* Benefit Cards */}
            <StaggerContainer className="order-1 lg:order-2 space-y-5">
              {valuePropositions.map((item, i) => (
                <StaggerItem key={i}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 flex items-start gap-5">
                      <div className="text-4xl flex-shrink-0">
                        {item.icon === "egg" && "🥚"}
                        {item.icon === "shield" && "🛡️"}
                        {item.icon === "trending-up" && "📈"}
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                        <p className="text-base text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete range of poultry digestive health solutions
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trusted by Farmers
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real poultry farms across the Philippines
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <Badge className="mb-5 text-sm px-3 py-1">{aboutContent.badge}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">
                {aboutContent.title}
              </h2>
              {aboutContent.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg text-muted-foreground mb-5">
                  {paragraph}
                </p>
              ))}
              <Button asChild variant="outline" className="text-base px-6 py-5">
                <Link href={aboutContent.cta.href}>{aboutContent.cta.label}</Link>
              </Button>
            </FadeIn>
            <FadeIn delay={0.2} className="h-72 md:h-96">
              <ImagePlaceholder
                src={aboutContent.image}
                alt="About Paborito"
                placeholderText="Company/Farm Photo"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="max-w-4xl mx-auto">
            <Accordion className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} className="bg-card rounded-lg border px-5">
                  <AccordionTrigger className="text-left font-medium text-primary text-lg hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.2} className="text-center mt-10">
            <p className="text-lg text-muted-foreground mb-4">Still have questions?</p>
            <Button asChild variant="outline" className="text-base px-6 py-5">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              {partnershipContent.title}
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              {partnershipContent.description}
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dealer Card */}
            <StaggerItem>
              <Card className="bg-white/10 border-white/20 text-primary-foreground h-full">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🏪</div>
                  <h3 className="text-2xl font-bold mb-3">{partnershipContent.dealer.title}</h3>
                  <p className="text-base opacity-80 mb-5">
                    {partnershipContent.dealer.description}
                  </p>
                  <ul className="space-y-3 text-base mb-8">
                    {partnershipContent.dealer.benefits.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-secondary">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-destructive hover:bg-destructive/90 text-white text-base py-6">
                    <Link href={partnershipContent.dealer.cta.href}>
                      {partnershipContent.dealer.cta.label}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Partner Card */}
            <StaggerItem>
              <Card className="bg-white/10 border-white/20 text-primary-foreground h-full">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-2xl font-bold mb-3">{partnershipContent.partner.title}</h3>
                  <p className="text-base opacity-80 mb-5">
                    {partnershipContent.partner.description}
                  </p>
                  <ul className="space-y-3 text-base mb-8">
                    {partnershipContent.partner.benefits.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-secondary">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 text-base py-6">
                    <Link href={partnershipContent.partner.cta.href}>
                      {partnershipContent.partner.cta.label}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our products? Ready to place an order? We&apos;re here to help!
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📍</span>
                  <span className="text-base">{siteConfig.contact.address}</span>
                </div>
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-4 hover:text-primary transition-colors">
                  <span className="text-2xl">📞</span>
                  <span className="text-base">{siteConfig.contact.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-4 hover:text-primary transition-colors">
                  <span className="text-2xl">✉️</span>
                  <span className="text-base">{siteConfig.contact.email}</span>
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="p-8">
                <CardContent className="pt-0">
                  <h3 className="font-bold text-primary text-xl mb-5">Quick Inquiry</h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
