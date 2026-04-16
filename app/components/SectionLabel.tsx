export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--amber)]">
      {children}
    </p>
  );
}
