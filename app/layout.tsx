import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import LeadPopup from "@/components/LeadPopup"
import { PopupProvider } from "@/components/popup-context"
import "./globals.css"



export const metadata: Metadata = {
  title: {
    default: "Mahalaxmi Infra – NMRDA & RERA Approved Plots in Nagpur | Starting ₹22L",
    template: "%s | Mahalaxmi Infra Nagpur",
  },
  icons: {
    icon: "/Mahalaxmi Infra new Logo.png",
    shortcut: "/Mahalaxmi Infra new Logo.png",
    apple: "/Mahalaxmi Infra new Logo.png",
  },
  description: "Discover premium residential plots in Nagpur at Mahalaxmi Nagar 49. NMRDA & RL approved plots near MIHAN, Wardha Road. Best investment plots with amenities. Contact: Mayur Dhomne - 95521 47036",
  keywords: [
    "plots in Nagpur",
    "residential property Nagpur",
    "plot for sale Nagpur",
    "Property for sale in south Nagpur",
    "Nagpur investment plots",
    "plots near MIHAN Nagpur",
    "plots near Nagpur airport",
    "Mahalaxmi developer Nagpur",
    "plots near outer ring road",
    "plots near gov engineering college",
    "plots near Beltarodi D Mart Nagpur",
    "plots in residential area Nagpur",
    "RL plots in Shankarpur",
    "affordable plots in Nagpur",
    "plot on Wardha road",
    "best plots for investment in Nagpur",
    "residential plots near MIHAN",
    "residential plot on Wardha road",
    "RERA approved plots Nagpur",
    "NMRDA approved plots",
    "RL plots in Nagpur",
    "clear title plots Nagpur",
    "plots with amenities Nagpur"
  ],
  authors: [{ name: "Mayur Dhomne" }],
  creator: "Mayur Dhomne",
  publisher: "Mahalaxmi Infra",
  openGraph: {
    title: "Mahalaxmi Infra – NMRDA & RERA Approved Plots in Nagpur",
    description: "RERA & NMRDA approved residential plots near MIHAN Nagpur. Best investment opportunity with modern amenities.",
    url: "https://md.mahalaxmiinfra.in",
    siteName: "Mahalaxmi Nagar 49",
    images: [
      {
        url: "/Malaxmi-Final-Logo.-2png.png",
        width: 1200,
        height: 630,
        alt: "Mahalaxmi Nagar 49 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahalaxmi Nagar 49 - Premium Plots in Nagpur",
    description: "Discover RERA approved residential plots near MIHAN Nagpur. Contact Mayur Dhomne for best investment.",
    images: ["/Malaxmi-Final-Logo.-2png.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Malaxmi-Final-Logo.-2png.png" />
        <title>Mahalaxmi Nagar 49 - Premium Residential Plots in Nagpur</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17972228512"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17972228512');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Mahalaxmi Infra",
              "description": "Premium residential plots in Nagpur, NMRDA & RL approved projects near MIHAN and Wardha Road.",
              "url": "https://md.mahalaxmiinfra.in",
              "logo": "https://md.mahalaxmiinfra.in/Malaxmi-Final-Logo.-2png.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-95521-47036",
                "contactType": "sales",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/mahalaxmiinfra",
                "https://www.instagram.com/mahalaxmiinfra"
              ],
              "founder": {
                "@type": "Person",
                "name": "Mayur Dhomne",
                "jobTitle": "Director",
                "telephone": "+91-95521-47036",
                "email": "akdhomne@gmail.com"
              },
              "knowsAbout": [
                "Residential plots in Nagpur",
                "Property development",
                "Real estate investment",
                "NMRDA approved plots",
                "RERA registered projects"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Nagpur",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "priceRange": "$$"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Project",
              "name": "Mahalaxmi Nagar 49",
              "description": "Premium residential plotted project with NMRDA and RL approval, located near MIHAN Nagpur and Wardha Road.",
              "url": "https://md.mahalaxmiinfra.in",
              "image": "https://md.mahalaxmiinfra.in/gallery_6.jpg",
              "startDate": "2023-01-01",
              "location": {
                "@type": "Place",
                "name": "Mahalaxmi Nagar 49",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Wardha Road",
                  "addressLocality": "Nagpur",
                  "addressRegion": "Maharashtra",
                  "postalCode": "441108",
                  "addressCountry": "IN"
                }
              },
              "provider": {
                "@type": "RealEstateAgent",
                "name": "Mahalaxmi Infra",
                "telephone": "+91-95521-47036"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "RealEstateAgent",
                  "name": "Mahalaxmi Infra"
                }
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <PopupProvider>
          {children}
          <LeadPopup />
        </PopupProvider>
        <Analytics />
      </body>
    </html>
  )
}
