import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Mail,
  MapPin,
} from 'lucide-react';
import { Button, Container } from '../components/ui';
import ProjectLocationMap from '../components/sections/ProjectLocationMap';

/* ─── Data ──────────────────────────────────────────────── */
import heroImg from '../assets/images/properties/2storey building.jpg';

const OFFICES = [
  {
    label: 'HEAD OFFICE',
    city: 'Ibadan, Oyo State, Nigeria',
    address: 'Ibadan, Oyo State, Nigeria',
    note: 'Visits by appointment',
    coordinates: [7.3775, 3.947],
  },
  {
    label: 'BRANCH OFFICE',
    city: 'Abuja, FCT, Nigeria',
    address: 'Wuse 2, Abuja, FCT, Nigeria',
    note: 'Visits by appointment',
    coordinates: [9.0579, 7.4951],
  },
];

const INTEREST_OPTIONS = [
  { id: 'architecture', label: 'Architecture Design' },
  { id: 'real-estate', label: 'Real Estate Development' },
  { id: 'construction', label: 'Construction' },
  { id: 'project-mgmt', label: 'Project Management' },
  { id: 'design-build', label: 'Design-Build' },
];

const STAGE_OPTIONS = [
  'Select a service to see the relevant contact details.',
  'Early concept / Just exploring',
  'Have a site / Ready to plan',
  'Design underway / Need construction partner',
  'Under construction / Need oversight',
  'Other',
];

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/avencrestintegrated/', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedInIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61596527733211', Icon: FacebookIcon },
  { label: 'X (Twitter)', href: 'https://x.com/avencrest_prop', Icon: XIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@avencrestproperties', Icon: TikTokIcon },
];

const FAQS = [
  {
    question: 'What can I discuss in a consultation?',
    answer:
      'Your project goals, site or property, preferred services, current stage, and the possibilities you want to explore.',
  },
  {
    question: 'Can you work from an existing design?',
    answer:
      'Bring the drawings and project background with your brief. We can discuss the appropriate commercial or service agreement scope.',
  },
  {
    question: 'What should I prepare?',
    answer:
      'Bring any site information, documents, imagery, timelines, budget, and tell us any relevant constraints. Loose ideas are welcome too.',
  },
];

/* ─── FAQ Accordion Item ──────────────────────────────────── */
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-primary/10">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-secondary"
        aria-expanded={open}
      >
        <h3 className="text-base font-medium text-ink sm:text-lg">{question}</h3>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-muted" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-muted" />
        )}
      </button>
      {open && (
        <div className="pb-6 pr-10">
          <p className="text-sm leading-relaxed text-muted">{answer}</p>
        </div>
      )}
    </div>
  );
}

const INITIAL_FORM_STATE = {
  fullName: '',
  email: '',
  phone: '',
  budget: '',
  interests: [],
  stage: '',
  city: '',
  state: '',
  message: '',
  privacyAccepted: false,
};

