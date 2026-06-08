"use client";

import Image from "next/image";
import type { Metadata } from "next";

// ── Constants ────────────────────────────────────────────────
const WHATSAPP_URL = "https://wa.me/919546999469?text=Hello%2C%20I%20want%20to%20book%20a%20knee%20pain%20consultation";
const CALL_URL = "tel:+919546999469";

// ── Metadata (works in Server Components; keep here for reference) ──
// export const metadata: Metadata = {
//   title: "Knee Pain Treatment in Patna | Physiotherapy & Arthritis Care",
//   description:
//     "Get expert knee pain treatment in Patna — physiotherapy, manual therapy & electrotherapy for arthritis, ligament injury & meniscus tear. 15+ yrs experience, 5000+ patients cured. Book free consultation today.",
//   keywords: [
//     "knee pain treatment in Patna",
//     "knee physiotherapy Patna",
//     "arthritis treatment Patna",
//     "ligament injury Patna",
//     "knee specialist Patna",
//   ],
// };

// ── Data ─────────────────────────────────────────────────────
const CAUSES = [
  {
    icon: "🦴",
    title: "Arthritis",
    desc: "Wear-and-tear or inflammatory joint damage causing stiffness, swelling, and chronic ache.",
  },
  {
    icon: "💥",
    title: "Ligament Injury",
    desc: "ACL, PCL, or MCL tears from sports or sudden twists leading to instability and pain.",
  },
  {
    icon: "🔄",
    title: "Meniscus Tear",
    desc: "Cartilage damage between the knee bones causing locking, swelling, and sharp pain.",
  },
  {
    icon: "⚖️",
    title: "Obesity",
    desc: "Excess body weight multiplies the load on knee joints, accelerating degeneration.",
  },
];

const TREATMENTS = [
  {
    icon: "🏃",
    title: "Physiotherapy",
    desc: "Personalised exercise programs that strengthen muscles around the knee, restore range of motion, and correct movement patterns to prevent re-injury.",
    badge: "Most Effective",
  },
  {
    icon: "🤲",
    title: "Manual Therapy",
    desc: "Hands-on joint mobilisation, soft-tissue massage, and myofascial release to reduce stiffness and improve circulation in and around the knee.",
    badge: "",
  },
  {
    icon: "⚡",
    title: "Electrotherapy",
    desc: "TENS, IFT, and ultrasound therapy to relieve deep-seated pain, reduce inflammation, and speed up tissue healing — completely drug-free.",
    badge: "Drug-Free",
  },
];

const WHY_US = [
  { stat: "15+", label: "Years of Experience" },
  { stat: "5000+", label: "Patients Treated" },
  { stat: "100%", label: "Drug-Free Methods" },
  { stat: "4.9★", label: "Patient Rating" },
];

const FAQS = [
  {
    q: "How long does recovery from knee pain take?",
    a: "Recovery varies by condition. Mild cases improve in 2–4 weeks with physiotherapy. Chronic conditions like arthritis may require 6–12 weeks of structured treatment. Our specialists provide a personalised timeline after assessment.",
  },
  {
    q: "Do I need surgery for my knee pain?",
    a: "Most knee pain conditions — including moderate arthritis and ligament sprains — respond very well to conservative physiotherapy without surgery. We exhaust all non-surgical options first and refer only when genuinely necessary.",
  },
  {
    q: "How effective is physiotherapy for knee pain?",
    a: "Clinical evidence consistently shows that physiotherapy is as effective as surgery for many knee conditions. Over 85% of our patients report significant pain reduction and restored mobility after a complete treatment plan.",
  },
  {
    q: "Is the treatment painful?",
    a: "Treatment is designed to be comfortable. You may feel mild muscle soreness initially as strength returns, but our therapists continuously adjust intensity to your tolerance. Most patients find sessions relieving, not painful.",
  },
];

const RELIEF_POINTS = [
  { code: "ST36", label: "Improves strength & reduces chronic pain", color: "bg-blue-100 text-blue-700" },
  { code: "Xiyan", label: "Direct knee joint relief & flexibility", color: "bg-green-100 text-green-700" },
  { code: "GB34", label: "Ligament & tendon support", color: "bg-purple-100 text-purple-700" },
  { code: "SP9", label: "Reduces swelling & fluid retention", color: "bg-orange-100 text-orange-700" },
];

// ── Small reusable components ────────────────────────────────
function WhatsAppBtn({ label = "Book on WhatsApp", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-colors duration-200 ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.57A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.24-1.43l-.38-.22-3.69.93.98-3.59-.25-.38A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H7.5c-.17 0-.45.07-.69.35-.23.27-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.82 2.78 4.41 3.9.62.27 1.1.43 1.47.55.62.2 1.18.17 1.63.1.5-.07 1.53-.62 1.75-1.23.22-.6.22-1.12.15-1.23-.07-.1-.27-.17-.57-.32z" />
      </svg>
      {label}
    </a>
  );
}

