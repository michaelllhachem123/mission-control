import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mission Control",
  description: "Jarvis + Alfred shared operations board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-[#02040a] text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
            <Sidebar />
            <div className="block lg:hidden">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/30">
                <div className="flex flex-wrap gap-2 text-xs text-white/70">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-white/15 px-3 py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <main className="flex-1">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
