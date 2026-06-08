
import { Metadata } from "next";

// ── Contact constants ──────────────────────────────────────────────────────────
const WHATSAPP_URL =
  "https://wa.me/919546999469?text=Hello%2C%20I%20want%20to%20book%20a%20physiotherapy%20session%20in%20Patna.";
const CALL_URL = "tel:+919546999469";

// ── Inline metadata export (used by Next.js App Router) ──────────────────────
export const metadata: Metadata = {
  title: "Best Physiotherapy in Patna | 20+ Years Experience | 5000+ Patients",
  description:
    "Looking for expert physiotherapy in Patna? Our clinic offers drug-free, non-surgical treatment for back pain, knee pain, sciatica, slip disc & more. 20+ years experience. Book now!",
};

// ── Small reusable helpers ─────────────────────────────────────────────────────
function WhatsAppBtn({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 px-6 py-3 text-white font-semibold shadow-lg shadow-green-500/30 text-sm md:text-base ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Book on WhatsApp
    </a>
  );
}

function CallBtn({ className = "" }: { className?: string }) {
  return (
    <a
      href={CALL_URL}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-white hover:bg-white hover:text-teal-700 active:scale-95 transition-all duration-200 px-6 py-3 text-white font-semibold text-sm md:text-base ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      Call Now
    </a>
  );
}

function SectionTitle({
  label,
  title,
  subtitle,
  center = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          {label}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── Conditions data ────────────────────────────────────────────────────────────
const CONDITIONS = [
  {
    icon: "🦴",
    name: "Back Pain",
    desc: "Whether it is lower back pain from prolonged sitting or upper back strain from poor posture, targeted physiotherapy exercises and manual therapy can relieve pain and restore normal spinal function without the need for surgery.",
  },
  {
    icon: "🦵",
    name: "Knee Pain",
    desc: "Knee pain caused by arthritis, ligament tears, or overuse injuries responds very well to physiotherapy. Strengthening exercises, ultrasound therapy, and kinesio taping help reduce swelling and restore full range of motion.",
  },
  {
    icon: "🔒",
    name: "Neck Pain",
    desc: "Cervical spondylosis, muscle spasms, and tech-neck are increasingly common in Patna due to long hours on screens. Physiotherapy uses traction, soft-tissue mobilisation, and corrective exercises to eliminate neck stiffness.",
  },
  {
    icon: "💿",
    name: "Slip Disc (Disc Prolapse)",
    desc: "A slipped or herniated disc puts pressure on nearby nerves, causing sharp radiating pain. Conservative physiotherapy treatment — including spinal decompression, McKenzie exercises, and IFT — resolves most cases effectively.",
  },
  {
    icon: "⚡",
    name: "Sciatica",
    desc: "Sciatica causes burning or shooting pain from the lower back down to the leg. Our physiotherapists identify the root cause and design a personalised nerve-mobilisation and core-strengthening programme for lasting relief.",
  },
  {
    icon: "💪",
    name: "Shoulder Pain",
    desc: "Frozen shoulder, rotator cuff injuries, and impingement syndrome can severely limit arm movement. Manual therapy, shoulder mobilisation exercises, and dry needling help you regain full, pain-free shoulder function.",
  },
];

// ── Treatment methods ──────────────────────────────────────────────────────────
const METHODS = [
  {
    icon: "🏋️",
    title: "Therapeutic Exercises",
    desc: "Customised exercise programmes designed to strengthen weak muscles, improve flexibility, correct posture, and prevent re-injury. Each programme is tailored to your specific condition and fitness level.",
  },
  {
    icon: "🪡",
    title: "Acupuncture (Needle Therapy)",
    desc: "Fine, sterile needles are inserted at precise pressure points to stimulate the body's natural pain-relief mechanisms. Acupuncture is highly effective for chronic pain, nerve disorders, and muscle spasms.",
  },
  {
    icon: "👐",
    title: "Acupressure",
    desc: "Firm manual pressure is applied to specific acupoints along the body's energy meridians. This drug-free technique relieves tension, improves circulation, and supports the body's healing process.",
  },
  {
    icon: "🔥",
    title: "Cupping / Fire Therapy",
    desc: "Traditional cupping creates gentle suction on the skin to increase blood flow, loosen tight fascia, and draw out toxins. Particularly effective for deep muscle stiffness, sports injuries, and chronic back and shoulder pain.",
  },
];

// ── Why choose us ──────────────────────────────────────────────────────────────
const REASONS = [
  { icon: "🏅", title: "20+ Years Experience", desc: "Over a decade and a half of treating complex musculoskeletal conditions with consistently excellent outcomes." },
  { icon: "👥", title: "5000+ Patients Treated", desc: "Thousands of satisfied patients across Patna and Bihar who have returned to a pain-free, active lifestyle." },
  { icon: "🎯", title: "Personalised Treatment", desc: "No two patients are the same. Every treatment plan is designed around your specific diagnosis, goals, and medical history." },
  { icon: "💊", title: "100% Drug-Free Approach", desc: "We focus on natural, hands-on therapies that heal the root cause — not just mask the symptoms with medication." },
  { icon: "🏥", title: "Advanced Equipment", desc: "We use modern electrotherapy units, ultrasound devices, and other evidence-based tools for faster, more effective recovery." },
  { icon: "❤️", title: "Compassionate Care", desc: "Our team listens, understands, and supports you throughout your recovery journey with empathy and patience." },
];

// ── FAQ data ───────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How many physiotherapy sessions will I need?",
    a: "The number of sessions varies depending on the condition, its severity, and how your body responds to treatment. Acute conditions may resolve in 6–10 sessions, while chronic conditions might require 15–20 or more. After a thorough assessment, our physiotherapist will give you a realistic treatment timeline.",
  },
  {
    q: "Is physiotherapy painful?",
    a: "Physiotherapy should not be painful. You may feel mild discomfort during certain exercises or manual techniques, especially in the initial sessions, but this is temporary and a normal part of the healing process. Our physiotherapists always work within your comfort level and communicate clearly throughout every session.",
  },
  {
    q: "Can physiotherapy replace surgery?",
    a: "In many cases, yes. Research shows that physiotherapy is equally effective — or even superior — to surgery for conditions like knee osteoarthritis, rotator cuff tears, lower back pain, and lumbar disc herniation. We always aim to achieve full recovery through conservative, non-surgical physiotherapy first.",
  },
  {
    q: "How long does recovery take?",
    a: "Recovery time depends on the condition, age, and how consistently you follow your treatment plan. A simple muscle strain may recover in 2–3 weeks, while a disc prolapse or post-surgical rehabilitation may take 2–3 months. Our team tracks your progress and adjusts the plan to ensure the fastest safe recovery.",
  },
  {
    q: "Is physiotherapy effective for long-term pain relief?",
    a: "Yes. Unlike pain medications that only provide temporary relief, physiotherapy addresses the root cause of your pain. By correcting muscle imbalances, improving joint mobility, and teaching you proper movement patterns, physiotherapy delivers lasting relief and significantly reduces the risk of recurrence.",
  },
  {
    q: "Do I need a doctor's referral to visit your clinic?",
    a: "No referral is required. You can book a consultation directly with us. However, if you have existing medical reports, MRI scans, or X-rays, please bring them along as they help our physiotherapist make a more accurate diagnosis and design a better treatment plan.",
  },
];

