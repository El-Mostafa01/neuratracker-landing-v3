"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { asset } from "@/lib/asset";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "Problem", href: "#problem" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Mobile app", href: "#mobile" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

/** Floating navy pill navigation, as designed in the hero (Figma 11710:1132). Fixed so it follows the scroll. */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-[31px] lg:pt-[15px]">
      <nav
        aria-label="Main"
        className={`relative mx-auto flex items-center justify-between overflow-hidden rounded-[24px] border-[0.667px] border-[rgba(234,242,255,0.7)] bg-navy p-[11px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] transition-[max-width,background-color] duration-500 ${scrolled ? "max-w-[1280px] bg-[#0b1526]/95 backdrop-blur" : "max-w-[1492px]"}`}
      >
        {/* blurred blue streaks (decorative, right side) */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[520px] opacity-25 lg:block">
          <div className="absolute -top-8 right-[120px] h-[17px] w-[419px] rotate-[14.91deg] bg-[#188aff] blur-[31.6px]" />
          <div className="absolute -bottom-10 right-[330px] h-[17px] w-[419px] rotate-[14.91deg] bg-[#188aff] blur-[31.6px]" />
        </div>

        <a href="#top" className="relative flex items-center gap-[5px]" aria-label="NeuraTracker home">
          <img src={asset("/images/brand/logo-nav.svg")} alt="" width={36} height={36} className="size-9" />
          <span className="font-inter text-[18px] font-semibold leading-[27px] text-white">NeuraTracker</span>
        </a>

        <ul className="relative hidden items-center gap-[28px] lg:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-inter text-[14px] font-medium leading-[21px] text-[#8293af] transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-[6px] rounded-full px-3 py-[6px] font-inter text-[12px] font-medium text-white sm:flex"
            aria-label="Language: English"
          >
            En <ChevronDown className="size-3" strokeWidth={2.5} />
          </button>
          <a
            href="https://app.neuratracker.com"
            className="rounded-[10px] bg-white/10 px-[22px] py-[13px] font-inter text-[15px] font-semibold leading-[22.5px] text-white transition-colors hover:bg-white/15"
          >
            Log in
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-[10px] bg-white/10 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-[1492px] rounded-[20px] border border-white/10 bg-navy p-4 shadow-2xl lg:hidden"
        >
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-inter text-[15px] font-medium text-[#c7d2e5] hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
