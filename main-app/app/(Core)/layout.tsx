import { Suspense } from "react";
import type { Metadata } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import Loader from "@/components/ui/loader";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Hacienda X - Core",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ background: "bg-white", overflow: "hidden" }}>
      <Suspense fallback={<Loader />}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </Suspense>
    </div>
  );
}
