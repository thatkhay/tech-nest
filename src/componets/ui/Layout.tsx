"use client";
import { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className={`flex-1 ${className}`}>{children}</main>

      <Footer />
    </div>
  );
}
