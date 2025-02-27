import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HavenVista",
  description: "Predicting housing prices with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
    return (
      <html lang="en">
        <body>
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-red-600">🚧 Site is in Maintenance Mode 🚧</h1>
          </div>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        <Header /> {/* Sticky Header */}
        <main className="content">{children}</main>
        <Footer /> {/* Static Footer */}
      </body>
    </html>
  );
}
