import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/lib/content"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-8">
      <CardContent className="pt-0">
        <div className="flex items-center gap-4 mb-5">
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-muted flex items-center justify-center">
            {testimonial.image ? (
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            ) : (
              <span className="text-xl">👤</span>
            )}
          </div>
          <div>
            <div className="font-bold text-base">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.location}</div>
          </div>
        </div>
        <p className="text-base text-muted-foreground italic">
          &quot;{testimonial.quote}&quot;
        </p>
      </CardContent>
    </Card>
  )
}
