import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sean Yang - Student Developer & Entrepreneur",
  description: "High school student passionate about programming, singing, and building innovative solutions. Founder of OneToos tutoring business and debate club leader.",
  keywords: ["Sean Yang", "student developer", "programming", "tutoring", "OneToos", "debate club", "singing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
