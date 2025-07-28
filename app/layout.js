import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Orbyz Studio",
  description: "Branding | Marketing Digital | Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>

        {children}
        <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
