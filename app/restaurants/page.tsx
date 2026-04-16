"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { formatNaira } from "@/app/lib/cart";
import { ClockIcon, FilterIcon, LocationPinIcon, SearchIcon } from "@/app/lib/icons";
import { areaFilters, cuisineFilters, restaurants } from "@/app/lib/restaurants";

export default function RestaurantsPage() {
  const [query, setQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedArea, setSelectedArea] = useState("All Areas");

  const filteredRestaurants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return restaurants.filter((restaurant) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        restaurant.name.toLowerCase().includes(normalizedQuery) ||
        restaurant.tagline.toLowerCase().includes(normalizedQuery) ||
        restaurant.cuisine.some((entry) => entry.toLowerCase().includes(normalizedQuery)) ||
        restaurant.menu.some(
          (item) =>
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery)
        );

      const matchesCuisine =
        selectedCuisine === "All" || restaurant.cuisine.includes(selectedCuisine);

      const matchesArea =
        selectedArea === "All Areas" || restaurant.area.toLowerCase().includes(selectedArea.toLowerCase());

      return matchesQuery && matchesCuisine && matchesArea;
    });
  }, [query, selectedArea, selectedCuisine]);

  const clearFilters = () => {
    setQuery("");
    setSelectedCuisine("All");
    setSelectedArea("All Areas");
  };

  return (
    <main className="pb-16 pt-[60px] md:pt-16">
      <section
        className="px-6 pb-12 pt-14 md:px-10 lg:px-16 lg:pb-14 lg:pt-16"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(212, 144, 60, 0.12), transparent 32%)",
        }}
      >
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--amber)]">Curated kitchens</p>
          <h1 className="mt-4 font-display text-[36px] font-bold text-[var(--cream)] md:text-[48px]">
            Restaurants
          </h1>
          <p className="mt-4 max-w-[540px] text-[16px] leading-7 text-[var(--muted)]">
            Discover the best restaurants delivering to your door across Lagos, Abuja and Port Harcourt.
          </p>
        </div>
      </section>

      <section className="sticky top-[60px] z-30 border-y border-[var(--border)] bg-[rgba(22,22,22,0.94)] backdrop-blur-md md:top-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-4 md:px-10 lg:px-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <label className="flex flex-1 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] px-4 py-3 text-[var(--muted)]">
              <SearchIcon className="h-4 w-4 shrink-0" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Search restaurants or dishes..."
                className="w-full bg-transparent text-[14px] text-[var(--cream)] outline-none placeholder:text-[rgba(168,152,128,0.6)]"
              />
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] px-3 py-2.5 md:min-w-[180px]">
              <FilterIcon className="h-4 w-4 text-[var(--muted)]" />
              <select
                value={selectedArea}
                onChange={(event) => setSelectedArea(event.target.value)}
                className="w-full bg-transparent text-[14px] text-[var(--cream)] outline-none"
              >
                {areaFilters.map((area) => (
                  <option key={area} value={area} className="bg-[var(--bg-card)] text-[var(--cream)]">
                    {area}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-subtle">
            {cuisineFilters.map((cuisine) => {
              const active = selectedCuisine === cuisine;
              return (
                <button
                  key={cuisine}
                  type="button"
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[13px] transition-colors duration-300 ${
                    active
                      ? "border-[var(--amber)] bg-[var(--amber)] text-[var(--bg-primary)]"
                      : "border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--muted)] hover:text-[var(--cream)]"
                  }`}
                >
                  {cuisine}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 lg:px-16 lg:py-12">
        <div className="mx-auto max-w-[1280px]">
          {filteredRestaurants.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] px-6 py-20 text-center">
              <p className="text-[18px] font-medium text-[var(--cream)]">No restaurants found</p>
              <p className="mt-2 text-[14px] text-[var(--muted)]">Try a different search or filter.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 text-[14px] text-[var(--amber)] underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredRestaurants.map((restaurant) => (
                <Link
                  key={restaurant.slug}
                  href={`/restaurants/${restaurant.slug}`}
                  className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(212,144,60,0.3)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.06)_0%,rgba(12,12,12,0.72)_100%)]" />
                    {restaurant.featured ? (
                      <span className="absolute left-4 top-4 inline-flex rounded-full border border-[rgba(212,144,60,0.35)] bg-[rgba(212,144,60,0.16)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--amber)]">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <div className="space-y-4 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-[18px] font-medium text-[var(--cream)]">{restaurant.name}</h2>
                        <p className="mt-1 text-[14px] text-[var(--muted)]">{restaurant.tagline}</p>
                      </div>
                      <div className="inline-flex items-center gap-1 rounded-full bg-[rgba(212,144,60,0.12)] px-2.5 py-1 text-[14px] text-[var(--amber)]">
                        <span>★</span>
                        <span>{restaurant.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {restaurant.cuisine.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--bg-subtle)] px-3 py-1 text-[11px] text-[var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[var(--muted)]">
                      <span className="inline-flex items-center gap-1.5">
                        <ClockIcon className="h-4 w-4" />
                        {restaurant.deliveryTime}
                      </span>
                      <span>{formatNaira(restaurant.deliveryFee)}</span>
                      <span>Min {formatNaira(restaurant.minOrder)}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[13px] text-[var(--muted)]">
                      <LocationPinIcon className="h-4 w-4" />
                      {restaurant.area}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
