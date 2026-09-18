import Reveal from "@/components/ui/Reveal";
import { asset } from "@/lib/asset";

type Hotspot = { title: string; body: string; color: string; left: string; top: string };

const HOTSPOTS: Hotspot[] = [
  { title: "Planogram gap", body: "Product sitting in the wrong slot", color: "#3b82f6", left: "18%", top: "30%" },
  { title: "Out of stock", body: "Empty facing, sale lost every hour", color: "#dc2626", left: "13%", top: "68%" },
  { title: "Wrong price", body: "Shelf tag does not match the promo", color: "#f59e0b", left: "80%", top: "60%" },
];

/** 03 / Problem (Figma 11689:1477) — centered header + aisle photo with three pulsing hotspots. */
export default function Problem() {
  return (
    <section id="problem" className="bg-white py-[88px] lg:py-[120px]">
      <div className="wrap flex flex-col items-center gap-12 lg:gap-14">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <span className="rounded-full bg-tint px-3 py-[6px] font-body text-[13px] font-semibold text-blue">The problem</span>
          <h2 className="max-w-[720px] font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[48px]">
            A shelf can look fine and still cost you.
          </h2>
          <p className="max-w-[620px] font-body text-[17px] leading-[1.55] text-ink-3 lg:text-[18px]">
            Manual audits report days later, if at all. By then the shelf has already changed. These six execution gaps cost brands the most.
          </p>
        </Reveal>

        <Reveal delay={100} className="relative w-full">
          <div className="relative aspect-[2/1] w-full overflow-visible rounded-[24px] border border-line">
            <img
              src={asset("/images/problem/aisle.jpg")}
              alt="Bright supermarket aisle with refrigerated dairy shelves on both sides"
              className="size-full rounded-[24px] object-cover"
              loading="lazy"
            />
            {HOTSPOTS.map((h, i) => (
              <div
                key={h.title}
                className={`absolute flex items-center gap-3 ${h.left.startsWith("8") ? "flex-row-reverse text-right" : ""}`}
                style={{ left: h.left, top: h.top }}
              >
                <div className="relative grid size-11 shrink-0 place-items-center">
                  <span className="pulse-ring absolute inset-0 rounded-full" style={{ background: h.color, opacity: 0.25, animationDelay: `${i * 0.5}s` }} />
                  <span className="relative grid size-7 place-items-center rounded-full bg-white shadow-[0_4px_12px_rgba(11,21,38,0.18)]">
                    <span className="size-3 rounded-full" style={{ background: h.color }} />
                  </span>
                </div>
                <div className="hidden rounded-[12px] border border-line bg-white px-[14px] py-[10px] shadow-[0_10px_28px_rgba(11,21,38,0.14)] sm:block">
                  <p className="font-body text-[14px] font-semibold text-ink">{h.title}</p>
                  <p className="font-body text-[13px] leading-[1.2] text-muted">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
          {/* labels on small screens */}
          <ul className="mt-4 flex flex-wrap gap-2 sm:hidden">
            {HOTSPOTS.map((h) => (
              <li key={h.title} className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 font-body text-[13px] font-semibold text-ink">
                <span className="size-2.5 rounded-full" style={{ background: h.color }} /> {h.title}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
