import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button, Container } from '../components/ui';

/* ─── Assets ─────────────────────────────────────────────── */
import heroImg from '../assets/images/properties/2storey building.jpg';
import approachImg from '../assets/images/properties/duplexwth 2cars.jpg';

/* ─── Data (static until backend API is connected) ──────── */
const PARTICIPATION_WAYS = [
  {
    number: '01',
    title: 'Development partnerships',
    description:
      'Structuring joint-venture developments with clear alignment on capital, delivery and shared returns.',
  },
  {
    number: '02',
    title: 'Landowner collaboration',
    description:
      'Unlocking the potential of strategic landholdings through structured planning, design and development execution.',
  },
  {
    number: '03',
    title: 'Project participation',
    description:
      'Targeted participation in specific developments where scope, timeline and risk parameters are clearly defined.',
  },
];

const EVALUATION_CRITERIA = [
  {
    title: 'Place & demand',
    description:
      'Assessed location fundamentals, local market demand and how the asset serves its end users over time.',
  },
  {
    title: 'Delivery & governance',
    description:
      'Clear visibility into project structure, cost discipline, timeline milestones and decision-making governance.',
  },
  {
    title: 'Risk & liquidity',
    description:
      'Realistic assessment of development risk, phasing flexibility and practical exit or hold pathways.',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Share your interest',
    description: 'Tell us your focus, capital parameters and preferred structure.',
  },
  {
    number: '02',
    title: 'Review the fit',
    description:
      'We discuss current and upcoming opportunities aligned with your criteria.',
  },
  {
    number: '03',
    title: 'Carry out due diligence',
    description:
      'Review project documentation, feasibility and governance details.',
  },
  {
    number: '04',
    title: 'Agree on terms',
    description:
      'Formalise participation terms and move forward with clear milestones.',
  },
];

const FAQS = [
  {
    question: 'Is an investment currently available?',
    answer:
      'Opportunities are discussed on a private basis. Availability depends on current pipeline stage and alignment with your investment criteria.',
  },
  {
    question: 'Are returns guaranteed?',
    answer:
      'No. Property development involves real market, delivery and commercial risks. We do not present projections as guaranteed outcomes.',
  },
  {
    question: 'What should I review before proceeding?',
    answer:
      'You should review the project brief, delivery structure, timeline, risk factors and seek independent legal and financial advice.',
  },
];

const INITIAL_FORM_STATE = {
  fullName: '',
  email: '',
  focus: '',
  message: '',
};

