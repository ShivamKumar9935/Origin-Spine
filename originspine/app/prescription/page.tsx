"use client";

import { useState, useRef } from "react";

// ── Clinic Constants ──────────────────────────────────────────────────────────
const CLINIC = {
  name: "Origin Spine",
  tagline: "Centre for Pain Management & Rehabilitation",
  doctor: "Dr. Vikash Singh",
  qualifications: "BPT, Md",
  reg: "Reg. No. BSPC-2024-7891",
  address: "Patna, Bihar – 800001",
  phone: "+91 95469 99469",
  email: "care@originspine.in",
  website: "www.originspine.in",
  timings: "Mon – Sat: 9:00 AM – 7:00 PM",
};

const WHATSAPP_URL =
  "https://wa.me/919546999469?text=Hello%2C%20I%20need%20an%20appointment%20at%20Origin%20Spine";
const CALL_URL = "tel:+919546999469";

// ── Types ─────────────────────────────────────────────────────────────────────
interface FormData {
  patientName: string;
  age: string;
  gender: string;
  phone: string;
  date: string;
  problem: string;
  diagnosis: string;
  treatmentPlan: string;
  sessions: string;
  frequency: string;
  notes: string;
  followUp: string;
}

interface FieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function today(): string {
  return new Date().toISOString().split("T")[0];
}

function formatDisplayDate(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}

function rxId(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `OS-${ts}-${rand}`;
}

// ── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, required, children, hint }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-300 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition";

const textareaCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-300 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition resize-none";

// ── Sub-components ────────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="border-t border-dashed border-slate-200" />;
}

