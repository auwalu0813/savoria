"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { formatNaira, getCartTotal } from "@/app/lib/cart";
import {
  ChevronRightIcon,
  MapPinIcon,
  MinusIcon,
  PhoneIcon,
  PlusIcon,
} from "@/app/lib/icons";
import type { Restaurant } from "@/app/lib/restaurants";

import { useCart } from "@/app/components/CartProvider";

function createCategoryId(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function RestaurantDetailClient({ restaurant }: { restaurant: Restaurant }) {
  const { addItem, items, setIsOpen, updateQuantity } = useCart();
  const [activeCategory, setActiveCategory] = useState(restaurant.menu[0]?.category ?? "");

  const categories = useMemo(
    () => Array.from(new Set(restaurant.menu.map((item) => item.category))),
    [restaurant.menu]
  );
  const groupedMenu = useMemo(
    () =>
      categories.map((category) => ({
        category,
        items: restaurant.menu.filter((item) => item.category === category),
      })),
    [categories, restaurant.menu]
  );
  const restaurantCartItems = useMemo(
    () => items.filter((item) => item.restaurantSlug === restaurant.slug),
    [items, restaurant.slug]
  );
  const cartSummaryTotal = getCartTotal(restaurantCartItems);

  useEffect(() => {
    if (categories.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target instanceof HTMLElement) {
          setActiveCategory(visibleSection.target.dataset.menuCategory ?? categories[0]);
        }
      },
      {
        rootMargin: "-140px 0px -45% 0px",
        threshold: [0.2, 0.4, 0.65],
      }
    );

    const sections = document.querySelectorAll<HTMLElement>("[data-menu-category]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [categories]);

  return (
    <main className="pb-16 pt-[60px] md:pt-16">
      <section className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <img src={restaurant.image} alt={restaurant.name} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.08)_0%,rgba(12,12,12,0.9)_88%)]" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 md:px-10 lg:px-16 lg:pb-10">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-[13px] text-[var(--muted)]">
              <Link href="/restaurants" className="text-[var(--amber)] transition-colors duration-300 hover:text-[var(--cream)]">
                All Restaurants
              </Link>
              <ChevronRightIcon className="h-3.5 w-3.5" />
              <span>{restaurant.name}</span>
            </div>
            <Link
              href="/restaurants"
              className="inline-flex items-center gap-2 text-[13px] text-[var(--amber)] transition-colors duration-300 hover:text-[var(--cream)]"
            >
              <span aria-hidden="true">←</span>
              All Restaurants
            </Link>
            <h1 className="mt-4 font-display text-[28px] font-bold text-[var(--cream)] md:text-[40px]">
              {restaurant.name}
            </h1>
            <p className="mt-3 max-w-[640px] text-[15px] leading-7 text-[var(--muted)]">
              {restaurant.tagline}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {restaurant.cuisine.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(22,22,22,0.82)] px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-[var(--cream)]">
              <span className="inline-flex items-center gap-1.5 text-[var(--amber)]">
                <span>★</span>
                <span>
                  {restaurant.rating.toFixed(1)} ({restaurant.reviewCount} reviews)
                </span>
              </span>
              <span>{restaurant.deliveryTime}</span>
              <span>{formatNaira(restaurant.deliveryFee)} delivery</span>
              <span>Min {formatNaira(restaurant.minOrder)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-[60px] z-30 border-b border-[var(--border)] bg-[rgba(12,12,12,0.92)] backdrop-blur-md md:top-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
          <div className="flex gap-6 overflow-x-auto scrollbar-subtle">
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    document.getElementById(createCategoryId(category))?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={`border-b-2 px-0 py-4 text-[14px] transition-colors duration-300 ${
                    active
                      ? "border-[var(--amber)] text-[var(--cream)]"
                      : "border-transparent text-[var(--muted)] hover:text-[var(--cream)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            {groupedMenu.map(({ category, items: categoryItems }) => (
              <section
                key={category}
                id={createCategoryId(category)}
                data-menu-category={category}
                className="scroll-mt-32"
              >
                <h2 className="mb-5 mt-10 text-[20px] font-semibold text-[var(--cream)] first:mt-0">
                  {category}
                </h2>
                <div className="grid gap-4 xl:grid-cols-2">
                  {categoryItems.map((item) => {
                    const cartItemId = `${restaurant.slug}-${item.id}`;
                    const cartItem = restaurantCartItems.find((entry) => entry.id === cartItemId);

                    return (
                      <article
                        key={item.id}
                        className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]"
                      >
                        <div className="flex h-full flex-col md:flex-row-reverse">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-40 w-full object-cover md:h-auto md:w-[120px] md:rounded-none"
                          />
                          <div className="flex flex-1 flex-col p-5">
                            <div className="flex items-start gap-2">
                              <h3 className="text-[16px] font-medium text-[var(--cream)]">{item.name}</h3>
                              {item.popular ? (
                                <span className="rounded-full bg-[rgba(212,144,60,0.12)] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--amber)]">
                                  Popular
                                </span>
                              ) : null}
                            </div>
                            <p className="line-clamp-2 mt-3 text-[14px] leading-6 text-[var(--muted)]">
                              {item.description}
                            </p>
                            <p className="mt-4 text-[16px] font-semibold text-[var(--amber)]">
                              {formatNaira(item.price)}
                            </p>
                            <div className="mt-5">
                              {cartItem ? (
                                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-2 py-1.5">
                                  <button
                                    type="button"
                                    aria-label={`Decrease ${item.name} quantity`}
                                    onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
                                  >
                                    <MinusIcon className="h-4 w-4" />
                                  </button>
                                  <span className="min-w-5 text-center text-[14px] font-medium text-[var(--cream)]">
                                    {cartItem.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    aria-label={`Increase ${item.name} quantity`}
                                    onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
                                  >
                                    <PlusIcon className="h-4 w-4" />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() =>
                                    addItem({
                                      id: cartItemId,
                                      restaurantSlug: restaurant.slug,
                                      restaurantName: restaurant.name,
                                      dishName: item.name,
                                      price: item.price,
                                      image: item.image,
                                    })
                                  }
                                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--amber)] px-4 py-2 text-[13px] font-medium text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--amber-hover)]"
                                >
                                  <PlusIcon className="h-4 w-4" />
                                  Add to order
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
              <h2 className="text-[20px] font-semibold text-[var(--cream)]">{restaurant.name}</h2>
              <div className="mt-4 space-y-3 text-[14px] text-[var(--muted)]">
                <p className="text-[var(--amber)]">
                  ★ {restaurant.rating.toFixed(1)} · {restaurant.reviewCount} reviews
                </p>
                <p>{restaurant.deliveryTime} delivery window</p>
                <p>{formatNaira(restaurant.deliveryFee)} delivery fee</p>
                <p>Minimum order {formatNaira(restaurant.minOrder)}</p>
                <div className="flex items-start gap-2 pt-2">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)]" />
                  <span>{restaurant.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-[var(--muted)]" />
                  <span>{restaurant.phone}</span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[16px] font-semibold text-[var(--cream)]">Your Order</h3>
                  {restaurantCartItems.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => setIsOpen(true)}
                      className="text-[13px] text-[var(--amber)] transition-colors duration-300 hover:text-[var(--cream)]"
                    >
                      View Cart
                    </button>
                  ) : null}
                </div>

                {restaurantCartItems.length === 0 ? (
                  <p className="mt-4 text-[14px] leading-6 text-[var(--muted)]">Your cart is empty.</p>
                ) : (
                  <div className="mt-4 space-y-3">
                    {restaurantCartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between gap-3 text-[14px]">
                        <div>
                          <p className="text-[var(--cream)]">
                            {item.quantity} × {item.dishName}
                          </p>
                          <p className="text-[var(--muted)]">{formatNaira(item.price)}</p>
                        </div>
                        <p className="text-[var(--cream)]">{formatNaira(item.price * item.quantity)}</p>
                      </div>
                    ))}
                    <div className="mt-4 h-px bg-[var(--border)]" />
                    <div className="flex items-center justify-between text-[15px] font-semibold text-[var(--cream)]">
                      <span>Total</span>
                      <span className="text-[var(--amber)]">{formatNaira(cartSummaryTotal)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
