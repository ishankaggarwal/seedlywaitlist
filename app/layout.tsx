import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Seedly",
  description:
    "Due Diligence without the grunt work. Use your data room to pull all the info you need for analysis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.png" sizes="192x192" />
      </Head>
      <body>
        <Providers>
          <div>
            <Toaster />
          </div>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
