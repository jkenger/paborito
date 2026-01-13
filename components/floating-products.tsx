"use client"

import { motion } from "motion/react"

interface Product {
  name: string
  label?: string
}

const products: Product[] = [
  { name: "Progastro" },
  { name: "Progastro Plus", label: "Best Seller" },
  { name: "Odor & Fly Powder" },
]

// Arc layout positions - closer together
const arcPositions = [
  { x: "22%", y: "32%", rotate: -10, scale: 0.88, delay: 0.1 },   // Left
  { x: "50%", y: "5%", rotate: 0, scale: 1, delay: 0 },           // Center
  { x: "78%", y: "32%", rotate: 10, scale: 0.88, delay: 0.2 },    // Right
]

export function FloatingProducts() {
  return (
    <div className="relative h-80 md:h-[400px] w-full">
      {products.map((product, index) => {
        const pos = arcPositions[index]
        const isCenter = index === 1

        return (
          <motion.div
            key={product.name}
            className="absolute -translate-x-1/2"
            style={{ left: pos.x, top: pos.y }}
            initial={{ opacity: 0, y: 60, scale: 0.7, rotate: pos.rotate }}
            animate={{ opacity: 1, y: 0, scale: pos.scale, rotate: pos.rotate }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 14,
              delay: pos.delay,
            }}
          >
            {/* Placeholder card with dashed border */}
            <motion.div
              className={`
                relative bg-white/20 rounded-lg
                border-2 border-dashed border-white/60
                flex flex-col items-center justify-center
                ${isCenter
                  ? "w-32 h-44 md:w-44 md:h-60 p-4 z-10"
                  : "w-24 h-36 md:w-32 md:h-44 p-3 z-0"
                }
              `}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                y: -8,
                zIndex: 20,
                borderColor: "rgba(255,255,255,0.9)",
                backgroundColor: "rgba(255,255,255,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Floating animation wrapper */}
              <motion.div
                className="flex flex-col items-center"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2.5 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Product image placeholder */}
                <div
                  className={`
                    border-2 border-dashed border-muted-foreground/40 rounded bg-white/10
                    flex items-center justify-center mb-2
                    ${isCenter
                      ? "w-14 h-24 md:w-18 md:h-32"
                      : "w-10 h-18 md:w-14 md:h-24"
                    }
                  `}
                >
                  <span className="text-[10px] md:text-xs text-muted-foreground/60 text-center px-1">
                    Product Image
                  </span>
                </div>

                {/* Product name */}
                <span className={`
                  font-medium text-primary/80 text-center leading-tight
                  ${isCenter ? "text-xs md:text-sm" : "text-[10px] md:text-xs"}
                `}>
                  {product.name}
                </span>

                {/* Label badge */}
                {product.label && (
                  <motion.span
                    className="mt-1.5 text-[8px] md:text-[10px] text-muted-foreground bg-white/40 px-2 py-0.5 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    {product.label}
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )
      })}

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-4 left-[15%] text-3xl md:text-4xl select-none opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <motion.span
          className="inline-block"
          animate={{ y: [0, -6, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          🐔
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-[18%] text-2xl md:text-3xl select-none opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <motion.span
          className="inline-block"
          animate={{ y: [0, -5, 0], rotate: [3, -3, 3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          🥚
        </motion.span>
      </motion.div>
    </div>
  )
}
