import type { Metadata } from "next";

// ── Contact constants ──────────────────────────────────────────────────────────
const WHATSAPP_URL =
  "https://wa.me/919546999469?text=Hello%2C%20I%20want%20to%20book%20a%20slip%20disc%20treatment%20session%20in%20Patna.";
const CALL_URL = "tel:+919546999469";

// ── Metadata (Next.js App Router) ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Slip Disc Treatment in Patna | Non-Surgical | 20+ Years Experience",
  description:
    "Get expert slip disc treatment in Patna without surgery. Our clinic offers physiotherapy, spinal decompression, acupuncture & more. 20+ years experience, 5000+ patients treated. Book now!",
  keywords: [
    "slip disc treatment in Patna",
    "disc herniation treatment Patna",
    "non-surgical slip disc Patna",
    "physiotherapy for slip disc Patna",
    "sciatica treatment Patna",
  ],
  openGraph: {
    title: "Slip Disc Treatment in Patna | Non-Surgical Physiotherapy Clinic",
    description:
      "Heal your slip disc without surgery at Patna's most trusted physiotherapy clinic. 20+ years of experience, 5000+ recovered patients.",
    type: "website",
    locale: "en_IN",
  },
};

// ── Reusable UI primitives (server-safe — no hooks) ───────────────────────────

function WhatsAppButton({ variant = "solid" }: { variant?: "solid" | "outline" }) {
  const base =
    "inline-flex items-center gap-2.5 rounded-full font-semibold text-sm md:text-base px-6 py-3 transition-all duration-200 shadow-md";
  const solid = "bg-green-500 hover:bg-green-600 text-white shadow-green-400/40";
  const outline =
    "border-2 border-white text-white hover:bg-white hover:text-indigo-900";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant === "solid" ? solid : outline}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Book on WhatsApp
    </a>
  );
}

