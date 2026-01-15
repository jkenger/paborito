// Site content configuration
// Update this file when actual content/assets are available

export const siteConfig = {
  name: "Paborito",
  tagline: "Agribiotech Solutions",
  description: "Premium poultry health supplements since 2012",
  yearEstablished: 2012,
  contact: {
    phone: "+63 XXX XXX XXXX",
    email: "info@paborito.ph",
    address: "Address placeholder, Philippines",
  },
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
}

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Dealers", href: "/dealers" },
]

export const heroContent = {
  badge: "Since 2012",
  headline: "Boost Your Poultry's Health & Productivity",
  subheadline: "Premium digestive health supplements trusted by farmers across the Philippines.",
  primaryCta: { label: "Order Now", href: "/contact" },
  secondaryCta: { label: "Become a Dealer", href: "/dealers" },
}

export const trustStats = [
  { value: "12+", label: "Years in Business" },
  { value: "500+", label: "Partner Farms" },
  { value: "5", label: "Premium Products" },
  { value: "100%", label: "Filipino Owned" },
]

export const valuePropositions = [
  {
    icon: "egg",
    title: "Egg Productivity Booster",
    description: "Increase egg production and quality naturally with our proven formula",
  },
  {
    icon: "shield",
    title: "Immune System Enhancer",
    description: "Strengthen resistance against common poultry diseases",
  },
  {
    icon: "trending-up",
    title: "Growth Promoter",
    description: "Optimize feed conversion and achieve better weight gain",
  },
]

export interface Product {
  id: string
  name: string
  slug: string
  shortDescription: string
  description: string
  image: string | null // null = placeholder
  badge?: string
  features?: string[]
}

export const products: Product[] = [
  {
    id: "progastro",
    name: "Progastro",
    slug: "progastro",
    shortDescription: "Digestive health supplement for poultry",
    description: "Our flagship digestive health supplement formulated to optimize gut health and nutrient absorption in poultry.",
    image: null,
    features: ["Improves digestion", "Enhances nutrient absorption", "Supports gut health"],
  },
  {
    id: "progastro-plus",
    name: "Progastro Plus",
    slug: "progastro-plus",
    shortDescription: "Advanced formula for maximum results",
    description: "Enhanced formula with additional probiotics and vitamins for superior poultry health and productivity.",
    image: null,
    badge: "Best Seller",
    features: ["Premium probiotics", "Added vitamins", "Maximum potency"],
  },
  {
    id: "odor-fly-powder",
    name: "Odor & Fly Powder",
    slug: "odor-fly-powder",
    shortDescription: "Farm hygiene solution",
    description: "Effective powder formula to control odor and reduce fly populations in poultry farms.",
    image: null,
    features: ["Reduces odor", "Controls flies", "Safe for animals"],
  },
  {
    id: "product-4",
    name: "Product 4",
    slug: "product-4",
    shortDescription: "Brief description here",
    description: "Product description placeholder.",
    image: null,
  },
  {
    id: "product-5",
    name: "Product 5",
    slug: "product-5",
    shortDescription: "Brief description here",
    description: "Product description placeholder.",
    image: null,
  },
]

export interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  image: string | null
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Farmer Name",
    location: "Location, Philippines",
    quote: "Testimonial quote about how Paborito products helped improve their farm's productivity...",
    image: null,
  },
  {
    id: "testimonial-2",
    name: "Farmer Name",
    location: "Location, Philippines",
    quote: "Testimonial quote about how Paborito products helped improve their farm's productivity...",
    image: null,
  },
  {
    id: "testimonial-3",
    name: "Farmer Name",
    location: "Location, Philippines",
    quote: "Testimonial quote about how Paborito products helped improve their farm's productivity...",
    image: null,
  },
]

export const aboutContent = {
  badge: "About Us",
  title: "Paborito Agribiotech Solutions, Corp.",
  paragraphs: [
    "Since 2012, we have been dedicated to providing Filipino poultry farmers with premium quality digestive health supplements...",
    "Our mission is to empower local farmers with scientifically-formulated products that boost productivity and ensure healthier livestock.",
  ],
  cta: { label: "Learn Our Story", href: "/about" },
  image: null as string | null,
}

export const faqs = [
  {
    question: "How do I use Progastro for my poultry?",
    answer: "Mix the recommended dosage with feed or drinking water. Detailed instructions are provided on each product package.",
  },
  {
    question: "Are your products safe for all poultry types?",
    answer: "Yes, our products are formulated for chickens, ducks, turkeys, and other poultry. Always follow the recommended dosage for each type.",
  },
  {
    question: "How soon can I see results?",
    answer: "Most farmers notice improvements in egg production and overall health within 2-4 weeks of consistent use.",
  },
  {
    question: "Do you offer bulk pricing for large farms?",
    answer: "Yes! Contact us for special pricing on bulk orders. We also have a dealer program with exclusive benefits.",
  },
  {
    question: "Where can I buy Paborito products?",
    answer: "You can order directly through our website, contact us via phone, or find an authorized dealer in your area.",
  },
]

export const partnershipContent = {
  title: "Partner With Paborito",
  description: "Join our growing network across the Philippines. We offer partnership opportunities for dealers and business partners.",
  dealer: {
    icon: "store",
    title: "Become a Dealer",
    description: "Sell Paborito products in your area with exclusive territory rights and competitive margins.",
    benefits: ["Exclusive Pricing", "Marketing Materials", "Training Support", "Territory Rights"],
    cta: { label: "Apply as Dealer", href: "/dealers" },
  },
  partner: {
    icon: "handshake",
    title: "Become a Partner",
    description: "Collaborate with us on distribution, co-branding, or strategic business partnerships.",
    benefits: ["Distribution Partnership", "Co-Branding Opportunities", "Bulk Supply Agreements", "Strategic Alliances"],
    cta: { label: "Inquire Partnership", href: "/contact" },
  },
}

export const footerContent = {
  description: "Premium poultry health supplements since 2012.",
  productLinks: products.slice(0, 3).map(p => ({ label: p.name, href: `/products/${p.slug}` })),
  companyLinks: [
    { label: "About Us", href: "/about" },
    { label: "Become a Dealer", href: "/dealers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}