// ── MAIN PAGE COMPONENT ────────────────────────────────────────────────────────
export default function PhysiotherapyInPatnaPage() {
  return (
    <main className="font-sans text-slate-700 bg-white overflow-x-hidden">

      {/* ── STRUCTURED DATA (JSON-LD) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Best Physiotherapy Clinic in Patna",
            description:
              "Expert physiotherapy in Patna offering non-surgical, drug-free treatment for back pain, knee pain, sciatica, slip disc and more. 20+ years experience.",
            url: "https://yourclinic.com/physiotherapy-in-patna",
            telephone: "+91-9546999469",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Patna",
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
            medicalSpecialty: "Physiotherapy",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "312",
            },
          }),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-500 overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-40 h-40 rounded-full bg-cyan-400/20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto py-20 px-6 md:px-20">
          {/* Badge */}
          <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            #1 Physiotherapy Clinic in Patna
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Best Physiotherapy
            <br />
            <span className="text-cyan-200">in Patna</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Heal faster, move better, and live pain-free — without surgery or
            drugs. Expert care backed by science and compassion.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: "🏅", text: "20+ Years Experience" },
              { icon: "👥", text: "5000+ Patients Treated" },
              { icon: "💊", text: "Non-Surgical Treatment" },
            ].map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-4 py-2 text-white text-sm font-medium"
              >
                <span>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <WhatsAppBtn />
            <CallBtn />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. SEO INTRODUCTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="About Our Clinic"
            title="Expert Physiotherapy in Patna — Healing That Lasts"
          />
          <div className="prose prose-lg max-w-none text-slate-600 space-y-4 leading-relaxed">
            <p>
              Physiotherapy is a science-backed healthcare discipline that uses
              movement, manual therapy, and evidence-based techniques to relieve
              pain, restore function, and prevent future injuries — all without
              medication or surgery. As the population of Patna grows more
              sedentary with desk jobs, long commutes, and increased screen time,
              musculoskeletal problems like back pain, neck stiffness, knee pain,
              and sciatica have become alarmingly common across all age groups.
            </p>
            <p>
              Our clinic has been providing expert{" "}
              <strong>physiotherapy in Patna</strong> for over 15 years. We have
              treated more than 5,000 patients — from young athletes recovering
              from sports injuries to elderly individuals managing arthritis —
              using personalised, drug-free therapy protocols that address the
              root cause of the problem. Whether you are dealing with a sudden
              injury or a chronic condition that has persisted for years, our
              experienced physiotherapists are here to help you reclaim a
              pain-free, active life.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. WHAT IS PHYSIOTHERAPY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-teal-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="Understanding Physiotherapy"
            title="What Is Physiotherapy and How Does It Work?"
            subtitle="A simple, clear explanation for patients seeking help in Patna"
            center
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🩹",
                title: "Pain Relief",
                desc: "Through hands-on manual therapy, targeted exercises, and electrotherapy techniques, physiotherapy reduces inflammation, releases muscle tension, and calms irritated nerves — providing both immediate and long-lasting pain relief.",
              },
              {
                icon: "🚶",
                title: "Movement Improvement",
                desc: "Stiff joints, tight muscles, and poor posture restrict movement and affect your quality of life. Physiotherapy restores full range of motion, improves flexibility, and retrains your body to move correctly and efficiently.",
              },
              {
                icon: "🔬",
                title: "Recovery Without Surgery",
                desc: "Most conditions that are commonly treated with surgery — herniated discs, knee degeneration, rotator cuff tears — can be successfully managed with physiotherapy, helping you avoid the risks and costs of surgical intervention.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-teal-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. CONDITIONS WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label="Conditions We Treat"
            title="Pain Conditions We Treat at Our Patna Clinic"
            subtitle="We specialise in a wide range of musculoskeletal and neurological conditions"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITIONS.map((c) => (
              <div
                key={c.name}
                className="group rounded-2xl border border-slate-100 p-6 hover:border-teal-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 bg-white"
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                  {c.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. OUR TREATMENT METHODS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Treatment Methods
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              Our Therapies &amp; Treatment Techniques
            </h2>
            <p className="mt-3 text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              We combine modern physiotherapy with time-tested traditional
              healing methods for the best possible outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {METHODS.map((m) => (
              <div
                key={m.title}
                className="flex gap-5 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl flex-shrink-0">{m.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {m.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. WHY CHOOSE OUR CLINIC
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label="Why Choose Us"
            title="Why Patna Patients Trust Our Physiotherapy Clinic"
            subtitle="We don't just treat symptoms — we treat people"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl bg-teal-50 border border-teal-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-slate-800 text-base mb-1">
                  {r.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. TREATMENT PROCESS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="How It Works"
            title="Your Journey to Pain-Free Living — Step by Step"
            center
          />
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-200 hidden md:block" />
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Diagnosis &amp; Assessment",
                  desc: "Your first visit includes a thorough physical assessment — we review your medical history, understand your symptoms, evaluate your posture and range of motion, and identify the exact root cause of your pain or dysfunction.",
                },
                {
                  step: "02",
                  title: "Personalised Treatment Plan",
                  desc: "Based on the diagnosis, our physiotherapist creates a customised treatment protocol that outlines the specific therapies, exercises, session frequency, and recovery milestones tailored to your unique condition and goals.",
                },
                {
                  step: "03",
                  title: "Active Therapy Sessions",
                  desc: "You begin your treatment sessions — a combination of hands-on manual therapy, electrotherapy, specialised exercises, acupuncture, or cupping as required. Each session is designed to progressively restore function and reduce pain.",
                },
                {
                  step: "04",
                  title: "Recovery, Review &amp; Prevention",
                  desc: "As you recover, we continuously monitor your progress and adjust the treatment plan. Before discharge, we equip you with a home exercise programme and lifestyle advice to prevent recurrence and maintain your results.",
                },
              ].map((s, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                    {s.step}
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-100 p-5 flex-1 shadow-sm">
                    <h3
                      className="font-bold text-slate-800 text-base mb-1"
                      dangerouslySetInnerHTML={{ __html: s.title }}
                    />
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. FAQ SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            label="FAQ"
            title="Frequently Asked Questions About Physiotherapy in Patna"
            center
          />
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-slate-800 bg-white hover:bg-teal-50 transition-colors">
                  <span>{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-lg font-bold group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-2 text-slate-600 text-sm leading-relaxed bg-white border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          9. FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-teal-600 to-cyan-500 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-white" />
          <div className="absolute bottom-8 right-8 w-56 h-56 rounded-full bg-white" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Book Your Physiotherapy Session in Patna Today
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Don&apos;t let pain hold you back. Our expert physiotherapists are
            ready to help you live a healthier, pain-free life — starting from
            your very first session.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn />
            <CallBtn />
          </div>
          <p className="mt-6 text-white/60 text-sm">
            📍 Patna, Bihar &nbsp;|&nbsp; Mon – Sat: 9 AM – 7 PM
          </p>
        </div>
      </section>
    </main>
  );
}