"use client";

import { useState, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type PainKey = "headache" | "backPain" | "kneePain" | "neckPain" | "stress";

interface PainData {
  label: string;
  icon: string;
  treatment: string;
  explanation: string;
  emoji: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PAIN_DATA: Record<PainKey, PainData> = {
  headache: {
    label: "Headache",
    icon: "🧠",
    treatment: "Neurological & Trigger Point Therapy",
    explanation:
      "Chronic headaches often stem from cervical tension, poor posture, or trigger points in the neck and shoulders. Our targeted therapy releases muscle tension, realigns the cervical spine, and provides lasting relief without painkillers.",
    emoji: "🧠",
  },
  backPain: {
    label: "Back Pain",
    icon: "🦴",
    treatment: "Spinal Decompression & Physiotherapy",
    explanation:
      "Whether it's a slipped disc, lumbar strain, or sciatica — our multi-modal approach combines spinal decompression, core strengthening, and manual therapy to eliminate pain at the root cause.",
    emoji: "🦴",
  },
  kneePain: {
    label: "Knee Pain",
    icon: "🦵",
    treatment: "Knee Rehabilitation & Acupuncture",
    explanation:
      "Knee pain from arthritis, sports injuries, or overuse responds excellently to our combination of therapeutic exercises, electrotherapy, and acupuncture — helping you walk, climb, and live pain-free.",
    emoji: "🦵",
  },
  neckPain: {
    label: "Neck Pain",
    icon: "🫀",
    treatment: "Cervical Traction & Myofascial Release",
    explanation:
      "Desk work, mobile use, and poor posture create chronic cervical pain. Our cervical traction, dry needling, and posture correction protocol delivers rapid relief and prevents recurrence.",
    emoji: "🫀",
  },
  stress: {
    label: "Stress",
    icon: "🌿",
    treatment: "Holistic Stress & Pain Management",
    explanation:
      "Stress manifests physically — as tight muscles, headaches, and fatigue. Our holistic approach integrates acupuncture, breathing techniques, and relaxation therapy to restore your body and mind.",
    emoji: "🌿",
  },
};

const TREATMENTS = [
  {
    icon: "🏃",
    title: "Physiotherapy",
    desc: "Evidence-based movement therapy to restore function, reduce pain, and build lasting strength through targeted exercise protocols.",
    tag: "Most Popular",
  },
  {
    icon: "🪡",
    title: "Acupuncture",
    desc: "Ancient wisdom meets modern science. Fine needle therapy that stimulates natural healing pathways for chronic pain and systemic conditions.",
    tag: null,
  },
  {
    icon: "💊",
    title: "Pain Management",
    desc: "Drug-free, non-surgical pain control using electrotherapy, ultrasound, TENS, and advanced manual techniques.",
    tag: null,
  },
  {
    icon: "🔄",
    title: "Rehabilitation",
    desc: "Post-injury and post-surgical recovery programs designed to get you back to full capacity — faster and stronger.",
    tag: null,
  },
];

const TESTIMONIALS = [
  {
    name: "Rakesh Kumar",
    location: "Patna",
    problem: "Chronic lower back pain (2 years)",
    result: "Pain-free in 6 weeks",
    quote:
      "I had tried everything for my back pain. Dr. Vikash's treatment approach was completely different — systematic, thorough, and it actually worked. I feel like I have my life back.",
    stars: 5,
  },
  {
    name: "Sunita Devi",
    location: "Patna",
    problem: "Severe cervical spondylosis",
    result: "80% improvement in 1 month",
    quote:
      "The cervical pain was making it impossible to work. After treatment at Origin Spine, the relief was remarkable. Dr. Singh explains everything clearly and the staff is very caring.",
    stars: 5,
  },
  {
    name: "Amit Sinha",
    location: "Patna",
    problem: "Knee arthritis & difficulty walking",
    result: "Walking normally now",
    quote:
      "I was told I might need surgery. Dr. Vikash treated me with physiotherapy and acupuncture. Within 2 months I was walking without pain. Truly exceptional care.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    location: "Patna",
    problem: "Chronic migraines & stress headaches",
    result: "No headaches in 3 months",
    quote:
      "Constant migraines were ruining my quality of life. The trigger point therapy and lifestyle guidance at Origin Spine has been life-changing. Highly recommended!",
    stars: 5,
  },
];

const WHY_CHOOSE = [
  {
    icon: "🏅",
    title: "20+ Years of Expertise",
    desc: "Dr. Vikash Singh brings deep clinical expertise across a wide spectrum of musculoskeletal and neurological conditions.",
  },
  {
    icon: "🎯",
    title: "Personalised Treatment",
    desc: "No cookie-cutter plans. Every patient receives a treatment protocol tailored to their unique condition and lifestyle.",
  },
  {
    icon: "🌿",
    title: "Natural, Drug-Free Healing",
    desc: "We prioritise the body's own healing mechanisms — no dependency-forming medications, no unnecessary procedures.",
  },
  {
    icon: "📈",
    title: "Proven Success Rate",
    desc: "Over 5,000 patients treated with consistently high outcomes. Our results speak louder than any claim.",
  },
  {
    icon: "🤝",
    title: "Compassionate Care",
    desc: "We understand that pain is personal. Our team creates a warm, supportive environment for every patient.",
  },
  {
    icon: "🔬",
    title: "Evidence-Based Methods",
    desc: "All treatments are grounded in current clinical research — traditional wisdom combined with modern science.",
  },
];

// ─── Dropdown treatment links ─────────────────────────────────────────────────

const TREATMENT_LINKS = [
  { label: "Back Pain", href: "/back-pain-treatment-patna", icon: "🦴" },
  { label: "Knee Pain", href: "/knee-pain-treatment-patna", icon: "🦵" },
  { label: "Slip Disc", href: "/slip-disc-treatment-patna", icon: "💠" },
  { label: "Physiotherapy", href: "/physiotherapy-in-patna", icon: "🏃" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Mobile Menu Component ────────────────────────────────────────────────────

function MobileTreatmentsMenu({
  WHATSAPP_URL,
  onClose,
}: {
  WHATSAPP_URL: string;
  onClose: () => void;
}) {
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  return (
    <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-1">
      {/* Treatments accordion */}
      <div>
        <button
          onClick={() => setTreatmentsOpen(!treatmentsOpen)}
          className="w-full flex items-center justify-between text-sm font-medium text-slate-700 py-2.5 px-2 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <span>Treatments</span>
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              treatmentsOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Accordion content */}
        <div
          className={`overflow-hidden transition-all duration-200 ease-out ${
            treatmentsOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-3 pt-1 pb-2 flex flex-col gap-0.5">
            {TREATMENT_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
              >
                <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-sm flex-shrink-0">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
                <svg
                  className="w-3.5 h-3.5 ml-auto text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Other nav links */}
      {["About", "Testimonials", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={onClose}
          className="text-sm font-medium text-slate-700 py-2.5 px-2 rounded-lg hover:bg-slate-50 transition-colors"
        >
          {item}
        </a>
      ))}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-sm font-semibold text-white bg-blue-600 px-5 py-3 rounded-xl text-center"
        onClick={onClose}
      >
        📲 Book on WhatsApp
      </a>
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function HomePage() {
  const [selectedPain, setSelectedPain] = useState<PainKey | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const WHATSAPP_URL =
    "https://wa.me/919546999469?text=Hello%20Dr.%20Vikash%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Origin%20Spine.";
  const CALL_URL = "tel:+919546999469";

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md shadow-blue-200">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
            <div>
              <span className="font-bold text-slate-900 text-base tracking-tight">Origin Spine</span>
              <span className="block text-[10px] text-blue-600 font-medium -mt-0.5 tracking-wide">
                Pain Relief Clinic, Patna
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {/* ── Treatments Dropdown ── */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-1">
                Treatments
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50
                  opacity-0 invisible translate-y-2
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  transition-all duration-200 ease-out"
              >
                {/* Arrow pointer */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />

                {TREATMENT_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-1.5 group/item"
                  >
                    <span className="w-7 h-7 rounded-lg bg-slate-50 group-hover/item:bg-blue-100 flex items-center justify-center text-base transition-colors flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    <svg
                      className="w-3.5 h-3.5 ml-auto text-slate-300 group-hover/item:text-blue-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Other Nav Links */}
            {["About", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/prescription"
              className="text-sm font-semibold text-slate-700 border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all"
            >
              Doctor Panel
            </a>
            <a
              href={CALL_URL}
              className="text-sm font-semibold text-slate-700 border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all"
            >
              📞 Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book on WhatsApp
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <MobileTreatmentsMenu
            WHATSAPP_URL={WHATSAPP_URL}
            onClose={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-white">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-100/60 to-transparent rounded-full -translate-y-32 translate-x-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-blue-50/40 to-transparent rounded-full translate-y-20 -translate-x-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — Content */}
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block" />
                Patna&apos;s Trusted Spine & Pain Specialist
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
                Get Relief From Pain{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  Without Surgery
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                Trusted clinic in Patna with{" "}
                <strong className="text-slate-800 font-semibold">20+ years experience</strong> treating back pain,
                knee pain, cervical issues, and more — naturally and effectively.
              </p>

              {/* Stats mini row */}
              <div className="flex flex-wrap gap-6 mb-10">
                {[
                  { val: "5000+", label: "Patients Treated" },
                  { val: "20+", label: "Years Experience" },
                  { val: "0", label: "Surgeries Needed" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-blue-600">{s.val}</div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-7 py-4 rounded-2xl shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-0.5 active:translate-y-0 transition-all text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book on WhatsApp
                </a>
                <a
                  href={CALL_URL}
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 font-bold px-7 py-4 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all text-base"
                >
                  📞 Call Now
                </a>
              </div>
            </div>

            {/* Right — Doctor card */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl blur-2xl scale-110" />
                {/* Card */}
                <div className="relative bg-gradient-to-br from-white to-blue-50/80 border border-blue-100 rounded-3xl shadow-2xl shadow-blue-100 p-6 w-72 sm:w-80">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 mb-5 overflow-hidden">
                    <img
                      src="/doctor1.jpg"
                      alt="Dr Vikash Singh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-slate-900 text-lg">Dr. Vikash Singh</h3>
                    <p className="text-blue-600 text-sm font-medium mt-0.5">Spine & Pain Specialist</p>
                    <div className="flex justify-center mt-3 mb-1">
                      <StarRating count={5} />
                    </div>
                    <p className="text-xs text-slate-500">Trusted by 5000+ patients in Patna</p>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -top-3 -right-3 bg-white border border-blue-100 shadow-lg rounded-2xl px-3 py-1.5 text-xs font-bold text-blue-700 flex items-center gap-1">
                    ✅ 20+ Yrs
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-white border border-green-100 shadow-lg rounded-2xl px-3 py-1.5 text-xs font-bold text-green-700 flex items-center gap-1">
                    🌿 Drug-Free
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="py-5 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { icon: "🏅", val: "20+", label: "Years Experience" },
              { icon: "👥", val: "5000+", label: "Patients Treated" },
              { icon: "🌿", val: "Drug-Free", label: "Treatment" },
              { icon: "🪡", val: "Acupuncture", label: "Certified" },
              { icon: "🏥", val: "Patna", label: "#1 Spine Clinic" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center text-white py-2">
                <span className="text-xl mb-1">{item.icon}</span>
                <span className="font-extrabold text-sm sm:text-base leading-tight">{item.val}</span>
                <span className="text-blue-200 text-[11px] sm:text-xs mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain Selector ── */}
      <section id="treatments" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Pain Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              What problem are you facing?
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-base">
              Select your condition below and we&apos;ll show you the ideal treatment pathway
            </p>
          </div>

          {/* Pain cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
            {(Object.entries(PAIN_DATA) as [PainKey, PainData][]).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setSelectedPain(key === selectedPain ? null : key)}
                className={`group flex flex-col items-center gap-2 p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                  selectedPain === key
                    ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-100 -translate-y-1"
                    : "border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 hover:-translate-y-0.5"
                }`}
              >
                <span className="text-3xl">{data.icon}</span>
                <span
                  className={`text-sm font-semibold ${
                    selectedPain === key ? "text-blue-700" : "text-slate-700"
                  }`}
                >
                  {data.label}
                </span>
                {selectedPain === key && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Dynamic result */}
          {selectedPain && (
            <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 shadow-xl shadow-blue-50 transition-all">
              <div className="absolute top-0 right-0 text-[120px] opacity-5 leading-none pointer-events-none select-none">
                {PAIN_DATA[selectedPain].emoji}
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-blue-200">
                  {PAIN_DATA[selectedPain].icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-1 block">
                    Recommended Treatment
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                    {PAIN_DATA[selectedPain].treatment}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
                    {PAIN_DATA[selectedPain].explanation}
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-md shadow-blue-200 hover:-translate-y-0.5 transition-all text-sm whitespace-nowrap"
                >
                  Book Treatment →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Treatments Section ── */}
      <section className="py-20 bg-slate-50" id="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Our Specialties
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              World-Class Pain Treatments
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Advanced therapies for physiotherapy clinic in Patna — combining traditional techniques with modern
              evidence-based medicine
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TREATMENTS.map((t) => (
              <div
                key={t.title}
                className="group relative bg-white rounded-3xl p-6 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {t.tag && (
                  <span className="absolute -top-2.5 left-5 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    {t.tag}
                  </span>
                )}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-2xl mb-4 transition-colors">
                  {t.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{t.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
                <div className="mt-4 text-blue-600 text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Treat Section ── */}
      <section className="py-20 bg-gradient-to-br from-blue-50/60 via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              How We Treat
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              A proven 4-step system that gets to the root of your pain — not just the symptoms
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent pointer-events-none" />

            {[
              {
                step: "01",
                icon: "🔍",
                title: "Deep Diagnosis",
                desc: "Thorough assessment to identify the exact root cause of your pain — not guesswork.",
                color: "bg-blue-50 border-blue-100",
                numBg: "bg-blue-100 text-blue-700",
              },
              {
                step: "02",
                icon: "📋",
                title: "Custom Plan",
                desc: "A personalised multi-modal treatment protocol designed around your unique condition.",
                color: "bg-indigo-50 border-indigo-100",
                numBg: "bg-indigo-100 text-indigo-700",
              },
              {
                step: "03",
                icon: "⚡",
                title: "Targeted Therapy",
                desc: "Evidence-based physiotherapy, acupuncture, and advanced manual techniques.",
                color: "bg-violet-50 border-violet-100",
                numBg: "bg-violet-100 text-violet-700",
              },
              {
                step: "04",
                icon: "✅",
                title: "Lasting Recovery",
                desc: "Rehabilitation, lifestyle guidance, and prevention to keep you pain-free long term.",
                color: "bg-emerald-50 border-emerald-100",
                numBg: "bg-emerald-100 text-emerald-700",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className={`relative flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl border-2 ${item.color} hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Step number */}
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-extrabold px-3 py-1 rounded-full ${item.numBg}`}
                >
                  {item.step}
                </span>
                <div className="text-4xl mb-4 mt-3">{item.icon}</div>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 sm:p-10 text-center shadow-2xl shadow-blue-200">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">
              Trusted by 5000+ patients
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Want to know exactly how we&apos;ll treat your pain?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-lg mx-auto mb-8">
              Discover our complete treatment philosophy, techniques, and what to expect at Origin Spine —
              from your first visit to full recovery.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/How-we-treat"
                className="inline-flex items-center gap-3 bg-white text-blue-700 font-extrabold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 hover:shadow-xl text-base group"
              >
                <span>See How We Treat</span>
                <span className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                  →
                </span>
              </a>
              <div className="flex items-center gap-2 text-blue-200 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                Drug-free &nbsp;·&nbsp; Non-surgical &nbsp;·&nbsp; Personalised
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* ── Doctor Video Section ── 
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
            Meet The Doctor
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Hear From Dr. Vikash Singh
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10">
            Watch Dr. Vikash explain his approach to pain treatment in Patna — and why thousands trust Origin Spine for
            their recovery
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 border border-blue-50">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center gap-4">
              <iframe
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Dr. Vikash Singh - Origin Spine Patna"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {[
              "✅ 20+ Years Clinical Experience",
              "🎓 Certified Pain Specialist",
              "🌿 Holistic Treatment Philosophy",
            ].map((badge) => (
              <span key={badge} className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-full font-medium">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Testimonials ── */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3 block">
              Patient Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Real People, Real Results</h2>
            <p className="text-blue-200 max-w-lg mx-auto">
              Thousands of patients across Patna have reclaimed their lives through treatment at Origin Spine
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <StarRating count={t.stars} />
                <p className="text-white/90 text-sm leading-relaxed mt-3 mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold text-white">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-blue-300 text-xs">{t.location}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-1">
                    <span className="text-xs text-red-300 font-medium">🔴 {t.problem}</span>
                    <span className="text-xs text-green-300 font-medium">✅ {t.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
              Why Origin Spine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              The Gold Standard in Pain Treatment in Patna
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              We&apos;ve built our reputation on outcomes — not promises. Here&apos;s what makes us different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
            Appointments Available Today
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Pain-Free?
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of patients in Patna who have found lasting relief at Origin Spine. Book your consultation
            today — it&apos;s the first step to a pain-free life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-green-900/50 hover:shadow-green-700/60 hover:-translate-y-0.5 active:translate-y-0 transition-all text-base sm:text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              👉 Book Appointment on WhatsApp
            </a>
            <a
              href={CALL_URL}
              className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 font-semibold px-7 py-4 rounded-2xl transition-all text-base"
            >
              📞 Call the Clinic
            </a>
          </div>

          <p className="mt-8 text-slate-500 text-sm">
            📍 Origin Spine Clinic · Patna, Bihar, India · Open 7 days a week
          </p>
        </div>
      </section>

      {/* ── Location Section ── */}
      <section className="py-20 bg-gray-50" id="location" aria-label="Clinic location in Patna">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">Find Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Visit Our Clinic in Patna</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              Your trusted{" "}
              <strong className="text-slate-700 font-semibold">physiotherapy clinic in Patna</strong> — easily
              accessible, modern facilities, and a caring team ready to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* LEFT — Info */}
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex gap-4 items-start hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-xl">
                  📍
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Clinic Address</p>
                  <address className="not-italic text-slate-600 text-sm leading-relaxed">
                    <strong className="text-slate-800">
                      Spine Wallah Physiotherapy &amp; Chiropractic Clinic
                    </strong>
                    <br />
                    Patna, Bihar, India
                  </address>
                  <span className="inline-block mt-2 text-xs text-blue-600 font-semibold bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                    Best pain treatment in Patna
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex gap-4 items-center hover:shadow-md transition-shadow group">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-xl">
                  📞
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Call Us</p>
                  <a href={CALL_URL} className="font-bold text-slate-900 text-lg hover:text-blue-600 transition-colors">
                    +91 95469 99469
                  </a>
                </div>
                <a
                  href={CALL_URL}
                  className="flex-shrink-0 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                >
                  Call →
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex gap-4 items-center hover:shadow-md transition-shadow group">
                <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 text-xl">
                  💬
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 text-lg hover:text-green-600 transition-colors"
                  >
                    +91 95469 99469
                  </a>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                >
                  Chat →
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex gap-4 items-start hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 text-xl">
                  🕐
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-2">Clinic Hours</p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                    {[
                      ["Monday – Saturday", "9:00 AM – 7:00 PM"],
                      ["Sunday", "10:00 AM – 2:00 PM"],
                    ].map(([day, time]) => (
                      <div key={day} className="contents">
                        <span className="text-slate-500">{day}</span>
                        <span className="font-semibold text-slate-800">{time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                    Walk-ins welcome · Appointments preferred
                  </p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  "✅ Verified Clinic",
                  "🏅 20+ Years Experience",
                  "🌿 Drug-Free Treatment",
                  "⭐ 5000+ Patients",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — Map */}
            <div className="relative flex flex-col">
              <div className="flex-1 rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-200 min-h-[380px] md:min-h-0">
                <iframe
                  title="Spine Wallah Physiotherapy & Chiropractic Clinic — Patna location map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d203.49625570765585!2d85.1381708!3d25.6072116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59c6cf9a19ad%3A0x81d6971e09e0bf61!2sSpine%20Wallah%20physiotherapy%20%26%20chiropractic%20clinic!5e1!3m2!1sen!2sin!4v1780663806047!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "380px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white text-sm flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Origin Spine Clinic</p>
                    <p className="text-slate-500 text-xs">Patna, Bihar — Get Directions</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Spine+Wallah+Physiotherapy+Patna+Bihar+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-md shadow-blue-200"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
                <span className="font-bold text-white text-base">Origin Spine</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Patna&apos;s leading spine and pain management clinic. Drug-free, evidence-based treatment by Dr.
                Vikash Singh.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Treatments</h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Physiotherapy in Patna",
                  "Acupuncture in Patna",
                  "Pain Management",
                  "Spine Rehabilitation",
                  "Cervical Treatment",
                ].map((s) => (
                  <li key={s}>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Conditions Treated</h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Back Pain Treatment Patna",
                  "Knee Pain",
                  "Neck / Cervical Pain",
                  "Headache & Migraine",
                  "Sports Injuries",
                ].map((c) => (
                  <li key={c}>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Origin Spine Clinic, Patna, Bihar, India</span>
                </li>
                <li>
                  <a
                    href={CALL_URL}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <span>📞</span> +91 95469 99469
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-green-400 transition-colors"
                  >
                    <span>💬</span> WhatsApp Us
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>🕐</span> Mon–Sun: 9 AM – 7 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <p>© {new Date().getFullYear()} Origin Spine — Dr. Vikash Singh. All rights reserved.</p>
            <p className="text-slate-600">
              Pain treatment in Patna · Physiotherapy clinic in Patna · Acupuncture in Patna
            </p>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 z-50 transition-all hover:-translate-y-0.5"
      >
        💬 Chat Now
      </a>
    </main>
  );
}