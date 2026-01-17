import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImagePlaceholder } from "@/components/image-placeholder"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { aboutPageContent, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: "Learn about Paborito Agribiotech Solutions - a 100% Filipino-owned company providing premium poultry health supplements since 2012.",
}

export default function AboutPage() {
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
              {aboutPageContent.hero.title}
            </h1>
            <p className="text-xl text-primary/80">
              {aboutPageContent.hero.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {aboutPageContent.stats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-3xl md:text-4xl font-bold text-secondary">
                  {stat.value}
                </div>
                <div className="text-base opacity-80">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {aboutPageContent.story.title}
              </h2>
              {aboutPageContent.story.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg text-muted-foreground mb-5 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </FadeIn>
            <FadeIn delay={0.2} className="h-72 md:h-96">
              <ImagePlaceholder
                src={aboutPageContent.story.image}
                alt="Paborito Story"
                placeholderText="Company Photo"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <Card className="p-8 h-full">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {aboutPageContent.mission.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {aboutPageContent.mission.content}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="p-8 h-full">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">🔭</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {aboutPageContent.vision.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {aboutPageContent.vision.content}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutPageContent.values.map((value, i) => (
              <StaggerItem key={i}>
                <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">
                      {value.icon === "microscope" && "🔬"}
                      {value.icon === "handshake" && "🤝"}
                      {value.icon === "leaf" && "🌿"}
                      {value.icon === "users" && "👥"}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join hundreds of Filipino farmers who trust Paborito for their poultry health needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="bg-destructive hover:bg-destructive/90 text-white text-base px-8 py-6"
              >
                Contact Us
              </Button>
              <Button
                render={<Link href="/dealers" />}
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 text-base px-8 py-6"
              >
                Become a Dealer
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
