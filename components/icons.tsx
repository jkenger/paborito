import {
  EggsIcon,
  ShieldCheck,
  Analytics01Icon,
  Store01Icon,
  Handshake,
  Location01Icon,
  Call02Icon,
  Mail01Icon,
  Target01Icon,
  Telescope01Icon,
  TestTube01Icon,
  Leaf01Icon,
  UserGroup02Icon,
  CheckmarkBadge02Icon,
  ShoppingCart01Icon,
  Package01Icon,
  CustomerService01Icon,
  Message01Icon,
  MoneyBag01Icon,
  LocationShare01Icon,
  BookOpen01Icon,
  TruckIcon,
  ChartLineData02Icon,
  ClipboardIcon,
  CheckmarkBadge01Icon,
  FavouriteIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@/lib/utils"

const iconMap = {
  // Value propositions
  egg: EggsIcon,
  shield: ShieldCheck,
  "trending-up": Analytics01Icon,
  // Partnership
  store: Store01Icon,
  handshake: Handshake,
  // Contact
  location: Location01Icon,
  phone: Call02Icon,
  mail: Mail01Icon,
  // Mission/Vision
  target: Target01Icon,
  telescope: Telescope01Icon,
  // Values
  microscope: TestTube01Icon,
  leaf: Leaf01Icon,
  users: UserGroup02Icon,
  // General
  check: CheckmarkBadge02Icon,
  cart: ShoppingCart01Icon,
  package: Package01Icon,
  support: CustomerService01Icon,
  message: Message01Icon,
  // Dealer benefits
  money: MoneyBag01Icon,
  territory: LocationShare01Icon,
  training: BookOpen01Icon,
  delivery: TruckIcon,
  growth: ChartLineData02Icon,
  // Product features
  clipboard: ClipboardIcon,
  quality: CheckmarkBadge01Icon,
  heart: FavouriteIcon,
} as const

export type IconName = keyof typeof iconMap

interface IconProps {
  name: IconName
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
}

export function Icon({ name, className, size = "md" }: IconProps) {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return (
    <HugeiconsIcon
      icon={IconComponent}
      className={cn("block", sizeClasses[size], className)}
    />
  )
}

// Icon with background circle
interface IconCircleProps extends IconProps {
  bgClassName?: string
}

export function IconCircle({
  name,
  className,
  bgClassName,
  size = "md",
}: IconCircleProps) {
  const bgSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14",
  }

  // Icon size is one step smaller than the circle for better visual balance
  const iconSizeMap: Record<string, "sm" | "md" | "lg" | "xl"> = {
    sm: "sm",
    md: "sm",
    lg: "md",
    xl: "lg",
  }

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center shrink-0",
        bgSizes[size],
        bgClassName || "bg-secondary/20"
      )}
    >
      <Icon name={name} className={cn("shrink-0", className)} size={iconSizeMap[size]} />
    </div>
  )
}
