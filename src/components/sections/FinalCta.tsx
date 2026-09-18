import Reveal from "@/components/ui/Reveal";
import { asset } from "@/lib/asset";

/** 10 / Final CTA (Figma 11699:1518) — navy → blue band, shelf photo in soft-light, closing statement. */
export default function FinalCta() {
  return (
    <section
      className="relative overflow-hidden px-6 py-[96px] lg:py-[128px]"
      style={{ backgroundImage: "linear-gradient(155.87deg, #0b1526 14.64%, #1d4ed8 85.36%)" }}
    >
      <img
        aria-hidden
        src={asset("/images/cta/shelf-bg.jpg")}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.31] mix-blend-soft-light"
        loading="lazy"
      />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[120px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-soft/35 blur-[200px]" />
      <Reveal className="relative flex flex-col items-center gap-9 text-center">
        <img src={asset("/images/brand/logo-mark-white.svg")} alt="" className="size-[72px] lg:size-[102px]" />
        <h2 className="max-w-[900px] font-display text-[36px] font-extrabold leading-[1.06] tracking-[-0.025em] text-white sm:text-[46px] lg:text-[56px]">
          Everything retail execution needs. All in NeuraTracker.
        </h2>
        <p className="max-w-[680px] font-body text-[17px] leading-[1.5] text-sky lg:text-[19px]">
          Capture the shelf. Understand what is happening. Measure execution. Act on what matters.
        </p>
        <a
          href="#contact"
          className="inline-flex h-[54px] items-center rounded-[12px] bg-white px-[26px] font-body text-[16px] font-semibold text-navy shadow-[0px_10px_30px_0px_rgba(11,21,38,0.25)] transition-transform hover:-translate-y-px active:scale-[0.98]"
        >
          Book a demo
        </a>
      </Reveal>
    </section>
  );
}
