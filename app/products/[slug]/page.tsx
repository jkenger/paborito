import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { products, siteConfig } from "@/lib/content"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return {
      title: `Product Not Found | ${siteConfig.name}`,
    }
  }

  return {
    title: `${product.name} | ${siteConfig.name}`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Product Hero */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Product Image */}
            <FadeIn>
              <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                  />
                ) : (
                  <div className="h-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-muted-foreground text-lg">
                    Product Image
                  </div>
                )}
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-destructive text-white text-sm px-3 py-1">
                    {product.badge}
                  </Badge>
                )}
              </div>
            </FadeIn>

            {/* Product Info */}
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div>
                  <Link
                    href="/products"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 mb-4"
                  >
                    ← Back to Products
                  </Link>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                    {product.name}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    {product.shortDescription}
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {product.features && product.features.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-bold text-primary text-lg">Key Benefits</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-base">
                          <span className="text-secondary text-lg">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.application && product.application.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-muted-foreground">Suitable for:</span>
                    {product.application.map((app, i) => (
                      <Badge key={i} variant="secondary" className="text-sm">
                        {app}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    render={<Link href="/contact" />}
                    size="lg"
                    className="bg-destructive hover:bg-destructive/90 text-white text-base px-8 py-6"
                  >
                    Inquire Now
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
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-3">🐔</div>
                  <h3 className="font-bold text-primary mb-2">For All Poultry</h3>
                  <p className="text-sm text-muted-foreground">
                    Suitable for chickens, ducks, turkeys, and other poultry
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-3">📋</div>
                  <h3 className="font-bold text-primary mb-2">Easy Application</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.usage || "Mix with feed or drinking water as directed"}
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-bold text-primary mb-2">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground">
                    Scientifically formulated for optimal results
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <FadeIn className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                Other Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our complete range of poultry health solutions
              </p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <StaggerItem key={relatedProduct.id}>
                  <ProductCard product={relatedProduct} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Improve Your Farm&apos;s Productivity?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Contact us today to learn more about {product.name} and how it can benefit your poultry farm.
            </p>
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-destructive hover:bg-destructive/90 text-white text-base px-8 py-6"
            >
              Get in Touch
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
