import Reveal from "@/components/ui/Reveal";
import { asset } from "@/lib/asset";

/** Security (Figma 11720:6141) — centered header and the 3D security illustration. */
export default function Security() {
  return (
    <section id="security" className="bg-white pb-16 pt-[88px] lg:pb-24 lg:pt-[120px]">
      <div className="wrap flex flex-col items-center gap-10">
        <Reveal className="flex max-w-[760px] flex-col items-center gap-5 text-center">
          <span className="relative inline-flex h-8 items-center justify-center rounded-full border border-[rgba(37,99,235,0.2)] bg-[rgba(239,246,255,0.82)] px-[13px] shadow-[0px_8px_11px_rgba(37,99,235,0.07),inset_0px_1px_0px_rgba(255,255,255,0.9)]">
            <span className="font-body text-[12px] font-extrabold uppercase tracking-[1.68px] text-primary">Security</span>
          </span>
          <h2 className="font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[46px]">
            Securely designed for organizations with multiple stores and teams.
          </h2>
          <p className="max-w-[640px] font-body text-[17px] leading-[1.55] text-ink-3 lg:text-[18px]">
            With built-in roles, boundaries, audit logs, and verified KPIs, your data remains organized, protected, and exclusively yours.
          </p>
        </Reveal>
        <Reveal delay={120} className="w-full">
          <img
            src={asset("/images/security/illustration.jpg")}
            alt="3D illustration: a shield with a padlock at the center of servers, a cloud, a database and a laptop running NeuraTracker, with labels Encrypted AES-256, Secure cloud infrastructure, Data privacy, Access controlled and GDPR compliant"
            className="w-full rounded-[24px]"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
