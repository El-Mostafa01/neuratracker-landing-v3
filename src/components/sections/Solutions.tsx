import Reveal from "@/components/ui/Reveal";
import { asset } from "@/lib/asset";

type Step = {
  n: string;
  title: string;
  body: string;
  chips: string[];
  bg: string;
  icon: string;
  image: string;
  imageClass: string;
  alt: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Capture",
    body: "A guided capture, tied to the store and ready to sync, even offline.",
    chips: ["Guided capture", "Quality check", "Offline"],
    bg: "#eff6ff",
    icon: "/images/solutions/icon-capture.svg",
    image: "/images/solutions/shelf-capture.png",
    imageClass: "h-[327px] w-[327px]",
    alt: "3D render of a merchandiser photographing a dairy shelf",
  },
  {
    n: "02",
    title: "Analyse",
    body: "The shelf is split into products. Recognized SKUs feed the KPIs; uncertain cases go to human review.",
    chips: ["Detection", "SKU recognition", "Confidence"],
    bg: "#f2f7fa",
    icon: "/images/solutions/icon-analyse.svg",
    image: "/images/solutions/shelf-analyse.png",
    imageClass: "h-[318px] w-[373px]",
    alt: "3D render of a shelf with every product highlighted by the recognition engine",
  },
  {
    n: "03",
    title: "Measure",
    body: "Availability, out-of-stocks, share of shelf, compliance, prices and promo execution become comparable.",
    chips: ["OSA / OOS", "Share of shelf", "Planogram"],
    bg: "#f7f5f0",
    icon: "/images/solutions/icon-measure.svg",
    image: "/images/solutions/shelf-measure.png",
    imageClass: "h-[321px] w-[437px]",
    alt: "3D render of a shelf surrounded by KPI icons and charts",
  },
  {
    n: "04",
    title: "Act",
    body: "Every gap can become a mission: assigned, tracked and closed with verifiable field proof.",
    chips: ["Owner", "Deadline", "Field proof"],
    bg: "#eff8f5",
    icon: "/images/solutions/icon-act.svg",
    image: "/images/solutions/shelf-act.png",
    imageClass: "h-[308px] w-[411px]",
    alt: "3D render of a shelf before and after correction, with a red cross and a green check",
  },
];

const STRIP = ["Signal detected", "KPI computed", "Action assigned", "Proof validated"];

/** 04 / Solutions — the product flow (Figma 11720:3951). */
export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-[100px] lg:py-[170px]">
      <div className="wrap-wide flex flex-col items-center">
        <Reveal className="flex w-full max-w-[900px] flex-col items-center gap-5 text-center">
          <span className="relative inline-flex h-8 items-center justify-center rounded-full border border-[rgba(37,99,235,0.2)] bg-[rgba(239,246,255,0.82)] px-[13px] shadow-[0px_8px_11px_rgba(37,99,235,0.07),inset_0px_1px_0px_rgba(255,255,255,0.9)]">
            <span className="font-body text-[12px] font-extrabold uppercase tracking-[1.68px] text-primary">Solution</span>
          </span>
          <h2 className="max-w-[642px] font-display text-[36px] font-extrabold leading-[1.15] text-ink sm:text-[44px] lg:text-[48px] lg:leading-[73px]">
            From the field mission to the gap review.
          </h2>
          <p className="font-body text-[17px] leading-[25px] text-muted lg:text-[18px]">
            Four steps, from guided in-store capture to gap review by your teams.
          </p>
        </Reveal>

        <div className="mt-[30px] grid w-full gap-[22px] lg:grid-cols-2">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 120}>
              <article
                className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[28px] border-[0.667px] border-[#dce4ee] shadow-[0px_2px_6px_0px_rgba(15,23,42,0.06),0px_1px_2px_0px_rgba(15,23,42,0.04)] lg:min-h-[640px]"
                style={{ background: s.bg }}
              >
                <div className="flex items-start justify-between px-6 pt-7 lg:px-[34px] lg:pt-[34px]">
                  <div className="max-w-[480px]">
                    <p className="font-inter text-[14px] font-extrabold tracking-[1.568px] text-primary">{s.n}</p>
                    <h3 className="mt-3 font-display text-[40px] font-bold leading-none tracking-[-0.04em] text-[#101a2c] lg:text-[54.4px]">{s.title}</h3>
                    <p className="mt-3 pb-4 font-body text-[16px] leading-[25.92px] text-[#556277]">{s.body}</p>
                  </div>
                  <span className="grid size-[52px] shrink-0 place-items-center rounded-[17px] border-[0.667px] border-[rgba(47,67,97,0.13)] bg-white/70 shadow-[0px_5px_20.4px_0px_rgba(38,65,101,0.08)]">
                    <img src={asset(s.icon)} alt="" className="size-[23px]" />
                  </span>
                </div>
                <div className="flex flex-wrap gap-[7px] px-6 lg:px-[34px]">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border-[0.667px] border-[rgba(43,66,97,0.14)] bg-white/60 px-[10px] py-[7px] font-body text-[11.04px] font-semibold text-[#52647d]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex h-[300px] items-center justify-center border-t-[0.667px] border-[rgba(59,80,108,0.1)] lg:h-[338px]">
                  <img src={asset(s.image)} alt={s.alt} className={`${s.imageClass} max-h-[90%] max-w-[86%] object-contain`} loading="lazy" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-11 w-full">
          <ol className="grid border-t-[0.667px] border-[#dfe5ee] sm:grid-cols-2 lg:grid-cols-4">
            {STRIP.map((label, i) => (
              <li key={label} className="relative flex items-center gap-[13px] px-[18px] py-6">
                <span className="font-body text-[10.88px] font-extrabold text-primary">0{i + 1}</span>
                <span className="font-display text-[14.4px] font-bold uppercase tracking-[0.576px] text-[#101a2c]">{label}</span>
                {i < STRIP.length - 1 && (
                  <img src={asset("/images/solutions/arrow.svg")} alt="" className="absolute right-[14px] top-1/2 hidden size-6 -translate-y-1/2 lg:block" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
