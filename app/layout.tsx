import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seedly",
  description:
    "Due Diligence without the grunt work. Use your data room to pull all the info you need for analysis. Gather data for analysis in minutes, not weeks. Every investment memo starts with the same tedious research. We pull that data so you can jump into the real work, right away.",
  icons: {
    shortcut: "/favicon.ico",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-100 text-zinc-900">
        <Providers>
          <Toaster position="top-center" />
          <div className="p-6 md:p-9 max-w-[900px] mx-auto">
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
