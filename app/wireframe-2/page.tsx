"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function WireframeSection({
  label,
  children,
  className = "",
  dark = false,
}: {
  label: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}) {
  return (
    <section className={`relative ${className}`}>
      <Badge
        className={`absolute top-2 left-4 z-20 ${dark ? "bg-white text-primary" : "bg-primary text-white"}`}
      >
        {label}
      </Badge>
      {children}
    </section>
  )
}

function Placeholder({
  label,
  height = "h-32",
  className = "",
}: {
  label: string
  height?: string
  className?: string
}) {
  return (
    <div
      className={`${height} border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center text-muted-foreground text-sm ${className}`}
    >
      {label}
    </div>
  )
}

export default function WireframePage2() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner - Minimal */}
      <div className="bg-muted border-b text-xs py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">📞 +63 XXX XXX XXXX</span>
            <span className="hidden sm:block text-muted-foreground">✉️ info@paborito.ph</span>
            <span className="hidden md:block text-muted-foreground">📍 Address, Philippines</span>
          </div>
        </div>
      </div>

      {/* Header/Navigation - Transparent on Hero */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Badge className="absolute top-1 left-4 z-10 bg-primary text-white">1. NAVIGATION</Badge>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Horizontal Layout */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                PP
              </div>
              <span className="font-bold text-primary">PABORITO</span>
            </div>

            {/* Center Nav Links */}
            <nav className="hidden md:flex items-center gap-6">
              {["Home", "Products", "About", "Dealers", "Contact"].map((item, i) => (
                <span
                  key={i}
                  className={`text-sm cursor-pointer transition-colors ${
                    i === 0
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item}
                </span>
              ))}
            </nav>

            {/* CTA */}
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Order Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Width Background */}
      <WireframeSection label="2. HERO (Full BG)" dark>
        <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
          {/* Background Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70">
            <div className="absolute inset-0 flex items-center justify-center text-primary-foreground/30 text-sm">
              [Hero Background Image - Farm/Products]
            </div>
          </div>

          {/* Content Overlay */}
          <div className="relative container mx-auto px-4 py-16 text-center text-primary-foreground">
            <Badge className="bg-secondary text-secondary-foreground mb-6">
              Trusted Since 2012
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Premium Poultry Health Supplements
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
              Scientifically formulated for Filipino farms
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white px-8">
                Shop Products
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Watch Video
              </Button>
            </div>

            {/* Floating Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: "12+", label: "Years" },
                { value: "500+", label: "Farms" },
                { value: "5", label: "Products" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WireframeSection>

      {/* Benefits Bar - Horizontal Scroll */}
      <WireframeSection label="3. BENEFITS BAR">
        <div className="py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center md:justify-between gap-8 flex-wrap">
              {[
                { icon: "🚚", text: "Free Delivery on Bulk Orders" },
                { icon: "✅", text: "100% Quality Guaranteed" },
                { icon: "🇵🇭", text: "Filipino Owned & Operated" },
                { icon: "📞", text: "Expert Support Available" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WireframeSection>

      {/* Featured Products - Asymmetric Grid */}
      <WireframeSection label="4. FEATURED PRODUCTS" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Our Products
              </h2>
              <p className="text-muted-foreground mt-1">
                Complete digestive health solutions
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              View All →
            </Button>
          </div>

          {/* Asymmetric Grid: 1 Large + 2 Small */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Featured Large Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow row-span-2">
              <div className="relative">
                <Placeholder label="Featured Product Image" height="h-64" className="rounded-none border-0" />
                <Badge className="absolute top-4 left-4 bg-destructive text-white">Best Seller</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Progastro Plus</h3>
                <p className="text-muted-foreground mb-4">
                  Our premium digestive health supplement for optimal egg production and poultry wellness.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">₱XXX.XX</span>
                  <Button className="bg-primary hover:bg-primary/90">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>

            {/* Two Smaller Cards */}
            <div className="space-y-6">
              {["Progastro", "Odor & Fly Powder"].map((product, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <Placeholder label="Image" height="h-32" className="w-32 rounded-none border-0 flex-shrink-0" />
                    <CardContent className="p-4 flex flex-col justify-center">
                      <h3 className="font-bold text-primary mb-1">{product}</h3>
                      <p className="text-xs text-muted-foreground mb-2">Brief description here</p>
                      <Button size="sm" variant="outline" className="w-fit">
                        Learn More
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </WireframeSection>

      {/* Why Choose Us - Icon Grid */}
      <WireframeSection label="5. WHY CHOOSE US" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Why Filipino Farmers Trust Paborito
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🥚", title: "Boosts Egg Production", desc: "Up to 15% more eggs" },
              { icon: "🛡️", title: "Strengthens Immunity", desc: "Healthier flocks" },
              { icon: "📈", title: "Better FCR", desc: "Optimized feed conversion" },
              { icon: "🌿", title: "Natural Formula", desc: "Safe ingredients" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-primary mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </WireframeSection>

      {/* Testimonial - Single Featured */}
      <WireframeSection label="6. TESTIMONIAL" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">❝</div>
            <blockquote className="text-xl md:text-2xl text-primary mb-6 leading-relaxed">
              &quot;Since using Paborito products, our egg production increased by 20%. The quality is consistent and our chickens are healthier than ever.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="text-left">
                <div className="font-bold text-primary">Juan Dela Cruz</div>
                <div className="text-sm text-muted-foreground">Farm Owner, Bulacan</div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </WireframeSection>

      {/* About - Side by Side */}
      <WireframeSection label="7. ABOUT" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Placeholder label="Company Photo" height="h-72 md:h-96" />
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Our Story</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Proudly Filipino Since 2012
              </h2>
              <p className="text-muted-foreground mb-4">
                Paborito Agribiotech Solutions started with a simple mission: to provide Filipino poultry farmers with world-class digestive health supplements at affordable prices.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we serve over 500 farms across the Philippines, helping farmers improve their yields and grow their businesses.
              </p>
              <Button variant="outline">Read More About Us</Button>
            </div>
          </div>
        </div>
      </WireframeSection>

      {/* FAQs - Compact */}
      <WireframeSection label="8. FAQs" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                Common Questions
              </h2>
              <p className="text-muted-foreground mb-6">
                Everything you need to know about our products
              </p>
              <Button variant="outline">Contact Support</Button>
            </div>

            <Accordion className="space-y-2">
              {[
                { q: "How do I use Progastro?", a: "Mix with feed or drinking water following package instructions." },
                { q: "Are products safe for all poultry?", a: "Yes, formulated for chickens, ducks, and turkeys." },
                { q: "How soon will I see results?", a: "Most farmers see improvements within 2-4 weeks." },
                { q: "Do you offer bulk pricing?", a: "Yes! Contact us for wholesale rates." },
              ].map((faq, i) => (
                <AccordionItem key={i} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-sm font-medium text-primary hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </WireframeSection>

      {/* Partnerships - Tabbed Style */}
      <WireframeSection label="9. PARTNERSHIPS" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary text-primary-foreground">Work With Us</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Partnership Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our growing network of dealers and partners across the Philippines
            </p>
          </div>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Dealer */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-primary text-primary-foreground p-6">
                <div className="text-3xl mb-2">🏪</div>
                <h3 className="text-xl font-bold">Dealers</h3>
                <p className="text-sm opacity-80">Retail & resell our products</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm mb-6">
                  {[
                    "Exclusive territory rights",
                    "Competitive dealer pricing",
                    "Marketing materials provided",
                    "Training & ongoing support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Apply as Dealer
                </Button>
              </CardContent>
            </Card>

            {/* Partner */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-secondary text-secondary-foreground p-6">
                <div className="text-3xl mb-2">🤝</div>
                <h3 className="text-xl font-bold">Partners</h3>
                <p className="text-sm opacity-80">Strategic business collaboration</p>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm mb-6">
                  {[
                    "Distribution partnerships",
                    "Co-branding opportunities",
                    "Bulk supply agreements",
                    "Strategic alliances",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Inquire Partnership
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </WireframeSection>

      {/* Contact - Minimal */}
      <WireframeSection label="10. CONTACT" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to boost your farm&apos;s productivity? Contact us today.
            </p>

            <Card className="p-6 md:p-8">
              <CardContent className="pt-0">
                <Placeholder label="Contact Form" height="h-48" className="mb-4" />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>📞 +63 XXX XXX XXXX</span>
              <span>✉️ info@paborito.ph</span>
            </div>
          </div>
        </div>
      </WireframeSection>

      {/* Footer - Minimal */}
      <WireframeSection label="11. FOOTER" dark>
        <footer className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-xs font-bold text-secondary-foreground">
                  PP
                </div>
                <span className="font-bold">PABORITO</span>
              </div>

              {/* Links */}
              <nav className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
                {["Products", "About", "Dealers", "Contact", "Privacy"].map((link, i) => (
                  <span key={i} className="hover:opacity-100 cursor-pointer">{link}</span>
                ))}
              </nav>

              {/* Social */}
              <div className="flex gap-3">
                {["FB", "IG", "YT"].map((social, i) => (
                  <div key={i} className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center text-xs">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-70">
              © 2024 Paborito Agribiotech Solutions, Corp. All rights reserved.
            </div>
          </div>
        </footer>
      </WireframeSection>

      {/* Wireframe Legend */}
      <div className="fixed bottom-4 right-4 bg-card border shadow-lg rounded-lg p-4 max-w-xs z-50">
        <h4 className="font-bold text-sm mb-2">Wireframe v2</h4>
        <div className="space-y-1 text-xs text-muted-foreground">
          <p>Full-width hero with centered content</p>
          <p>Asymmetric product grid</p>
          <p>Single featured testimonial</p>
          <p>Minimal footer</p>
        </div>
        <div className="mt-3 pt-3 border-t">
          <p className="text-xs text-muted-foreground">
            View at <code className="bg-muted px-1 rounded">/wireframe-2</code>
          </p>
        </div>
      </div>
    </div>
  )
}
