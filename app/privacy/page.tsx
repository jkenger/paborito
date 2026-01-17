import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/motion"
import { siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: "Privacy Policy for Paborito Agribiotech Solutions - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>

              <p className="text-muted-foreground mb-6">
                <strong>Last Updated:</strong> January 2026
              </p>

              <p>
                Paborito Agribiotech Solutions, Corp. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Personal Information</h3>
              <p>When you contact us, submit an inquiry, or apply to become a dealer, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business address</li>
                <li>Business registration details (for dealer applications)</li>
                <li>Area of distribution (for dealer applications)</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process dealer and partnership applications</li>
                <li>Send you information about our products and services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Service providers who assist in our operations (e.g., email services)</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">5. Your Rights</h2>
              <p>Under the Data Privacy Act of 2012 (Republic Act No. 10173), you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">6. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of our website.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your data privacy rights, please contact us:
              </p>
              <ul className="list-none pl-0 space-y-2 text-muted-foreground mt-4">
                <li><strong>Paborito Agribiotech Solutions, Corp.</strong></li>
                <li>{siteConfig.contact.address}</li>
                <li>Email: {siteConfig.contact.email}</li>
                <li>Phone: {siteConfig.contact.phone}</li>
              </ul>

              <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Note:</strong> This privacy policy is a template and should be reviewed by a legal professional to ensure compliance with all applicable laws and regulations.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
