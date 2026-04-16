"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { SectionLabel } from "@/app/components/SectionLabel";
import {
  CurrencyIcon,
  EnvelopeIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationPinIcon,
  PhoneIcon,
  StarOutlineIcon,
  TikTokIcon,
  TwitterIcon,
} from "@/app/lib/icons";

const values = [
  {
    title: "Quality obsessed",
    description:
      "Every restaurant on Savoria passes a rigorous quality review. We check food, packaging, timing and hygiene before a single order goes live.",
    icon: StarOutlineIcon,
  },
  {
    title: "Built for Nigerian cities",
    description:
      "From Third Mainland Bridge traffic to Abuja's sprawling layout — our routing and logistics are purpose-built for how Nigerian cities actually move.",
    icon: LocationPinIcon,
  },
  {
    title: "Radically transparent",
    description:
      "No surge pricing. No hidden platform fees. The price on the menu is the price you pay, plus a flat delivery fee you see before checkout.",
    icon: CurrencyIcon,
  },
];

const teamMembers = [
  {
    name: "Adaeze Okwu",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
  },
  {
    name: "Tunde Bakare",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Chidinma Eze",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&q=80",
  },
  {
    name: "Emeka Nwachukwu",
    role: "Head of Partnerships",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Fatima Abdullahi",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Kelechi Obi",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
];

const cities = [
  {
    name: "Lagos",
    stats: "850+ restaurants · 12 areas",
    description:
      "Victoria Island, Lekki, Ikoyi, Surulere, Ikeja and expanding fast. Lagos is our largest market and home to 850+ partner restaurants.",
    image: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=600&q=80",
  },
  {
    name: "Abuja",
    stats: "620+ restaurants · 8 areas",
    description:
      "Wuse, Maitama, Garki, Asokoro and central Abuja. The capital's finest kitchens are now a tap away.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80",
  },
  {
    name: "Port Harcourt",
    stats: "530+ restaurants · 6 areas",
    description:
      "GRA, Trans-Amadi, Old Town and surroundings. The Garden City's food scene is thriving on Savoria.",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80",
  },
];

const milestones = [
  {
    year: "2022",
    title: "Founded in Lagos",
    description:
      "Three friends with a shared frustration launched Savoria from a Lekki apartment with 12 restaurant partners.",
  },
  {
    year: "2023",
    title: "Expanded to Abuja",
    description:
      "Reached 500 restaurant partners, introduced real-time tracking, and launched in the capital.",
  },
  {
    year: "2023",
    title: "100K deliveries milestone",
    description:
      "Hit 100,000 completed deliveries in under 18 months. Launched the Savoria mobile app on iOS and Android.",
  },
  {
    year: "2024",
    title: "Port Harcourt launch",
    description:
      "Entered our third city and crossed 2,000 restaurant partners across Nigeria.",
  },
  {
    year: "2025",
    title: "500K deliveries",
    description:
      "Half a million orders delivered. Introduced scheduled ordering and expanded our rider fleet.",
  },
  {
    year: "2026",
    title: "What's next",
    description:
      "New cities, new cuisines, same obsession with quality. We're just getting started.",
  },
];

const contactDetails = [
  {
    label: "General enquiries",
    value: "hello@savoria.africa",
    icon: EnvelopeIcon,
  },
  {
    label: "Phone",
    value: "+234 700 728 6742",
    icon: PhoneIcon,
  },
  {
    label: "Head office",
    value: "12 Akin Adesola Street, Victoria Island, Lagos",
    icon: LocationPinIcon,
  },
];

const socialLinks = [
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "TikTok", href: "#", icon: TikTokIcon },
];

