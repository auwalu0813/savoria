"use client";

const tickerItems = [
  "NEW COLLECTIONS →",
  "THE ESSENTIAL EDIT →",
  "FREE SHIPPING OVER €200 →",
  "CERTIFIED SUSTAINABLE →",
  "NEW ARRIVALS →",
  "SHOP COLLECTIONS →",
];

const collectionCards = [
  {
    title: "The Essential Edit",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    className: "lg:row-span-2 lg:min-h-[740px]",
  },
  {
    title: "Evening Atelier",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    className: "lg:min-h-[360px]",
  },
  {
    title: "Natural Sonata",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    className: "lg:min-h-[360px]",
  },
];

const philosophyCards = [
  {
    title: "Traceable Materials",
    description:
      "Every fibre sourced from certified sustainable suppliers. We publish a full materials audit annually.",
  },
  {
    title: "Certified Workshops",
    description:
      "EU partner artisanal workshops certified for fair wages, safe conditions and zero-waste production.",
  },
  {
    title: "Seasonal Restraint",
    description:
      "Two collections per year. Not four. Not six. Quality over volume — always.",
  },
  {
    title: "Designed to Last",
    description:
      "Every piece carries a lifetime repair guarantee. If it breaks, we fix it.",
  },
];

const products = [
  {
    category: "OUTERWEAR",
    name: "Merino Wrap Coat",
    price: "€ 450",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
  },
  {
    category: "TOPS",
    name: "Silk Drape Blouse",
    price: "€ 195",
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80",
  },
  {
    category: "TROUSERS",
    name: "Wide Leg Trouser",
    price: "€ 245",
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
  },
  {
    category: "DRESSES",
    name: "Linen Midi Dress",
    price: "€ 185",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
  },
];

