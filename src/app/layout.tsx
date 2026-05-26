import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/animations/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shane Dedil Deuna | Game Developer & Mobile Developer",
  description: "Portfolio of Shane Dedil Deuna showcasing mobile applications, game development projects, certifications, technical skills, and academic achievements.",
  openGraph: {
    title: "Shane Dedil Deuna | Game Developer & Mobile Developer",
    description: "Portfolio of Shane Dedil Deuna showcasing mobile applications, game development projects, certifications, technical skills, and academic achievements.",
    url: "https://shanedevil.com", // Placeholder URL
    siteName: "Shane Dedil Deuna Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shane Dedil Deuna | Game Developer & Mobile Developer",
    description: "Portfolio showcasing mobile applications, game development projects, and skills.",
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
      <body className="min-h-full flex flex-col bg-[#0F0F0F] text-white">
        <LoadingScreen>{children}</LoadingScreen>
      </body>
    </html>
  );
}
