"use client";

import { useState, useEffect, useRef } from "react";

const WHATSAPP_URL =
  "https://wa.me/919546999469?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Origin%20Spine";
const CALL_URL = "tel:+919546999469";

const treatments = [
  {
    emoji: "🪡",
    title: "Acupuncture Therapy",
    subtitle: "Ancient Precision Healing",
    bgCard: "#f0fdf4",
    accent: "#059669",
    accentLight: "#d1fae5",
    borderColor: "#6ee7b7",
    tag: "acupuncture treatment Patna",
    image: "https://limitless-physical-therapy.com/wp-content/uploads/dry-needling.jpg",
    imageAlt: "Acupuncture therapy needles on patient back for pain relief",
    points: [
      "Ultra-fine needle stimulation on specific meridian points",
      "Activates the body's natural pain-relief mechanisms",
      "Highly effective for nerve pain, sciatica & chronic backache",
      "WHO-recognised therapy with decades of clinical evidence",
    ],
    badge: "Most Requested",
  },
  {
    emoji: "🔥",
    title: "Fire & Cupping Therapy",
    subtitle: "Deep Tissue Revival",
    bgCard: "#fffbeb",
    accent: "#b45309",
    accentLight: "#fde68a",
    borderColor: "#fbbf24",
    tag: null,
    image: "https://rejua.in/wp-content/uploads/2019/01/Fire-Cupping-Treatment-imn-min-1.jpg",
    imageAlt: "Fire cupping therapy on patient back for muscle pain and circulation",
    points: [
      "Traditional cupping draws out toxins and improves circulation",
      "Heat therapy melts deep muscle tension and stiffness",
      "Reduces chronic inflammation at the source",
      "Accelerates tissue repair and recovery",
    ],
    badge: null,
  },
  {
    emoji: "🖐️",
    title: "Acupressure Therapy",
    subtitle: "Hands-On Natural Relief",
    bgCard: "#faf5ff",
    accent: "#6d28d9",
    accentLight: "#ede9fe",
    borderColor: "#c4b5fd",
    tag: null,
    image: "https://patanjaliwellness.com/assets/images/Acupressure/Acupressure-01.jpg",
    imageAlt: "Acupressure pressure points on hands for natural pain relief",
    points: [
      "Targeted pressure on energy points without needles",
      "Releases blocked energy pathways for natural pain relief",
      "Rebalances organ function and nervous system response",
      "Safe for all ages, including elderly patients",
    ],
    badge: "No Needles",
  },
  {
    emoji: "🏃",
    title: "Modern Physiotherapy",
    subtitle: "Science-Backed Recovery",
    bgCard: "#f0f9ff",
    accent: "#0369a1",
    accentLight: "#bae6fd",
    borderColor: "#38bdf8",
    tag: "physiotherapy in Patna",
    image: "https://png.pngtree.com/png-clipart/20220118/ourmid/pngtree-massage-treatment-of-scapulohumeral-periarthritis-original-hand-painted-cartoon-png-image_4187281.png",
    imageAlt: "Physiotherapy exercise and rehabilitation session at clinic",
    points: [
      "Evidence-based exercise protocols designed for your condition",
      "Manual therapy, mobilisation & postural correction",
      "Strengthens supporting muscles to prevent recurrence",
      "Progressive recovery milestones tracked session by session",
    ],
    badge: null,
  },
];

const steps = [
  { num: "01", title: "Detailed Diagnosis", desc: "Comprehensive assessment of your pain history, posture, movement patterns, and lifestyle to find the true root cause.", icon: "🔍" },
  { num: "02", title: "Personalized Plan",   desc: "A custom multi-therapy protocol designed for your body, condition severity, and recovery goals.", icon: "📋" },
  { num: "03", title: "Therapy Sessions",    desc: "Structured sessions combining 2–4 complementary therapies for compounding benefit and faster relief.", icon: "⚡" },
  { num: "04", title: "Recovery & Prevention", desc: "Long-term guidance, home exercises, and periodic check-ins to ensure pain doesn't return.", icon: "🛡️" },
];

