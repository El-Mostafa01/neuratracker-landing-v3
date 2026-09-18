import { BarChart3, Bell, BookOpen, Boxes, Building2, ChevronDown, Cpu, Database, LayoutDashboard, LifeBuoy, MapPinned, Search, SlidersHorizontal, Users } from "lucide-react";
import { asset } from "@/lib/asset";

type Kpi = { code: string; label: string; ok: number; fix: number; evaluated: string; target: string; cta: string };

const ROW1: Kpi[] = [
  { code: "OSA", label: "On-shelf availability", ok: 76, fix: 5, evaluated: "81 stores evaluated", target: "Target: availability ≥ 85 %", cta: "See the 5 stores to fix" },
  { code: "OOS", label: "Out of stock", ok: 68, fix: 13, evaluated: "81 stores evaluated", target: "Maximum threshold: out of stock ≤ 5 %", cta: "See the 13 stores to fix" },
  { code: "SoS", label: "Share of shelf", ok: 69, fix: 12, evaluated: "81 stores evaluated", target: "Target: share of shelf ≥ 25 %", cta: "See the 12 stores to fix" },
  { code: "PLN", label: "Planogram compliance", ok: 54, fix: 27, evaluated: "78 / 81 stores evaluated", target: "Target: compliance ≥ 90 %", cta: "See the 27 stores to fix" },
];
const ROW2: Kpi[] = [
  { code: "CPX", label: "Price coverage", ok: 53, fix: 29, evaluated: "81 stores evaluated", target: "Target: coverage ≥ 90 %", cta: "See the 29 stores to fix" },
  { code: "CPM", label: "Promo coverage", ok: 42, fix: 13, evaluated: "55 stores concerned · 26 not concerned", target: "Target: expected promotions validated", cta: "See the 13 stores to fix" },
  { code: "MEA", label: "Display coverage", ok: 23, fix: 5, evaluated: "28 stores concerned", target: "Target: expected displays detected", cta: "See the 5 stores to fix" },
];

function KpiCard({ k }: { k: Kpi }) {
  const total = k.ok + k.fix;
  return (
    <div className="flex flex-col rounded-[12px] border border-line bg-white p-4">
      <div className="flex items-center gap-2">
        <span className="rounded-[4px] bg-tint px-1.5 py-0.5 font-inter text-[9px] font-bold tracking-[0.06em] text-blue">{k.code}</span>
        <p className="font-inter text-[12px] font-semibold text-ink">{k.label}</p>
      </div>
      <div className="mt-3 flex items-end gap-5">
        <div><p className="font-inter text-[22px] font-bold leading-none text-[#009966]">{k.ok}</p><p className="mt-1 font-inter text-[10px] text-muted">compliant</p></div>
        <div><p className="font-inter text-[22px] font-bold leading-none text-[#e7000b]">{k.fix}</p><p className="mt-1 font-inter text-[10px] text-muted">to fix</p></div>
      </div>
      <div className="mt-3 flex h-[5px] gap-[2px] overflow-hidden rounded-full">
        <span className="bg-[#00bc7d]" style={{ width: `${(k.ok / total) * 100}%` }} />
        <span className="flex-1 bg-[#fb2c36]" />
      </div>
      <p className="mt-2 font-inter text-[10px] text-muted">{k.evaluated}</p>
      <p className="font-inter text-[10px] text-muted">{k.target}</p>
      <p className="mt-2 font-inter text-[10px] font-semibold text-blue">{k.cta} →</p>
    </div>
  );
}

/** English recreation of the real NeuraTracker "KPI Dashboard" console (Analyses › Dashboard), 1200 × 646 logical px. */
export default function DashboardMock() {
  return (
    <div className="flex h-[646px] w-[1200px] overflow-hidden bg-[#f6f7fb] font-inter">
      {/* icon rail */}
      <aside className="flex w-16 shrink-0 flex-col items-center gap-2 bg-navy py-3">
        <img src={asset("/images/brand/logo-mark-white.svg")} alt="" className="mb-3 size-8" />
        {[LayoutDashboard, BarChart3, Database, MapPinned, Cpu, Users, Building2].map((Icon, i) => (
          <span key={i} className={`grid size-10 place-items-center rounded-[10px] ${i === 1 ? "bg-navy-2 text-sky" : "text-[#4e617a]"}`}><Icon className="size-[18px]" /></span>
        ))}
        <span className="mt-auto grid size-10 place-items-center rounded-[10px] text-[#4e617a]"><LifeBuoy className="size-[18px]" /></span>
        <span className="size-8 rounded-full bg-gradient-to-br from-[#93c5fd] to-[#1d4ed8]" />
      </aside>
      {/* secondary rail */}
      <aside className="flex w-[56px] shrink-0 flex-col items-center gap-3 border-r border-line bg-white py-4 text-muted-2">
        {[Boxes, BarChart3, Database, MapPinned, Cpu].map((Icon, i) => <span key={i} className={`grid size-8 place-items-center rounded-[8px] ${i === 1 ? "bg-tint text-blue" : ""}`}><Icon className="size-4" /></span>)}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-line bg-white px-6 py-3">
          <div>
            <p className="text-[14px] font-bold text-ink">KPI Dashboard</p>
            <p className="text-[10px] text-muted">Dashboard and KPI analysis</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-[260px] items-center gap-2 rounded-[8px] border border-line px-3 text-[11px] text-muted-2"><Search className="size-3.5" /> Search… (store, product, visit, mission)</span>
            <span className="flex h-8 items-center gap-1 rounded-[8px] border border-line px-2.5 text-[11px] font-semibold text-ink">EN <ChevronDown className="size-3" /></span>
            <Bell className="size-4 text-muted" />
          </div>
        </header>
        <div className="flex items-center justify-between border-b border-line bg-white px-6 py-2">
          <p className="text-[10px] text-muted">Last update · 2 min — Manage products, categories, dimensions and business information.</p>
          <span className="flex items-center gap-1.5 rounded-[6px] border border-line px-2.5 py-1 text-[10px] font-semibold text-ink"><BookOpen className="size-3" /> Guide</span>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <div className="rounded-[12px] border border-line bg-white p-4">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] items-end gap-3">
              {[["Period", "Last 30 days"], ["Banners", "No data available"], ["Zones / Region", "All zones"], ["Stores", "All stores"]].map(([l, v]) => (
                <div key={l}><p className="mb-1 text-[9px] font-bold uppercase tracking-[0.08em] text-muted-2">{l}</p><span className="flex h-8 items-center justify-between rounded-[8px] border border-line px-2.5 text-[11px] text-ink">{v}<ChevronDown className="size-3 text-muted-2" /></span></div>
              ))}
              <span className="flex h-8 items-center gap-1.5 rounded-[8px] border border-line px-3 text-[11px] font-semibold text-ink"><SlidersHorizontal className="size-3" /> Filters</span>
            </div>
            <p className="mt-3 text-[10px] text-muted">81 stores evaluated · 96 validated captures · 84 price checks analysed · Updated today at 9:41</p>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted-2">Key indicators</p>
          <div className="grid grid-cols-4 gap-3">{ROW1.map((k) => <KpiCard key={k.code} k={k} />)}</div>
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-3">{ROW2.map((k) => <KpiCard key={k.code} k={k} />)}</div>
        </div>
      </div>
    </div>
  );
}
