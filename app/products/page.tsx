import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { products, siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: `Products | ${siteConfig.name}`,
  description: "Browse our complete range of premium poultry health supplements. Progastro, Progastro Plus, and more digestive health solutions for your farm.",
}

export default function ProductsPage() {
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
              Our Products
            </h1>
            <p className="text-xl text-primary/80">
              Premium poultry health supplements scientifically formulated for optimal results.
              Trusted by farmers across the Philippines since 2012.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to Order?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us for pricing, bulk orders, or to find a dealer near you.
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
                variant="outline"
                className="text-base px-8 py-6"
              >
                Find a Dealer
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
