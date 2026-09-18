import { Camera, Check, ClipboardCheck, MapPin, RefreshCw, Smartphone, WifiOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { CaptureScreen, MissionsScreen, PhoneMock, StoreCheckinScreen } from "@/components/ui/PhoneMock";
import { asset } from "@/lib/asset";

const GROUPS: { icon: LucideIcon; title: string; items: string[] }[] = [
  { icon: Camera, title: "Capture", items: ["Guided shelf capture", "Price capture", "Furniture inventory", "Standardized field data"] },
  { icon: ClipboardCheck, title: "Execute", items: ["Mission tracking", "GPS-validated visits", "Faster store visits", "Offline field work"] },
  { icon: RefreshCw, title: "Sync & prove", items: ["Automatic synchronization", "Proof of execution", "Less manual reporting", "Better manager visibility"] },
];

/** 07 / Mobile app — field execution tool (Figma 11695:1462). Real photo stage + three English app screens. */
export default function MobileApp() {
  return (
    <section id="mobile" className="bg-white py-[88px] lg:py-[120px]">
      <div className="wrap flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-[72px]">
        <Reveal className="relative w-full max-w-[560px] shrink-0">
          <div className="relative h-[560px] w-full overflow-hidden rounded-[24px] sm:h-[640px]">
            <img src={asset("/images/mobile/merchandiser.jpg")} alt="Merchandiser photographing a dairy shelf with a phone" className="absolute inset-0 size-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/5 to-navy/55" />
          </div>
          <div className="absolute left-[4%] top-[150px] hidden sm:block">
            <PhoneMock width={196} label="Missions of the day screen"><MissionsScreen /></PhoneMock>
          </div>
          <div className="absolute right-[4%] top-[150px] hidden sm:block">
            <PhoneMock width={196} label="Store check-in screen"><StoreCheckinScreen /></PhoneMock>
          </div>
          <div className="absolute left-1/2 top-[96px] -translate-x-1/2">
            <PhoneMock width={226} label="Guided shelf capture screen" className="float-slow"><CaptureScreen /></PhoneMock>
          </div>
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white py-2 pl-3 pr-[14px] shadow-[0_10px_30px_rgba(11,21,38,0.18)]">
            <span className="grid size-[22px] place-items-center rounded-[6px] bg-ok-bg text-ok"><RefreshCw className="size-3" strokeWidth={2.5} /></span>
            <span className="font-body text-[13px] font-semibold text-ink">Synced 09:41 · 3 visits validated by GPS</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex w-full max-w-[568px] flex-col gap-8">
          <div className="flex flex-col gap-5">
            <span className="w-fit rounded-full bg-tint px-3 py-[6px] font-body text-[13px] font-semibold text-blue">Mobile app</span>
            <h2 className="font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[48px]">Field reality enters here.</h2>
            <p className="max-w-[540px] font-body text-[17px] leading-[1.55] text-ink-3 lg:text-[18px]">
              The app standardizes every store visit. Merchandisers capture, execute missions and collect data the same way in every store, even offline.
            </p>
          </div>
          <div>
            {GROUPS.map((g, i) => (
              <div key={g.title} className={`flex items-start gap-[18px] py-[22px] ${i > 0 ? "border-t border-line" : ""}`}>
                <span className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-tint text-blue"><g.icon className="size-[22px]" /></span>
                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="font-display text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-ink">{g.title}</h3>
                  <ul className="grid gap-x-3 gap-y-2 sm:grid-cols-2">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 font-body text-[15px] text-ink-2"><Check className="size-3.5 shrink-0 text-blue" strokeWidth={2.5} />{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {[[WifiOff, "Offline-first"], [Smartphone, "iOS & Android"], [MapPin, "Geofenced check-in"]].map(([Icon, l]) => {
              const I = Icon as LucideIcon;
              return (
                <span key={String(l)} className="flex items-center gap-1.5 rounded-full bg-bg-muted px-3 py-[6px] font-body text-[13px] font-semibold text-ink-2"><I className="size-3.5" />{l as string}</span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
