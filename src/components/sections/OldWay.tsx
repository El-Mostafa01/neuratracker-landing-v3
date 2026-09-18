import { Calculator, Camera, Check, Clock, Cpu, Gauge, Image as ImageIcon, PencilLine, Table, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type Row = { icon: LucideIcon; title: string; body: string };

const OLD: Row[] = [
  { icon: Calculator, title: "Manual counting", body: "Facings counted one by one, shelf by shelf, store by store." },
  { icon: PencilLine, title: "Handwritten notes", body: "Photos and remarks scattered across phones and notebooks." },
  { icon: Clock, title: "Delayed reports", body: "Spreadsheets consolidated days after the visit." },
  { icon: Table, title: "Inconsistent field data", body: "Every merchandiser measures and reports differently." },
];

const NEW: Row[] = [
  { icon: Camera, title: "Guided mobile capture", body: "One framed, validated photo per shelf, synced automatically." },
  { icon: Cpu, title: "AI shelf understanding", body: "Products, prices, facings and gaps recognized from the photo." },
  { icon: Gauge, title: "KPIs in under a minute", body: "Availability, share of shelf and compliance computed instantly." },
  { icon: ImageIcon, title: "Visual proof", body: "Every number links back to the store photo that produced it." },
];

function Column({ kind, label, caption, rows, outcome }: { kind: "old" | "new"; label: string; caption: string; rows: Row[]; outcome: string }) {
  const isNew = kind === "new";
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-[24px] border ${isNew ? "border-tint-3 bg-white shadow-[0_24px_60px_rgba(11,21,38,0.12)]" : "border-line bg-bg-soft"}`}
    >
      <div className="flex items-center justify-between px-7 pb-5 pt-6">
        <span className={`rounded-full px-3 py-[6px] font-body text-[13px] font-semibold ${isNew ? "bg-tint text-blue" : "bg-bg-muted text-muted"}`}>{label}</span>
        <span className="font-body text-[13px] font-medium text-muted-2">{caption}</span>
      </div>
      <ul className="px-7 pb-2">
        {rows.map((r, i) => (
          <li key={r.title} className={`flex items-start gap-4 py-[18px] ${i > 0 ? "border-t border-line" : ""}`}>
            <span className={`grid size-10 shrink-0 place-items-center rounded-[10px] ${isNew ? "bg-tint text-blue" : "bg-white text-muted"}`}>
              <r.icon className="size-5" strokeWidth={2} />
            </span>
            <div>
              <p className="font-body text-[16px] font-semibold leading-[1.2] text-ink">{r.title}</p>
              <p className="mt-1 max-w-[440px] font-body text-[14px] leading-[1.4] text-muted">{r.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={`flex items-center gap-3 px-7 pb-5 pt-[18px] ${isNew ? "bg-tint" : "bg-bg-muted"}`}>
        <span className={`grid size-7 shrink-0 place-items-center rounded-[8px] ${isNew ? "bg-ok-bg text-ok" : "bg-bad-bg text-bad"}`}>
          {isNew ? <Check className="size-4" strokeWidth={2.5} /> : <X className="size-4" strokeWidth={2.5} />}
        </span>
        <p className={`font-body text-[14px] font-semibold leading-[1.3] ${isNew ? "text-blue" : "text-ink-2"}`}>{outcome}</p>
      </div>
    </div>
  );
}

/** 04 / Old way vs NeuraTracker (Figma 11690:1462). */
export default function OldWay() {
  return (
    <section className="bg-white pb-[88px] pt-2 lg:pb-[120px]">
      <div className="wrap flex flex-col items-center gap-12 lg:gap-14">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-[820px] font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[48px]">
            The same store visit. Two very different outcomes.
          </h2>
          <p className="max-w-[680px] font-body text-[17px] leading-[1.55] text-ink-3 lg:text-[18px]">
            Manual audits produce notes and spreadsheets. NeuraTracker produces measured, verifiable data before the merchandiser leaves the aisle.
          </p>
        </Reveal>
        <div className="grid w-full gap-6 lg:grid-cols-2">
          <Reveal>
            <Column kind="old" label="Without NeuraTracker" caption="A typical store visit" rows={OLD} outcome="The shelf has already changed before anyone can act." />
          </Reveal>
          <Reveal delay={120}>
            <Column kind="new" label="The NeuraTracker way" caption="One guided visit" rows={NEW} outcome="A mission is created before the merchandiser leaves the store." />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
