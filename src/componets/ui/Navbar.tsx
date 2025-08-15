"use client";
import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import logo from "@/assets/logo.png";
interface NavLink {
  href: string;
  label: string;
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/categories", label: "Categories" },
    { href: "/sell", label: "Sell" },
    { href: "/about", label: "About" },
  ];

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const closeMenu = (): void => setIsMenuOpen(false);

  const handleSignIn = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log("Sign in clicked");
  };

  const handleGetStarted = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log("Get started clicked");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex  space-x-2 z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={logo} alt="Logo" className="h-8 w-9" />
              </motion.div>
              <div
                className={`text-[1rem] font-bold ${
                  isScrolled
                    ? "text-gray-900"
                    : "text-white flex flex-col items-center"
                }`}
              >
                Tech <span>Nest</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 hover:text-pink-500 ${
                    isScrolled ? "text-gray-700" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="secondary" size="md" onClick={handleSignIn}>
                Sign In
              </Button>
              <Button variant="primary" size="md" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden z-50 relative p-1.5 rounded-md hover:bg-black/10 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-5 h-4 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 3 },
                  }}
                  className={`w-5 h-0.5 block mb-0.5 origin-center transition-all duration-300 ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className={`w-5 h-0.5 block mb-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -3 },
                  }}
                  className={`w-5 h-0.5 block origin-center transition-all duration-300 ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Image src={logo} alt="Logo" className="h-8 w-9" />
                    <div className="text-[1rem] font-bold text-gray-900">
                      TechNest
                    </div>
                  </div>
                  <motion.button
                    onClick={closeMenu}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-6">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="block text-lg font-medium text-gray-900 hover:text-pink-500 transition-colors py-2"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="p-6 border-t border-gray-200 space-y-4">
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full"
                    onClick={handleSignIn}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
