import { Suspense } from "react";
import type { Metadata } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        {children}
        <Toaster />
        <SonnerToaster expand richColors />
      </div>
      <Footer />
    </Suspense>
  );
}