const testimonials = [
  {
    quote:
      "I've owned the Merino Coat for three winters. It feels exactly as it did on day one.",
    name: "Margot Dupont",
    detail: "Textile Designer, Paris",
  },
  {
    quote:
      "Lumière understands that real luxury is restraint. The pieces are quiet but they make the room stop.",
    name: "Ashwin Williams",
    detail: "Creative Director, Japan",
  },
  {
    quote:
      "Everything I own from here gets asked about. Not loudly — a gentle, knowing nod.",
    name: "Elena Marchetti",
    detail: "Architect, Milan",
  },
];

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5 19c1.7-3 4.1-4.5 7-4.5S17.3 16 19 19" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 8.5h11l-1 11h-9l-1-11Z" />
      <path d="M9 9V7.75a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export default function Home() {
  const marqueeContent = [...tickerItems, ...tickerItems];

  return (
    <main className="bg-[#FFFFFF] text-[#0D0D0D]">
      <div className="flex min-h-10 items-center justify-center bg-[#C9A96E] px-4 py-2 text-center">
        <p className="font-sans text-[11px] font-normal uppercase tracking-[0.12em] text-[#FFFFFF]">
          COMPLIMENTARY SHIPPING ON ORDERS OVER €200 <span className="px-2">·</span>
          NEW ZERO COLLECTION NOW LIVE
        </p>
      </div>

      <header className="sticky top-0 z-50">
        <nav className="bg-[#FFFFFF]">
          <div className="mx-auto hidden h-16 max-w-content items-center px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-16">
            <div className="flex items-center gap-8">
              {[
                "COLLECTIONS",
                "NEW ARRIVALS",
                "ABOUT",
                "SUSTAINABILITY",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-sans text-[11px] font-normal uppercase tracking-[0.1em] text-[#0D0D0D] transition-opacity hover:opacity-70"
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#"
              className="font-serif text-[24px] font-semibold tracking-[0.05em] text-[#0D0D0D]"
            >
              LUMIÈRE
            </a>

            <div className="flex items-center justify-end gap-5 text-[#0D0D0D]">
              <a href="#" aria-label="Search" className="transition-opacity hover:opacity-70">
                <SearchIcon />
              </a>
              <a href="#" aria-label="Account" className="transition-opacity hover:opacity-70">
                <UserIcon />
              </a>
              <a href="#" aria-label="Bag" className="transition-opacity hover:opacity-70">
                <BagIcon />
              </a>
            </div>
          </div>

          <div className="mx-auto flex h-14 max-w-content items-center justify-between px-6 md:px-10 lg:hidden">
            <a href="#" aria-label="Open menu" className="text-[#0D0D0D]">
              <MenuIcon />
            </a>
            <a
              href="#"
              className="font-serif text-[24px] font-semibold tracking-[0.05em] text-[#0D0D0D]"
            >
              LUMIÈRE
            </a>
            <a href="#" aria-label="Bag" className="text-[#0D0D0D]">
              <BagIcon />
            </a>
          </div>
        </nav>
      </header>

      <section className="bg-[#FFFFFF] px-6 pb-12 pt-12 md:px-10 md:pb-14 md:pt-14 lg:px-16 lg:pb-16 lg:pt-20">
        <div className="mx-auto grid max-w-content items-start gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3 font-sans text-[11px] font-normal uppercase tracking-[0.15em] text-[#6B7280]">
              <span className="text-[8px] leading-none text-[#C9A96E]">●</span>
              <span>SPRING / SUMMER 2026</span>
            </div>

            <h1 className="font-serif text-[36px] font-normal leading-[1.1] text-[#0D0D0D] md:text-[44px] lg:text-[56px]">
              <span className="block">Wear the world</span>
              <span className="block italic text-[#C9A96E]">differently.</span>
            </h1>

            <p className="mt-6 max-w-[34rem] whitespace-pre-line font-sans text-[15px] font-light leading-[1.7] text-[#6B7280]">
              {"A curated fashion label rooted in intentional design.\nTimeless pieces made to outlast the trend that\ninspired them."}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center border border-[#0D0D0D] bg-[#0D0D0D] px-7 py-[14px] font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#FFFFFF] transition-opacity hover:opacity-90"
              >
                SHOP COLLECTION
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border border-[#D1D5DB] bg-transparent px-7 py-[14px] font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#0D0D0D] transition-colors hover:bg-[#F3F4F6]"
              >
                OUR STORY
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              {[
                { value: "3014", label: "ARTISAN PARTNERS" },
                { value: "100%", label: "SUSTAINABLE COTTON" },
                { value: "4+", label: "COUNTRIES" },
              ].map((stat) => (
                <div key={stat.label} className="min-w-[120px]">
                  <p className="font-serif text-[24px] font-semibold text-[#0D0D0D]">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-sans text-[10px] font-normal uppercase tracking-[0.1em] text-[#6B7280]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-[560px] md:justify-self-end md:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-[#F3F4F6] sm:max-w-[520px] md:max-w-[420px] lg:h-[480px] lg:max-w-[440px] lg:aspect-auto xl:h-[500px] xl:max-w-[460px]">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
                alt="Lumière fashion campaign"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-5 right-5 flex max-w-[calc(100%-40px)] items-center gap-3 rounded-[8px] bg-[#FFFFFF] px-4 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.1)] lg:bottom-8 lg:right-8">
                <div className="h-10 w-10 overflow-hidden rounded-[4px] bg-[#F3F4F6]">
                  <img
                    src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&q=80"
                    alt="Linen Midi Dress thumbnail"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="font-sans text-[13px] font-normal text-[#0D0D0D]">
                  Linen Midi Dress — €185
                </p>
                <span className="text-[16px] text-[#0D0D0D]">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#E5E7EB] bg-[#FFFFFF] py-3">
        <div className="flex w-max items-center whitespace-nowrap animate-marquee [animation-direction:reverse]">
          {marqueeContent.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mr-12 font-sans text-[11px] font-normal uppercase tracking-[0.1em] text-[#0D0D0D] md:text-[12px]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-content">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-[11px] font-normal uppercase tracking-[0.15em] text-[#6B7280]">
                IN SEASON
              </p>
              <h2 className="mt-3 font-serif text-[28px] font-normal text-[#0D0D0D] md:text-[34px] lg:text-[40px]">
                Current Collections
              </h2>
            </div>
            <a
              href="#"
              className="font-sans text-[12px] font-normal uppercase tracking-[0.1em] text-[#0D0D0D] underline-offset-4 transition-all hover:underline"
            >
              VIEW ALL →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:grid-rows-2">
            {collectionCards.map((card) => (
              <a
                key={card.title}
                href="#"
                className={`group relative aspect-[4/3] overflow-hidden rounded-[4px] bg-[#F3F4F6] ${card.className}`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="font-serif text-[28px] italic text-[#FFFFFF]">
                    {card.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2EE] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <h2 className="font-serif text-[28px] font-normal leading-[1.15] text-[#0D0D0D] md:text-[32px] lg:text-[36px]">
              <span className="block">Fashion should outlast</span>
              <span className="block italic text-[#C9A96E]">the trend that</span>
              <span className="block italic text-[#C9A96E]">made it.</span>
            </h2>

            <div className="mt-6 space-y-5 font-sans text-[15px] font-light leading-[1.7] text-[#6B7280]">
              <p>
                Lumière was founded on a single conviction: the fashion industry&apos;s
                relationship with disposability is broken. We build against that.
              </p>
              <p>
                Every piece is made from traceable materials in certified workshops —
                designed to be worn for years, not seasons.
              </p>
            </div>

            <a
              href="#"
              className="mt-4 inline-block font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-[#C9A96E] underline-offset-4 transition-all hover:underline"
            >
              READ OUR STORY →
            </a>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              {[
                { value: "100%", label: "ORGANIC MATERIALS" },
                { value: "12", label: "WORKSHOPS" },
                { value: "Zero", label: "SEASONAL SALES" },
              ].map((stat) => (
                <div key={stat.label} className="min-w-[120px]">
                  <p className="font-serif text-[28px] font-semibold text-[#0D0D0D]">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-sans text-[10px] font-normal uppercase tracking-[0.1em] text-[#6B7280]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {philosophyCards.map((card) => (
              <a
                key={card.title}
                href="#"
                className="block border-t border-[#D1D5DB] py-6"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-sans text-[16px] font-medium text-[#0D0D0D]">
                      {card.title}
                    </h3>
                    <p className="mt-2 max-w-[30rem] font-sans text-[14px] font-light leading-[1.6] text-[#6B7280]">
                      {card.description}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-[16px] text-[#6B7280]">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-content">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-[11px] font-normal uppercase tracking-[0.15em] text-[#6B7280]">
                SHOP
              </p>
              <h2 className="mt-3 font-serif text-[28px] font-normal text-[#0D0D0D] md:text-[34px] lg:text-[40px]">
                New Arrivals
              </h2>
            </div>
            <a
              href="#"
              className="font-sans text-[12px] font-normal uppercase tracking-[0.1em] text-[#0D0D0D] underline-offset-4 transition-all hover:underline"
            >
              VIEW ALL →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <a key={product.name} href="#" className="block">
                <div className="aspect-[3/4] overflow-hidden rounded-[4px] bg-[#F3F4F6]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pt-4">
                  <p className="font-sans text-[10px] font-normal uppercase tracking-[0.12em] text-[#6B7280]">
                    {product.category}
                  </p>
                  <p className="mt-1 font-sans text-[15px] font-normal text-[#0D0D0D]">
                    {product.name}
                  </p>
                  <p className="mt-1 font-sans text-[14px] font-light text-[#6B7280]">
                    {product.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E5E7EB] bg-[#FFFFFF] px-6 py-5 md:px-10 lg:px-16 lg:py-6">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-12 gap-y-3 md:gap-x-8 lg:gap-x-12">
          <span className="font-sans text-[10px] font-normal uppercase tracking-[0.12em] text-[#9CA3AF]">
            AS SEEN IN
          </span>
          {[
            "Vogue",
            "Harper's",
            "Elle",
            "Ars Mia",
            "Monocle Essure",
          ].map((publication) => (
            <span
              key={publication}
              className="font-serif text-[18px] italic text-[#9CA3AF]"
            >
              {publication}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F2EE] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-content">
          <h2 className="text-center font-serif text-[28px] font-normal text-[#0D0D0D] md:text-[34px] lg:text-[40px]">
            From our community
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[4px] bg-[#FFFFFF] px-8 py-10">
                <p className="font-serif text-[48px] leading-none text-[#C9A96E]">&quot;</p>
                <p className="mt-4 font-sans text-[15px] font-light italic leading-[1.7] text-[#6B7280]">
                  {testimonial.quote}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#E5E7EB]" />
                  <div>
                    <p className="font-sans text-[14px] font-medium text-[#0D0D0D]">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-[13px] font-light text-[#9CA3AF]">
                      {testimonial.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] px-6 py-16 text-center md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-content">
          <p className="font-sans text-[11px] font-normal uppercase tracking-[0.15em] text-[#C9A96E]">
            JOIN US NEXT ISSUE
          </p>
          <h2 className="mt-4 font-serif text-[28px] font-normal text-[#0D0D0D] md:text-[32px] lg:text-[36px]">
            The Lumière Letter
          </h2>
          <p className="mt-3 font-sans text-[15px] font-light text-[#6B7280]">
            New collections, design stories and the occasional behind-the-scenes.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-[480px] flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 border border-[#D1D5DB] bg-[#FFFFFF] px-5 py-[14px] font-sans text-[14px] font-normal text-[#0D0D0D] outline-none placeholder:text-[#6B7280]"
            />
            <button
              type="submit"
              className="border border-[#0D0D0D] bg-[#0D0D0D] px-7 py-[14px] font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#FFFFFF] transition-opacity hover:opacity-90"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#F5F2EE] px-6 pb-6 pt-12 md:px-10 lg:px-16 lg:pb-8 lg:pt-16">
        <div className="mx-auto max-w-content">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <a
                href="#"
                className="font-serif text-[20px] font-semibold text-[#0D0D0D]"
              >
                LUMIÈRE
              </a>
              <p className="mt-3 whitespace-pre-line font-sans text-[13px] font-light leading-[1.6] text-[#6B7280]">
                {"Intentional fashion.\nSustainable since 2018."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:gap-12 lg:col-span-3 lg:grid-cols-3">
              {[
                {
                  title: "SHOP",
                  links: ["New Arrivals", "Collections", "Sale", "Gift Cards"],
                },
                {
                  title: "COMPANY",
                  links: ["About", "Sustainability", "Careers", "Stores"],
                },
                {
                  title: "HELP",
                  links: ["Shipping & Returns", "Size Guide", "Contact", "FAQs"],
                },
              ].map((column) => (
                <div key={column.title}>
                  <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#0D0D0D]">
                    {column.title}
                  </p>
                  <div className="space-y-2">
                    {column.links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block font-sans text-[14px] font-light leading-[2.2] text-[#6B7280] transition-opacity hover:opacity-70"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-[#D1D5DB] pt-6">
            <p className="font-sans text-[12px] font-light text-[#9CA3AF]">
              © 2026 Lumière. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
