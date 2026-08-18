"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-acoustic-black/95 backdrop-blur-md border-b border-acoustic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo mark + wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-acoustic-gold/50 flex items-center justify-center group-hover:border-acoustic-gold transition-colors duration-300">
              <span className="font-body text-[10px] tracking-widest text-acoustic-gold">AT</span>
            </div>
            <span className="font-display text-xl md:text-2xl text-acoustic-cream tracking-wide leading-none">
              Acoustic Treats
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-acoustic-gold"
                    : "text-acoustic-muted hover:text-acoustic-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request-quote"
              className="font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-gold text-acoustic-gold px-5 py-2.5 hover:bg-acoustic-gold hover:text-acoustic-black transition-all duration-200"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-acoustic-muted hover:text-acoustic-cream transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-acoustic-dark border-t border-acoustic-border">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block font-body text-[11px] tracking-[0.2em] uppercase py-3 border-b border-acoustic-border transition-colors ${
                  pathname === link.href
                    ? "text-acoustic-gold"
                    : "text-acoustic-muted hover:text-acoustic-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request-quote"
              onClick={() => setMenuOpen(false)}
              className="block font-body text-[11px] tracking-[0.2em] uppercase border border-acoustic-gold text-acoustic-gold px-5 py-3 text-center hover:bg-acoustic-gold hover:text-acoustic-black transition-all mt-4"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
