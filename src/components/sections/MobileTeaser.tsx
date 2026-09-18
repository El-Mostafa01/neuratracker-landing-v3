import Reveal from "@/components/ui/Reveal";
import { LoginScreen, PhoneMock } from "@/components/ui/PhoneMock";
import { asset } from "@/lib/asset";

/** Mobile teaser (Figma 11720:5132) — big headline, store badges, phone with the login screen over a dotted world map. */
export default function MobileTeaser() {
  return (
    <section className="relative overflow-hidden bg-white py-[100px] lg:py-[184px]">
      <div className="wrap-wide relative flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-[141px]">
        {/* dotted map behind the phone */}
        <img
          aria-hidden
          src={asset("/images/mobile/map-dots.png")}
          alt=""
          className="pointer-events-none absolute right-[-120px] top-[40%] hidden w-[739px] rotate-180 opacity-90 lg:block"
        />
        <Reveal className="flex w-full max-w-[726px] flex-col gap-10 lg:gap-[52px]">
          <div className="flex flex-col gap-5">
            <span className="relative inline-flex h-8 w-fit items-center justify-center rounded-full border border-[rgba(37,99,235,0.2)] bg-[rgba(239,246,255,0.82)] px-[13px] shadow-[0px_8px_11px_rgba(37,99,235,0.07),inset_0px_1px_0px_rgba(255,255,255,0.9)]">
              <span className="font-body text-[12px] font-extrabold uppercase tracking-[1.68px] text-primary">Mobile</span>
            </span>
            <h2 className="font-display text-[44px] font-extrabold leading-[0.98] text-ink sm:text-[58px] lg:text-[74px] lg:leading-[73px]">
              Everything the field needs, even without network.
            </h2>
            <p className="max-w-[699px] font-body text-[18px] leading-[25px] text-muted">
              One clear mission, a guided capture gesture and a sync that resumes as soon as the connection returns.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-[15px]">
            <a href="#contact" aria-label="Download on the App Store" className="block h-[68px] transition-transform hover:-translate-y-px">
              <img src={asset("/images/mobile/appstore-en.svg")} alt="Download on the App Store" className="h-full w-auto" />
            </a>
            <a href="#contact" aria-label="Get it on Google Play" className="block h-[68px] transition-transform hover:-translate-y-px">
              <img src={asset("/images/mobile/googleplay-en.png")} alt="Get it on Google Play" className="h-[100px] w-auto -my-4" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={150} className="relative shrink-0">
          <PhoneMock width={345} label="NeuraTracker mobile app, login screen" className="float-slow">
            <LoginScreen />
          </PhoneMock>
        </Reveal>
      </div>
    </section>
  );
}