function CallButton({ variant = "solid" }: { variant?: "solid" | "outline" }) {
  const base =
    "inline-flex items-center gap-2.5 rounded-full font-semibold text-sm md:text-base px-6 py-3 transition-all duration-200 shadow-md";
  const solid = "bg-white text-indigo-900 hover:bg-indigo-50 shadow-white/30";
  const outline =
    "border-2 border-white/60 text-white hover:border-white hover:bg-white/10";
  return (
    <a href={CALL_URL} className={`${base} ${variant === "solid" ? solid : outline}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      Call Now
    </a>
  );
}

function SectionHeading({
  label,
  title,
  subtitle,
  center = false,
  light = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {label && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
            light ? "bg-white/20 text-white" : "bg-indigo-100 text-indigo-700"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-2xl md:text-4xl font-extrabold leading-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ── Page data ──────────────────────────────────────────────────────────────────

const SYMPTOMS = [
  {
    icon: "🔥",
    title: "Lower Back Pain",
    desc: "A deep, persistent ache in the lower back is the most common first sign of a slipped disc. The pain worsens with bending, sitting for long periods, or sudden movements.",
  },
  {
    icon: "⚡",
    title: "Radiating Leg Pain (Sciatica)",
    desc: "When the disc presses on the sciatic nerve, sharp or burning pain shoots from the lower back through the buttock, down the leg, and sometimes into the foot.",
  },
  {
    icon: "😶",
    title: "Numbness",
    desc: "Loss of feeling in the leg, foot, or toes occurs when nerve signals are disrupted by disc pressure. Numbness may affect a specific patch of skin or an entire limb.",
  },
  {
    icon: "🌩️",
    title: "Tingling Sensation",
    desc: "A pins-and-needles feeling — similar to a limb falling asleep — is a classic nerve-compression symptom that patients with a slipped disc frequently experience.",
  },
  {
    icon: "🚶",
    title: "Difficulty Walking",
    desc: "In more severe cases, muscle weakness in the leg or foot-drop makes it hard to walk normally. Early treatment is essential to prevent this from progressing.",
  },
];

const CAUSES = [
  {
    icon: "🪑",
    title: "Poor Posture",
    desc: "Prolonged slouching while sitting or hunching over a screen puts uneven pressure on spinal discs, gradually weakening them and making herniation more likely.",
  },
  {
    icon: "🏋️",
    title: "Heavy Lifting",
    desc: "Lifting heavy objects — especially with a bent back rather than the legs — creates sudden, extreme pressure on lumbar discs that can cause them to rupture.",
  },
  {
    icon: "💺",
    title: "Long Hours of Sitting",
    desc: "Sitting for extended periods compresses spinal discs and weakens core muscles, depriving discs of proper nutrition and increasing vulnerability to injury.",
  },
  {
    icon: "💥",
    title: "Trauma or Injury",
    desc: "A fall, a road accident, or a sports injury can immediately cause a disc to herniate by applying sudden, forceful pressure to the spine.",
  },
];

const TREATMENTS = [
  {
    icon: "🏋️",
    title: "Targeted Physiotherapy Exercises",
    desc: "Specific McKenzie exercises and core-stabilisation protocols are prescribed to relieve nerve pressure, strengthen the muscles supporting your spine, and restore safe, pain-free movement.",
  },
  {
    icon: "🔀",
    title: "Spinal Decompression Therapy",
    desc: "Gentle mechanical or manual traction creates negative pressure inside the disc, drawing the herniated material back and relieving the pressure on compressed nerves — often providing immediate relief.",
  },
  {
    icon: "🪡",
    title: "Acupuncture (Needle Therapy)",
    desc: "Ultra-fine sterile needles are placed at precise points along the spine and legs to release endorphins, reduce inflammation, and interrupt pain signals travelling through compressed nerves.",
  },
  {
    icon: "👐",
    title: "Acupressure",
    desc: "Firm, targeted manual pressure on acupoints along the body's meridians relieves muscle spasms around the affected disc, improves local circulation, and accelerates healing.",
  },
  {
    icon: "🔥",
    title: "Cupping Therapy",
    desc: "Traditional cupping creates therapeutic suction on the lower back, increasing blood flow, loosening deep fascial adhesions, and significantly reducing chronic muscle tension around the disc.",
  },
];

const WHY_CHOOSE = [
  {
    icon: "🏅",
    title: "20+ Years of Experience",
    desc: "Our lead physiotherapist has over 15 years of hands-on experience treating complex spinal conditions, including hundreds of slip disc cases across Patna and Bihar.",
  },
  {
    icon: "👥",
    title: "5000+ Patients Recovered",
    desc: "Thousands of patients have returned to an active, pain-free life after completing their slip disc treatment programme at our clinic.",
  },
  {
    icon: "💊",
    title: "100% Non-Surgical Approach",
    desc: "We are committed to helping you recover without the risks, costs, and lengthy downtime of spinal surgery, using proven conservative therapies.",
  },
  {
    icon: "🎯",
    title: "Personalised Treatment Plans",
    desc: "No two spines are alike. Every patient receives a treatment plan built around their specific MRI findings, lifestyle, pain level, and recovery goals.",
  },
  {
    icon: "🔬",
    title: "Evidence-Based Methods",
    desc: "Every technique we use is grounded in current clinical research. We combine the best of modern physiotherapy with time-tested traditional healing methods.",
  },
  {
    icon: "❤️",
    title: "Compassionate, Patient-First Care",
    desc: "We take the time to listen, explain your condition clearly, and support you with empathy throughout every step of your recovery journey.",
  },
];

const RECOVERY_TIMELINE = [
  {
    week: "Week 1",
    tag: "Pain Reduction",
    borderColor: "border-red-300",
    bgColor: "bg-red-50",
    tagColor: "bg-red-100 text-red-700 border-red-300",
    dotColor: "bg-red-400",
    desc: "The primary focus in the first week is reducing acute pain and inflammation. Gentle spinal decompression, acupuncture, and electrotherapy begin to calm the irritated nerve, and most patients notice a significant reduction in pain intensity within the first 3–4 sessions.",
  },
  {
    week: "Week 2–3",
    tag: "Mobility Improves",
    borderColor: "border-amber-300",
    bgColor: "bg-amber-50",
    tagColor: "bg-amber-100 text-amber-700 border-amber-300",
    dotColor: "bg-amber-400",
    desc: "As inflammation subsides, targeted physiotherapy exercises begin. You will notice improved flexibility, reduced leg symptoms, and the ability to sit, stand, and walk for longer periods without significant pain. Core strengthening exercises are gradually introduced.",
  },
  {
    week: "Week 4–6",
    tag: "Functional Recovery",
    borderColor: "border-green-300",
    bgColor: "bg-green-50",
    tagColor: "bg-green-100 text-green-700 border-green-300",
    dotColor: "bg-green-400",
    desc: "By week six, the majority of patients have achieved substantial or full recovery. The disc has stabilised, nerve pressure is relieved, and a strong supporting muscle system has been built. You are discharged with a home maintenance programme to prevent recurrence.",
  },
];

const FAQS = [
  {
    q: "Can a slip disc heal without surgery?",
    a: "Yes — in the vast majority of cases. Studies consistently show that 80–90% of slip disc patients recover fully with conservative physiotherapy treatment, without ever needing surgery. Surgery is typically considered only when there is severe nerve damage, loss of bladder or bowel control, or when months of conservative treatment have failed. Our clinic specialises in achieving full recovery through non-surgical means.",
  },
  {
    q: "How long does slip disc recovery take?",
    a: "Recovery duration depends on the severity of the herniation and how long you have had symptoms. Most patients see significant improvement within 3–6 weeks of consistent physiotherapy. Mild cases may recover in 2–3 weeks, while severe or chronic cases may take 8–12 weeks. After the initial assessment, our physiotherapist will give you a realistic personal timeline.",
  },
  {
    q: "Is physiotherapy effective for slip disc treatment?",
    a: "Physiotherapy is the gold-standard first-line treatment for slip disc recommended by spinal specialists worldwide. It addresses the root cause — poor disc mechanics and weak spinal support — rather than just masking symptoms. A well-designed physiotherapy programme reduces nerve pressure, rebuilds spinal stability, and significantly lowers the chance of recurrence.",
  },
  {
    q: "Is a slip disc a permanent condition?",
    a: "Not necessarily. While the disc structure changes permanently after a herniation, the pain and nerve symptoms are not permanent in most people. With proper physiotherapy, the disc can retract, the nerve calms down, and the surrounding muscles compensate effectively. Many patients become completely symptom-free and live active, normal lives after treatment.",
  },
  {
    q: "Can I walk and exercise with a slip disc?",
    a: "Gentle walking is generally encouraged even during the acute phase — it keeps the spine mobile and promotes healing. However, high-impact activities, heavy lifting, and certain bending or twisting movements should be avoided until your physiotherapist advises otherwise. We will guide you on exactly which activities are safe at every stage of your recovery.",
  },
];

// ── MAIN PAGE COMPONENT ────────────────────────────────────────────────────────
export default function SlipDiscTreatmentPatnaPage() {
  return (
    <main className="font-sans text-slate-700 bg-white overflow-x-hidden">

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Slip Disc Treatment in Patna",
            description:
              "Expert non-surgical slip disc treatment in Patna. Physiotherapy, spinal decompression, acupuncture & cupping therapy. 20+ years experience.",
            url: "https://yourclinic.com/slip-disc-treatment-patna",
            about: {
              "@type": "MedicalCondition",
              name: "Disc Herniation (Slip Disc)",
              associatedAnatomy: {
                "@type": "AnatomicalStructure",
                name: "Lumbar Spine",
              },
            },
            provider: {
              "@type": "MedicalBusiness",
              name: "Best Physiotherapy Clinic in Patna",
              telephone: "+91-9546999469",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Patna",
                addressRegion: "Bihar",
                addressCountry: "IN",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "289",
              },
            },
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ══════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[88vh] flex items-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-800 overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-violet-500/10 pointer-events-none" />
        <div className="absolute bottom-8 right-8 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

        {/* Abstract spine motif */}
        <div className="absolute right-6 md:right-32 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 opacity-10 pointer-events-none select-none" aria-hidden="true">
          {[38, 44, 48, 50, 48, 34, 50, 48, 44, 40, 36, 32].map((w, i) => (
            <div
              key={i}
              className={`rounded bg-white ${i === 5 ? "bg-red-300" : ""}`}
              style={{ width: `${w}px`, height: i === 5 ? "16px" : "10px" }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto py-20 px-6 md:px-20">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Patna&apos;s Trusted Slip Disc Specialists
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Slip Disc Treatment
            <br />
            <span className="text-violet-300">in Patna</span>
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Recover from disc herniation without surgery. Expert, drug-free
            physiotherapy that targets the root cause — not just the pain.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: "💊", text: "Non-Surgical Treatment" },
              { icon: "🏅", text: "20+ Years Experience" },
              { icon: "👥", text: "5000+ Patients Treated" },
            ].map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium"
              >
                <span>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <WhatsAppButton variant="solid" />
            <CallButton variant="outline" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. SEO INTRODUCTION
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Understanding Slip Disc"
            title="Expert Slip Disc Treatment in Patna — Without Surgery"
          />
          <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
            <p>
              A slip disc — medically known as a herniated or prolapsed
              intervertebral disc — is one of the leading causes of severe back
              and leg pain in adults. When the soft inner gel of a spinal disc
              pushes through its outer casing, it presses on nearby nerves,
              causing intense pain, numbness, and weakness that can make even
              simple daily activities feel impossible.
            </p>
            <p>
              As Patna&apos;s working population increasingly shifts toward desk
              jobs, long commutes, and sedentary lifestyles, the incidence of
              slip disc has risen sharply — affecting people as young as their
              twenties and thirties. Many patients are told they need surgery,
              when in reality, the overwhelming majority of slip disc cases can
              be resolved completely through expert{" "}
              <strong>slip disc treatment in Patna</strong> using physiotherapy
              and conservative care.
            </p>
            <p>
              Our clinic has helped over 5,000 patients across Patna and Bihar
              recover from slip disc over 20+ years — without surgery for the
              vast majority. If you are suffering from back pain, sciatica, or a
              diagnosed disc herniation, we can help you reclaim a pain-free
              life.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. WHAT IS SLIP DISC
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Medical Overview"
            title="What Exactly Is a Slip Disc?"
            subtitle="A clear, jargon-free explanation for patients"
            center
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🦴",
                title: "The Disc Between Your Bones",
                desc: "Your spine is made up of 33 vertebrae stacked on top of each other. Between each pair sits a disc — a tough, rubbery cushion with a soft, jelly-like centre. These discs act as shock absorbers, allowing your spine to flex, bend, and twist without pain.",
              },
              {
                icon: "💧",
                title: "Bulging or Herniation",
                desc: "When the tough outer layer of a disc weakens or cracks due to age, injury, or repetitive strain, the soft inner gel can push outward. This is a disc bulge. If the inner material breaks through the outer layer entirely, it is a herniation — commonly called a slip disc.",
              },
              {
                icon: "⚡",
                title: "Nerve Pressure = Pain",
                desc: "The spinal cord and nerve roots pass directly next to the discs. When a disc herniates, it presses on these nerves. This pressure causes the sharp, radiating pain, numbness, and tingling that patients experience — often felt far from the spine, in the legs or feet.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. SYMPTOMS
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Warning Signs"
            title="Symptoms of a Slip Disc — Do You Recognise These?"
            subtitle="Early identification leads to faster, more effective treatment"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SYMPTOMS.map((s) => (
              <div
                key={s.title}
                className="group flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all duration-200"
              >
                <span className="text-3xl flex-shrink-0 mt-0.5">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-1 group-hover:text-indigo-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <p className="text-amber-900 text-sm leading-relaxed">
              <strong>When to seek urgent help:</strong> If you experience loss
              of bladder or bowel control, severe progressive weakness in both
              legs, or numbness in the groin or inner thighs, seek medical
              attention immediately — these may indicate cauda equina syndrome,
              a rare spinal emergency.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. CAUSES
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Root Causes"
            title="What Causes a Slip Disc?"
            subtitle="Understanding the cause is the first step to preventing recurrence"
            center
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {CAUSES.map((c) => (
              <div
                key={c.title}
                className="flex gap-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl">
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-1">{c.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. OUR TREATMENT APPROACH
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-indigo-900 to-violet-900">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Treatment Approach"
            title="How We Treat Slip Disc in Patna"
            subtitle="A multi-modal, evidence-based approach for the best possible recovery"
            center
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TREATMENTS.map((t) => (
              <div
                key={t.title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-bold text-white text-base mb-2">{t.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. WHY CHOOSE OUR CLINIC
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Why Choose Us"
            title="Why Patna Patients Choose Our Slip Disc Clinic"
            subtitle="Results-driven care that puts your recovery first"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-slate-800 text-base mb-1">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. RECOVERY TIMELINE
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Recovery Journey"
            title="What to Expect: Your Slip Disc Recovery Timeline"
            subtitle="Every patient is different, but this is the typical progression"
            center
          />
          <div className="relative space-y-6">
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-red-300 via-amber-300 to-green-400 hidden md:block" />
            {RECOVERY_TIMELINE.map((stage) => (
              <div key={stage.week} className="flex gap-6 items-start">
                <div
                  className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full ${stage.dotColor} shadow-md`}
                />
                <div
                  className={`flex-1 rounded-2xl border p-5 ${stage.bgColor} ${stage.borderColor}`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-extrabold text-slate-800 text-base">
                      {stage.week}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${stage.tagColor}`}
                    >
                      {stage.tag}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-slate-400 text-sm">
            * Timelines are approximate. Your physiotherapist will track progress and
            adjust your plan at every stage.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9. FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions About Slip Disc Treatment in Patna"
            center
          />
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none bg-white hover:bg-indigo-50 transition-colors">
                  <span className="font-semibold text-slate-800 text-sm md:text-base">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl font-bold group-open:rotate-45 transition-transform duration-200 leading-none">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-3 text-slate-600 text-sm leading-relaxed bg-white border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          10. FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full border border-white/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/10" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block bg-white/15 backdrop-blur text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Start Your Recovery Today
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Get Relief from Slip Disc
            <br />
            <span className="text-violet-300">Without Surgery</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed"> 
            You do not have to live in pain or resort to surgery. Our experts
            physiotherapy team in Patna has helped thousands of patients just
            like you make a full, lasting recovery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppButton variant="solid" />
            <CallButton variant="outline" />
          </div>
          <p className="mt-6 text-white/50 text-sm">
            📍 Patna, Bihar &nbsp;|&nbsp; Appointments: Mon – Sat, 9 AM – 7 PM
          </p>
        </div>
      </section>
    </main>
  );
}