import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../components/ui';
import { PreFooterCta } from '../components/sections';

/* ─── Images ────────────────────────────────────────────── */
import heroImg from '../assets/images/properties/Glass Mall.jpg';
import archDesignImg1 from '../assets/images/properties/architectural floor (1).jpg';
import archDesignImg2 from '../assets/images/properties/2storey building.jpg';
import realEstateImg from '../assets/images/properties/brown duplex.jpg';
import constructionImg from '../assets/images/properties/tile duplex.jpg';
import projMgmtImg1 from '../assets/images/properties/building plan (1).jpg';
import projMgmtImg2 from '../assets/images/properties/paloor with plant2.jpg';
import designBuildImg from '../assets/images/properties/glass storey buiding.jpg';

/* ─── Data ──────────────────────────────────────────────── */

const SERVICES = [
  {
    id: 'architectural-design',
    eyebrow: 'ARCHITECTURAL DESIGN',
    heading: 'Spaces that start\nwith you.',
    description:
      'At Avencrest, every architectural brief begins with listening. We study your site, your life, and your long-term ambitions before a single line is drawn.',
    bullets: [
      'Concept design & feasibility',
      'Structural drawings & approvals',
      'Interior space planning',
    ],
    ctaLabel: 'Review project',
    ctaTo: '/projects',
    imageLayout: 'right',
    images: [
      { src: archDesignImg1, alt: 'Architectural floor plans and site drawings' },
      { src: archDesignImg2, alt: 'Completed two-storey residential building' },
    ],
    twoImages: true,
  },
  {
    id: 'real-estate-development',
    eyebrow: 'REAL ESTATE DEVELOPMENT',
    heading: 'From opportunity to\nenduring value.',
    description:
      'We evaluate sites, structure investments, and manage the full development cycle from acquisition through final handover—delivering assets built for the long term.',
    bullets: [
      'Site acquisition & due diligence',
      'Feasibility studies & financial modelling',
      'Full-cycle development management',
    ],
    ctaLabel: 'Review project',
    ctaTo: '/projects',
    imageLayout: 'left',
    images: [
      { src: realEstateImg, alt: 'Contemporary brown duplex development' },
    ],
    twoImages: false,
  },
  {
    id: 'construction',
    eyebrow: 'CONSTRUCTION',
    heading: 'Precision in every\nstage.',
    description:
      'From groundwork to finishing, our construction teams operate with structured site management, rigorous quality checks, and transparent progress reporting throughout every phase.',
    bullets: [
      'Structural build & civil works',
      'Material procurement & quality control',
      'Scheduled milestone reporting',
    ],
    ctaLabel: 'Review project',
    ctaTo: '/projects',
    imageLayout: 'right',
    images: [
      { src: constructionImg, alt: 'Modern tile duplex under construction' },
    ],
    twoImages: false,
  },
  {
    id: 'project-management',
    eyebrow: 'PROJECT MANAGEMENT',
    heading: 'Clarity from beginning\nto end.',
    description:
      'We coordinate architects, engineers, contractors, and suppliers under a single accountable structure—keeping schedules, budgets, and decisions consistently clear.',
    bullets: [
      'Programme & cost management',
      'Stakeholder & consultant coordination',
      'Risk monitoring & delivery oversight',
    ],
    ctaLabel: 'Review project',
    ctaTo: '/projects',
    imageLayout: 'left',
    images: [
      { src: projMgmtImg1, alt: 'Detailed building plans and drawings' },
      { src: projMgmtImg2, alt: 'Finished interior with indoor plants' },
    ],
    twoImages: true,
  },
  {
    id: 'design-build',
    eyebrow: 'DESIGN · CONSTRUCTION',
    heading: 'One vision. One connected\nteam.',
    description:
      'Our design-build model brings architectural and construction expertise under one roof—eliminating the communication gaps that slow most projects down and add unnecessary cost.',
    bullets: [
      'Integrated design & delivery team',
      'Single point of accountability',
      'Faster programme, clearer budget',
    ],
    ctaLabel: 'Review project',
    ctaTo: '/projects',
    imageLayout: 'right',
    images: [
      { src: designBuildImg, alt: 'Glass storey building with modern facade' },
    ],
    twoImages: false,
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand your goals, site, timeline, and investment parameters from the very first meeting.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Architectural concepts, structural plans, and regulatory approvals shaped around your specific brief.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'Coordinated construction execution with strict quality assurance and clear milestone updates.',
  },
  {
    number: '04',
    title: 'Handover',
    description:
      'Final inspections, commissioning, and a seamless transition into your completed space.',
  },
];

