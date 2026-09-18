"use client";

import { useMemo, useState } from "react";
import { Info, Minus, Plus, RotateCcw } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

/* ---------------------------------------------------------------------------------------------- */
/* Illustrative pricing model. Default inputs reproduce the figures shown in the Figma design.     */
/* Replace with the real calculator (POC-TEST register flow) when wiring to the backend.           */
/* ---------------------------------------------------------------------------------------------- */

type StoreType = "cashCarry" | "convenience" | "supermarket" | "hypermarket";
type ModuleKey = "availability" | "planogram" | "shareOfShelf" | "prices";
type Term = "monthly" | "12" | "24" | "36";

const STORE_TYPES: { key: StoreType; label: string; rate: number }[] = [
  { key: "cashCarry", label: "Cash & Carry", rate: 18 },
  { key: "convenience", label: "Convenience store", rate: 12 },
  { key: "supermarket", label: "Supermarket", rate: 21 },
  { key: "hypermarket", label: "Hypermarket", rate: 32.55 },
];

const MODULES: { key: ModuleKey; title: string; desc: string; uplift: number }[] = [
  { key: "availability", title: "On-shelf availability", desc: "Presence or absence of mandatory products, per store and per banner.", uplift: 0 },
  { key: "planogram", title: "Planogram compliance", desc: "Expected products per shelf level, plus brand or range block compliance when enabled.", uplift: 0.04 },
  { key: "shareOfShelf", title: "Share of shelf & facings", desc: "Relative share in 5 cm steps, estimated facing count.", uplift: 0.034 },
  { key: "prices", title: "Prices", desc: "Prices per product and store, simple gaps versus competitors (when provided).", uplift: 0.034 },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const TERMS: { key: Term; label: string; discount: number }[] = [
  { key: "monthly", label: "Monthly", discount: 0 },
  { key: "12", label: "12 months", discount: 0.15 },
  { key: "24", label: "24 months", discount: 0.22 },
  { key: "36", label: "36 months", discount: 0.3 },
];

const DEFAULTS = {
  stores: { cashCarry: 5, convenience: 35, supermarket: 60, hypermarket: 20 } as Record<StoreType, number>,
  cadence: 4,
  skus: 180,
  competitorSkus: 90,
  modules: { availability: true, planogram: false, shareOfShelf: true, prices: true } as Record<ModuleKey, boolean>,
  months: [6, 7] as number[], // Jul, Aug
  term: "monthly" as Term,
  fieldUsers: 24,
  webUsers: 8,
};

const CURRENT_MONTH = 7; // August, as highlighted in the design

function Stepper({ value, onChange, min = 0, max = 9999, label }: { value: number; onChange: (v: number) => void; min?: number; max?: number; label: string }) {
  const clamp = (v: number) => Math.min(max, Math.max(min, v));
  return (
    <div className="grid h-[43px] w-[158px] shrink-0 grid-cols-[40px_1fr_40px] overflow-hidden rounded-[12px] border-[0.667px] border-[#dbe2ed]">
      <button type="button" aria-label={`Decrease ${label}`} onClick={() => onChange(clamp(value - 1))} className="grid place-items-center bg-[#f5f7fa] text-ink-2 transition-colors hover:bg-[#eaeef4]">
        <Minus className="size-4" />
      </button>
      <input
        aria-label={label}
        type="number"
        inputMode="numeric"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(clamp(Number(e.target.value) || 0))}
        className="h-full w-full border-x-[0.667px] border-[#dbe2ed] bg-white text-center font-body text-[16px] font-extrabold text-black outline-none focus:bg-tint"
      />
      <button type="button" aria-label={`Increase ${label}`} onClick={() => onChange(clamp(value + 1))} className="grid place-items-center bg-[#f5f7fa] text-ink-2 transition-colors hover:bg-[#eaeef4]">
        <Plus className="size-4" />
      </button>
    </div>
  );
}

function SectionShell({ n, title, sub, optional, children, last = false }: { n: string; title: string; sub: string; optional?: boolean; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`grid grid-cols-[48px_1fr] sm:grid-cols-[72px_1fr] ${last ? "" : "border-b-[0.667px] border-[#e5eaf1]"}`}>
      <div className="border-r-[0.667px] border-[#e5eaf1] px-4 py-8 sm:px-6"><p className="font-body text-[11.52px] font-extrabold text-[#7790b7]">{n}</p></div>
      <div className="px-5 pb-8 pt-7 sm:px-8">
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center gap-[9px]">
            <h3 className="font-display text-[20px] font-bold tracking-[-0.04em] text-[#101a2c]">{title}</h3>
            <span className="grid size-[18px] place-items-center rounded-full border border-[#d9e2ed] bg-[#eef3fb] font-body text-[10px] font-bold text-[#5b6b85]" title={sub}><Info className="size-2.5" /></span>
          </div>
          {optional && <span className="rounded-full bg-bg-muted px-[9px] py-[5px] font-body text-[10.56px] font-bold text-muted">Optional</span>}
        </div>
        <p className="pt-[7px] font-body text-[13.76px] leading-[21.3px] text-[#7a8699]">{sub}</p>
        <div className="pt-[22px]">{children}</div>
      </div>
    </div>
  );
}

