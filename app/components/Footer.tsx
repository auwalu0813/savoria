import Link from "next/link";

import { InstagramIcon, LinkedInIcon, TikTokIcon, TwitterIcon } from "@/app/lib/icons";

import { SavoriaLogo } from "./Navbar";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "For Restaurants",
    links: [
      { label: "Partner with us", href: "#" },
      { label: "Restaurant portal", href: "#" },
      { label: "Marketing tools", href: "#" },
      { label: "Help center", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact us", href: "/about#contact" },
      { label: "FAQ", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "TikTok", href: "#", icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="max-w-[320px]">
            <SavoriaLogo />
            <p className="mt-4 whitespace-pre-line text-[14px] leading-[1.6] text-[var(--muted)]">
              {"Premium food delivery.\nRestaurant quality, delivered to your door."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:col-span-3 lg:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-[14px] font-semibold text-[var(--cream)]">{column.title}</p>
                <div className="mt-4 space-y-2">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-[14px] leading-[2.4] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[var(--border)] pt-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-[14px] text-[var(--muted)]">© 2026 Savoria Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 md:justify-end">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
