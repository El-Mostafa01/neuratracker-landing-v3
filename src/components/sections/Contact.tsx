"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const CONTACT_EMAIL = "contact@neuratracker.com";

const inputCls =
  "h-12 w-full rounded-[11px] border-[0.667px] border-[#d8e0eb] bg-[#f9fafc] px-3.5 font-body text-[15px] text-ink outline-none transition-colors placeholder:text-[#9aa5b5] focus:border-primary focus:bg-white";
const labelCls = "mb-[7px] block font-body text-[12.16px] font-bold text-[#42506a]";

/** Contact (Figma 11720:6002) — dark card with the pilot pitch and a mailto form. */
export default function Contact() {
  const [state, setState] = useState({ first: "", last: "", email: "", company: "", need: "", context: "" });
  const set = (k: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setState((s) => ({ ...s, [k]: e.target.value }));

  function submit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`NeuraTracker — pilot request from ${state.company || `${state.first} ${state.last}`.trim()}`);
    const body = encodeURIComponent(
      [`Name: ${state.first} ${state.last}`, `Work email: ${state.email}`, `Company: ${state.company}`, `Main need: ${state.need}`, "", "Context:", state.context].join("\n"),
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-[#f2f5f9] py-[72px] lg:py-[110px]">
      <div className="wrap-wide">
        <Reveal className="grid gap-12 rounded-[32px] bg-[#0e192b] p-8 sm:p-12 lg:grid-cols-[507fr_561fr] lg:gap-[72px] lg:p-[70px]">
          <div className="flex flex-col">
            <span className="relative inline-flex h-8 w-fit items-center rounded-full border border-[rgba(126,178,255,0.28)] bg-[rgba(31,57,92,0.48)] px-[13px] shadow-[0px_8px_12px_rgba(0,0,0,0.12),inset_0px_1px_0px_rgba(255,255,255,0.06)]">
              <span className="font-body text-[12px] font-extrabold uppercase tracking-[1.68px] text-[#8ebcff]">Your next pilot</span>
            </span>
            <h2 className="mt-3 max-w-[539px] font-display text-[40px] font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[70.4px]">
              Show us your network. We show you what NeuraTracker can measure.
            </h2>
            <p className="mt-10 max-w-[508px] font-body text-[16px] leading-[27.2px] text-[#9cabc0] lg:mt-[58px]">
              Share your scope, categories, and the decision you want to accelerate. We then frame a demonstration or a concrete pilot.
            </p>
          </div>

          <form onSubmit={submit} className="flex flex-col rounded-[22px] bg-white p-6 sm:p-[30px]" noValidate>
            <div className="grid gap-x-[14px] sm:grid-cols-2">
              <div className="pb-[15px]"><label htmlFor="c-first" className={labelCls}>First name</label><input id="c-first" className={inputCls} value={state.first} onChange={set("first")} autoComplete="given-name" /></div>
              <div className="pb-[15px]"><label htmlFor="c-last" className={labelCls}>Last name</label><input id="c-last" className={inputCls} value={state.last} onChange={set("last")} autoComplete="family-name" /></div>
              <div className="pb-[15px]"><label htmlFor="c-email" className={labelCls}>Work email</label><input id="c-email" type="email" className={inputCls} value={state.email} onChange={set("email")} autoComplete="email" /></div>
              <div className="pb-[15px]"><label htmlFor="c-company" className={labelCls}>Company</label><input id="c-company" className={inputCls} value={state.company} onChange={set("company")} autoComplete="organization" /></div>
            </div>
            <div>
              <label htmlFor="c-need" className={labelCls}>Main need</label>
              <select id="c-need" className={`${inputCls} appearance-none`} value={state.need} onChange={set("need")}>
                <option value="">Select…</option>
                <option>Out-of-stock detection</option>
                <option>Share of shelf & facings</option>
                <option>Planogram compliance</option>
                <option>Price & promo checks</option>
                <option>Competitor visibility</option>
                <option>Field missions & proof</option>
              </select>
            </div>
            <div className="py-[15px]">
              <label htmlFor="c-context" className={labelCls}>Your context</label>
              <textarea id="c-context" rows={5} className={`${inputCls} h-[131px] resize-none py-3`} placeholder="Network, field teams, tracked categories, business priority…" value={state.context} onChange={set("context")} />
            </div>
            <button
              type="submit"
              className="flex h-[50px] items-center justify-center gap-[10px] rounded-[14px] bg-primary px-[22px] font-body text-[16px] font-bold text-white shadow-[0px_14px_16px_rgba(37,99,235,0.25)] transition-transform hover:-translate-y-px active:scale-[0.99]"
            >
              <Mail className="size-[17px]" /> Contact us <ArrowUpRight className="size-[17px]" />
            </button>
            <p className="pt-[13px] text-center font-body text-[10.56px] leading-[15.84px] text-[#8a95a6]">
              This button opens your email client with a pre-filled request. No message is sent automatically.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
