import { asset } from "@/lib/asset";

/** 01 / Hero — Figma 11710:1080. Inter headline with the navy→blue vertical gradient, soft blob, 3D store render. */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#f9f9f9]">
      {/* soft blue blobs (top-left), 58% opacity, blurred */}
      <div aria-hidden className="pointer-events-none absolute left-[-190px] top-[82px] h-[558px] w-[727px] opacity-[0.58]">
        <img
          src={asset("/images/hero/blob.png")}
          alt=""
          className="absolute left-[-137px] top-[-140px] h-[865px] w-[909px] max-w-none -rotate-[31.4deg] blur-[80px]"
        />
        <img
          src={asset("/images/hero/blob.png")}
          alt=""
          className="absolute left-[414px] top-[279px] h-[350px] w-[368px] max-w-none -scale-y-100 rotate-[-148.6deg] blur-[80px]"
        />
      </div>
      {/* faint vertical stripes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1534px] -translate-x-1/2 lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(204,204,204,0.02) 0px, rgba(242,242,242,0.11) 59px, rgba(204,204,204,0.02) 60px)",
        }}
      />

      <div className="relative mx-auto flex min-h-[720px] max-w-[1534px] flex-col items-center gap-10 px-6 pb-16 pt-[140px] lg:min-h-[850px] lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-[108px] lg:pb-0 lg:pt-[91px]">
        {/* copy */}
        <div className="flex w-full max-w-[670px] flex-col items-start gap-6">
          <div
            className="relative flex h-[27px] items-center overflow-hidden rounded-full border-[0.667px] border-white pl-[14px] pr-[10px]"
            style={{
              backgroundImage:
                "radial-gradient(60% 200% at 68% 50%, rgba(255,255,255,1) 0%, rgba(231,243,255,0.875) 12.5%, rgba(198,227,255,0.75) 25%, rgba(140,199,255,0.5) 50%, rgba(83,171,255,0.25) 75%, rgba(83,171,255,0) 100%)",
            }}
          >
            <span className="font-inter text-[11px] font-semibold leading-[16.5px] tracking-[1.2px] text-[#188aff]">
              RETAIL EXECUTION · AI
            </span>
            <img src={asset("/images/brand/logo-white-small.svg")} alt="" className="ml-3 size-5" />
          </div>

          <h1 className="max-w-[660px] font-inter text-[40px] font-bold leading-[1.1] tracking-[-1.5px] sm:text-[48px] lg:text-[56px] lg:leading-[62px]">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #111827 0%, #0f2542 12.5%, #0d325d 25%, #094c93 50%, #0466c9 75%, #0080ff 100%)",
              }}
            >
              Your out-of-stock items detected by photo.
            </span>
          </h1>

          <p className="max-w-[545px] font-inter text-[18px] leading-[28px] text-[#6b7280]">
            Retail execution software: NeuraTracker turns your field teams’ photos into insights, actions, and proof.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="relative inline-flex h-[49px] items-center overflow-hidden rounded-[12px] border-[0.667px] border-white px-[22px] font-inter text-[15px] font-semibold text-white shadow-[0px_42px_107px_0px_rgba(87,177,255,0.34),0px_24.7px_32.3px_0px_rgba(87,177,255,0.19),0px_10.3px_13.4px_0px_rgba(87,177,255,0.22),0px_3.7px_4.8px_0px_rgba(87,177,255,0.15)] transition-transform duration-200 hover:-translate-y-px active:scale-[0.98]"
              style={{ backgroundImage: "linear-gradient(180deg, #0073ff 0%, #008bff 50%, #0da2ff 100%)" }}
            >
              <img src={asset("/images/hero/button-texture.png")} alt="" className="pointer-events-none absolute inset-0 size-full object-cover opacity-40 mix-blend-soft-light" />
              <span className="pointer-events-none absolute inset-0 rounded-[12px] shadow-[inset_0px_1px_18px_0px_#d2eaff,inset_0px_1px_4px_0px_#d2eaff]" />
              <span className="relative">Get an estimate</span>
            </a>
            <a
              href="#solutions"
              className="inline-flex h-[43px] items-center gap-2 rounded-[10px] border-[0.667px] border-[rgba(173,204,255,0.04)] bg-white px-[22px] font-inter text-[15px] font-semibold text-[#111827] shadow-[0px_1px_1px_rgba(16,24,40,0.06)] transition-colors hover:bg-[#f3f7ff]"
            >
              <img src={asset("/images/hero/play.svg")} alt="" className="h-[11px] w-[10px]" />
              Watch the video (50s)
            </a>
          </div>

          <p className="font-inter text-[13px] font-medium leading-5 text-[#546f8b]">
            96% SKU accuracy · Report in under a minute · Up and running in 2 weeks
          </p>
        </div>

        {/* 3D store video (Seedance render), fixed in place, white background blended away */}
        <div className="relative w-full max-w-[756px] lg:pr-6">
          <video
            className="h-auto w-full mix-blend-darken"
            src={asset("/video/hero-store.mp4")}
            poster={asset("/images/hero/store-3d.png")}
            width={756}
            height={425}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="3D animation of a store: a merchandiser at the entrance and a fully stocked dairy fridge shelf"
          />
        </div>
      </div>

      {/* bottom fade into the next section */}
      <img
        aria-hidden
        src={asset("/images/hero/bottom-fade.png")}
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[125px] w-full object-cover"
      />
    </section>
  );
}
