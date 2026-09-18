import { Bell, Camera, Check, ChevronLeft, CircleUserRound, Eye, Home, MapPin, Store } from "lucide-react";
import { asset } from "@/lib/asset";

/* ------------------------------------------------------------------ */
/* Device frame: scales a 390×844 logical screen to any display width */
/* ------------------------------------------------------------------ */
export function PhoneMock({ width, children, className = "", label }: { width: number; children: React.ReactNode; className?: string; label: string }) {
  const bezel = Math.round(width * 0.036);
  const screenW = width - bezel * 2;
  const scale = screenW / 390;
  const screenH = Math.round(844 * scale);
  return (
    <figure
      className={`relative overflow-hidden bg-navy shadow-[0_30px_60px_rgba(11,21,38,0.3)] ${className}`}
      style={{ width, height: screenH + bezel * 2, borderRadius: Math.round(width * 0.13), padding: bezel }}
      aria-label={label}
    >
      <div className="relative overflow-hidden bg-white" style={{ width: screenW, height: screenH, borderRadius: Math.round(width * 0.1) }}>
        <div className="absolute left-0 top-0 origin-top-left" style={{ width: 390, height: 844, transform: `scale(${scale})` }}>
          {children}
        </div>
      </div>
    </figure>
  );
}

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex h-12 items-center justify-between px-6 pt-2 font-body text-[13px] font-semibold ${dark ? "text-white" : "text-ink"}`}>
      <span>9:41</span>
      <span className="flex items-center gap-1.5">
        <span className="flex items-end gap-[2px]">{[5, 7, 9, 11].map((h) => <span key={h} className={`w-[3px] rounded-[1px] ${dark ? "bg-white" : "bg-ink"}`} style={{ height: h }} />)}</span>
        <span className={`h-[11px] w-[22px] rounded-[3px] border ${dark ? "border-white" : "border-ink"} p-[1.5px]`}><span className={`block h-full w-[80%] rounded-[1px] ${dark ? "bg-white" : "bg-ink"}`} /></span>
      </span>
    </div>
  );
}

/* --------------------------- Screens (EN) --------------------------- */

export function MissionsScreen() {
  const missions = [
    { title: "Shelf capture · fresh dairy", store: "Carrefour Sidi Maarouf · Casablanca", when: "Today · 10:00 – 12:00", state: "In progress", tone: "warn" },
    { title: "Shelf capture · fresh dairy", store: "Carrefour Sidi Maarouf · Casablanca", when: "Today · 14:00 – 16:00", state: "To do", tone: "muted" },
    { title: "Price check · promo aisle", store: "Carrefour Sidi Maarouf · Casablanca", when: "Today · 16:30", state: "To do", tone: "muted" },
  ];
  return (
    <div className="flex h-full flex-col bg-[#f6f7fb] font-body">
      <StatusBar />
      <div className="flex items-center gap-3 px-5 pb-3 pt-1">
        <ChevronLeft className="size-5 text-ink" />
        <div>
          <p className="text-[17px] font-bold text-ink">Missions</p>
          <p className="text-[12px] text-muted">Carrefour Sidi Maarouf · Casablanca</p>
        </div>
        <Bell className="ml-auto size-5 text-muted" />
      </div>
      <div className="mx-5 rounded-[18px] p-4 text-white" style={{ backgroundImage: "linear-gradient(135deg,#1d4ed8,#2563eb 60%,#3b82f6)" }}>
        <p className="text-[16px] font-bold">Your missions of the day</p>
        <p className="mt-1 text-[12px] text-white/80">Complete your missions and validate the store before leaving.</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[["5", "Assigned"], ["1", "In progress"], ["1", "Done"]].map(([n, l]) => (
            <div key={l} className="rounded-[12px] bg-white/15 px-3 py-2"><p className="text-[20px] font-extrabold leading-none">{n}</p><p className="mt-1 text-[11px] text-white/85">{l}</p></div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-2 px-5">
        {["All · 5", "Capture", "Price", "Furniture"].map((t, i) => (
          <span key={t} className={`rounded-full px-3 py-1.5 text-[12px] font-semibold ${i === 0 ? "bg-navy text-white" : "border border-line bg-white text-muted"}`}>{t}</span>
        ))}
      </div>
      <p className="mt-4 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-muted-2">Missions</p>
      <ul className="mt-2 flex flex-col gap-2 px-5">
        {missions.map((m, i) => (
          <li key={i} className="rounded-[14px] border border-line bg-white p-3.5">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[14px] font-bold text-ink">{m.title}</p>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${m.tone === "warn" ? "bg-warn-bg text-warn" : "bg-bg-muted text-muted"}`}>{m.state}</span>
            </div>
            <p className="mt-1 flex items-center gap-1 text-[11px] text-muted"><Store className="size-3" /> {m.store}</p>
            <p className="mt-0.5 text-[11px] text-muted">{m.when}</p>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between border-t border-line bg-white px-8 pb-6 pt-3 text-muted">
        <span className="flex flex-col items-center gap-1 text-blue"><Home className="size-5" /><span className="text-[10px] font-semibold">Missions</span></span>
        <span className="flex flex-col items-center gap-1"><Store className="size-5" /><span className="text-[10px] font-semibold">Stores</span></span>
        <span className="grid size-12 -translate-y-3 place-items-center rounded-full bg-blue text-white shadow-[0_8px_20px_rgba(37,99,235,0.35)]"><Camera className="size-5" /></span>
        <span className="flex flex-col items-center gap-1"><MapPin className="size-5" /><span className="text-[10px] font-semibold">Visits</span></span>
        <span className="flex flex-col items-center gap-1"><CircleUserRound className="size-5" /><span className="text-[10px] font-semibold">Profile</span></span>
      </div>
    </div>
  );
}

