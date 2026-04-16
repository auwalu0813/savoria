"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

import { SectionLabel } from "@/app/components/SectionLabel";
import { ClockIcon } from "@/app/lib/icons";

type DealCategory =
  | "All Deals"
  | "Discounts"
  | "Free Delivery"
  | "Combo Meals"
  | "New Customer"
  | "Weekend Specials";

type Deal = {
  restaurant: string;
  title: string;
  description: string;
  code: string;
  badge: string;
  category: Exclude<DealCategory, "All Deals">;
  expiry: string;
  image: string;
};

const categories: DealCategory[] = [
  "All Deals",
  "Discounts",
  "Free Delivery",
  "Combo Meals",
  "New Customer",
  "Weekend Specials",
];

const deals: Deal[] = [
  {
    restaurant: "The Yellow Chilli",
    title: "20% off all rice dishes",
    description:
      "Get 20% off any rice dish including Jollof, Fried Rice, and Native Jollof. Dine-in or delivery.",
    code: "RICE20",
    badge: "20% OFF",
    category: "Discounts",
    expiry: "30 Apr 2026",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80",
  },
  {
    restaurant: "Nkoyo",
    title: "₦1,500 off orders above ₦8,000",
    description:
      "Fine dining at a friendlier price. Applies to all menu items at Nkoyo Maitama.",
    code: "NKOYO15",
    badge: "₦1,500 OFF",
    category: "Discounts",
    expiry: "15 May 2026",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=400&q=80",
  },
  {
    restaurant: "Bukka Hut",
    title: "Buy 2, get 1 free on combos",
    description:
      "Order any two combo meals and get a third absolutely free. Perfect for sharing.",
    code: "BUKKA3",
    badge: "BUY 2 GET 1",
    category: "Discounts",
    expiry: "30 Apr 2026",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
  },
  {
    restaurant: "Mama Cass",
    title: "Free delivery all week",
    description:
      "Zero delivery fees on all orders from Mama Cass Surulere. No minimum order required.",
    code: "FREEMAMA",
    badge: "FREE DELIVERY",
    category: "Free Delivery",
    expiry: "28 Apr 2026",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
  },
  {
    restaurant: "Café Neo",
    title: "Free delivery on breakfast orders",
    description:
      "Early bird gets free delivery. Order before 11am from any Café Neo location.",
    code: "NEOMORN",
    badge: "FREE DELIVERY",
    category: "Free Delivery",
    expiry: "31 May 2026",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80",
  },
  {
    restaurant: "All restaurants",
    title: "Free delivery weekend pass",
    description:
      "Every Saturday and Sunday, enjoy free delivery on orders over ₦5,000 from any restaurant.",
    code: "WKND",
    badge: "FREE DELIVERY",
    category: "Free Delivery",
    expiry: "Ongoing",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80",
  },
  {
    restaurant: "Yahuza Suya",
    title: "Suya combo for 2 — ₦5,500",
    description:
      "Beef suya, chicken suya, grilled plantain, and two drinks. Save ₦1,500 on the bundle.",
    code: "SUYA2",
    badge: "COMBO",
    category: "Combo Meals",
    expiry: "15 May 2026",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    restaurant: "Terra Kulture",
    title: "Date night platter — ₦9,800",
    description:
      "Gizdodo, catfish pepper soup, and a bottle of wine. The perfect dinner for two.",
    code: "DATENIGHT",
    badge: "COMBO",
    category: "Combo Meals",
    expiry: "30 Apr 2026",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
  },
  {
    restaurant: "Kilimanjaro",
    title: "Family shawarma box — ₦8,900",
    description:
      "4 shawarmas, loaded fries, and 4 drinks. Feeds the whole family for less.",
    code: "FAMBOX",
    badge: "COMBO",
    category: "Combo Meals",
    expiry: "31 May 2026",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80",
  },
  {
    restaurant: "All restaurants",
    title: "Welcome to Savoria — 20% off",
    description:
      "Your first order on Savoria gets an automatic 20% discount. No code needed — just sign up and order.",
    code: "AUTO",
    badge: "20% OFF",
    category: "New Customer",
    expiry: "Ongoing",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80",
  },
  {
    restaurant: "All restaurants",
    title: "Refer a friend, get ₦2,000",
    description:
      "Share your referral code with friends. When they place their first order, you both get ₦2,000 credit.",
    code: "REFER",
    badge: "₦2,000 CREDIT",
    category: "New Customer",
    expiry: "Ongoing",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  },
  {
    restaurant: "The Yellow Chilli",
    title: "Sunday jollof special — ₦3,200",
    description:
      "Every Sunday, the legendary party jollof with two proteins and a drink at a special price.",
    code: "SUNJOLLOF",
    badge: "SPECIAL",
    category: "Weekend Specials",
    expiry: "Every Sunday",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80",
  },
];

const steps = [
  {
    number: "01",
    title: "Find your deal",
    description:
      "Browse offers above or check the deals section in the Savoria app. New offers drop every week.",
  },
  {
    number: "02",
    title: "Copy the promo code",
    description:
      "Tap the code to copy it. Some deals apply automatically — no code needed.",
  },
  {
    number: "03",
    title: "Apply at checkout",
    description:
      "Paste your code in the promo field before placing your order. Discount applies instantly.",
  },
];

