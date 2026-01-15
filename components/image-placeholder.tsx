import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  src: string | null
  alt: string
  placeholderText?: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
}

export function ImagePlaceholder({
  src,
  alt,
  placeholderText = "Image",
  className,
  fill = true,
  width,
  height,
}: ImagePlaceholderProps) {
  if (src) {
    return fill ? (
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
      />
    ) : (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    )
  }

  return (
    <div
      className={cn(
        "h-full w-full border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center text-muted-foreground text-sm bg-muted/50",
        className
      )}
    >
      {placeholderText}
    </div>
  )
}
