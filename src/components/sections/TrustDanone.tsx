import Reveal from "@/components/ui/Reveal";
import { asset } from "@/lib/asset";

const FACTS: { value: string; label: string }[] = [
  { value: "Web + mobile", label: "Console and field app" },
  { value: "7", label: "merchandising metrics" },
  { value: "96 %", label: "SKU accuracy" },
  { value: "Multi-tenant", label: "Role and scope-based access" },
];

/** 02 / Confiance — Centrale Danone Maroc (Figma 11720:2857). */
export default function TrustDanone() {
  return (
    <section className="bg-white py-[72px] lg:py-[100px]">
      <div className="wrap-wide flex flex-col items-center gap-11">
        <Reveal className="flex w-full flex-col items-center gap-5 text-center">
          <img
            src={asset("/images/brand/centrale-danone.png")}
            alt="Centrale Danone"
            width={478}
            height={146}
            className="h-[110px] w-auto rounded-[14px] object-contain lg:h-[146px]"
          />
          <h2 className="max-w-[788px] font-display text-[32px] font-extrabold leading-[1.08] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[50px]">
            Already in production at Centrale Danone Morocco.
          </h2>
          <p className="max-w-[760px] font-body text-[16px] leading-[26px] text-muted">
            Morocco&apos;s dairy leader tracks shelf execution with NeuraTracker — from field photos to metrics, corrective tasks, and their evidence.
          </p>
        </Reveal>

        <Reveal delay={120} className="flex flex-wrap items-center justify-center">
          {FACTS.map((f, i) => (
            <div key={f.value} className="flex items-center">
              {i > 0 && <div aria-hidden className="hidden h-10 w-px bg-line sm:block" />}
              <div className="flex flex-col items-center gap-[6px] px-5 py-3 text-center sm:px-7 sm:py-0">
                <p className="font-display text-[24px] font-extrabold text-ink">{f.value}</p>
                <p className="font-body text-[13px] font-medium leading-[18px] text-muted">{f.label}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
