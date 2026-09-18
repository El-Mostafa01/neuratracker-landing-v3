import { asset } from "@/lib/asset";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  { title: "Product", links: [["How it works", "#solutions"], ["Capabilities", "#capabilities"], ["Mobile app", "#mobile"], ["Analytics", "#analytics"], ["Security", "#security"], ["Pricing", "#pricing"]].map(([label, href]) => ({ label, href })) },
  { title: "Company", links: [["About", "#top"], ["Customers", "#top"], ["Careers", "#contact"], ["Contact", "#contact"]].map(([label, href]) => ({ label, href })) },
  { title: "Resources", links: [["Help center", "#contact"], ["Documentation", "#contact"], ["Guide videos", "#solutions"], ["Status", "#top"]].map(([label, href]) => ({ label, href })) },
  { title: "Legal", links: [["Privacy", "#top"], ["Terms", "#top"], ["Data processing", "#top"]].map(([label, href]) => ({ label, href })) },
];

/** 11 / Footer (Figma 11699:1538). */
export default function Footer() {
  return (
    <footer className="bg-white pb-10 pt-[72px]">
      <div className="wrap flex flex-col gap-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[300px] flex-col gap-4">
            <a href="#top" className="flex items-center gap-2.5" aria-label="NeuraTracker home">
              <img src={asset("/images/brand/logo-mark-navy.svg")} alt="" className="size-7" />
              <span className="font-display text-[20px] font-bold tracking-[-0.01em] text-navy">NeuraTracker</span>
            </a>
            <p className="font-body text-[14px] leading-[1.5] text-muted">Retail execution platform. Every shelf visit becomes measurable retail intelligence.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:gap-16">
            {COLUMNS.map((c) => (
              <div key={c.title} className="flex flex-col gap-3">
                <p className="font-body text-[14px] font-semibold text-ink">{c.title}</p>
                {c.links.map((l) => (
                  <a key={l.label} href={l.href} className="font-body text-[14px] text-muted transition-colors hover:text-ink">{l.label}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[13px] text-muted-2">© 2026 NeuraTracker Enterprise. All rights reserved.</p>
          <ul className="flex gap-1.5" aria-label="Languages">
            {["FR", "EN", "ES", "AR"].map((l) => (
              <li key={l} className={`rounded-[8px] px-2.5 py-1.5 font-body text-[13px] font-medium ${l === "EN" ? "bg-bg-muted text-ink" : "text-muted"}`}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