function CallBtn({ className = "" }: { className?: string }) {
  return (
    <a
      href={CALL_URL}
      className={`inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-full transition-colors duration-200 ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01L6.62 10.79z" />
      </svg>
      Call Now
    </a>
  );
}

// ── Page ─────────────────────────────────────────────────────
export default function KneePainTreatmentPatna() {
  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Knee Pain Treatment Clinic Patna",
            description:
              "Expert knee pain treatment in Patna using physiotherapy, manual therapy, and electrotherapy. Treating arthritis, ligament injury, and meniscus tears.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Patna",
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
            medicalSpecialty: "Physiotherapy",
            availableService: [
              { "@type": "MedicalTherapy", name: "Knee Physiotherapy" },
              { "@type": "MedicalTherapy", name: "Manual Therapy" },
              { "@type": "MedicalTherapy", name: "Electrotherapy" },
            ],
          }),
        }}
      />

      <main className="font-sans text-gray-800 antialiased">

        {/* ══════════════════════════════════════
            1. HERO
        ══════════════════════════════════════ */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white overflow-hidden">
          {/* decorative circles */}
          <span className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <span className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-cyan-300/20 blur-2xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 md:px-20 py-20 md:py-28 text-center">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Patna's Trusted Knee Specialist
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Knee Pain Treatment in Patna
            </h1>

            <p className="mt-5 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Advanced, drug-free relief for{" "}
              <strong className="text-white">arthritis</strong>,{" "}
              <strong className="text-white">ligament injuries</strong>, and{" "}
              <strong className="text-white">meniscus tears</strong> — through
              evidence-based physiotherapy in Patna.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <WhatsAppBtn label="Book Free Consultation" className="text-base" />
              <CallBtn />
            </div>

            {/* trust bar */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              {["✅ 15+ Years Experience", "✅ 5000+ Patients Treated", "✅ 100% Drug-Free"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. CAUSES
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Common Causes of Knee Pain
              </h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                Understanding the root cause is the first step to lasting knee pain relief in Patna.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CAUSES.map(({ icon, title, desc }) => (
                <article
                  key={title}
                  className="bg-blue-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl">{icon}</span>
                  <h3 className="mt-3 font-bold text-gray-800 text-lg">{title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. TREATMENTS
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Our Knee Pain Treatment Methods
              </h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                We use proven, non-surgical techniques tailored to your specific condition for
                knee pain treatment in Patna.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TREATMENTS.map(({ icon, title, desc, badge }) => (
                <article
                  key={title}
                  className="relative bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow"
                >
                  {badge && (
                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {badge}
                    </span>
                  )}
                  <span className="text-4xl">{icon}</span>
                  <h3 className="mt-4 font-bold text-gray-800 text-xl">{title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. KNEE RELIEF POINTS
        ══════════════════════════════════════ */}
        <section className="bg-white py-16 px-6 md:px-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="w-full">
              <Image
                src="/st36.jpg"
                alt="Knee pain relief acupuncture and physiotherapy points diagram"
                width={600}
                height={500}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                  Key Knee Pain Relief Points
                </h2>
                <p className="mt-3 text-gray-600 text-base leading-relaxed">
                  Targeted acupuncture and physiotherapy points stimulate healing at the
                  source — reducing inflammation, restoring joint mobility, and strengthening
                  the muscles that support your knee.
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {RELIEF_POINTS.map(({ code, label, color }) => (
                  <li key={code} className="flex items-start gap-4">
                    <span className={`shrink-0 inline-flex items-center justify-center rounded-lg px-3 py-1 text-sm font-semibold ${color}`}>
                      {code}
                    </span>
                    <span className="text-gray-700 text-sm md:text-base leading-relaxed pt-0.5">{label}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppBtn label="Book Treatment on WhatsApp" className="self-start mt-2" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            5. WHY CHOOSE US
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 md:px-20 bg-blue-700 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              Why Choose Our Knee Pain Clinic in Patna?
            </h2>
            <p className="mt-3 text-blue-200 max-w-xl mx-auto">
              We combine clinical expertise with compassionate care to deliver real, lasting results.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {WHY_US.map(({ stat, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">{stat}</span>
                  <span className="text-blue-200 text-sm text-center">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
              {[
                { icon: "🏥", title: "State-of-the-Art Equipment", desc: "Modern electrotherapy, ultrasound, and rehabilitation equipment for precise, effective treatment." },
                { icon: "👨‍⚕️", title: "Qualified Specialists", desc: "Certified physiotherapists with postgraduate training in musculoskeletal and orthopaedic conditions." },
                { icon: "📋", title: "Personalised Treatment Plans", desc: "Every patient receives a customised programme based on detailed assessment — no one-size-fits-all approach." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white/10 rounded-2xl p-6">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="mt-3 font-bold text-white text-lg">{title}</h3>
                  <p className="mt-2 text-blue-200 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. FAQ
        ══════════════════════════════════════ */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-gray-500">
                Common questions about knee pain treatment in Patna.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 cursor-pointer"
                >
                  <summary className="flex justify-between items-center font-semibold text-gray-800 text-base list-none gap-4">
                    {q}
                    <span className="shrink-0 text-blue-600 text-xl font-bold transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. FINAL CTA
        ══════════════════════════════════════ */}
        <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-cyan-500 to-blue-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Ready to Live Pain-Free?
            </h2>
            <p className="mt-4 text-blue-100 text-lg leading-relaxed">
              Book your consultation for expert knee pain treatment in Patna today.
              Our specialists will assess your condition and design a personalised recovery plan.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <WhatsAppBtn label="Book Your Consultation" className="text-base px-8 py-4" />
              <a
                href={CALL_URL}
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01L6.62 10.79z" />
                </svg>
                Call Us Now
              </a>
            </div>

            <p className="mt-6 text-blue-200 text-sm">
              📍 Serving patients across Patna, Bihar &nbsp;|&nbsp; Mon – Sat: 9 AM – 7 PM
            </p>
          </div>
        </section>

      </main>
    </>
  );
}