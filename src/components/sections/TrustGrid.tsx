import { Database, History, Image as ImageIcon, Lock, MapPin, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { asset } from "@/lib/asset";

const ITEMS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Users, title: "Roles & permissions", body: "VIEW, EDIT and MANAGE levels per resource, from principal admin to merchandiser. The server enforces every rule." },
  { icon: MapPin, title: "Geographic perimeters", body: "Country › Region › City › Sector scopes shared by stores, teams and dashboards." },
  { icon: History, title: "Full audit trail", body: "Every create, update, export and validation is logged with actor, store and time." },
  { icon: ImageIcon, title: "Proof-based results", body: "Each KPI links to the capture, the product crop and the confidence score behind it." },
  { icon: Database, title: "Structured product data", body: "GS1 GPC taxonomy, EAN codes, planograms and furniture in one reference model." },
  { icon: Lock, title: "Secure sessions", body: "Short-lived tokens, httpOnly cookies, rate-limited authentication and revocable devices." },
];

/** 09 / Trust — security & platform depth (Figma 11699:1462), with the field-team photo in a pill mask. */
export default function TrustGrid() {
  return (
    <section className="bg-white py-[88px] lg:py-[120px]">
      <div className="wrap flex flex-col items-center gap-12 lg:gap-14">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <span className="rounded-full bg-tint px-3 py-[6px] font-body text-[13px] font-semibold text-blue">Enterprise-ready</span>
          <h2 className="max-w-[800px] font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[48px]">
            Built for multi-store, multi-team organizations.
          </h2>
          <p className="max-w-[640px] font-body text-[17px] leading-[1.55] text-ink-3 lg:text-[18px]">
            Roles, perimeters, audit trail and proof-backed KPIs come standard. Your data stays structured, traceable and yours.
          </p>
        </Reveal>

        <Reveal delay={100} className="w-full max-w-[886px]">
          <img
            src={asset("/images/trust/team.jpg")}
            alt="A field team of five merchandisers standing in a supermarket aisle"
            className="aspect-[2/1] w-full rounded-full object-cover"
            loading="lazy"
          />
        </Reveal>

        <div className="grid w-full gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80} className={`flex flex-col gap-4 py-8 ${i >= 3 ? "lg:border-t lg:border-line" : ""} ${i >= 2 ? "border-t border-line sm:border-t-0" : ""}`}>
              <span className="grid size-11 place-items-center rounded-[12px] bg-tint text-blue"><it.icon className="size-[22px]" /></span>
              <h3 className="font-display text-[20px] font-bold leading-[1.15] tracking-[-0.005em] text-ink">{it.title}</h3>
              <p className="max-w-[340px] font-body text-[15px] leading-[1.5] text-muted">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
