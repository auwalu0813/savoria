import Link from "next/link";

import { SectionLabel } from "@/app/components/SectionLabel";

const values = [
  {
    title: "Restaurant-first curation",
    copy: "We partner with standout Nigerian kitchens and help them reach more hungry customers without losing their identity.",
  },
  {
    title: "Fast, warm delivery",
    copy: "From Victoria Island lunches to Maitama dinners, we obsess over routing, timing and handoff quality.",
  },
  {
    title: "Built for Nigerian cities",
    copy: "Savoria is designed for the realities of Lagos, Abuja and Port Harcourt — traffic, pace and all.",
  },
];

export default function AboutPage() {
  return (
    <main className="px-6 pb-16 pt-[110px] md:px-10 md:pt-[128px] lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>ABOUT SAVORIA</SectionLabel>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <h1 className="font-display text-[36px] font-bold text-[var(--cream)] md:text-[48px]">
              Premium Nigerian food delivery, reimagined.
            </h1>
            <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-[var(--muted)]">
              Savoria brings together beloved local restaurants, polished digital ordering and fast last-mile delivery. We are building the most tasteful way to discover Nigerian food online.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--amber)]">Reach us</p>
            <p className="mt-4 text-[15px] leading-7 text-[var(--muted)]">
              For restaurant partnerships, media enquiries or support, our team is available every day.
            </p>
            <Link href="#contact" className="mt-5 inline-flex text-[14px] text-[var(--amber)] underline underline-offset-4">
              Jump to contact
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
              <h2 className="text-[20px] font-semibold text-[var(--cream)]">{value.title}</h2>
              <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{value.copy}</p>
            </article>
          ))}
        </div>

        <section id="contact" className="mt-16 scroll-mt-28 rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-8">
          <SectionLabel>CONTACT</SectionLabel>
          <h2 className="mt-4 font-display text-[30px] font-bold text-[var(--cream)]">Get in touch</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-[13px] uppercase tracking-[0.14em] text-[var(--muted)]">Support</p>
              <p className="mt-2 text-[16px] text-[var(--cream)]">support@savoria.africa</p>
            </div>
            <div>
              <p className="text-[13px] uppercase tracking-[0.14em] text-[var(--muted)]">Partnerships</p>
              <p className="mt-2 text-[16px] text-[var(--cream)]">partners@savoria.africa</p>
            </div>
            <div>
              <p className="text-[13px] uppercase tracking-[0.14em] text-[var(--muted)]">Phone</p>
              <p className="mt-2 text-[16px] text-[var(--cream)]">+234 700 728 6742</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