export default function OffersPage() {
  const [selectedCategory, setSelectedCategory] = useState<DealCategory>("All Deals");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredDeals = useMemo(() => {
    if (selectedCategory === "All Deals") {
      return deals;
    }

    return deals.filter((deal) => deal.category === selectedCategory);
  }, [selectedCategory]);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText("WELCOME20");
    setCopiedCode("WELCOME20");
    window.setTimeout(() => setCopiedCode(null), 1800);
  };

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <main className="bg-[var(--bg-primary)] text-[var(--cream)]">
      <section
        className="border-b border-[var(--border)] bg-[var(--bg-card)] px-6 pb-8 pt-[120px] md:px-10 lg:px-16 lg:pb-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(212, 144, 60, 0.12), transparent 32%)",
        }}
      >
        <div className="mx-auto max-w-[1280px] py-8 lg:px-0 lg:py-10">
          <SectionLabel>OFFERS & DEALS</SectionLabel>
          <h1 className="mt-4 font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--cream)] md:text-[48px]">
            Eat more,
            <br />
            <span className="text-[var(--amber)]">spend less.</span>
          </h1>
          <p className="mt-4 max-w-[540px] text-[16px] leading-[1.7] text-[var(--muted)]">
            Exclusive deals from your favourite Nigerian restaurants. Updated weekly — so check back
            often.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10 lg:px-16 lg:py-12">
        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
          <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-stretch">
            <img
              src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80"
              alt="Jollof rice offer"
              className="aspect-[16/10] h-full w-full object-cover"
            />
            <div className="p-8 md:p-10">
              <span className="inline-flex rounded-full bg-[rgba(212,144,60,0.15)] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--amber)]">
                DEAL OF THE WEEK
              </span>
              <h2 className="mt-4 font-display text-[30px] font-bold text-[var(--cream)] lg:text-[32px]">
                20% off your first 3 orders
              </h2>
              <p className="mt-3 max-w-[560px] text-[16px] leading-[1.7] text-[var(--muted)]">
                New to Savoria? Use code WELCOME20 at checkout for 20% off your first three deliveries.
                Valid across all restaurants in Lagos, Abuja and Port Harcourt.
              </p>

              <div className="mt-6 flex flex-col gap-3 rounded-xl border-2 border-dashed border-[var(--border)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[18px] font-semibold tracking-[0.05em] text-[var(--amber)]">
                  WELCOME20
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="text-left text-[13px] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)] sm:text-right"
                >
                  {copiedCode === "WELCOME20" ? "Copied!" : "Copy"}
                </button>
              </div>

              <Link
                href="/restaurants"
                className="mt-6 inline-flex rounded-xl bg-[var(--amber)] px-6 py-3.5 text-[14px] font-semibold text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--amber-hover)]"
              >
                Order now →
              </Link>
              <p className="mt-3 text-[13px] text-[var(--muted)]">Valid until 30 April 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-0 pt-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-subtle">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[13px] transition-colors duration-300 ${
                    active
                      ? "border-[var(--amber)] bg-[var(--amber)] text-[var(--bg-primary)]"
                      : "border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--muted)] hover:text-[var(--cream)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-6 md:px-10 lg:px-16 lg:py-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredDeals.map((deal) => (
              <article
                key={`${deal.restaurant}-${deal.title}`}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition duration-300 hover:border-[rgba(212,144,60,0.3)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={deal.image} alt={deal.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.08)_0%,rgba(12,12,12,0.68)_100%)]" />
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--amber)] px-3.5 py-1 text-[12px] font-semibold text-[var(--bg-primary)]">
                    {deal.badge}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-[rgba(12,12,12,0.8)] px-3 py-1 text-[11px] text-[var(--cream)] backdrop-blur">
                    {deal.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[13px] uppercase tracking-[0.05em] text-[var(--muted)]">{deal.restaurant}</p>
                  <h3 className="mt-1 text-[18px] font-medium text-[var(--cream)]">{deal.title}</h3>
                  <p className="mt-2 overflow-hidden text-[14px] leading-[1.6] text-[var(--muted)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    {deal.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="rounded-lg border border-[var(--border)] bg-[var(--bg-subtle)] px-3 py-1.5 font-mono text-[12px] font-medium text-[var(--amber)]">
                      {deal.code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[12px] text-[var(--muted)]">
                      <ClockIcon className="h-4 w-4" />
                      {deal.expiry}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[620px] text-center">
            <SectionLabel>HOW IT WORKS</SectionLabel>
            <h2 className="mt-4 font-display text-[32px] font-bold text-[var(--cream)] lg:text-[44px]">
              Using your promo code
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 transition-colors duration-300 hover:border-[rgba(212,144,60,0.2)]"
              >
                <p className="text-[32px] font-semibold tracking-[-0.04em] text-[rgba(242,237,228,0.12)]">
                  {step.number}
                </p>
                <h3 className="mt-6 text-[20px] font-medium text-[var(--cream)]">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-[var(--muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-card)] px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[560px] text-center">
          <SectionLabel>NEVER MISS A DEAL</SectionLabel>
          <h2 className="mt-4 font-display text-[32px] font-bold text-[var(--cream)]">Get offers in your inbox</h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-[var(--muted)]">
            We&apos;ll send you the best deals once a week. No spam — just savings.
          </p>

          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] px-4 py-3.5 text-[14px] text-[var(--cream)] outline-none placeholder:text-[rgba(168,152,128,0.6)] focus:border-[var(--amber)]"
            />
            <button
              type="submit"
              className="rounded-xl bg-[var(--amber)] px-6 py-3.5 text-[14px] font-semibold text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--amber-hover)]"
            >
              Subscribe
            </button>
          </form>

          {isSubscribed ? (
            <div className="mt-4 rounded-xl border border-[rgba(52,168,83,0.2)] bg-[rgba(52,168,83,0.1)] p-4 text-[14px] text-[var(--cream)]">
              You&apos;re in! Watch your inbox for weekly deals.
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
