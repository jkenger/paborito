import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/motion"
import { siteConfig } from "@/lib/content"

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: "Terms of Service for Paborito Agribiotech Solutions - Read our terms and conditions for using our website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>

              <p className="text-muted-foreground mb-6">
                <strong>Last Updated:</strong> January 2026
              </p>

              <p>
                Welcome to the Paborito Agribiotech Solutions, Corp. website. By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">2. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violate any applicable local, national, or international law</li>
                <li>Infringe upon the rights of others</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">3. Products and Services</h2>
              <p>
                All product descriptions, images, and information on this website are provided for informational purposes only. While we strive to ensure accuracy, we do not warrant that product descriptions or other content is accurate, complete, or error-free.
              </p>
              <p className="mt-4">
                Product availability and pricing are subject to change without notice. We reserve the right to limit quantities and refuse any order at our discretion.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">4. Dealer Applications</h2>
              <p>
                Submission of a dealer or distributor application does not guarantee acceptance. We reserve the right to approve or reject applications at our sole discretion. Approved dealers will be subject to separate dealer agreements and terms.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">5. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Paborito Agribiotech Solutions, Corp. and is protected by Philippine and international copyright laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">6. Disclaimer of Warranties</h2>
              <p>
                This website and its content are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The website will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>The website is free of viruses or harmful components</li>
                <li>The information on the website is complete or accurate</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Paborito Agribiotech Solutions, Corp. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this website or our products.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">8. Product Usage</h2>
              <p>
                Our products are intended for use as directed on the product packaging. Users are responsible for following proper dosage and application instructions. We are not liable for any damages resulting from improper use of our products.
              </p>
              <p className="mt-4">
                Results may vary. Testimonials and case studies represent individual experiences and are not guaranteed outcomes.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Paborito Agribiotech Solutions, Corp., its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of this website or violation of these terms.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">10. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Rizal, Philippines.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website after any changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-10 mb-4">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none pl-0 space-y-2 text-muted-foreground mt-4">
                <li><strong>Paborito Agribiotech Solutions, Corp.</strong></li>
                <li>{siteConfig.contact.address}</li>
                <li>Email: {siteConfig.contact.email}</li>
                <li>Phone: {siteConfig.contact.phone}</li>
              </ul>

              <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Note:</strong> These terms of service are a template and should be reviewed by a legal professional to ensure compliance with all applicable laws and regulations.
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
