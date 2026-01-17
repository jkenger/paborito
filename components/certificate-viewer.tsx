"use client"

import { useState } from "react"
import Image from "next/image"

interface CertificateViewerProps {
  src: string
  alt: string
  label: string
}

export function CertificateViewer({ src, alt, label }: CertificateViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Thumbnail trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
      >
        <div className="relative w-10 h-14 bg-white/10 rounded overflow-hidden border border-white/20 group-hover:border-white/40 transition-colors">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
        <span className="underline underline-offset-2">{label}</span>
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white hover:text-white bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative w-auto h-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full max-h-[80vh] w-auto">
              <Image
                src={src}
                alt={alt}
                width={600}
                height={900}
                className="h-full w-auto max-h-[80vh] object-contain rounded-lg shadow-2xl bg-white"
                priority
              />
            </div>
            <p className="text-center text-white text-sm mt-4">{alt}</p>
          </div>
        </div>
      )}
    </>
  )
}
