import { Filter, Globe, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import DashboardMock from "@/components/ui/DashboardMock";

const CALLOUTS = [
  { n: 1, title: "KPI status at a glance", body: "Execution score, stores at risk and critical alerts for the selected period and zones.", cls: "left-[-36px] top-[120px]" },
  { n: 2, title: "Store-level evidence", body: "Every KPI row opens the store, the capture and the proof photo behind the number.", cls: "right-[-36px] top-[300px]" },
  { n: 3, title: "Prioritized actions", body: "Three columns: to capitalize on, to correct, to watch. Missions start from here.", cls: "left-[420px] top-[596px]" },
];

const STRIP: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Globe, title: "Network visibility", body: "Country › Region › City › Sector. Filter by store, banner or zone." },
  { icon: Zap, title: "Live refresh", body: "Dashboards update the moment a capture is recognized." },
  { icon: Filter, title: "Shareable filters", body: "Period presets, saved views and URL-driven filters for every team." },
];

/** 08 / Analytics — manager visibility (Figma 11697:1462). Browser window with the console recreated in English. */
export default function Analytics() {
  return (
    <section id="analytics" className="border-y border-line bg-bg-soft py-[88px] lg:py-[120px]">
      <div className="wrap flex flex-col items-center gap-12 lg:gap-14">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-[800px] font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[48px]">
            One view from shelf issue to decision.
          </h2>
          <p className="max-w-[680px] font-body text-[17px] leading-[1.55] text-ink-3 lg:text-[18px]">
            Managers monitor stores, KPIs, teams and execution quality in one console. Every number opens the store photo behind it.
          </p>
        </Reveal>

        <Reveal delay={100} className="relative w-full">
          <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_30px_70px_rgba(11,21,38,0.12)]">
            <div className="flex h-11 items-center gap-3 border-b border-line bg-bg-soft px-4">
              <span className="flex gap-1.5">{[0, 1, 2].map((i) => <span key={i} className="size-2.5 rounded-full bg-line-strong" />)}</span>
              <span className="flex h-7 w-full max-w-[420px] items-center rounded-[8px] border border-line bg-white px-3 font-body text-[12px] text-muted">app.neuratracker.com/analyses/dashboard</span>
            </div>
            {/* scale the 1200px console down on narrower screens */}
            <div className="relative aspect-[1200/646] w-full overflow-hidden">
              <div className="absolute left-0 top-0 origin-top-left" style={{ width: 1200, transform: "scale(var(--console-scale, 1))" }}>
                <DashboardMock />
              </div>
            </div>
          </div>
          {CALLOUTS.map((c, i) => (
            <div
              key={c.n}
              className={`absolute hidden w-[268px] items-start gap-3 rounded-[14px] border border-line bg-white p-4 shadow-[0_14px_36px_rgba(11,21,38,0.16)] lg:flex ${c.cls} ${i === 0 ? "float-slow" : i === 1 ? "float-slower" : ""}`}
            >
              <span className="grid size-[26px] shrink-0 place-items-center rounded-full bg-blue font-body text-[13px] font-semibold text-white">{c.n}</span>
              <div>
                <p className="font-body text-[14px] font-semibold leading-[1.1] text-ink">{c.title}</p>
                <p className="mt-1 font-body text-[13px] leading-[1.35] text-muted">{c.body}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={80} className="grid w-full gap-6 lg:mt-4 lg:grid-cols-3">
          {STRIP.map((s) => (
            <div key={s.title} className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-white text-blue"><s.icon className="size-[22px]" /></span>
              <div>
                <p className="font-body text-[16px] font-semibold leading-[1.2] text-ink">{s.title}</p>
                <p className="mt-1 max-w-[300px] font-body text-[14px] leading-[1.45] text-muted">{s.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
      <style>{`@media (max-width: 1279px){ #analytics .aspect-\\[1200\\/646\\] { --console-scale: calc((100vw - 48px) / 1200); } }`}</style>
    </section>
  );
}
