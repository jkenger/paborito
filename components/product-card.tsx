import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/content"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 bg-muted">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-5"
          />
        ) : (
          <div className="h-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-muted-foreground text-base">
            Product Image
          </div>
        )}
        {product.badge && (
          <Badge className="absolute top-3 right-3 bg-destructive text-white text-sm px-2.5 py-1">
            {product.badge}
          </Badge>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-primary text-base mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{product.shortDescription}</p>
        <Button asChild size="sm" variant="outline" className="w-full text-sm py-4">
          <Link href={`/products/${product.slug}`}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
