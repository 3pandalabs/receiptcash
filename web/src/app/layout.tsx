import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FollowUs } from "@/components/FollowUs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = "Scan your receipts, earn cashback, redeem for gifts.";
const homeTitle = "ReceiptCash — Scan receipts, earn cashback | by 3PandaLabs";

// Brand consistency rules (brand repo, brand.md, DECIDED 2026-11-22): home
// title "<App> — <line> | by 3PandaLabs", other pages "<Page> — <App>" via
// the template, and share tags with a 1200x630 /og.png.
export const metadata: Metadata = {
  metadataBase: new URL("https://receiptcash.3pandalabs.com"),
  title: {
    default: homeTitle,
    template: "%s — ReceiptCash",
  },
  description,
  openGraph: {
    title: homeTitle,
    description,
    siteName: "ReceiptCash by 3PandaLabs",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ReceiptCash by 3PandaLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <footer className="mx-auto w-full max-w-5xl px-6 py-8 text-center text-sm text-zinc-500">
          <FollowUs className="mb-2 justify-center" />
          <p>&copy; 3PandaLabs LLC, USA.</p>
          <p>All rights reserved.</p>
          <p className="mt-1 text-xs">Built by pandas. Loved by people.</p>
        </footer>
      </body>
    </html>
  );
}
