import type { Metadata, Viewport } from "next";
import { geistMono, geistSans, inter, russoOne } from "@/lib/utils";
import "./globals.css";



// Pre-concatenate classes
const bodyClassNames = `${russoOne.variable} ${inter.variable} antialiased`;

/* Metadata */
export const metadata: Metadata = {
  title: {
    default: "SmartEdLabs",
    template: "%s | SmartEdLabs",
  },
  description: "Highly optimized Next.js app",
};


/* Viewport */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body suppressHydrationWarning className={bodyClassNames}>
        {children}
      </body>
    </html>
  );
}