/* ─── Page Component ─────────────────────────────────────── */
export default function ContactPage() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'privacyAccepted') {
      setFormData((prev) => ({ ...prev, privacyAccepted: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInterestToggle = (id) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: Currently logs to console. Will POST to backend API when ready.
    // See /contact.md for full API specification.
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setSubmitted(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Avencrest Integrated Limited</title>
        <meta
          name="description"
          content="Get in touch with Avencrest Integrated Limited. Book a consultation, discuss your property development goals, or explore architectural and construction services."
        />
      </Helmet>

      {/* ── 1. Hero Section ───────────────────────────────────── */}
      <section className="relative flex min-h-[520px] items-end overflow-hidden bg-primary text-white lg:min-h-[620px]">
        <img
          src={heroImg}
          alt="Avencrest modern building facade"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#061612]/95 via-[#061612]/60 to-[#061612]/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#061612]/75 via-[#061612]/40 to-transparent"
        />

        <Container className="relative z-10 pb-14 pt-32 lg:pb-20 lg:pt-44">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
              CONTACT US
            </p>
            <h1 className="text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[60px]">
              Good things begin
              <br />
              with a conversation.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              Tell us what you have in mind. Together, we can explore what comes next.
            </p>

            {/* Exact hero buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:items-start sm:gap-4">
              <Button variant="white" href="#enquiry-form" className="!rounded-none">
                Start a conversation
              </Button>
              <Button variant="ghost-light" to="/projects" className="!rounded-none">
                Explore our projects
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Contact Info + Form Section ────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            {/* ── LEFT COLUMN: Contact Details ────────────────── */}
            <div className="lg:col-span-5">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                START YOUR PROJECT
              </p>
              <h2 className="text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl">
                A personal approach.
                <br />
                An open conversation.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                Whether you are planning a new development, restructuring a
                construction project, or looking for a design partner, our team is here to
                help you take the first step.
              </p>

              {/* Email */}
              <div className="mt-8">
                <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                  EMAIL US DIRECTLY
                </p>
                <a
                  href="mailto:hello@avencrest.com"
                  className="inline-flex items-center gap-2 text-lg font-medium text-ink transition-colors hover:text-secondary"
                >
                  <Mail className="h-4 w-4 text-muted" />
                  hello@avencrest.com
                </a>
              </div>

              {/* Office Locations */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                {OFFICES.map((office) => (
                  <div key={office.label}>
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                      {office.label}
                    </p>
                    <p className="text-sm font-medium text-ink">{office.city}</p>
                    <p className="mt-0.5 text-xs text-muted">{office.note}</p>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="mt-8">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                  OFFICE HOURS
                </p>
                <div className="flex items-center gap-2 text-sm text-ink">
                  <Clock className="h-4 w-4 text-muted" />
                  <span>Monday – Friday</span>
                </div>
                <p className="ml-6 text-xs text-muted">9:00 am – 6:00 pm</p>
              </div>

              {/* Embedded Map */}
              <div className="mt-8">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                  HEAD OFFICE MAP | IBADAN, OYO
                </p>
                <ProjectLocationMap
                  coordinates={OFFICES[0].coordinates}
                  title="Avencrest Head Office — Ibadan"
                  address={OFFICES[0].address}
                  zoom={13}
                  className="!h-[240px] sm:!h-[260px]"
                />
                <a
                  href={`https://www.openstreetmap.org/?mlat=${OFFICES[0].coordinates[0]}&mlon=${OFFICES[0].coordinates[1]}#map=13/${OFFICES[0].coordinates[0]}/${OFFICES[0].coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-ink transition-colors hover:text-secondary"
                >
                  View Ibadan area map
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <p className="mt-1 text-[11px] text-muted">
                  By appointment. Contact our team for exact directions.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                  CONNECT WITH AVENCREST
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 border border-primary/10 bg-[#FAF9F5] px-4 py-2.5 text-xs font-medium text-ink transition-colors hover:border-secondary hover:text-secondary"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Contact Form ──────────────────── */}
            <div id="enquiry-form" className="lg:col-span-7">
              <div className="border border-primary/10 bg-[#FAF9F5] p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-start py-10 text-left">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary text-white">
                      <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-2xl font-normal tracking-tight text-ink sm:text-3xl">
                      Thank you, your inquiry has been sent.
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                      We have received your project details and our team will review them and
                      get back to you shortly.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#002f28]"
                      >
                        Send another inquiry
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                      </button>
                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:text-secondary hover:underline"
                      >
                        Explore our projects
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-2 text-xl font-medium text-ink sm:text-2xl">
                      Tell us about your project
                    </h3>
                    <p className="mb-8 text-xs text-muted">
                      Share a few details to start the conversation.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row: Full Name + Email */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-xs font-medium text-ink"
                      >
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium text-ink"
                      >
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                  </div>

                  {/* Row: Phone + Budget */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-medium text-ink"
                      >
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234"
                        className="w-full border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-xs font-medium text-ink"
                      >
                        Estimated budget
                      </label>
                      <input
                        id="budget"
                        name="budget"
                        type="text"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Your weekly cost options"
                        className="w-full border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <p className="mb-3 text-xs font-medium text-ink">
                      Area of interest <span className="text-red-500">*</span>
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {INTEREST_OPTIONS.map((opt) => {
                        const isSelected = formData.interests.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => handleInterestToggle(opt.id)}
                            className={`flex items-center gap-2.5 border px-3.5 py-2.5 text-left text-xs font-medium transition-colors ${
                              isSelected
                                ? 'border-primary bg-primary text-white'
                                : 'border-primary/15 bg-white text-ink hover:border-primary/40'
                            }`}
                          >
                            <span
                              aria-hidden="true"
                              className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                                isSelected
                                  ? 'border-white'
                                  : 'border-primary/40'
                              }`}
                            >
                              {isSelected && (
                                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                              )}
                            </span>
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Stage */}
                  <div>
                    <label
                      htmlFor="stage"
                      className="mb-2 block text-xs font-medium text-ink"
                    >
                      Project stage <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="stage"
                      name="stage"
                      required
                      value={formData.stage}
                      onChange={handleChange}
                      className="w-full appearance-none border border-primary/15 bg-white px-4 py-3 text-sm text-ink focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    >
                      {STAGE_OPTIONS.map((opt, idx) => (
                        <option key={opt} value={idx === 0 ? '' : opt} disabled={idx === 0}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Location */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="city"
                        className="mb-2 block text-xs font-medium text-ink"
                      >
                        City / Town
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        className="w-full border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state"
                        className="mb-2 block text-xs font-medium text-ink"
                      >
                        State
                      </label>
                      <input
                        id="state"
                        name="state"
                        type="text"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        className="w-full border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium text-ink"
                    >
                      Tell us about your vision, scope and goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your project scope, goals, and any important details..."
                      className="w-full resize-none border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleChange}
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                    />
                    <span className="text-xs leading-relaxed text-muted">
                      I agree to the{' '}
                      <Link to="/privacy" className="underline hover:text-primary">
                        privacy notice
                      </Link>
                      .
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#002f28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    Send enquiry
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                  </button>
                </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. CTA: "Based in Nigeria." ───────────────────────── */}
      <section className="bg-primary py-16 text-white lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[42px]">
                Based in Nigeria.
                <br />
                Built around your ambition.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-3 text-sm text-white/90">
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-secondary" />
                  <span>Oyo • Abuja, Nigeria</span>
                </div>
                <p className="text-xs leading-relaxed text-white/70">
                  For office visits and directions, contact our team to arrange an
                  appointment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. FAQ Section ────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              BEFORE WE CHAT
            </p>
            <h2 className="mb-10 text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
              A little clarity.
            </h2>

            <div className="divide-y divide-primary/10 border-t border-primary/10">
              {FAQS.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
