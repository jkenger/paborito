"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingProducts } from "@/components/floating-products"

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

export default function WireframePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation - Sticky White */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <Badge className="absolute top-1 left-4 z-10 bg-primary text-white">1. NAVIGATION</Badge>
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-xs font-bold text-secondary-foreground shadow-sm">
                  PP
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-primary text-lg leading-tight">PABORITO</span>
                  <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block">Agribiotech Solutions</span>
                </div>
              </div>
              {/* Nav Links */}
              <nav className="hidden md:flex items-center gap-1">
                {["Home", "Products", "About", "Dealers"].map((item, i) => (
                  <span
                    key={i}
                    className={`px-3 py-2 text-sm rounded-md cursor-pointer transition-colors ${
                      i === 0
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="flex items-center gap-3">
                <span className="hidden lg:block text-sm text-muted-foreground">
                  +63 XXX XXX XXXX
                </span>
                <Button className="bg-destructive hover:bg-destructive/90 shadow-sm">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
      </header>

      {/* Hero Section */}
      <WireframeSection label="2. HERO (Sunburst BG)" dark>
        <div
          className="py-16 md:py-24"
          style={{
            background: "linear-gradient(135deg, #F7A800 0%, #FFD54F 50%, #F7A800 100%)",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <Badge className="bg-white/90 text-primary">Since 2012</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Boost Your Poultry&apos;s Health & Productivity
                </h1>
                <p className="text-lg text-primary/80">
                  Premium digestive health supplements trusted by farmers across the Philippines.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white">
                    Order Now
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/80 border-primary text-primary">
                    Become a Dealer
                  </Button>
                </div>
              </div>
              {/* Right: Product Images - Floating Arrangement */}
              <FloatingProducts />
            </div>
          </div>
        </div>
      </WireframeSection>

      {/* Trust Bar */}
      <WireframeSection label="3. TRUST BAR" dark>
        <div className="bg-primary text-primary-foreground py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "12+", label: "Years in Business" },
                { value: "500+", label: "Partner Farms" },
                { value: "5", label: "Premium Products" },
                { value: "100%", label: "Filipino Owned" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WireframeSection>

      {/* Value Propositions */}
      <WireframeSection label="4. VALUE PROPOSITIONS" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Why Choose Paborito?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Scientifically formulated supplements for optimal poultry health
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🥚", title: "Egg Productivity Booster", desc: "Increase egg production and quality naturally" },
              { icon: "🛡️", title: "Immune System Enhancer", desc: "Strengthen resistance against common diseases" },
              { icon: "📈", title: "Growth Promoter", desc: "Optimize feed conversion and weight gain" },
            ].map((item, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </WireframeSection>

      {/* Products Showcase */}
      <WireframeSection label="5. PRODUCTS SHOWCASE" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Our Products
            </h2>
            <p className="text-muted-foreground">
              Complete range of poultry digestive health solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Progastro",
              "Progastro Plus",
              "Odor & Fly Powder",
              "Product 4",
              "Product 5",
            ].map((product, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Placeholder label="Product Image" height="h-40" className="rounded-none border-0" />
                <CardContent className="p-4">
                  <h3 className="font-bold text-primary text-sm mb-1">{product}</h3>
                  <p className="text-xs text-muted-foreground mb-3">Brief description here</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </WireframeSection>

      {/* Testimonials / Social Proof */}
      <WireframeSection label="6. TESTIMONIALS" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Trusted by Farmers
            </h2>
            <p className="text-muted-foreground">
              Real results from real poultry farms across the Philippines
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <Card key={i} className="p-6">
                <CardContent className="pt-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      👤
                    </div>
                    <div>
                      <div className="font-bold text-sm">Farmer Name</div>
                      <div className="text-xs text-muted-foreground">Location, Philippines</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    &quot;Testimonial quote about how Paborito products helped improve their farm&apos;s productivity...&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </WireframeSection>

      {/* About / Company Story */}
      <WireframeSection label="7. ABOUT SECTION" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">About Us</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Paborito Agribiotech Solutions, Corp.
              </h2>
              <p className="text-muted-foreground mb-4">
                Since 2012, we have been dedicated to providing Filipino poultry farmers with premium quality digestive health supplements...
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to empower local farmers with scientifically-formulated products that boost productivity and ensure healthier livestock.
              </p>
              <Button variant="outline">Learn Our Story</Button>
            </div>
            <Placeholder label="Company/Farm Photo" height="h-64 md:h-80" />
          </div>
        </div>
      </WireframeSection>

      {/* Dealer CTA */}
      <WireframeSection label="8. DEALER CTA BANNER" dark>
        <div className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Become a Paborito Dealer
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join our growing network of dealers across the Philippines. Enjoy exclusive benefits, competitive margins, and marketing support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Exclusive Pricing", "Marketing Materials", "Training Support", "Territory Rights"].map((benefit, i) => (
                <Badge key={i} className="bg-secondary text-secondary-foreground">
                  ✓ {benefit}
                </Badge>
              ))}
            </div>
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white">
              Apply as Dealer
            </Button>
          </div>
        </div>
      </WireframeSection>

      {/* Contact Section */}
      <WireframeSection label="9. CONTACT SECTION" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-6">
                Have questions about our products? Ready to place an order? We&apos;re here to help!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  <span className="text-sm">Address placeholder, Philippines</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <span className="text-sm">+63 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">✉️</span>
                  <span className="text-sm">info@paborito.ph</span>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-bold text-primary mb-4">Quick Inquiry</h3>
                <Placeholder label="Contact Form Fields" height="h-48" />
                <Button className="w-full mt-4 bg-destructive hover:bg-destructive/90">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </WireframeSection>

      {/* Footer */}
      <WireframeSection label="10. FOOTER" dark>
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-xs font-bold text-secondary-foreground">
                    P
                  </div>
                  <span className="font-bold">PABORITO</span>
                </div>
                <p className="text-sm opacity-80">
                  Premium poultry health supplements since 2012.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3">Products</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Progastro</li>
                  <li>Progastro Plus</li>
                  <li>Odor & Fly Powder</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Company</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>About Us</li>
                  <li>Become a Dealer</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center">FB</div>
                  <div className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center">IG</div>
                  <div className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center">YT</div>
                </div>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
              <span>© 2024 Paborito Agribiotech Solutions, Corp. All rights reserved.</span>
              <div className="flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
              </div>
            </div>
          </div>
        </footer>
      </WireframeSection>

      {/* Wireframe Legend */}
      <div className="fixed bottom-4 right-4 bg-card border shadow-lg rounded-lg p-4 max-w-xs z-50">
        <h4 className="font-bold text-sm mb-2">Wireframe Legend</h4>
        <div className="space-y-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-dashed border-muted-foreground/30 rounded"></div>
            <span>Placeholder (needs asset)</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="text-[10px] px-1 py-0">LABEL</Badge>
            <span>Section identifier</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t">
          <p className="text-xs text-muted-foreground">
            View at <code className="bg-muted px-1 rounded">/wireframe</code>
          </p>
        </div>
      </div>
    </div>
  )
}