function Row({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-[68px] items-center justify-between gap-4 border-t-[0.667px] border-[#edf0f5] py-3">
      <div className="max-w-[310px]">
        <p className="font-body text-[13.92px] font-bold text-[#101a2c]">{label}</p>
        {desc && <p className="pt-[3px] font-body text-[11.52px] text-[#8894a6]">{desc}</p>}
      </div>
      {children}
    </div>
  );
}

export default function Pricing() {
  const [stores, setStores] = useState(DEFAULTS.stores);
  const [cadence, setCadence] = useState(DEFAULTS.cadence);
  const [skus, setSkus] = useState(DEFAULTS.skus);
  const [competitorSkus, setCompetitorSkus] = useState(DEFAULTS.competitorSkus);
  const [modules, setModules] = useState(DEFAULTS.modules);
  const [months, setMonths] = useState<number[]>(DEFAULTS.months);
  const [term, setTerm] = useState<Term>(DEFAULTS.term);
  const [fieldUsers, setFieldUsers] = useState(DEFAULTS.fieldUsers);
  const [webUsers, setWebUsers] = useState(DEFAULTS.webUsers);
  const [currency, setCurrency] = useState<"EUR" | "USD">("EUR");

  const calc = useMemo(() => {
    const totalStores = STORE_TYPES.reduce((s, t) => s + stores[t.key], 0);
    const base = STORE_TYPES.reduce((s, t) => s + stores[t.key] * t.rate, 0) * (cadence / 4);
    const moduleUplift = MODULES.reduce((s, m) => s + (modules[m.key] ? m.uplift : 0), 0);
    const modulesCost = base * moduleUplift;
    const seasonality = (base + modulesCost) * 0.02 * months.length;
    const gross = base + modulesCost + seasonality;
    const discountRate = TERMS.find((t) => t.key === term)!.discount;
    const discount = gross * discountRate;
    const total = gross - discount;
    const tokensPerVisit = 2 + (modules.availability ? 8 : 0) + (modules.shareOfShelf ? 8 : 0) + (modules.prices ? 5 : 0) + (modules.planogram ? 8 : 0) + Math.round(skus / 30) + Math.round(competitorSkus / 60);
    const credits = Math.round((totalStores * cadence * tokensPerVisit * (fieldUsers + webUsers)) / 4.85);
    return { base, modulesCost, seasonality, discount, discountRate, total, credits, totalStores };
  }, [stores, cadence, skus, competitorSkus, modules, months, term, fieldUsers, webUsers]);

  const fx = currency === "EUR" ? 1 : 1.08;
  const money = (v: number, digits = 2) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency, minimumFractionDigits: digits, maximumFractionDigits: digits }).format(v * fx);

  const reset = () => {
    setStores(DEFAULTS.stores); setCadence(DEFAULTS.cadence); setSkus(DEFAULTS.skus); setCompetitorSkus(DEFAULTS.competitorSkus);
    setModules(DEFAULTS.modules); setMonths(DEFAULTS.months); setTerm(DEFAULTS.term); setFieldUsers(DEFAULTS.fieldUsers); setWebUsers(DEFAULTS.webUsers);
  };

  return (
    <section id="pricing" className="bg-[#f4f7fb] py-[100px] lg:py-[170px]">
      <div className="wrap-wide">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-[60px]">
          <div className="flex-[854_0_0]">
            <span className="relative inline-flex h-8 items-center rounded-full border border-[rgba(37,99,235,0.2)] bg-[rgba(239,246,255,0.82)] px-[13px] shadow-[0px_8px_11px_rgba(37,99,235,0.07),inset_0px_1px_0px_rgba(255,255,255,0.9)]">
              <span className="font-body text-[12px] font-extrabold uppercase tracking-[1.68px] text-primary">Tailored pricing</span>
            </span>
            <h2 className="mt-3 font-display text-[40px] font-bold leading-[0.98] tracking-[-0.04em] text-[#101a2c] sm:text-[56px] lg:text-[74.4px]">
              Your scope first.<br />The price after validation.
            </h2>
          </div>
          <p className="max-w-[440px] flex-[366_0_0] font-body text-[16px] leading-[27.2px] text-[#66758a]">
            NeuraTracker is configured to your network, your teams, the products you track and the modules you enable. No generic plans, no made-up prices.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:mt-[70px] lg:grid-cols-[1fr_390px] lg:items-start">
          {/* ---------------- configurator ---------------- */}
          <Reveal className="overflow-hidden rounded-[24px] border-[0.667px] border-[#dde5ef] bg-white">
            <SectionShell n="01" title="Stores & cadence" sub="Enter the number of stores per type.">
              <div className="grid gap-x-6 sm:grid-cols-2">
                {STORE_TYPES.map((t) => (
                  <Row key={t.key} label={t.label}>
                    <Stepper label={t.label} value={stores[t.key]} onChange={(v) => setStores((s) => ({ ...s, [t.key]: v }))} />
                  </Row>
                ))}
                <div className="sm:col-span-2">
                  <Row label="Monthly cadence" desc="Planned visits per store per month.">
                    <Stepper label="Monthly cadence" value={cadence} min={1} max={30} onChange={setCadence} />
                  </Row>
                </div>
              </div>
            </SectionShell>

            <SectionShell n="02" title="Product universe" sub="Tell us how many SKUs and competitor SKUs you track (optional).">
              <div className="grid gap-x-6 sm:grid-cols-2">
                <Row label="SKUs"><Stepper label="SKUs" value={skus} onChange={setSkus} /></Row>
                <Row label="Competitor SKUs"><Stepper label="Competitor SKUs" value={competitorSkus} onChange={setCompetitorSkus} /></Row>
              </div>
            </SectionShell>

            <SectionShell n="03" title="Modules" sub="Add advanced capabilities to your subscription.">
              <div className="grid gap-3 sm:grid-cols-2">
                {MODULES.map((m) => {
                  const on = modules[m.key];
                  return (
                    <label
                      key={m.key}
                      className={`flex min-h-[128px] cursor-pointer items-start justify-between gap-[18px] rounded-[18px] border-[0.667px] p-5 transition-colors ${on ? "border-[#a7c4ff] bg-[#f1f6ff]" : "border-[#dfe5ed] bg-white hover:bg-bg-soft"}`}
                    >
                      <span>
                        <span className="block font-display text-[14.72px] font-bold text-[#101a2c]">{m.title}</span>
                        <span className="block pt-2 font-body text-[11.84px] leading-[17.5px] text-[#718096]">{m.desc}</span>
                      </span>
                      <input type="checkbox" className="peer sr-only" checked={on} onChange={(e) => setModules((s) => ({ ...s, [m.key]: e.target.checked }))} />
                      <span className={`relative mt-0.5 block h-6 w-[42px] shrink-0 rounded-full p-[3px] transition-colors ${on ? "bg-primary" : "bg-[#cfd7e3]"}`} aria-hidden>
                        <span className={`block size-[18px] rounded-full bg-white shadow-[0px_2px_5px_0px_rgba(15,23,42,0.18)] transition-transform ${on ? "translate-x-[18px]" : ""}`} />
                      </span>
                    </label>
                  );
                })}
                <div className="relative min-h-[128px] overflow-hidden rounded-[18px] border-[0.667px] border-[#dfe5ed] bg-bg-soft p-5">
                  <p className="font-display text-[14.72px] font-bold text-[#aab4c2]">Competitive intelligence</p>
                  <p className="max-w-[297px] pt-2 font-body text-[11.84px] leading-[17.5px] text-[#aab4c2]">Extended comparison of competitor assortments, launches and communication.</p>
                  <span className="absolute right-0 top-0 rounded-bl-[12px] rounded-tr-[17px] bg-[#eef2f7] px-[10px] py-[6px] font-body text-[9.92px] font-extrabold uppercase tracking-[0.5px] text-[#8b98aa]">Coming soon</span>
                </div>
              </div>
            </SectionShell>

            <SectionShell n="04" title="Seasonality" sub="Select your peak months." optional>
              <div className="flex flex-wrap gap-[9px]">
                {MONTHS.map((m, i) => {
                  const on = months.includes(i);
                  const current = i === CURRENT_MONTH;
                  return (
                    <button
                      key={m}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setMonths((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]))}
                      className={`relative h-[46px] min-w-[58px] rounded-full border-[0.667px] px-[13px] font-body text-[12.16px] font-bold transition-colors ${on ? "bg-[#eef5ff] text-[#174fae]" : "bg-white text-[#52627a] hover:bg-bg-soft"} ${current ? "border-[#f0bd39]" : on ? "border-[#8fb6ff]" : "border-[#d6dfeb]"}`}
                    >
                      {m}
                      {current && <span className="absolute -left-px -top-3 rounded-full bg-[#fff3cc] px-1.5 py-0.5 font-body text-[8.64px] font-bold text-[#9a5d00]">This month</span>}
                    </button>
                  );
                })}
              </div>
              <p className="pt-4 font-body text-[11.36px] text-[#8996aa]">* Each peak month adds +2 % to the subscription (extra processing capacity).</p>
            </SectionShell>

            <SectionShell n="05" title="Commitment term" sub="The longer you commit, the more you save.">
              <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-4">
                {TERMS.map((t) => {
                  const on = term === t.key;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setTerm(t.key)}
                      className={`flex min-h-[78px] flex-col items-center justify-center gap-1 rounded-[14px] transition-colors ${on ? "border-2 border-primary bg-[#eef5ff]" : "border-[0.667px] border-[#d8e0eb] bg-white hover:bg-bg-soft"}`}
                    >
                      <span className={`font-body text-[13.12px] font-bold ${on ? "text-primary" : "text-[#526078]"}`}>{t.label}</span>
                      {t.discount > 0 && <span className="font-body text-[11.2px] font-extrabold text-[#00a14b]">{Math.round(t.discount * 100)}%</span>}
                    </button>
                  );
                })}
              </div>
            </SectionShell>

            <SectionShell n="06" title="Field users" sub="Active users on the mobile app." last>
              <div className="grid gap-x-6 sm:grid-cols-2">
                <Row label="Field users" desc="People in the field using capture and recognition."><Stepper label="Field users" value={fieldUsers} min={1} onChange={setFieldUsers} /></Row>
                <Row label="Web users" desc="Managers using the back office to supervise and act."><Stepper label="Web users" value={webUsers} min={1} onChange={setWebUsers} /></Row>
              </div>
            </SectionShell>
          </Reveal>

          {/* ---------------- sticky estimate ---------------- */}
          <Reveal delay={120} className="lg:sticky lg:top-[112px]">
            <aside className="flex flex-col rounded-[24px] bg-navy p-[30px] text-white shadow-[0px_28px_35px_rgba(11,21,38,0.18)]" aria-live="polite">
              <div className="flex items-center justify-between gap-4">
                <p className="font-body text-[11.2px] font-extrabold uppercase tracking-[1.456px] text-[#76adff]">Instant estimate</p>
                <div className="flex gap-[2px] rounded-full border border-white/15 bg-white/[0.08] p-[3px]">
                  {(["EUR", "USD"] as const).map((c) => (
                    <button key={c} type="button" onClick={() => setCurrency(c)} aria-pressed={currency === c} className={`rounded-full px-[11px] py-[6px] font-body text-[11px] font-bold tracking-[0.6px] ${currency === c ? "bg-white text-navy" : "text-[#9fb2cc]"}`}>{c}</button>
                  ))}
                </div>
              </div>
              <h3 className="pt-[18px] font-display text-[26.4px] font-bold leading-tight tracking-[-0.04em]">Your budget, updated in real time.</h3>
              <div className="mt-7 border-y-[0.667px] border-[#2c3a50] py-[22px]">
                <p className="font-display text-[42px] font-extrabold leading-none tracking-[-0.06em] sm:text-[54.4px]">{money(calc.total)}</p>
                <p className="pt-2 font-body text-[12.48px] text-[#96a4ba]">Monthly equivalent after adjustments</p>
              </div>
              <dl className="pt-7">
                {[
                  ["Base price", money(calc.base, 0)],
                  ["Modules", `+ ${money(calc.modulesCost, 0)}`],
                  ["Seasonality", `+ ${money(calc.seasonality)}`],
                  ["Commitment", TERMS.find((t) => t.key === term)!.label],
                  ["Commitment discount", calc.discountRate ? `− ${money(calc.discount)}` : "—"],
                  ["Estimated credits / month", calc.credits.toLocaleString("en-US")],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between border-b-[0.667px] border-[#24344d] py-[10px]">
                    <dt className="font-body text-[12.48px] text-[#9eabc0]">{k}</dt>
                    <dd className="font-body text-[12.48px] font-bold text-white">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="my-[22px] flex items-start gap-[10px] rounded-[12px] bg-[#132542] p-[14px]">
                <Info className="mt-0.5 size-4 shrink-0 text-[#76adff]" />
                <p className="font-body text-[11.36px] leading-[17.6px] text-[#b6c9e7]">Your estimate updates instantly. No payment is required at this step.</p>
              </div>
              <a href="#contact" className="flex h-[50px] items-center justify-center rounded-[14px] bg-primary px-[22px] font-body text-[16px] font-bold text-white shadow-[0px_14px_16px_rgba(37,99,235,0.25)] transition-transform hover:-translate-y-px active:scale-[0.99]">
                Create my account
              </a>
              <p className="px-1 pt-[14px] text-center font-body text-[11.52px] leading-[17.9px] text-[#91a8c7]">You simply confirm this configuration. Account creation continues right after, in a few moments.</p>
              <button type="button" onClick={reset} className="mt-3 flex h-[44px] items-center justify-center gap-[7px] font-body text-[11.84px] text-[#9baac0] transition-colors hover:text-white">
                <RotateCcw className="size-[15px]" /> Reset
              </button>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