export function CaptureScreen() {
  return (
    <div className="relative flex h-full flex-col bg-[#0b0f1a] font-body text-white">
      <StatusBar dark />
      <div className="px-5 pb-3 text-center">
        <p className="text-[15px] font-bold">Capture furniture</p>
        <p className="text-[11px] text-white/60">Carrefour Sidi Maarouf · Casablanca</p>
      </div>
      <div className="relative mx-3 flex-1 overflow-hidden rounded-[20px]">
        <img src={asset("/images/capabilities/shelf.jpg")} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        {/* framing guides */}
        {["left-4 top-4 border-l-[3px] border-t-[3px] rounded-tl-[10px]", "right-4 top-4 border-r-[3px] border-t-[3px] rounded-tr-[10px]", "left-4 bottom-4 border-l-[3px] border-b-[3px] rounded-bl-[10px]", "right-4 bottom-4 border-r-[3px] border-b-[3px] rounded-br-[10px]"].map((c) => (
          <span key={c} className={`absolute size-10 border-[#7dd3fc] ${c}`} />
        ))}
        <div className="absolute left-1/2 top-1/2 h-px w-[60%] -translate-x-1/2 bg-white/50" />
        <span className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1.5 text-[11px] font-semibold backdrop-blur">Hold steady · framing OK</span>
        <span className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-ok-dot px-3 py-1.5 text-[11px] font-bold text-white"><Check className="size-3" strokeWidth={3} /> Level · 4 shelf levels detected</span>
      </div>
      <div className="flex items-center justify-between px-9 pb-8 pt-5">
        <span className="size-11 overflow-hidden rounded-[10px] border border-white/30"><img src={asset("/images/capabilities/shelf.jpg")} alt="" className="size-full object-cover" /></span>
        <span className="grid size-[74px] place-items-center rounded-full border-[4px] border-white/80"><span className="size-[58px] rounded-full bg-white" /></span>
        <span className="grid size-11 place-items-center rounded-full bg-blue"><Check className="size-5" strokeWidth={2.5} /></span>
      </div>
    </div>
  );
}