// ── Auth Gate ─────────────────────────────────────────────────────────────────
function AuthGate({ onAuthorized }: { onAuthorized: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    if (!password.trim()) {
      setError("Please enter a password.");
      return;
    }
    setLoading(true);
    // Small artificial delay for UX feel
    setTimeout(() => {
      if (password === "origin1510") {
        onAuthorized();
      } else {
        setError("Incorrect password. Please try again.");
        setLoading(false);
      }
    }, 400);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 w-full max-w-sm overflow-hidden">

        {/* Header */}
        <div className="bg-teal-700 px-6 py-8 text-center">
          <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <p className="text-white font-semibold text-lg leading-none">{CLINIC.name}</p>
          <p className="text-teal-200 text-sm mt-1">Doctor portal</p>
        </div>

        {/* Form */}
        <div className="px-6 py-6">
          <p className="text-sm text-slate-500 mb-5">
            Enter your access password to continue.
          </p>

          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className={
                "w-full border rounded-lg px-3.5 py-2.5 pr-10 text-sm text-slate-800 placeholder-slate-300 bg-slate-50 focus:outline-none focus:ring-2 transition " +
                (error
                  ? "border-red-300 focus:border-red-400 focus:ring-red-300/20"
                  : "border-slate-200 focus:border-teal-500 focus:ring-teal-500/20")
              }
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
              aria-label="Toggle password visibility"
            >
              {showPw ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {error && (
            <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full mt-4 bg-teal-700 hover:bg-teal-800 active:bg-teal-900 disabled:opacity-60 text-white font-semibold text-sm py-2.5 rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Verifying...
              </>
            ) : (
              "Enter"
            )}
          </button>

          <p className="text-center text-xs text-slate-400 mt-5">
            Having trouble? Contact clinic admin.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function PrescriptionGenerator() {
  const [authorized, setAuthorized] = useState(false);
  const prescriptionRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormData>({
    patientName: "",
    age: "",
    gender: "",
    phone: "",
    date: today(),
    problem: "",
    diagnosis: "",
    treatmentPlan: "",
    sessions: "",
    frequency: "",
    notes: "",
    followUp: "",
  });

  const [generated, setGenerated] = useState(false);
  const [rxNumber] = useState(rxId);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  // ── Handlers ─────────────────────────────────────────────────────────────
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const required: (keyof FormData)[] = ["patientName", "age", "problem", "diagnosis", "treatmentPlan"];
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    required.forEach((key) => {
      if (!form[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleGenerate() {
    if (!validate()) {
      const firstError = document.querySelector("[data-error]");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setGenerated(true);
    setTimeout(() => {
      prescriptionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function handlePrint() {
    const el = document.getElementById("rx-printable");
    if (!el) return;

    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "none";
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (!doc) return;

    // Pull in all existing page stylesheets so Tailwind classes render correctly
    const styleLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .map((l) => l.outerHTML)
      .join("\n");

    const styleBlocks = Array.from(document.querySelectorAll("style"))
      .map((s) => `<style>${s.innerHTML}</style>`)
      .join("\n");

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Prescription – ${CLINIC.name}</title>
          ${styleLinks}
          ${styleBlocks}
          <style>
            @page {
              size: A4 portrait;
              margin: 10mm 12mm;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              box-sizing: border-box;
            }
            html, body {
              margin: 0;
              padding: 0;
              background: white;
              font-family: sans-serif;
              font-size: 13px;
              line-height: 1.5;
            }

            /* ── Container ── */
            #rx-printable {
              border: none !important;
              border-radius: 0 !important;
              box-shadow: none !important;
              overflow: visible !important;
              width: 100% !important;
            }

            /* Header */
            .print-header {
              background: #0f766e !important;
              padding: 12px 20px !important;
            }
            .print-header h2  { font-size: 20px !important; margin: 0 0 2px !important; }
            .print-header p   { font-size: 11.5px !important; margin: 2px 0 !important; }

            /* Horizontal padding */
            .px-8 { padding-left: 20px !important; padding-right: 20px !important; }

            /* Vertical padding – balanced, not cramped */
            .py-6 { padding-top: 12px !important; padding-bottom: 12px !important; }
            .py-4 { padding-top: 10px !important; padding-bottom: 10px !important; }
            .py-5 { padding-top: 10px !important; padding-bottom: 10px !important; }
            .py-3 { padding-top:  7px !important; padding-bottom:  7px !important; }

            /* Body text */
            .text-sm   { font-size: 12px   !important; }
            .text-xs   { font-size: 11px   !important; }
            .text-2xl  { font-size: 20px   !important; }
            .text-xl   { font-size: 16px   !important; }
            .text-4xl  { font-size: 26px   !important; }

            /* Vertical gaps */
            .space-y-6 > * + * { margin-top: 10px !important; }
            .space-y-1\\.5 > * + * { margin-top: 5px !important; }
            .gap-4 { gap: 10px !important; }
            .gap-6 { gap: 12px !important; }
            .mb-3  { margin-bottom: 6px  !important; }
            .mb-2  { margin-bottom: 4px  !important; }
            .mb-1  { margin-bottom: 3px  !important; }
            .mt-3  { margin-top:    6px  !important; }
            .mt-0\\.5 { margin-top: 2px !important; }

            /* Signature / stamp */
            .w-24.h-24 { width: 72px  !important; height: 72px  !important; }
            .h-12      { height: 40px !important; }
            .w-40      { width: 130px !important; }

            /* Corners */
            .rounded-xl, .rounded-2xl, .rounded-lg { border-radius: 4px !important; }

            /* Advice & follow-up boxes */
            .bg-amber-50          { padding: 6px 10px !important; }
            .bg-teal-50.border-teal-200 { padding: 5px 10px !important; }

            /* Numbered circles */
            .w-5.h-5.rounded-full {
              width: 18px !important;
              height: 18px !important;
              font-size: 10px !important;
            }

            /* Force single page */
            body { page-break-after: avoid; }
            #rx-printable { page-break-inside: avoid; }
          </style>
        </head>
        <body>${el.outerHTML}</body>
      </html>
    `);
    doc.close();

    iframe.contentWindow?.focus();
    iframe.contentWindow?.print();

    // Remove iframe after print dialog closes
    setTimeout(() => document.body.removeChild(iframe), 1000);
  }

  function handleReset() {
    setForm({
      patientName: "",
      age: "",
      gender: "",
      phone: "",
      date: today(),
      problem: "",
      diagnosis: "",
      treatmentPlan: "",
      sessions: "",
      frequency: "",
      notes: "",
      followUp: "",
    });
    setGenerated(false);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── Auth Gate ─────────────────────────────────────────────────────────────
  if (!authorized) {
    return <AuthGate onAuthorized={() => setAuthorized(true)} />;
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Print styles injected inline (no external CSS file needed) ── */}
      <style>{`
        @media print {
          /* Hide everything except the prescription */
          body { margin: 0 !important; padding: 0 !important; background: white !important; }
          .no-print { display: none !important; }

          /* Make prescription fill the page naturally */
          #rx-printable {
            display: block !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            font-size: 13px !important;
            page-break-inside: avoid;
          }

          /* Flatten gradient header to solid color for print */
          #rx-printable .print-header {
            background: #0F6E56 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Ensure colors print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.4s ease both; }
      `}</style>

      <div className="min-h-screen bg-slate-50 font-sans">

        {/* ── Top Nav ── */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm no-print">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7l-5-5H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm leading-none">{CLINIC.name}</p>
              <p className="text-xs text-slate-400 mt-0.5">Prescription Generator</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={CALL_URL}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-teal-600 transition px-3 py-1.5 rounded-lg hover:bg-teal-50"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01L6.62 10.79z" />
              </svg>
              {CLINIC.phone}
            </a>
            <button
              onClick={() => setAuthorized(false)}
              className="text-xs font-semibold text-slate-500 hover:text-red-500 transition px-3 py-1.5 rounded-lg hover:bg-red-50"
            >
              Lock
            </button>
            <a href="/" className="text-xs font-semibold text-teal-600 hover:underline px-3 py-1.5">
              ← Back to Website
            </a>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">

          {/* ── Page Title ── */}
          <div className="no-print">
            <h1 className="text-2xl font-bold text-slate-800">New Prescription</h1>
            <p className="text-sm text-slate-500 mt-1">
              Fill in patient details, then click <strong>Generate Prescription</strong> to preview and print.
            </p>
          </div>

          {/* ── Form Card ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden no-print">
            {/* Card header */}
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4">
              <h2 className="text-white font-semibold text-base">Patient Information</h2>
            </div>

            <div className="p-6 space-y-6">

              {/* Row 1 – Name + Age + Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1" data-error={errors.patientName}>
                  <Field label="Patient Name" required>
                    <input
                      type="text"
                      name="patientName"
                      value={form.patientName}
                      onChange={handleChange}
                      placeholder="Full name"
                      className={inputCls + (errors.patientName ? " border-red-300 ring-1 ring-red-300" : "")}
                    />
                    {errors.patientName && <p className="text-xs text-red-500 mt-1">{errors.patientName}</p>}
                  </Field>
                </div>
                <div data-error={errors.age}>
                  <Field label="Age" required>
                    <input
                      type="number"
                      name="age"
                      value={form.age}
                      onChange={handleChange}
                      placeholder="Years"
                      min={1}
                      max={120}
                      className={inputCls + (errors.age ? " border-red-300 ring-1 ring-red-300" : "")}
                    />
                    {errors.age && <p className="text-xs text-red-500 mt-1">{errors.age}</p>}
                  </Field>
                </div>
                <Field label="Gender">
                  <select name="gender" value={form.gender} onChange={handleChange} className={inputCls}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
              </div>

              {/* Row 2 – Phone + Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Phone Number">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputCls}
                  />
                </Field>
                <Field label="Date of Prescription">
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-100 pt-2">
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-4">Clinical Details</p>
              </div>

              {/* Problem */}
              <div data-error={errors.problem}>
                <Field label="Chief Complaint / Problem" required hint="Describe the main pain or issue the patient is presenting with">
                  <textarea
                    name="problem"
                    value={form.problem}
                    onChange={handleChange}
                    placeholder="e.g. Bilateral knee pain aggravated on climbing stairs, present for 3 months..."
                    rows={3}
                    className={textareaCls + (errors.problem ? " border-red-300 ring-1 ring-red-300" : "")}
                  />
                  {errors.problem && <p className="text-xs text-red-500 mt-1">{errors.problem}</p>}
                </Field>
              </div>

              {/* Diagnosis */}
              <div data-error={errors.diagnosis}>
                <Field label="Diagnosis" required hint="Clinical diagnosis based on assessment">
                  <textarea
                    name="diagnosis"
                    value={form.diagnosis}
                    onChange={handleChange}
                    placeholder="e.g. Bilateral osteoarthritis knee Grade II, with quadriceps weakness..."
                    rows={2}
                    className={textareaCls + (errors.diagnosis ? " border-red-300 ring-1 ring-red-300" : "")}
                  />
                  {errors.diagnosis && <p className="text-xs text-red-500 mt-1">{errors.diagnosis}</p>}
                </Field>
              </div>

              {/* Treatment Plan */}
              <div data-error={errors.treatmentPlan}>
                <Field label="Treatment Plan" required hint="List each therapy / modality on a new line">
                  <textarea
                    name="treatmentPlan"
                    value={form.treatmentPlan}
                    onChange={handleChange}
                    placeholder={`1. IFT (Interferential Therapy) – 15 min\n2. Ultrasound Therapy – 5 min\n3. Quadriceps strengthening exercises\n4. Hot fomentation at home`}
                    rows={5}
                    className={textareaCls + (errors.treatmentPlan ? " border-red-300 ring-1 ring-red-300" : "")}
                  />
                  {errors.treatmentPlan && <p className="text-xs text-red-500 mt-1">{errors.treatmentPlan}</p>}
                </Field>
              </div>

              {/* Sessions + Frequency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Total Sessions Advised">
                  <input
                    type="text"
                    name="sessions"
                    value={form.sessions}
                    onChange={handleChange}
                    placeholder="e.g. 12 sessions"
                    className={inputCls}
                  />
                </Field>
                <Field label="Frequency">
                  <select name="frequency" value={form.frequency} onChange={handleChange} className={inputCls}>
                    <option value="">Select frequency</option>
                    <option value="Daily">Daily</option>
                    <option value="5 days/week">5 days/week</option>
                    <option value="Alternate days">Alternate days (3×/week)</option>
                    <option value="Twice a week">Twice a week</option>
                    <option value="Once a week">Once a week</option>
                  </select>
                </Field>
              </div>

              {/* Notes */}
              <Field label="Advice / Additional Notes" hint="Home exercises, precautions, diet, lifestyle modifications">
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="e.g. Avoid squatting and sitting cross-legged. Apply ice pack after exercises. Lose 5 kg body weight..."
                  rows={3}
                  className={textareaCls}
                />
              </Field>

              {/* Follow Up */}
              <Field label="Next Follow-Up Date">
                <input
                  type="date"
                  name="followUp"
                  value={form.followUp}
                  onChange={handleChange}
                  className={inputCls}
                />
              </Field>

            </div>

            {/* Form Actions */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap gap-3 justify-end">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 transition"
              >
                Reset Form
              </button>
              <button
                onClick={handleGenerate}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white shadow-sm transition flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Generate Prescription
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              GENERATED PRESCRIPTION
          ══════════════════════════════════════════════════════════════ */}
          {generated && (
            <div className="animate-fadeUp">

              {/* Print action bar */}
              <div className="flex items-center justify-between mb-4 no-print">
                <div className="flex items-center gap-2 text-green-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold">Prescription generated successfully</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print Prescription
                  </button>
                </div>
              </div>

              {/* ── The Prescription Card ── */}
              <div
                id="rx-printable"
                ref={prescriptionRef}
                className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden"
              >
                {/* Clinic Header */}
                <div className="print-header bg-gradient-to-r from-teal-700 to-cyan-600 px-8 py-6 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-extrabold tracking-tight">{CLINIC.name}</h2>
                      <p className="text-teal-100 text-sm mt-0.5">{CLINIC.tagline}</p>
                      <div className="mt-3 space-y-0.5 text-sm text-teal-50">
                        <p>📍 {CLINIC.address}</p>
                        <p>📞 {CLINIC.phone} &nbsp;|&nbsp; ✉️ {CLINIC.email}</p>
                        <p>🌐 {CLINIC.website} &nbsp;|&nbsp; 🕐 {CLINIC.timings}</p>
                      </div>
                    </div>
                    <div className="text-right sm:text-right">
                      <p className="text-xl font-bold">{CLINIC.doctor}</p>
                      <p className="text-teal-100 text-xs mt-0.5">{CLINIC.qualifications}</p>
                      <p className="text-teal-200 text-xs mt-0.5">{CLINIC.reg}</p>
                      <div className="mt-2 inline-block bg-white/20 rounded px-3 py-1 text-xs font-mono tracking-wider">
                        RX# {rxNumber}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Patient Strip */}
                <div className="bg-slate-50 border-b border-slate-200 px-8 py-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">Patient</p>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">{form.patientName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">Age / Gender</p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">
                        {form.age} yrs{form.gender ? ` / ${form.gender}` : ""}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">Phone</p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">{form.phone || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">Date</p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">{formatDisplayDate(form.date)}</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-8 py-6 space-y-6">

                  {/* Rx symbol + Chief Complaint */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl font-serif font-bold text-teal-700 leading-none">℞</span>
                      <div className="h-px flex-1 bg-teal-200" />
                    </div>
                    <Section title="Chief Complaint">
                      <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{form.problem}</p>
                    </Section>
                  </div>

                  <Divider />

                  <Section title="Diagnosis">
                    <p className="text-sm text-slate-800 font-semibold leading-relaxed whitespace-pre-line">{form.diagnosis}</p>
                  </Section>

                  <Divider />

                  <Section title="Treatment Plan">
                    <div className="space-y-1.5">
                      {form.treatmentPlan.split("\n").filter(Boolean).map((line, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed">{line.replace(/^\d+\.\s*/, "")}</p>
                        </div>
                      ))}
                    </div>
                  </Section>

                  {/* Sessions row */}
                  {(form.sessions || form.frequency) && (
                    <>
                      <Divider />
                      <div className="grid grid-cols-2 gap-4">
                        {form.sessions && (
                          <Section title="Total Sessions">
                            <p className="text-sm font-semibold text-slate-800">{form.sessions}</p>
                          </Section>
                        )}
                        {form.frequency && (
                          <Section title="Frequency">
                            <p className="text-sm font-semibold text-slate-800">{form.frequency}</p>
                          </Section>
                        )}
                      </div>
                    </>
                  )}

                  {form.notes && (
                    <>
                      <Divider />
                      <Section title="Advice & Precautions">
                        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{form.notes}</p>
                        </div>
                      </Section>
                    </>
                  )}

                  {form.followUp && (
                    <>
                      <Divider />
                      <Section title="Next Follow-Up">
                        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-lg px-4 py-2">
                          <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-semibold text-teal-700">{formatDisplayDate(form.followUp)}</span>
                        </div>
                      </Section>
                    </>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-slate-200 px-8 py-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <div className="h-12 border-b border-slate-300 w-40 mb-1" />
                    <p className="text-sm font-bold text-slate-800">{CLINIC.doctor}</p>
                    <p className="text-xs text-slate-500">{CLINIC.qualifications}</p>
                    <p className="text-xs text-slate-400">{CLINIC.reg}</p>
                  </div>
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
                    <span className="text-xs text-slate-300 text-center leading-tight">Clinic<br />Seal</span>
                  </div>
                </div>

                {/* Bottom disclaimer */}
                <div className="bg-slate-50 border-t border-slate-200 px-8 py-3 text-center">
                  <p className="text-xs text-slate-400">
                    This prescription is valid only at {CLINIC.name}. For queries call {CLINIC.phone} or visit {CLINIC.website}
                  </p>
                </div>
              </div>

              {/* Below-card actions */}
              <div className="mt-4 flex flex-wrap gap-3 justify-end no-print">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-600 border border-slate-200 hover:bg-slate-100 transition"
                >
                  + New Prescription
                </button>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Prescription
                </button>
              </div>
            </div>
          )}

          {/* ── Quick Links ── */}
          <div className="no-print border-t border-slate-200 pt-6 flex flex-wrap gap-3 text-xs text-slate-500">
            <span>Need to book an appointment?</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
              WhatsApp Us
            </a>
            <span>·</span>
            <a href={CALL_URL} className="text-teal-600 font-semibold hover:underline">Call Clinic</a>
          </div>

        </main>
      </div>
    </>
  );
}