import Link from "next/link"
import { siteConfig, footerContent } from "@/lib/content"
import { CertificateViewer } from "@/components/certificate-viewer"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground">
                P
              </div>
              <span className="font-bold text-lg">{siteConfig.name.toUpperCase()}</span>
            </Link>
            <p className="text-base opacity-80">
              {footerContent.description}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-3 text-base opacity-80">
              {footerContent.productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-base opacity-80">
              {footerContent.companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/20 rounded flex items-center justify-center hover:bg-secondary/30 transition-colors text-base"
              >
                FB
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/20 rounded flex items-center justify-center hover:bg-secondary/30 transition-colors text-base"
              >
                IG
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/20 rounded flex items-center justify-center hover:bg-secondary/30 transition-colors text-base"
              >
                YT
              </a>
            </div>
          </div>
        </div>

        {/* Registrations */}
        <div className="border-t border-primary-foreground/20 pt-6 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm opacity-70">
            {siteConfig.registrations.map((reg, i) => (
              <span key={i}>
                {reg.fullName}: <span className="font-medium">{reg.number}</span>
              </span>
            ))}
            <CertificateViewer
              src="/images/bai-license.png"
              alt="Bureau of Animal Industry - License to Operate (VDAPM-20-126)"
              label="View BAI License"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-base opacity-70">
          <span>© {currentYear} Paborito Agribiotech Solutions, Corp. All rights reserved.</span>
          <div className="flex gap-6">
            {footerContent.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:opacity-100 transition-opacity">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