export function StoreCheckinScreen() {
  const stores = [
    { name: "Marjane Californie", city: "Casablanca · Hypermarket", dist: "120 m", gps: true, selected: true },
    { name: "Acima Maârif", city: "Casablanca · Supermarket", dist: "1.2 km", gps: true },
    { name: "Carrefour Sidi Maarouf", city: "Casablanca · Hypermarket", dist: "3.4 km", gps: false },
    { name: "BIM Aïn Diab", city: "Casablanca · Convenience", dist: "4.8 km", gps: false },
  ];
  return (
    <div className="flex h-full flex-col bg-white font-body">
      <StatusBar />
      <div className="flex items-center gap-3 px-5 pb-1 pt-1">
        <ChevronLeft className="size-5 text-ink" />
        <p className="text-[17px] font-bold text-ink">Choose a store</p>
      </div>
      <p className="px-5 pt-2 text-[12px] text-muted">Select the store you are in right now. Your position is checked by GPS.</p>
      <p className="mt-5 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-muted-2">Nearby stores</p>
      <ul className="mt-2 flex flex-col gap-2 px-5">
        {stores.map((s) => (
          <li key={s.name} className={`flex items-center gap-3 rounded-[14px] border p-3.5 ${s.selected ? "border-blue bg-tint" : "border-line bg-white"}`}>
            <span className={`grid size-9 place-items-center rounded-full ${s.selected ? "bg-blue text-white" : "bg-bg-muted text-muted"}`}><Store className="size-4" /></span>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-ink">{s.name}</p>
              <p className="text-[11px] text-muted">{s.city}</p>
              {s.gps && <p className="mt-1 flex items-center gap-1 text-[10px] font-bold text-ok"><MapPin className="size-3" /> GPS confirmed</p>}
            </div>
            <span className="text-[12px] font-semibold text-muted">{s.dist}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto px-5 pb-8">
        <button type="button" className="h-12 w-full rounded-[12px] bg-blue text-[15px] font-bold text-white">Confirm store</button>
        <p className="mt-3 text-center text-[11px] font-semibold text-blue">Define a new position</p>
      </div>
    </div>
  );
}

export function LoginScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#eaf2ff] via-white to-[#f4f7fb] font-body">
      <StatusBar />
      <div className="flex items-center justify-between px-6 pt-2">
        <span className="grid size-8 place-items-center rounded-full bg-blue text-white"><span className="ml-0.5 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" /></span>
        <span className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-bold text-ink">EN</span>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <img src={asset("/images/brand/logo-mark-blue.svg")} alt="" className="size-[72px]" />
        <p className="mt-2 font-display text-[26px] font-bold text-blue">NeuraTracker</p>
        <p className="text-[14px] text-muted">Access your field missions</p>
      </div>
      <div className="mx-6 mt-8 rounded-[20px] bg-white p-5 shadow-[0_18px_40px_rgba(11,21,38,0.08)]">
        <label className="text-[13px] font-semibold text-ink">Email</label>
        <div className="mt-1.5 flex h-12 items-center rounded-[12px] border border-line px-4 text-[15px] text-ink">jhon.doe@gmail.com</div>
        <label className="mt-4 block text-[13px] font-semibold text-ink">Password</label>
        <div className="mt-1.5 flex h-12 items-center justify-between rounded-[12px] border border-line px-4 text-[15px] tracking-[0.2em] text-ink">••••••••• <Eye className="size-4 text-muted" /></div>
        <button type="button" className="mt-5 h-12 w-full rounded-[12px] bg-primary text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(37,99,235,0.3)]">Log in</button>
        <p className="mt-3 text-center text-[13px] font-semibold text-blue">Forgot password?</p>
      </div>
      <p className="mt-8 text-center text-[13px] text-muted">Don&apos;t have an account?</p>
      <p className="text-center text-[13px] font-semibold text-blue">Create your account</p>
      <p className="mt-auto pb-6 text-center text-[10px] text-muted-2">© 2026 NeuraTracker Enterprise. All rights reserved.</p>
    </div>
  );
}
