import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://waytop.com"),
  title: "WAYTOP · Live Seafood, From the Deep Sea",
  description:
    "WAYTOP (蔚道商贸) — direct supply of live European blue lobster, Boston lobster, brown crab, toothfish and more. 100% live shipping, 98% survival rate, next-day cold-chain delivery.",
  icons: { icon: "/waytop-logo.svg" },
  openGraph: {
    title: "WAYTOP · Live Seafood, From the Deep Sea",
    description:
      "Direct supply of live European blue lobster and the finest cold-water seafood to China's hotels, restaurants and tables.",
    images: ["/img/hero-spread.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0e10",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
