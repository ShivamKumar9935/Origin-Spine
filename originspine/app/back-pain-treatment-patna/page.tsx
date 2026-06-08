import type { Metadata } from "next";

// ─── SEO Metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Back Pain Treatment in Patna | Origin Spine Clinic",
  description:
    "Get expert back pain treatment in Patna by Dr. Vikash Singh. Non-surgical physiotherapy, spinal decompression & acupuncture. 20+ years experience, 5000+ patients treated. Book free consultation.",
  keywords: [
    "back pain treatment in Patna",
    "physiotherapy clinic Patna",
    "spine specialist Patna",
    "slip disc treatment Patna",
    "non-surgical back pain Patna",
    "Dr. Vikash Singh physiotherapist",
  ],
  openGraph: {
    title: "Back Pain Treatment in Patna | Origin Spine Clinic",
    description:
      "Expert back pain treatment in Patna by Dr. Vikash Singh. Non-surgical, drug-free approach. 5000+ patients treated. Book your free consultation today.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://www.originspineclinic.in/back-pain-treatment-patna",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── Constants ───────────────────────────────────────────────────────────────
const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20Dr.%20Vikash%2C%20I%20need%20back%20pain%20treatment%20consultation.";
const CALL_URL = "tel:+919876543210";

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Origin Spine Clinic",
  description:
    "Expert back pain treatment centre in Patna offering physiotherapy, spinal decompression and acupuncture.",
  url: "https://www.originspineclinic.in",
  telephone: "+91-98765-43210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fraser Road",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800001",
    addressCountry: "IN",
  },
  medicalSpecialty: "PhysicalTherapy",
  hasMap: "https://maps.google.com/?q=Origin+Spine+Clinic+Patna",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does back pain treatment take in Patna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients see significant relief within 4–6 weeks of consistent physiotherapy. Chronic cases may require 8–12 weeks. Dr. Vikash Singh creates a personalised treatment plan after your first consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Is physiotherapy effective for back pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Physiotherapy is one of the most evidence-backed treatments for back pain. It addresses root causes — weak core, poor posture, disc issues — rather than just masking symptoms. Over 5000 patients at Origin Spine Clinic have achieved lasting relief without surgery.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need surgery for back pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the vast majority of cases, surgery is not required. Studies show that 90%+ of back pain patients — including slip disc cases — recover fully with targeted physiotherapy and spinal decompression. Dr. Vikash Singh will assess your condition and recommend surgery only if absolutely necessary.",
      },
    },
    {
      "@type": "Question",
      name: "What causes back pain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common causes include poor posture, sedentary lifestyle, herniated or slip disc, muscle strain, sciatica, spondylosis, and sports injuries. A proper diagnosis is essential for effective treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Is the treatment drug-free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. At Origin Spine Clinic, we use a completely drug-free, non-surgical approach combining physiotherapy, spinal decompression therapy, dry needling, and acupuncture to heal your spine naturally.",
      },
    },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function WhatsAppButton({
  label = "Book Free Consultation on WhatsApp",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-green-500/30 transition-all duration-200 text-sm sm:text-base ${className}`}
      aria-label="Book consultation via WhatsApp"
    >
      {/* WhatsApp icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 shrink-0"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.532 5.85L.057 23.885a.5.5 0 00.612.612l6.035-1.475A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-4.988-1.366l-.358-.213-3.713.908.927-3.588-.232-.372A9.794 9.794 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
      {label}
    </a>
  );
}

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CALL_URL}
      className={`inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 text-sm sm:text-base active:scale-95 ${className}`}
      aria-label="Call the clinic"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 shrink-0"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
          clipRule="evenodd"
        />
      </svg>
      Call Now
    </a>
  );
}

function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
      {text}
    </span>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function BackPainTreatmentPatnaPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="font-sans text-slate-800 antialiased">

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="hero-heading"
          className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden"
        >
          {/* decorative blobs */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 -left-16 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
            <p className="text-cyan-300 text-sm font-semibold uppercase tracking-widest mb-4">
              Origin Spine Clinic · Patna, Bihar
            </p>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Back Pain Treatment{" "}
              <span className="text-cyan-300">in Patna</span>
            </h1>

            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Expert physiotherapy & non-surgical spine care by{" "}
              <strong className="text-white">Dr. Vikash Singh</strong> —
              helping patients live pain-free for over 15 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton label="Book Free Consultation" />
              <CallButton className="border-white text-white hover:bg-white hover:text-blue-900" />
            </div>

            {/* Trust bar */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto border-t border-blue-700/50 pt-10">
              {[
                { stat: "20+", label: "Years Experience" },
                { stat: "5000+", label: "Patients Treated" },
                { stat: "0", label: "Surgeries Needed" },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-extrabold text-cyan-300">{stat}</p>
                  <p className="text-blue-200 text-xs sm:text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. ABOUT BACK PAIN ──────────────────────────────────────────── */}
        <section
          aria-labelledby="about-heading"
          className="bg-white py-16 sm:py-20"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <SectionBadge text="Understanding Your Pain" />
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2"
              >
                What Causes Back Pain?
              </h2>
              <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
                Back pain is one of the most common health complaints in India.
                Understanding its root cause is the first step toward lasting
                relief.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Causes */}
              <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-black text-sm"
                  >
                    C
                  </span>
                  Common Causes
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  {[
                    "Poor posture from long desk or phone use",
                    "Slip disc (herniated intervertebral disc)",
                    "Muscle strain from heavy lifting or sudden movement",
                    "Sciatica — pain radiating down the leg",
                    "Spondylosis (age-related spine wear)",
                    "Sedentary lifestyle and weak core muscles",
                    "Sports injuries and accidents",
                  ].map((cause) => (
                    <li key={cause} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                      {cause}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Symptoms */}
              <div className="bg-red-50 rounded-2xl p-7 border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-black text-sm"
                  >
                    S
                  </span>
                  Warning Symptoms
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  {[
                    "Dull or sharp pain in the lower, middle, or upper back",
                    "Stiffness after waking up or sitting for long periods",
                    "Pain or numbness shooting into the buttocks or legs",
                    "Difficulty bending, standing, or walking",
                    "Muscle spasms around the spine",
                    "Pain that worsens with coughing or sneezing",
                    "Tingling or weakness in the feet",
                  ].map((symptom) => (
                    <li key={symptom} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      {symptom}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-red-700 bg-red-100 rounded-lg p-3">
                  <strong>Important:</strong> If you experience any of these
                  symptoms for more than 2 weeks, consult Dr. Vikash Singh for
                  an accurate diagnosis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. TREATMENT APPROACH ───────────────────────────────────────── */}
        <section
          aria-labelledby="treatment-heading"
          className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <SectionBadge text="Our Approach" />
              <h2
                id="treatment-heading"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2"
              >
                How We Treat Back Pain in Patna
              </h2>
              <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
                Our multi-modal, evidence-based approach targets the root cause
                — not just the symptoms — for permanent relief.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "🧠",
                  title: "Advanced Physiotherapy",
                  desc: "Targeted exercises, manual therapy, and postural correction to rebuild strength, flexibility, and spinal alignment. Customised programs for each patient.",
                  tag: "Most effective for: Muscle strain, posture issues, post-surgical recovery",
                },
                {
                  icon: "🦴",
                  title: "Spinal Decompression",
                  desc: "Non-surgical traction therapy that gently stretches the spine, relieving pressure on compressed discs and nerves. Highly effective for slip disc and sciatica.",
                  tag: "Most effective for: Slip disc, sciatica, spondylosis",
                },
                {
                  icon: "📍",
                  title: "Acupuncture & Dry Needling",
                  desc: "Precise needle therapy that interrupts pain signals, reduces inflammation, and accelerates healing in deep tissue. Often produces immediate relief.",
                  tag: "Most effective for: Chronic pain, muscle spasms, nerve pain",
                },
              ].map(({ icon, title, desc, tag }) => (
                <article
                  key={title}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {desc}
                  </p>
                  <p className="mt-4 text-xs text-blue-700 bg-blue-50 rounded-lg px-3 py-2 font-medium">
                    {tag}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. WHY CHOOSE US ────────────────────────────────────────────── */}
        <section
          aria-labelledby="why-heading"
          className="bg-blue-900 text-white py-16 sm:py-20"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <SectionBadge text="Why Origin Spine Clinic" />
              <h2
                id="why-heading"
                className="text-3xl sm:text-4xl font-extrabold mt-2"
              >
                Patna&rsquo;s Most Trusted Back Pain Specialists
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏆",
                  title: "20+ Years of Expertise",
                  desc: "Dr. Vikash Singh has spent over a decade specialising exclusively in spine and musculoskeletal conditions.",
                },
                {
                  icon: "👥",
                  title: "5000+ Patients Healed",
                  desc: "Thousands of patients from Patna and across Bihar have achieved lasting pain relief at our clinic.",
                },
                {
                  icon: "💊",
                  title: "100% Drug-Free Treatment",
                  desc: "No painkillers, no dependency. We heal naturally through physiotherapy and evidence-based therapies.",
                },
                {
                  icon: "🔬",
                  title: "Advanced Equipment",
                  desc: "State-of-the-art spinal decompression units, electrotherapy, ultrasound therapy, and more.",
                },
                {
                  icon: "📋",
                  title: "Personalised Plans",
                  desc: "Every patient receives a customised treatment protocol based on thorough diagnosis and lifestyle assessment.",
                },
                {
                  icon: "🚫",
                  title: "Surgery-Free Results",
                  desc: "Over 90% of our patients — including slip disc cases — recover fully without any surgical intervention.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-blue-800/50 rounded-xl p-6 border border-blue-700/50"
                >
                  <div className="text-3xl mb-3" aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="font-bold text-base text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. PATIENT RESULT ───────────────────────────────────────────── */}
        <section
          aria-labelledby="result-heading"
          className="bg-white py-16 sm:py-20"
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <SectionBadge text="Real Results" />
              <h2
                id="result-heading"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2"
              >
                Patient Success Stories
              </h2>
              <p className="text-slate-500 mt-3">
                Real outcomes from real patients treated at Origin Spine Clinic,
                Patna.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  name: "Rajesh Kumar, 42",
                  location: "Boring Road, Patna",
                  before: "Chronic lower back pain for 2+ years. Couldn't sit at his desk for more than 20 minutes.",
                  result: "Pain-free in 6 weeks with physiotherapy and spinal decompression. Back to full-time work.",
                  stars: 5,
                },
                {
                  name: "Sunita Devi, 55",
                  location: "Kankarbagh, Patna",
                  before: "Severe sciatica with shooting pain down the left leg. Doctors advised surgery.",
                  result: "Avoided surgery completely. Full recovery in 10 weeks through targeted decompression therapy.",
                  stars: 5,
                },
                {
                  name: "Amit Singh, 34",
                  location: "Patliputra Colony, Patna",
                  before: "L4-L5 slip disc with leg numbness. Was on daily painkillers for 8 months.",
                  result: "Off all medications in 3 weeks. Complete disc recovery confirmed by MRI after 3 months.",
                  stars: 5,
                },
                {
                  name: "Priya Mishra, 29",
                  location: "Bailey Road, Patna",
                  before: "Upper back stiffness and headaches from 10-hour desk job. Tried multiple clinics with no relief.",
                  result: "Posture corrected, stiffness eliminated in 4 weeks. Headaches resolved as a bonus.",
                  stars: 5,
                },
              ].map(({ name, location, before, result, stars }) => (
                <article
                  key={name}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div
                    className="flex gap-0.5 mb-3"
                    aria-label={`${stars} out of 5 stars`}
                  >
                    {Array.from({ length: stars }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg" aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center shrink-0 text-sm" aria-hidden="true">
                      {name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm" itemProp="author">
                        {name}
                      </p>
                      <p className="text-slate-400 text-xs">{location}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-500">
                      <span className="font-semibold text-red-600">Before: </span>
                      {before}
                    </p>
                    <p className="text-slate-700" itemProp="reviewBody">
                      <span className="font-semibold text-green-600">After: </span>
                      {result}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="faq-heading"
          className="bg-slate-50 py-16 sm:py-20"
        >
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <SectionBadge text="FAQ" />
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 mt-3">
                Common questions about back pain treatment in Patna, answered by
                Dr. Vikash Singh.
              </p>
            </div>

            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq) => (
                <details
                  key={faq.name}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex justify-between items-center cursor-pointer px-6 py-5 font-semibold text-slate-800 text-sm sm:text-base list-none select-none hover:bg-slate-50 transition-colors">
                    {faq.name}
                    <span
                      aria-hidden="true"
                      className="ml-4 shrink-0 text-blue-600 group-open:rotate-180 transition-transform duration-200"
                    >
                      ▾
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          aria-labelledby="cta-heading"
          className="bg-gradient-to-br from-blue-800 to-blue-950 text-white py-16 sm:py-20"
        >
          <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl" aria-hidden="true">
              🩺
            </div>
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl font-extrabold mb-4"
            >
              Start Your Recovery Today
            </h2>
            <p className="text-blue-200 text-base sm:text-lg mb-8 leading-relaxed">
              Don&rsquo;t let back pain control your life. Book a free
              consultation with Dr. Vikash Singh — Patna&rsquo;s leading spine
              physiotherapist — and get a personalised treatment plan in your
              first visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton label="Book Free Consultation" />
              <CallButton className="border-white text-white hover:bg-white hover:text-blue-900" />
            </div>
            <p className="mt-6 text-blue-300 text-xs">
              📍 Fraser Road, Patna, Bihar &nbsp;|&nbsp; Mon–Sat 9AM–7PM
            </p>
          </div>
        </section>

      </main>
    </>
  );
}