/* ─── Sub-components ─────────────────────────────────────── */

function TwoImageGrid({ images }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((img) => (
        <div
          key={img.alt}
          className="overflow-hidden rounded-md bg-surface"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

function SingleImage({ image }) {
  return (
    <div className="overflow-hidden rounded-md bg-surface">
      <img
        src={image.src}
        alt={image.alt}
        className="aspect-[4/3] w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

function ServiceSection({ service, index }) {
  const isLeft = service.imageLayout === 'left';

  const textBlock = (
    <div className="flex flex-col justify-center">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
        {service.eyebrow}
      </p>
      <h2 className="whitespace-pre-line text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[40px]">
        {service.heading}
      </h2>
      <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5 text-sm text-muted">
            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-7">
        <Link
          to={service.ctaTo}
          className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-secondary"
        >
          {service.ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );

  const imageBlock = service.twoImages ? (
    <TwoImageGrid images={service.images} />
  ) : (
    <SingleImage image={service.images[0]} />
  );

  /* Alternating layout: image-left on even index (0,2,4 → right image),
     isLeft drives the grid order on desktop */
  return (
    <section
      id={service.id}
      className={`py-16 lg:py-24 ${index % 2 !== 0 ? 'bg-[#F7F6F2]' : 'bg-white'}`}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Mobile: text always first. Desktop: order driven by imageLayout */}
          <div className={isLeft ? 'lg:order-2' : 'lg:order-1'}>{textBlock}</div>
          <div className={isLeft ? 'lg:order-1' : 'lg:order-2'}>{imageBlock}</div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Avencrest Integrated Limited</title>
        <meta
          name="description"
          content="Architectural design, real estate development, construction, project management, and design-build services by Avencrest Integrated Limited."
        />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-primary text-white lg:min-h-[680px]">
        <img
          src={heroImg}
          alt="Modern commercial building by Avencrest"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#061612]/90 via-[#061612]/50 to-[#061612]/20"
        />
        {/* Left-to-right gradient for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#061612]/60 to-transparent"
        />

        <Container className="relative z-10 pb-14 pt-32 lg:pb-20 lg:pt-44">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
              Our Services
            </p>
            <h1 className="text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              From first idea
              <br />
              to final detail.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              Architecture, development, construction, and project management—all
              delivered from a single integrated team. One relationship, every stage.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:items-start sm:gap-4">
              <Button variant="white" to="/projects" className="!rounded-none">
                Explore our expertise
              </Button>
              <Button variant="ghost-light" to="/contact" className="!rounded-none">
                Start a conversation
              </Button>
            </div>
          </div>

          {/* Service anchor nav — visible desktop bottom of hero */}
          <div className="mt-14 hidden grid-cols-5 gap-px border-t border-white/15 pt-5 lg:grid">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex flex-col gap-1 pr-4 text-xs text-white/55 transition-colors hover:text-white"
              >
                <span className="text-[10px] font-medium uppercase tracking-widest text-white/35 group-hover:text-white/60">
                  {s.eyebrow.split(' · ')[0]}
                </span>
                <span className="text-white/70 group-hover:text-white">
                  {s.heading.split('\n')[0]}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Service Sections ──────────────────────────────────── */}
      {SERVICES.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* ── Process Strip ─────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              HOW WE WORK
            </p>
            <h2 className="text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
              A clear path.
              <br />
              A considered outcome.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.number} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-medium tracking-[0.14em] text-muted">
                    {step.number}
                  </span>
                  {/* Connector line */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden h-px flex-1 bg-primary/15 lg:block" />
                  )}
                </div>
                <h3 className="text-lg font-normal text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Pre-footer CTA ────────────────────────────────────── */}
      <PreFooterCta />
    </>
  );
}
