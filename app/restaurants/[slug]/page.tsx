import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getRestaurantBySlug, restaurants } from "@/app/lib/restaurants";

import { RestaurantDetailClient } from "./RestaurantDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({ slug: restaurant.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const restaurant = getRestaurantBySlug(slug);

  if (!restaurant) {
    return {
      title: "Restaurant Not Found — Savoria",
    };
  }

  return {
    title: `${restaurant.name} — Savoria`,
    description: restaurant.tagline,
  };
}

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const restaurant = getRestaurantBySlug(slug);

  if (!restaurant) {
    notFound();
  }

  return <RestaurantDetailClient restaurant={restaurant} />;
}