const whyPoints = [
  { icon: "🎯", title: "Root-Cause Treatment",    desc: "We don't mask your pain with medication. We find and fix what's actually causing it." },
  { icon: "🧬", title: "Combined Therapy Effect", desc: "Multiple therapies working together produce results that no single method can achieve alone." },
  { icon: "🚫", title: "100% Drug-Free",          desc: "No painkillers, no steroids, no side effects. Your body heals itself with the right stimulus." },
  { icon: "✂️", title: "Non-Surgical",            desc: "Avoid the risks, costs, and downtime of surgery with our proven non-invasive approach." },
  { icon: "👤", title: "Personalized to You",     desc: "Your plan is built around your condition, body type, and lifestyle — not a generic protocol." },
  { icon: "✅", title: "Clinically Safe",         desc: "All therapies are performed by trained specialists in a clean, professional environment." },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let s = 0;
        const inc = (target / 1800) * 16;
        const t = setInterval(() => {
          s += inc;
          if (s >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(s));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Shared layout token ─── */
const W = { maxWidth: 1120, margin: "0 auto", padding: "0 20px" } as const;

export default function HowWeTreat() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        .os-page *, .os-page *::before, .os-page *::after { box-sizing: border-box; }
        .os-page { font-family: 'DM Sans', system-ui, sans-serif; }
        .os-display { font-family: 'Playfair Display', Georgia, serif !important; }

        /* pulse dot */
        .os-pulse { animation: osPulse 2s ease-in-out infinite; }
        @keyframes osPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.85)} }

        /* card hover lift */
        .os-treat-card { transition: transform .3s ease, box-shadow .3s ease; }
        .os-treat-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,.13) !important; }

        .os-why-card { transition: transform .25s ease, border-color .25s ease; }
        .os-why-card:hover { transform: translateY(-4px); border-color: #0ea5e9 !important; }

        /* image panel responsive */
        .os-treat-inner { display:flex; flex-direction:column; }
        @media(min-width:768px){
          .os-treat-even { flex-direction: row; }
          .os-treat-odd  { flex-direction: row-reverse; }
        }
        .os-img-wrap { width:100%; height:220px; flex-shrink:0; position:relative; overflow:hidden; }
        @media(min-width:768px){ .os-img-wrap { width:38%; height:auto; min-height:264px; } }
        .os-img-wrap img { width:100%; height:100%; object-fit:cover; object-position:center; display:block; }
        .os-treat-content { flex:1; padding:24px 20px; }
        @media(min-width:640px){ .os-treat-content { padding:28px 28px; } }

        /* grids */
        .os-stats  { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        @media(min-width:560px){ .os-stats { grid-template-columns:repeat(4,1fr); } }

        .os-approach { display:grid; grid-template-columns:1fr; gap:20px; }
        @media(min-width:768px){ .os-approach { grid-template-columns:repeat(3,1fr); } }

        .os-why { display:grid; grid-template-columns:1fr; gap:16px; }
        @media(min-width:540px){ .os-why { grid-template-columns:1fr 1fr; } }
        @media(min-width:1024px){ .os-why { grid-template-columns:repeat(3,1fr); } }

        .os-steps { display:grid; grid-template-columns:1fr; gap:20px; }
        @media(min-width:540px){ .os-steps { grid-template-columns:1fr 1fr; } }
        @media(min-width:1024px){ .os-steps { grid-template-columns:repeat(4,1fr); } }

        .os-cta-btns { display:flex; flex-wrap:wrap; gap:14px; justify-content:center; }

        /* float */
        .os-float { animation: osFloat 3s ease-in-out infinite; }
        @keyframes osFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }

        /* accent underline */
        .os-uline { height:3px; width:56px; border-radius:99px;
          background:linear-gradient(90deg,#0ea5e9,#6366f1,transparent); margin:0 auto 18px; }
      `}</style>

      <div className="os-page">

        {/* ══════════════════════════════════════════════
            HERO  —  deep navy, fully forced via inline bg
        ══════════════════════════════════════════════ */}
        <section style={{
          background: "#0b1829",          /* forced dark – no inheritance */
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 5% 65%, rgba(6,182,212,.22) 0%, transparent 65%)," +
            "radial-gradient(ellipse 55% 45% at 92% 10%, rgba(16,185,129,.15) 0%, transparent 60%)," +
            "linear-gradient(160deg,#0b1829 0%,#0d2040 55%,#0a3358 100%)",
          padding: "80px 0 70px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* grid overlay */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize:"44px 44px",
          }} />

          <div style={{ ...W, position:"relative" }}>

            {/* Pill badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.18)",
              borderRadius:99, padding:"7px 18px", marginBottom:28,
            }}>
              <span className="os-pulse" style={{
                width:8, height:8, borderRadius:"50%",
                background:"#34d399", display:"inline-block", flexShrink:0,
              }} />
              <span style={{ color:"#67e8f9", fontSize:"0.82rem", fontWeight:600, letterSpacing:".04em" }}>
                Pain Relief Clinic — Patna, Bihar
              </span>
            </div>

            {/* H1 */}
            <h1 className="os-display" style={{
              fontSize:"clamp(2.1rem,5.5vw,3.8rem)",
              fontWeight:900, lineHeight:1.13,
              color:"#f8fafc",             /* near-white, solid */
              marginBottom:22, maxWidth:800,
            }}>
              How We Treat Pain at{" "}
              <span style={{
                background:"linear-gradient(90deg,#22d3ee,#34d399)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              }}>
                Origin Spine
              </span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize:"clamp(1rem,2.2vw,1.18rem)",
              color:"#cbd5e1",             /* slate-300 equivalent — clearly visible on navy */
              lineHeight:1.8, maxWidth:620, marginBottom:38,
            }}>
              A combination of modern physiotherapy and traditional healing methods to provide{" "}
              <strong style={{ color:"#f1f5f9", fontWeight:700 }}>
                long-term relief without surgery
              </strong>{" "}
              — trusted by thousands of patients across Patna.
            </p>

            {/* Buttons */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:14 }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
                display:"inline-flex", alignItems:"center", justifyContent:"center", gap:8,
                background:"#10b981", color:"#fff",
                fontWeight:700, fontSize:"1rem",
                padding:"14px 28px", borderRadius:14,
                textDecoration:"none", boxShadow:"0 4px 20px rgba(16,185,129,.4)",
                minWidth:200,
              }}>
                💬 Book on WhatsApp
              </a>
              <a href={CALL_URL} style={{
                display:"inline-flex", alignItems:"center", justifyContent:"center", gap:8,
                background:"rgba(255,255,255,.10)", border:"1.5px solid rgba(255,255,255,.3)",
                color:"#f1f5f9", fontWeight:700, fontSize:"1rem",
                padding:"14px 28px", borderRadius:14,
                textDecoration:"none", backdropFilter:"blur(8px)",
                minWidth:160,
              }}>
                📞 Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="os-stats" style={{
              marginTop:56, paddingTop:40,
              borderTop:"1px solid rgba(255,255,255,.12)",
            }}>
              {[
                { val:5000, suf:"+", label:"Patients Treated" },
                { val:20,   suf:"+", label:"Years Experience" },
                { val:4,    suf:"",  label:"Therapy Modalities" },
                { val:99,   suf:"%", label:"Patient Satisfaction" },
              ].map(s => (
                <div key={s.label} style={{ textAlign:"center" }}>
                  <div className="os-display" style={{ fontSize:"2.1rem", fontWeight:900, color:"#f8fafc" }}>
                    <CountUp target={s.val} suffix={s.suf} />
                  </div>
                  <div style={{ color:"#94a3b8", fontSize:"0.8rem", fontWeight:500, marginTop:4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            OUR APPROACH
        ══════════════════════════════════════════════ */}
        <section style={{ padding:"80px 0", background:"#ffffff" }}>
          <div style={W}>
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <span style={{
                display:"inline-block", background:"#e0f2fe", color:"#0369a1",
                fontSize:"0.72rem", fontWeight:700, letterSpacing:".09em",
                textTransform:"uppercase", padding:"6px 16px", borderRadius:99, marginBottom:16,
              }}>Our Philosophy</span>
              <h2 className="os-display" style={{
                fontSize:"clamp(1.7rem,3.5vw,2.5rem)", fontWeight:800,
                color:"#0f172a", marginBottom:14,
              }}>
                We Treat the Root Cause,{" "}
                <span style={{ color:"#0284c7" }}>Not Just Symptoms</span>
              </h2>
              <div className="os-uline" />
              <p style={{ color:"#475569", fontSize:"1rem", maxWidth:540, margin:"0 auto", lineHeight:1.8 }}>
                Most clinics offer quick fixes. We offer lasting solutions built on a thorough understanding of your body.
              </p>
            </div>

            <div className="os-approach">
              {[
                { icon:"🎯", title:"Root-Cause Diagnosis",       desc:"Before therapy, we conduct a thorough evaluation to understand the actual source of your pain — not just where it hurts.", bg:"#f0f9ff", border:"#0284c7" },
                { icon:"📐", title:"Personalized Treatment Plans",desc:"No two patients are the same. Your plan is designed around your body, condition, lifestyle, and recovery timeline.",         bg:"#faf5ff", border:"#7c3aed" },
                { icon:"🔄", title:"Multi-Therapy Combination",   desc:"We blend ancient healing wisdom with modern clinical techniques for results that neither tradition nor science can produce alone.", bg:"#f0fdf4", border:"#059669" },
              ].map(c => (
                <div key={c.title} style={{
                  background:c.bg, borderLeft:`4px solid ${c.border}`,
                  borderRadius:16, padding:"28px 24px",
                  boxShadow:"0 2px 12px rgba(0,0,0,.05)",
                }}>
                  <div style={{ fontSize:"2.2rem", marginBottom:14 }}>{c.icon}</div>
                  <h3 className="os-display" style={{ fontSize:"1.15rem", fontWeight:700, color:"#0f172a", marginBottom:10 }}>
                    {c.title}
                  </h3>
                  <p style={{ color:"#334155", lineHeight:1.75, fontSize:"0.95rem" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TREATMENT METHODS
        ══════════════════════════════════════════════ */}
        <section style={{ padding:"80px 0", background:"#f1f5f9" }}>
          <div style={W}>
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <span style={{
                display:"inline-block", background:"#dcfce7", color:"#15803d",
                fontSize:"0.72rem", fontWeight:700, letterSpacing:".09em",
                textTransform:"uppercase", padding:"6px 16px", borderRadius:99, marginBottom:16,
              }}>Treatment Methods</span>
              <h2 className="os-display" style={{
                fontSize:"clamp(1.7rem,3.5vw,2.5rem)", fontWeight:800, color:"#0f172a", marginBottom:14,
              }}>Our Healing Toolkit</h2>
              <div className="os-uline" />
              <p style={{ color:"#475569", fontSize:"1rem", maxWidth:500, margin:"0 auto", lineHeight:1.8 }}>
                Four powerful therapies — used individually or in combination based on your condition.
              </p>
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
              {treatments.map((t, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={t.title}
                    className="os-treat-card"
                    style={{
                      background:t.bgCard,
                      border:`2px solid ${t.borderColor}`,
                      borderRadius:20, overflow:"hidden",
                      boxShadow:"0 4px 20px rgba(0,0,0,.07)",
                    }}
                  >
                    <div className={`os-treat-inner ${isEven ? "os-treat-even" : "os-treat-odd"}`}>
                      {/* Image */}
                      <div className="os-img-wrap">
                        <img
                          src={t.image} alt={t.imageAlt} loading="lazy"
                          onError={e => {
                            const w = (e.target as HTMLImageElement).parentElement;
                            if (w) w.style.display = "none";
                          }}
                        />
                        {/* Number badge */}
                        <div style={{
                          position:"absolute", top:14, left:14,
                          width:38, height:38, borderRadius:10,
                          background:t.accent, color:"#fff",
                          display:"flex", alignItems:"center", justifyContent:"center",
                          fontWeight:900, fontSize:"1.05rem",
                          boxShadow:"0 4px 14px rgba(0,0,0,.25)",
                        }}>{i + 1}</div>
                        {t.badge && (
                          <div style={{
                            position:"absolute", bottom:14, left:14,
                            background:t.accent, color:"#fff",
                            fontSize:"0.68rem", fontWeight:700, letterSpacing:".05em",
                            padding:"5px 12px", borderRadius:99,
                            boxShadow:"0 2px 8px rgba(0,0,0,.2)",
                          }}>✦ {t.badge}</div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="os-treat-content" style={{ display:"flex", flexDirection:"column", justifyContent:"center" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
                          <span style={{ fontSize:"2.4rem", lineHeight:1 }}>{t.emoji}</span>
                          <div>
                            <div style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:t.accent, marginBottom:2 }}>
                              {t.subtitle}
                            </div>
                            <h3 className="os-display" style={{
                              fontSize:"clamp(1.15rem,2.5vw,1.5rem)",
                              fontWeight:800, color:"#0f172a", lineHeight:1.2,
                            }}>{t.title}</h3>
                          </div>
                        </div>

                        <ul style={{ listStyle:"none", padding:0, margin:"0 0 18px", display:"flex", flexDirection:"column", gap:10 }}>
                          {t.points.map(p => (
                            <li key={p} style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                              <span style={{
                                flexShrink:0, marginTop:2, width:20, height:20, borderRadius:"50%",
                                background:t.accent, color:"#fff",
                                display:"flex", alignItems:"center", justifyContent:"center",
                                fontSize:"0.62rem", fontWeight:800,
                              }}>✓</span>
                              <span style={{ color:"#1e293b", fontSize:"0.94rem", lineHeight:1.65 }}>{p}</span>
                            </li>
                          ))}
                        </ul>

                        {t.tag && (
                          <div style={{
                            display:"inline-block", fontSize:"0.7rem", fontWeight:600,
                            padding:"4px 12px", borderRadius:99,
                            border:`1.5px solid ${t.accent}`, color:t.accent, width:"fit-content",
                          }}>#{t.tag}</div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WHY IT WORKS
        ══════════════════════════════════════════════ */}
        <section style={{ padding:"80px 0", background:"#ffffff" }}>
          <div style={W}>
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <span style={{
                display:"inline-block", background:"#ede9fe", color:"#5b21b6",
                fontSize:"0.72rem", fontWeight:700, letterSpacing:".09em",
                textTransform:"uppercase", padding:"6px 16px", borderRadius:99, marginBottom:16,
              }}>Why It Works</span>
              <h2 className="os-display" style={{
                fontSize:"clamp(1.7rem,3.5vw,2.5rem)", fontWeight:800, color:"#0f172a", marginBottom:14,
              }}>The Origin Spine Difference</h2>
              <div className="os-uline" />
              <p style={{ color:"#475569", fontSize:"1rem", maxWidth:500, margin:"0 auto", lineHeight:1.8 }}>
                What makes our approach uniquely effective for patients across Patna and Bihar.
              </p>
            </div>

            <div className="os-why">
              {whyPoints.map(item => (
                <div key={item.title} className="os-why-card" style={{
                  border:"1.5px solid #e2e8f0", background:"#ffffff",
                  padding:"24px 22px", borderRadius:16,
                  boxShadow:"0 2px 8px rgba(0,0,0,.04)",
                }}>
                  <div style={{ fontSize:"2rem", marginBottom:12 }}>{item.icon}</div>
                  <h3 className="os-display" style={{ fontSize:"1.05rem", fontWeight:700, color:"#0f172a", marginBottom:8 }}>
                    {item.title}
                  </h3>
                  <p style={{ color:"#334155", fontSize:"0.9rem", lineHeight:1.72 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Trust strip — dark bg forced inline */}
            <div style={{
              marginTop:44,
              background:"#0f172a",
              borderRadius:18, padding:"22px 24px",
              display:"flex", flexWrap:"wrap",
              alignItems:"center", justifyContent:"space-between", gap:16,
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <span style={{ fontSize:"2rem" }}>🏥</span>
                <div>
                  <div style={{ color:"#f8fafc", fontWeight:700, fontSize:"1rem" }}>Trusted by 5,000+ Patients</div>
                  <div style={{ color:"#94a3b8", fontSize:"0.8rem", marginTop:2 }}>
                    Best pain relief clinic in Patna · Acupuncture treatment Patna
                  </div>
                </div>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
                display:"inline-flex", alignItems:"center", gap:8,
                background:"#10b981", color:"#fff",
                fontWeight:700, fontSize:"0.9rem",
                padding:"12px 22px", borderRadius:12,
                textDecoration:"none", whiteSpace:"nowrap",
              }}>💬 Book Free Consultation</a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TREATMENT PROCESS
        ══════════════════════════════════════════════ */}
        <section style={{ padding:"80px 0", background:"#f1f5f9" }}>
          <div style={W}>
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <span style={{
                display:"inline-block", background:"#cffafe", color:"#0e7490",
                fontSize:"0.72rem", fontWeight:700, letterSpacing:".09em",
                textTransform:"uppercase", padding:"6px 16px", borderRadius:99, marginBottom:16,
              }}>Treatment Journey</span>
              <h2 className="os-display" style={{
                fontSize:"clamp(1.7rem,3.5vw,2.5rem)", fontWeight:800, color:"#0f172a", marginBottom:14,
              }}>Your Path to Pain-Free Living</h2>
              <div className="os-uline" />
            </div>

            <div className="os-steps">
              {steps.map((step, i) => (
                <div key={step.num} style={{
                  background:"#ffffff", borderRadius:18,
                  padding:"24px 20px", border:"1.5px solid #e2e8f0",
                  boxShadow:"0 2px 10px rgba(0,0,0,.05)",
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
                    <div style={{
                      width:48, height:48, borderRadius:12, flexShrink:0,
                      background:"linear-gradient(135deg,#06b6d4,#6366f1)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      boxShadow:"0 4px 14px rgba(6,182,212,.3)",
                    }}>
                      <span className="os-display" style={{ color:"#fff", fontWeight:900, fontSize:"1.05rem" }}>
                        {step.num}
                      </span>
                    </div>
                    <span style={{ fontSize:"1.6rem" }}>{step.icon}</span>
                  </div>
                  <h3 className="os-display" style={{ fontSize:"1.05rem", fontWeight:700, color:"#0f172a", marginBottom:8 }}>
                    {step.title}
                  </h3>
                  <p style={{ color:"#334155", fontSize:"0.88rem", lineHeight:1.72 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            CTA  —  dark bg forced inline
        ══════════════════════════════════════════════ */}
        <section style={{
          background:"#0b1829",
          backgroundImage:
            "radial-gradient(ellipse 55% 60% at 80% 50%, rgba(6,182,212,.16) 0%, transparent 65%)," +
            "radial-gradient(ellipse 45% 45% at 15% 80%, rgba(99,102,241,.12) 0%, transparent 60%)," +
            "linear-gradient(150deg,#0b1829 0%,#0d2040 55%,#0a3358 100%)",
          padding:"96px 0",
          position:"relative", overflow:"hidden",
        }}>
          <div style={{ ...W, textAlign:"center", position:"relative" }}>
            <div className="os-float" style={{
              display:"inline-block",
              background:"rgba(255,255,255,.09)", border:"1px solid rgba(255,255,255,.2)",
              color:"#67e8f9", fontSize:"0.82rem", fontWeight:600,
              padding:"8px 18px", borderRadius:99, marginBottom:28,
            }}>
              ✨ Pain-free life is possible — without surgery
            </div>

            <h2 className="os-display" style={{
              fontSize:"clamp(1.9rem,5vw,3.2rem)",
              fontWeight:900, color:"#f8fafc",
              lineHeight:1.2, marginBottom:20,
            }}>
              Start Your{" "}
              <span style={{
                background:"linear-gradient(90deg,#22d3ee,#34d399)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              }}>Pain-Free Journey</span>{" "}Today
            </h2>

            <p style={{
              color:"#cbd5e1", fontSize:"1.05rem",
              lineHeight:1.8, maxWidth:520, margin:"0 auto 36px",
            }}>
              Join thousands of patients in Patna who have found lasting relief through our
              integrative approach. Your first consultation is just one click away.
            </p>

            <div className="os-cta-btns">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
                display:"inline-flex", alignItems:"center", justifyContent:"center", gap:8,
                background:"#10b981", color:"#fff",
                fontWeight:700, fontSize:"1rem",
                padding:"15px 28px", borderRadius:14,
                textDecoration:"none",
                boxShadow:"0 6px 24px rgba(16,185,129,.4)",
              }}>💬 Book Appointment on WhatsApp</a>
              <a href={CALL_URL} style={{
                display:"inline-flex", alignItems:"center", justifyContent:"center", gap:8,
                background:"rgba(255,255,255,.10)", border:"1.5px solid rgba(255,255,255,.3)",
                color:"#f1f5f9", fontWeight:700, fontSize:"1rem",
                padding:"15px 28px", borderRadius:14,
                textDecoration:"none", backdropFilter:"blur(8px)",
              }}>📞 Call Us Now</a>
            </div>

            <div style={{
              marginTop:44, display:"flex", flexWrap:"wrap",
              justifyContent:"center", gap:"10px 28px",
            }}>
              {["✅ No Surgery","💊 Drug-Free","🕒 Same-Day Appointments","🏆 20+ Years Experience"].map(t => (
                <span key={t} style={{ color:"#94a3b8", fontSize:"0.85rem", fontWeight:500 }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* SEO keywords */}
        <div aria-hidden="true" style={{ position:"absolute", width:1, height:1, overflow:"hidden", opacity:0 }}>
          physiotherapy in Patna, acupuncture treatment Patna, pain relief clinic Patna,
          best physiotherapy clinic Patna, acupressure therapy Patna, spine pain treatment Patna
        </div>
      </div>
    </>
  );
}