/* ─── Page Component ─────────────────────────────────────── */
export default function InvestPage() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: Currently logs to console. Will POST to backend API when ready.
    console.log('Investment inquiry submitted:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setSubmitted(false);
  };

  return (
    <>
      <Helmet>
        <title>Investment Partnerships | Avencrest Integrated Limited</title>
        <meta
          name="description"
          content="Explore real estate investment partnerships with Avencrest Integrated Limited. Considered development opportunities with a clear view of place, delivery and risk."
        />
      </Helmet>

      {/* ── 1. Hero Section ───────────────────────────────────── */}
      <section className="relative flex min-h-[520px] items-end overflow-hidden bg-primary text-white lg:min-h-[620px]">
        <img
          src={heroImg}
          alt="Avencrest modern architectural facade"
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
              INVESTMENT PARTNERSHIPS
            </p>
            <h1 className="text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[60px]">
              Invest in places.
              <br />
              Think long term.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              Explore real estate investment partnerships with a considered view of
              place, delivery and risk.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:items-start sm:gap-4">
              <Button variant="white" href="#register-interest" className="!rounded-none">
                Register your interest
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Our Approach ───────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                OUR APPROACH
              </p>
              <h2 className="text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
                Lasting value starts
                <br />
                with better questions.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
                Every development begins with a clear look at the location, the project,
                the surrounding demand and the long-term fundamentals. We focus on
                building things that remain useful, relevant and resilient.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Our role is to bring clarity, governance and execution discipline to
                every opportunity—so partners can assess the real picture before making
                a commitment.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden border border-primary/10 bg-surface">
                <img
                  src={approachImg}
                  alt="Modern residential development facade"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Ways to Participate ────────────────────────────── */}
      <section className="bg-[#FAF9F5] py-16 lg:py-24">
        <Container>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            OPPORTUNITIES FOR VALUE
          </p>
          <h2 className="mb-12 text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            Different starting points.
            <br />
            One disciplined approach.
          </h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PARTICIPATION_WAYS.map((item) => (
              <div
                key={item.number}
                className="border border-primary/10 bg-white p-8"
              >
                <span className="mb-5 block text-xs font-medium tracking-widest text-secondary">
                  {item.number}
                </span>
                <h3 className="mb-3 text-lg font-medium text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted">
            Each structure is assessed on a project-by-project basis, subject to mutual
            fit and formal due diligence.
          </p>
        </Container>
      </section>

      {/* ── 4. Evaluation Criteria ────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            WHAT WE EVALUATE TOGETHER
          </p>
          <h2 className="mb-12 text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            Understand the project.
            <br />
            Not just the promise.
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {EVALUATION_CRITERIA.map((item) => (
              <div key={item.title} className="border-t border-primary/10 pt-6">
                <h3 className="mb-3 text-lg font-medium text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. How It Works ───────────────────────────────────── */}
      <section className="bg-primary py-16 text-white lg:py-24">
        <Container>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
            HOW IT WORKS
          </p>
          <h2 className="mb-12 text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Clarity before commitment.
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="border-t border-white/15 pt-6">
                <span className="mb-4 block text-xs font-medium tracking-widest text-secondary">
                  {step.number}
                </span>
                <h3 className="mb-2.5 text-lg font-medium text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. A Few Things to Know ───────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <h2 className="mb-10 text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            A few things to know.
          </h2>

          <div className="divide-y divide-primary/10 border-b border-t border-primary/10">
            {FAQS.map((faq) => (
              <div key={faq.question} className="py-7">
                <h3 className="mb-2 text-base font-medium text-ink sm:text-lg">
                  {faq.question}
                </h3>
                <p className="max-w-3xl text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. Register Your Interest ─────────────────────────── */}
      <section id="register-interest" className="scroll-mt-24 bg-white pb-16 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl">
                A considered decision
                <br />
                begins with a conversation.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                Share your interest and the criteria you would like to discuss. A member
                of our team will respond directly to arrange an exploratory conversation.
              </p>
              <p className="mt-4 text-xs text-muted">
                All discussions are treated in confidence and without obligation.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-primary/10 bg-[#FAF9F5] p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-start py-10 text-left">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center bg-primary text-white">
                      <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-2xl font-normal tracking-tight text-ink sm:text-3xl">
                      Thank you, your investment inquiry has been sent.
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                      Our team will review your investment criteria and reach out
                      directly to arrange a conversation.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#002f28]"
                      >
                        Submit another inquiry
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                      </button>
                      <Link
                        to="/developments"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:text-secondary hover:underline"
                      >
                        View developments
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-6 text-xl font-medium text-ink sm:text-2xl">
                      Register your interest
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label
                          htmlFor="invest-fullName"
                          className="mb-2 block text-xs font-medium text-ink"
                        >
                          Full name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="invest-fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="invest-email"
                          className="mb-2 block text-xs font-medium text-ink"
                        >
                          Email address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="invest-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="invest-focus"
                          className="mb-2 block text-xs font-medium text-ink"
                        >
                          Your focus <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="invest-focus"
                          name="focus"
                          type="text"
                          required
                          value={formData.focus}
                          onChange={handleChange}
                          placeholder="e.g. Development partnership, Landowner collaboration"
                          className="w-full border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="invest-message"
                          className="mb-2 block text-xs font-medium text-ink"
                        >
                          Tell us more <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="invest-message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your objectives, timeline or questions..."
                          className="w-full resize-none border border-primary/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                        />
                      </div>

                      <p className="text-[11px] leading-relaxed text-muted">
                        Submitting this form expresses interest and does not constitute an
                        offer or commitment.
                      </p>

                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#002f28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto"
                      >
                        Send investment inquiry
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

      {/* ── 8. Important Notice ───────────────────────────────── */}
      <section className="border-t border-primary/10 bg-[#FAF9F5] py-10 lg:py-12">
        <Container>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
            IMPORTANT NOTICE
          </p>
          <p className="max-w-4xl text-xs leading-relaxed text-muted">
            This page is provided for informational purposes only and does not constitute
            an offer, solicitation or financial promotion. Any potential participation is
            subject to formal qualification, due diligence and separate legal
            documentation.
          </p>
        </Container>
      </section>
    </>
  );
}
