import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/content"

interface ProductCardProps {
  product: Product
}

function ShopeeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.74 2 6.17 4.53 6.02 7.75H5.5C3.57 7.75 2 9.32 2 11.25v7.5C2 20.68 3.57 22.25 5.5 22.25h13c1.93 0 3.5-1.57 3.5-3.5v-7.5c0-1.93-1.57-3.5-3.5-3.5h-.52C17.83 4.53 15.26 2 12 2zm0 1.5c2.35 0 4.32 1.72 4.48 4.25H7.52C7.68 5.22 9.65 3.5 12 3.5zm0 6.75c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
    </svg>
  )
}

function LazadaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.08 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
    </svg>
  )
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1V9.4a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.26a8.16 8.16 0 004.76 1.51V7.32a4.85 4.85 0 01-1-.63z"/>
    </svg>
  )
}

export function ProductCard({ product }: ProductCardProps) {
  const hasLinks = product.links && (product.links.shopee || product.links.lazada || product.links.tiktok)

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 bg-muted shrink-0">
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
      <CardContent className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="font-bold text-primary text-base mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
        </div>

        <div className="mt-4">
          {hasLinks && (
            <div className="flex items-center justify-center gap-3 mb-4">
              {product.links?.shopee && (
                <a
                  href={product.links.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#EE4D2D] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  title="Buy on Shopee"
                >
                  <ShopeeIcon className="w-4 h-4" />
                </a>
              )}
              {product.links?.lazada && (
                <a
                  href={product.links.lazada}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0F146D] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  title="Buy on Lazada"
                >
                  <LazadaIcon className="w-4 h-4" />
                </a>
              )}
              {product.links?.tiktok && (
                <a
                  href={product.links.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  title="Buy on TikTok Shop"
                >
                  <TiktokIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          )}

          <Button
            render={<Link href={`/products/${product.slug}`} />}
            size="sm"
            variant="outline"
            className="w-full text-sm py-4"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
