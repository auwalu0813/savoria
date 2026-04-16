"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { getCartCount } from "@/app/lib/cart";
import { FlameLeafIcon, ShoppingBagIcon, XIcon } from "@/app/lib/icons";

import { useCart } from "./CartProvider";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Offers", href: "/offers" },
  { label: "Blog", href: "#" },
];

export function LogoMark() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--amber)]">
      <FlameLeafIcon className="h-3.5 w-3.5 text-[var(--bg-primary)]" />
    </div>
  );
}

export function SavoriaLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <LogoMark />
      <span className="font-display text-[20px] font-semibold lowercase text-[var(--cream)]">
        savoria
      </span>
    </Link>
  );
}

function isActiveLink(pathname: string, href: string) {
  if (href.startsWith("/#")) {
    return pathname === "/";
  }

  if (href === "/restaurants") {
    return pathname.startsWith("/restaurants");
  }

  if (href === "#") {
    return false;
  }

  return pathname === href;
}

function CartButton({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Open cart"
      onClick={onClick}
      className="relative rounded-full border border-[var(--border)] p-2.5 text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
    >
      <ShoppingBagIcon className="h-5 w-5" />
      {count > 0 ? (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--amber)] text-[10px] font-semibold text-[var(--bg-primary)]">
          {count > 9 ? "9+" : count}
        </span>
      ) : null}
    </button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items, setIsOpen } = useCart();
  const cartCount = useMemo(() => getCartCount(items), [items]);


  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-40 border-b border-[var(--border)] bg-[rgba(12,12,12,0.9)] backdrop-blur-md">
        <div className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-6 md:h-16 md:px-10 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-16">
          <div className="flex items-center">
            <SavoriaLogo />
          </div>

          <div className="hidden items-center justify-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] transition-colors duration-300 hover:text-[var(--cream)] ${
                  isActiveLink(pathname, link.href) ? "text-[var(--cream)]" : "text-[var(--muted)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center justify-end gap-4 lg:flex">
            <Link
              href="#"
              className="text-[14px] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
            >
              Sign in
            </Link>
            <CartButton count={cartCount} onClick={() => setIsOpen(true)} />
            <Link
              href="#"
              className="rounded-full bg-[var(--amber)] px-5 py-2 text-[14px] font-medium text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--amber-hover)]"
            >
              Get started
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <CartButton count={cartCount} onClick={() => setIsOpen(true)} />
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-[rgba(12,12,12,0.95)] backdrop-blur-md transition-opacity duration-300 ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-6 md:px-10">
          <div className="flex items-center justify-between">
            <SavoriaLogo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full border border-[var(--border)] p-2 text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-16 flex flex-1 flex-col justify-between">
            <div className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block text-[30px] font-medium tracking-[-0.03em] transition-colors duration-300 ${
                    isActiveLink(pathname, link.href) ? "text-[var(--cream)]" : "text-[var(--muted)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <Link
                href="#"
                className="block text-[15px] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="inline-flex rounded-full bg-[var(--amber)] px-5 py-3 text-[14px] font-semibold text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--amber-hover)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
