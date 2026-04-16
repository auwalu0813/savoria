"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { SectionLabel } from "@/app/components/SectionLabel";
import { ClockIcon } from "@/app/lib/icons";

type BlogCategory = "All" | "Food Culture" | "Restaurant Spotlights" | "Guides" | "Company News" | "Recipes";

type Article = {
  category: Exclude<BlogCategory, "All">;
  title: string;
  excerpt: string;
  author: string;
  avatar: string;
  date: string;
  readingTime: string;
  image: string;
};

const categories: BlogCategory[] = ["All", "Food Culture", "Restaurant Spotlights", "Guides", "Company News", "Recipes"];

const articles: Article[] = [
  {
    category: "Food Culture",
    title: "Why Nigerian food is the next global cuisine",
    excerpt:
      "From New York to London, Nigerian restaurants are popping up everywhere. We explore what's driving the global appetite for West African flavours.",
    author: "Adaeze Okwu",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80",
    date: "5 March 2026",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80",
  },
  {
    category: "Restaurant Spotlights",
    title: "Inside Nkoyo: Abuja's finest dining experience",
    excerpt:
      "We spent an evening at Nkoyo in Maitama to understand why it's consistently rated the best restaurant in the capital.",
    author: "Tunde Bakare",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
    date: "28 Feb 2026",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=400&q=80",
  },
  {
    category: "Guides",
    title: "The ultimate Lagos food delivery guide",
    excerpt:
      "Every neighbourhood has its hidden gems. Our riders share the best-kept food secrets across Lagos — from Surulere to Lekki.",
    author: "Chidinma Eze",
    avatar: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=80&q=80",
    date: "20 Feb 2026",
    readingTime: "10 min read",
    image: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=400&q=80",
  },
  {
    category: "Company News",
    title: "Savoria launches in Port Harcourt",
    excerpt:
      "The Garden City joins Lagos and Abuja on the Savoria platform. Here's what PH residents can expect from day one.",
    author: "Emeka Nwachukwu",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    date: "15 Feb 2026",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80",
  },
  {
    category: "Recipes",
    title: "How to make the perfect suya at home",
    excerpt:
      "Yahuza's pitmaster shares the secrets to authentic suya spice blend and the grilling technique that makes all the difference.",
    author: "Fatima Abdullahi",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80",
    date: "8 Feb 2026",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  },
  {
    category: "Food Culture",
    title: "Small chops: the party snack that became a lifestyle",
    excerpt:
      "Puff puff, spring rolls, samosa, peppered gizzard — how Nigeria's party snack culture evolved into a standalone food category.",
    author: "Kelechi Obi",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80",
    date: "1 Feb 2026",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All");

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") {
      return articles;
    }

    return articles.filter((article) => article.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="bg-[var(--bg-primary)] px-6 pb-16 pt-[120px] text-[var(--cream)] md:px-10 lg:px-16 lg:pb-24">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>THE SAVORIA BLOG</SectionLabel>
        <h1 className="mt-4 font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--cream)] md:text-[48px]">
          Stories, guides &
          <br />
          <span className="text-[var(--amber)]">food culture.</span>
        </h1>
        <p className="mt-4 max-w-[540px] text-[16px] leading-[1.7] text-[var(--muted)]">
          Discover Nigerian food culture, restaurant spotlights, cooking tips and the latest from
          Savoria.
        </p>

        <section className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <img
              src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80"
              alt="Featured jollof rice article"
              className="aspect-[16/10] h-full w-full object-cover"
            />
            <div className="p-8 md:p-10">
              <span className="inline-flex rounded-full bg-[rgba(212,144,60,0.15)] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[var(--amber)]">
                FOOD CULTURE
              </span>
              <h2 className="mt-4 font-display text-[28px] font-semibold text-[var(--cream)]">
                The definitive guide to Nigerian jollof rice
              </h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--muted)]">
                From party jollof to native jollof, every Nigerian has an opinion on the perfect pot of
                rice. We break down the regional variations, the secret ingredients, and the heated Ghana
                vs Nigeria debate that never dies.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-[var(--muted)]">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80"
                  alt="Adaeze Okwu"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <span className="text-[14px] text-[var(--cream)]">Adaeze Okwu</span>
                <span>12 March 2026</span>
                <span className="inline-flex items-center gap-1.5">
                  <ClockIcon className="h-4 w-4" />
                  8 min read
                </span>
              </div>

              <Link href="#" className="mt-5 inline-flex text-[14px] font-medium text-[var(--amber)]">
                Read article →
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12">
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
        </section>

        <section className="mt-8 pb-10 lg:pb-0">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredArticles.map((article) => (
              <Link
                key={article.title}
                href="#"
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(212,144,60,0.2)]"
              >
                <img src={article.image} alt={article.title} className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--amber)]">{article.category}</p>
                  <h3 className="mt-2 overflow-hidden text-[18px] font-medium text-[var(--cream)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    {article.title}
                  </h3>
                  <p className="mt-2 overflow-hidden text-[14px] leading-[1.6] text-[var(--muted)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[13px] text-[var(--muted)]">
                    <img src={article.avatar} alt={article.author} className="h-7 w-7 rounded-full object-cover" />
                    <span className="text-[var(--cream)]">{article.author}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
