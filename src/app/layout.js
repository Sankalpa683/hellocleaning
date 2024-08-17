import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Hello Cleaning Facility - Professional Cleaning Services in Sydney",
  description: "Expert cleaning services in Sydney, Australia. From residential to commercial cleaning, we ensure your space is spotless and welcoming.",
  keywords: "Sydney cleaning services, professional cleaners, residential cleaning, commercial cleaning, end of lease cleaning, carpet cleaning, upholstery cleaning, eco-friendly cleaning",
  author: "Hello Cleaning Facility",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#007aff",
  openGraph: {
    title: "Hello Cleaning Facility - Professional Cleaning Services in Sydney",
    description: "Expert cleaning services in Sydney, Australia. From residential to commercial cleaning, we ensure your space is spotless and welcoming.",
    type: "website",
    url: "https://www.hellocleaningfacility.com",
    images: [
      {
        url: "https://www.hellocleaningfacility.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hello Cleaning Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HelloCleaning",
    title: "Hello Cleaning Facility - Professional Cleaning Services in Sydney",
    description: "Expert cleaning services in Sydney, Australia.",
    image: "https://www.hellocleaningfacility.com/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="theme-color" content={metadata.themeColor} />
        <title>{metadata.title}</title>
      </head>
      <body className={gabarito.className}>{children}</body>
    </html>
  );
}
