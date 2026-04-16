import Link from "next/link";

import { SectionLabel } from "@/app/components/SectionLabel";
import { formatNaira } from "@/app/lib/cart";
import { ClockIcon } from "@/app/lib/icons";
import { restaurants } from "@/app/lib/restaurants";

const featuredOffers = restaurants
  .filter((restaurant) => restaurant.featured)
  .map((restaurant) => ({
    restaurant,
    headline: restaurant.slug === "the-yellow-chilli"
      ? "Free Chapman on signature rice orders"
      : restaurant.slug === "yahuza-suya"
        ? "₦500 off every suya platter"
        : "Family combo deal from ₦4,900",
  }));

export default function OffersPage() {
  return (
    <main className="px-6 pb-16 pt-[110px] md:px-10 md:pt-[128px] lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>OFFERS</SectionLabel>
        <h1 className="mt-4 font-display text-[36px] font-bold text-[var(--cream)] md:text-[48px]">
          This week&apos;s cravings, priced right.
        </h1>
        <p className="mt-4 max-w-[580px] text-[16px] leading-7 text-[var(--muted)]">
          Discover limited-time savings from standout Nigerian restaurants across Lagos, Abuja and Port Harcourt.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredOffers.map(({ headline, restaurant }) => (
            <Link
              key={restaurant.slug}
              href={`/restaurants/${restaurant.slug}`}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition-colors duration-300 hover:border-[rgba(212,144,60,0.3)]"
            >
              <img src={restaurant.image} alt={restaurant.name} className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--amber)]">Limited offer</p>
                <h2 className="mt-3 text-[22px] font-semibold text-[var(--cream)]">{restaurant.name}</h2>
                <p className="mt-3 text-[16px] leading-7 text-[var(--muted)]">{headline}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-[14px] text-[var(--muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <ClockIcon className="h-4 w-4" />
                    {restaurant.deliveryTime}
                  </span>
                  <span>{formatNaira(restaurant.deliveryFee)} delivery</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
