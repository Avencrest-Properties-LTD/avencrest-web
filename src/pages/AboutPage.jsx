import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Award,
  Heart,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';
import { Button, Container, SectionHeader } from '../components/ui';
import { PreFooterCta } from '../components/sections';
import heroImg from '../assets/images/properties/2storey building.jpg';

/* ─── Data ─────────────────────────────────────────────── */

const MISSION_VISION = [
  {
    label: 'Our mission',
    body: 'To form and illuminate well-considered spaces through thoughtful design, responsible development, and repeatable execution.',
  },
  {
    label: 'Our vision',
    body: 'To shape places that enrich everyday life and create enduring value for our clients and communities.',
  },
];

const PRINCIPLES = [
  {
    number: '01',
    title: 'Integrity',
    description:
      'We are transparent in our actions and accountable in our decisions.',
    icon: ShieldCheck,
    cardClass: 'bg-white border border-primary/10 text-ink',
    mutedClass: 'text-muted',
    iconClass: 'text-primary',
  },
  {
    number: '02',
    title: 'Care',
    description:
      'We consider the people, places, and communities behind every project.',
    icon: Heart,
    cardClass: 'bg-[#B4EC51] border border-transparent text-ink',
    mutedClass: 'text-ink/75',
    iconClass: 'text-ink',
  },
  {
    number: '03',
    title: 'Ingenuity',
    description:
      'We find practical, creative solutions to complex challenges.',
    icon: Lightbulb,
    cardClass: 'bg-primary border border-transparent text-white',
    mutedClass: 'text-white/80',
    iconClass: 'text-white',
  },
  {
    number: '04',
    title: 'Craft',
    description:
      'We respect materials, finishes, and the quality of the finished result.',
    icon: Award,
    cardClass: 'bg-[#BFE0CD] border border-transparent text-ink',
    mutedClass: 'text-ink/75',
    iconClass: 'text-primary',
  },
];

const DISCIPLINES = [
  {
    number: '01',
    area: 'IN STRATEGY',
    title: 'Development & Strategy',
    description:
      'Capability assessment, project planning, and a clear commercial direction.',
  },
  {
    number: '02',
    area: 'IN ARCHITECTURE',
    title: 'Architecture & Design',
    description:
      'Creative thinking, technical resolution, and spaces shaped around real results.',
  },
  {
    number: '03',
    area: 'IN CONSTRUCTION',
    title: 'Construction & Delivery',
    description:
      'On-site coordination, quality oversight, and consistent focus on execution.',
  },
];

/* ─── Component ─────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Avencrest Integrated Limited</title>
        <meta
          name="description"
          content="Learn about Avencrest Integrated Limited — built on purpose and defined by possibility. Architecture, Development, and Construction across Nigeria."
        />
      </Helmet>

      {/* 1 ── Hero */}
      <section className="relative flex min-h-[520px] items-end overflow-hidden bg-primary text-white lg:min-h-[600px]">
        <img
          src={heroImg}
          alt="Avencrest project — premium tropical residence"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#061612]/90 via-[#061612]/55 to-[#061612]/30"
        />

        <Container className="relative z-10 pb-14 pt-32 lg:pb-20">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
            About Avencrest
          </p>
          <h1 className="max-w-2xl text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Built on purpose.
            <br />
            Defined by possibility.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
            We connect thoughtful design with disciplined delivery to create spaces of
            lasting value. Architecture. Development. Construction. One shared vision.
          </p>

          <div className="mt-8 flex flex-col gap-3.5  sm:items-start sm:gap-4">
            <Button variant="white" to="/contact" className="!rounded-none">
              Meet Avencrest
            </Button>
            <Button variant="ghost-light" to="/contact" className="!rounded-none">
              Start a conversation
            </Button>
          </div>

          {/* Breadcrumb */}
          <p className="mt-10 text-[11px] uppercase tracking-[0.14em] text-white/50">
            Avencrest · Architecture &amp; Development
          </p>
        </Container>
      </section>

      {/* 2 ── Purpose ("More than buildings. Better possibilities.") */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            Our Purpose As
          </p>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-normal leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
                More than buildings.
                <br />
                Better possibilities.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Avencrest Integrated Limited brings a connected perspective to real estate
                development. We bring design, technical expertise, and careful execution
                together — keeping projects reliable and built to last.
              </p>
            </div>
          </div>

          {/* Mission / Vision cards */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {MISSION_VISION.map((item) => (
              <div
                key={item.label}
                className="rounded-md border border-primary/10 bg-[#F7F6F2] p-7"
              >
                <h3 className="mb-3 text-base font-medium text-ink">{item.label}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3 ── Principles ("Principles that become practice.") */}
      <section className="bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="WHAT GUIDES US"
            title={
              <>
                Principles that
                <br />
                become practice.
              </>
            }
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.number}
                  className={`flex flex-col justify-between rounded-md p-6 ${item.cardClass}`}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <Icon
                      className={`h-5 w-5 ${item.iconClass}`}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className={`text-[11px] font-medium ${item.mutedClass}`}>
                      {item.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className={`mt-2.5 text-xs leading-relaxed ${item.mutedClass}`}>
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4 ── Team ("Different disciplines. One accountable team.") */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            The People Behind The Process
          </p>

          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-normal leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
                Different disciplines.
                <br />
                One accountable team.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
                A collaborative team spanning strategy, architecture, and delivery —
                aligned around your project.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-10">
            {DISCIPLINES.map((item) => (
              <div key={item.number} className="border-t-2 border-primary/15 pt-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  {item.number} / {item.area}
                </span>
                <h3 className="mt-3 text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <Button
                  variant="ghost"
                  size="compact"
                  to="/services"
                  className="mt-5"
                  showArrow={false}
                >
                  <ArrowRight className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                  Learn more
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5 ── Pre-Footer CTA */}
      <PreFooterCta
        eyebrow="LET'S BUILD SOMETHING THAT LASTS"
        titleLine1="Your vision."
        titleLine2="Our next conversation."
        ctaLabel="Book a consultation"
        ctaTo="/contact"
      />
    </>
  );
}
