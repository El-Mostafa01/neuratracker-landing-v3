import { ArrowRight, Check, Eye, LayoutGrid, Layers, Route, Tag, X, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { asset } from "@/lib/asset";

type Theme = "white" | "tint" | "dark";

function KpiBlock({ label, value, theme }: { label: string; value: string; theme: Theme }) {
  const dark = theme === "dark";
  return (
    <div className={`mt-auto border-t pt-[14px] ${dark ? "border-navy-2" : "border-line"}`}>
      <p className={`font-body text-[12px] font-medium ${dark ? "text-sky" : "text-muted-2"}`}>{label}</p>
      <div className="mt-1 flex items-center justify-between">
        <p className={`font-display text-[26px] font-extrabold leading-none tracking-[-0.015em] ${dark ? "text-white" : "text-ink"}`}>{value}</p>
        <ArrowRight className={`size-4 ${dark ? "text-sky" : "text-muted-2"}`} />
      </div>
    </div>
  );
}

function Cell({
  icon: Icon,
  title,
  desc,
  theme = "white",
  kpiLabel,
  kpiValue,
  children,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  theme?: Theme;
  kpiLabel: string;
  kpiValue: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const dark = theme === "dark";
  const tint = theme === "tint";
  return (
    <article
      className={`flex flex-col gap-5 rounded-[20px] border p-7 ${dark ? "border-navy-2 bg-navy" : tint ? "border-tint-2 bg-tint" : "border-line bg-white"} ${className}`}
    >
      <div className="flex flex-col gap-[14px]">
        <span className={`grid size-11 place-items-center rounded-[12px] ${dark ? "bg-navy-2 text-sky" : tint ? "bg-white text-blue" : "bg-tint text-blue"}`}>
          <Icon className="size-[22px]" strokeWidth={2} />
        </span>
        <h3 className={`font-display text-[22px] font-bold leading-[1.1] tracking-[-0.01em] ${dark ? "text-white" : "text-ink"}`}>{title}</h3>
        <p className={`font-body text-[14px] leading-[1.5] ${dark ? "text-sky" : "text-muted"}`}>{desc}</p>
      </div>
      {children}
      <KpiBlock label={kpiLabel} value={kpiValue} theme={theme} />
    </article>
  );
}

/** 06 / Six capability families (Figma 11694:1462) — bento with one photo cell, one planogram diagram, and four small tiles. */
export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-white py-[88px] lg:py-[120px]">
      <div className="wrap flex flex-col gap-12 lg:gap-14">
        <Reveal className="flex flex-col gap-5">
          <h2 className="max-w-[760px] font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[48px]">
            Six capability families. One platform.
          </h2>
          <p className="max-w-[640px] font-body text-[17px] leading-[1.55] text-ink-3 lg:text-[18px]">
            Each family answers a real shelf question and is measured by a KPI you can drill into, down to the store photo that produced it.
          </p>
        </Reveal>

        {/* Row 1 */}
        <div className="grid gap-6 lg:grid-cols-[792fr_384fr]">
          <Reveal>
            <article className="flex h-full flex-col gap-7 rounded-[20px] border border-line bg-white p-7 md:flex-row lg:h-[410px]">
              <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-col gap-[14px]">
                  <span className="grid size-11 place-items-center rounded-[12px] bg-tint text-blue"><Layers className="size-[22px]" /></span>
                  <h3 className="font-display text-[22px] font-bold leading-[1.1] tracking-[-0.01em] text-ink">Shelf Intelligence</h3>
                  <p className="max-w-[360px] font-body text-[14px] leading-[1.5] text-muted">
                    Know what is really on the shelf: products present, facings counted and share of shelf measured from the photo.
                  </p>
                </div>
                <KpiBlock label="Number of facings · own brand, this shelf" value="12 facings" theme="white" />
              </div>
              <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-[14px] md:h-auto md:w-[328px]">
                <img src={asset("/images/capabilities/shelf.jpg")} alt="Straight-on photo of a dairy fridge shelf" className="absolute inset-0 size-full object-cover" loading="lazy" />
                {[
                  { x: 16, y: 70, w: 120, h: 40 },
                  { x: 142, y: 70, w: 96, h: 40 },
                  { x: 16, y: 130, w: 150, h: 40 },
                  { x: 172, y: 130, w: 110, h: 40 },
                  { x: 16, y: 190, w: 94, h: 40 },
                  { x: 116, y: 190, w: 130, h: 40 },
                ].map((b, i) => (
                  <span
                    key={i}
                    className="draw-in absolute rounded-[4px] border-[1.5px] border-blue-soft bg-blue-soft/10"
                    style={{ left: b.x, top: b.y, width: b.w, height: b.h, ["--d" as string]: `${i * 80}ms` }}
                  />
                ))}
                {[
                  { x: 16, y: 50, label: "2 facings" },
                  { x: 142, y: 50, label: "4 facings" },
                  { x: 16, y: 110, label: "6 facings" },
                ].map((t) => (
                  <span key={t.label} className="absolute rounded-[6px] bg-blue-soft px-[9px] py-[5px] font-body text-[11px] font-semibold text-white" style={{ left: t.x, top: t.y }}>
                    {t.label}
                  </span>
                ))}
                <span className="absolute bottom-4 left-4 rounded-[6px] bg-navy px-[9px] py-[5px] font-body text-[11px] font-semibold text-white">Share of shelf 68 %</span>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <Cell icon={LayoutGrid} title="Shelf Compliance" desc="Compare the shelf to the planogram: wrong slots, missing facings, misplaced products." theme="tint" kpiLabel="Planogram compliance · store average" kpiValue="91 %" className="h-full lg:h-[410px]">
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 18 }).map((_, i) => {
                  const r = Math.floor(i / 6), c = i % 6;
                  const bad = r === 1 && c === 3, warn = r === 2 && c === 1;
                  return (
                    <span key={i} className={`grid h-[34px] place-items-center rounded-[6px] bg-white ${bad ? "border-2 border-dashed border-bad-dot" : warn ? "border-2 border-warn-dot" : "border border-tint-3"}`}>
                      <span className={`h-5 w-[30px] rounded-[3px] ${bad ? "bg-bad-dot/15" : warn ? "bg-warn-dot/35" : "bg-tint-2"}`} />
                    </span>
                  );
                })}
              </div>
            </Cell>
          </Reveal>
        </div>

        {/* Row 2 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <Cell icon={Tag} title="Price Intelligence" desc="Read shelf tags and barcodes automatically. Catch wrong, missing or outdated prices." kpiLabel="Price compliance" kpiValue="88 %" className="h-full lg:h-[404px]">
              <div className="flex flex-col gap-1.5 rounded-[10px] border border-line bg-bg-soft px-2.5 py-2.5">
                <p className="font-body text-[11px] text-muted">Danone Nature 4×125 g · EAN 611…</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-[4px] border-[1.5px] border-blue-soft px-1.5 py-0.5 font-display text-[18px] font-extrabold tracking-[-0.02em] text-ink">12,90 MAD</span>
                  <span className="flex items-center gap-1 rounded-full bg-ok-bg px-[7px] py-[3px] font-body text-[10px] font-semibold text-ok"><Check className="size-2.5" strokeWidth={3} /> Matches promo</span>
                </div>
                <div className="flex items-end gap-[2px]">
                  {Array.from({ length: 28 }).map((_, k) => <span key={k} className="h-[14px] bg-ink-2" style={{ width: k % 3 === 0 ? 3 : 1.5 }} />)}
                </div>
              </div>
            </Cell>
          </Reveal>
          <Reveal delay={80}>
            <Cell icon={Zap} title="Retail Execution" desc="Verify that displays, promotions and missions actually happened in store." theme="dark" kpiLabel="Promotional display compliance" kpiValue="76 %" className="h-full lg:h-[404px]">
              <ul className="flex flex-col gap-2">
                {[["Display installed", true], ["Promo tag present", true], ["Second placement", false]].map(([l, ok]) => (
                  <li key={String(l)} className="flex items-center gap-2">
                    <span className={`grid size-[18px] place-items-center rounded-full ${ok ? "bg-ok-dot" : "bg-bad-dot"}`}>
                      {ok ? <Check className="size-2.5 text-white" strokeWidth={3} /> : <X className="size-2.5 text-white" strokeWidth={3} />}
                    </span>
                    <span className="font-body text-[13px] font-medium text-white">{l}</span>
                  </li>
                ))}
              </ul>
            </Cell>
          </Reveal>
          <Reveal delay={160}>
            <Cell icon={Eye} title="Competitor Visibility" desc="See competitor facings, displays and promo mechanics right next to yours." kpiLabel="Competitor share of shelf" kpiValue="62 %" className="h-full lg:h-[404px]">
              <div className="flex flex-col gap-2">
                <div className="flex h-[14px] gap-[3px]"><span className="w-[38%] rounded-[4px] bg-blue" /><span className="flex-1 rounded-[4px] bg-line-strong" /></div>
                <div className="flex gap-3 font-body text-[12px] font-medium text-muted">
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-blue" />You 38 %</span>
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-line-strong" />Competitors 62 %</span>
                </div>
              </div>
            </Cell>
          </Reveal>
          <Reveal delay={240}>
            <Cell icon={Route} title="Connected Field Operations" desc="Plan visits, assign missions, validate them by GPS and get the proof back." theme="tint" kpiLabel="Mission completion rate" kpiValue="94 %" className="h-full lg:h-[404px]">
              <ul className="flex flex-col gap-2">
                {[["Casablanca Nord", 12, 12], ["Rabat · Salé", 9, 11], ["Tanger", 7, 8]].map(([z, d, t]) => (
                  <li key={String(z)} className="flex flex-col gap-[5px]">
                    <div className="flex justify-between font-body text-[12px]"><span className="font-medium text-ink-2">{z}</span><span className="font-semibold text-ink">{d} / {t}</span></div>
                    <div className="h-[6px] rounded-full bg-tint-2"><div className="h-full rounded-full bg-blue" style={{ width: `${(Number(d) / Number(t)) * 100}%` }} /></div>
                  </li>
                ))}
              </ul>
            </Cell>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