export default function AboutPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="bg-[var(--bg-primary)] text-[var(--cream)]">
      <section className="px-6 pb-16 pt-[120px] md:px-10 lg:px-16 lg:pb-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-14">
          <div>
            <SectionLabel>ABOUT SAVORIA</SectionLabel>
            <h1 className="mt-4 font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--cream)] md:text-[48px]">
              We&apos;re building the most
              <br />
              <span className="text-[var(--amber)]">tasteful way to eat.</span>
            </h1>
            <p className="mt-6 max-w-[540px] text-[16px] leading-[1.7] text-[var(--muted)]">
              Savoria was born from a simple frustration: Lagos, Abuja and Port Harcourt have world-class
              food — but getting it delivered felt anything but premium. Cold meals, confusing apps,
              mystery fees. We decided to build something better.
            </p>
            <p className="mt-4 max-w-[540px] text-[16px] leading-[1.7] text-[var(--muted)]">
              Since 2022, we&apos;ve partnered with over 2,000 of Nigeria&apos;s finest restaurants to bring fresh,
              hot meals to half a million happy customers — and we&apos;re just getting started.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80"
              alt="Restaurant kitchen ambiance"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-card)] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[620px] text-center">
            <SectionLabel>OUR MISSION</SectionLabel>
            <h2 className="mt-4 font-display text-[32px] font-bold text-[var(--cream)] lg:text-[44px]">
              Why we do what we do
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(212,144,60,0.1)] text-[var(--amber)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[20px] font-medium text-[var(--cream)]">{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-[var(--muted)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-12 md:px-10 lg:px-16 lg:py-16"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(212, 144, 60, 0.1), transparent 55%)",
        }}
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {[
            ["2,000+", "Partner restaurants"],
            ["500K+", "Deliveries completed"],
            ["3", "Nigerian cities"],
            ["45 min", "Average delivery time"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-[40px] font-bold text-[var(--cream)]">{value}</p>
              <p className="mt-1 text-[14px] text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[640px] text-center">
            <SectionLabel>THE TEAM</SectionLabel>
            <h2 className="mt-4 font-display text-[32px] font-bold text-[var(--cream)] lg:text-[44px]">
              The people behind Savoria
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[16px] leading-[1.7] text-[var(--muted)]">
              A team of food lovers, logistics nerds and product builders working to change how Nigeria
              eats.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]"
              >
                <img src={member.image} alt={member.name} className="aspect-square w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-[18px] font-medium text-[var(--cream)]">{member.name}</h3>
                  <p className="mt-1 text-[14px] text-[var(--muted)]">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-card)] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[620px] text-center">
            <SectionLabel>WHERE WE DELIVER</SectionLabel>
            <h2 className="mt-4 font-display text-[32px] font-bold text-[var(--cream)] lg:text-[44px]">
              Across three cities and growing
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cities.map((city) => (
              <article
                key={city.name}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)]"
              >
                <img src={city.image} alt={city.name} className="aspect-[16/9] w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-[24px] font-semibold text-[var(--cream)]">{city.name}</h3>
                  <p className="mt-2 text-[14px] text-[var(--muted)]">{city.stats}</p>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[var(--muted)]">{city.description}</p>
                  <Link
                    href="/restaurants"
                    className="mt-4 inline-flex text-[13px] font-medium text-[var(--amber)] transition hover:underline"
                  >
                    Explore restaurants →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[620px] text-center">
            <SectionLabel>OUR JOURNEY</SectionLabel>
            <h2 className="mt-4 font-display text-[32px] font-bold text-[var(--cream)] lg:text-[44px]">
              Key milestones
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-[720px]">
            {milestones.map((milestone, index) => (
              <div key={`${milestone.year}-${milestone.title}`} className="relative flex gap-6 pb-10 last:pb-0">
                {index < milestones.length - 1 ? (
                  <span className="absolute left-[40px] top-12 h-[calc(100%-8px)] w-px bg-[var(--border)]" />
                ) : null}
                <div className="relative z-10 shrink-0">
                  <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-[14px] font-semibold text-[var(--amber)]">
                    {milestone.year}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-[18px] font-medium text-[var(--cream)]">{milestone.title}</h3>
                  <p className="mt-1 text-[15px] leading-[1.7] text-[var(--muted)]">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[var(--bg-card)] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-14">
          <div>
            <SectionLabel>CONTACT</SectionLabel>
            <h2 className="mt-4 font-display text-[32px] font-bold text-[var(--cream)] lg:text-[44px]">
              Get in touch
            </h2>
            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.7] text-[var(--muted)]">
              Whether you&apos;re a restaurant looking to partner, a rider wanting to join our fleet, or a
              customer with feedback — we&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-5">
              {contactDetails.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(212,144,60,0.1)] text-[var(--amber)]">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.12em] text-[var(--muted)]">{label}</p>
                    <p className="mt-1 text-[16px] leading-[1.6] text-[var(--cream)]">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-[var(--border)] p-2.5 text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full-name" className="mb-2 block text-[13px] font-medium text-[var(--cream)]">
                  Full name
                </label>
                <input
                  id="full-name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[14px] text-[var(--cream)] outline-none placeholder:text-[rgba(168,152,128,0.5)] focus:border-[var(--amber)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-[var(--cream)]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[14px] text-[var(--cream)] outline-none placeholder:text-[rgba(168,152,128,0.5)] focus:border-[var(--amber)]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-[13px] font-medium text-[var(--cream)]">
                  Subject
                </label>
                <select
                  id="subject"
                  required
                  defaultValue="General enquiry"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[14px] text-[var(--cream)] outline-none focus:border-[var(--amber)]"
                >
                  {[
                    "General enquiry",
                    "Restaurant partnership",
                    "Rider application",
                    "Press & media",
                    "Feedback",
                    "Other",
                  ].map((option) => (
                    <option key={option} value={option} className="bg-[var(--bg-card)] text-[var(--cream)]">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-[13px] font-medium text-[var(--cream)]">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[14px] text-[var(--cream)] outline-none placeholder:text-[rgba(168,152,128,0.5)] focus:border-[var(--amber)]"
                  placeholder="Tell us how we can help"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[var(--amber)] px-6 py-3.5 text-[14px] font-semibold text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--amber-hover)]"
              >
                Send Message
              </button>

              {isSubmitted ? (
                <div className="rounded-xl border border-[rgba(52,168,83,0.2)] bg-[rgba(52,168,83,0.1)] p-4 text-[14px] text-[var(--cream)]">
                  Thanks for reaching out! We&apos;ll get back to you within 24 hours.
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
