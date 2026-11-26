import { Helmet } from 'react-helmet-async';
import {
  Award,
  Building2,
  ClipboardCheck,
  Compass,
  DraftingCompass,
  HardHat,
  Layers,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';
import { Button, Container, SectionHeader } from '../components/ui';
import { PreFooterCta, TestimonialCarousel } from '../components/sections';
import {
  ABOUT_DATA,
  CORE_VALUES,
  FEATURED_PROJECTS,
  HERO_DATA,
  PROCESS_STEPS,
  SERVICES_LIST,
  TESTIMONIALS,
  TRUST_STATS,
} from '../data/homeData';

const SERVICE_ICONS = [DraftingCompass, Building2, HardHat, ClipboardCheck, Layers];

const VALUE_ICONS = {
  quality: ShieldCheck,
  innovation: Lightbulb,
  professionalism: Award,
  excellence: Compass,
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Avencrest Integrated Limited | Property Development in Nigeria</title>
        <meta
          name="description"
          content="Avencrest Integrated Limited supports responsible property development in Nigeria through planning, architectural design, construction coordination, and project oversight."
        />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative flex min-h-[580px] items-center overflow-hidden bg-primary text-white lg:min-h-[680px]">
        <img
          src={HERO_DATA.image}
          alt={HERO_DATA.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#061612]/80 via-[#061612]/55 to-[#061612]/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent"
        />

        <Container className="relative z-10 py-20 lg:py-28">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-white/75">
              {HERO_DATA.eyebrow}
            </p>
            <h1 className="text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[60px]">
              {HERO_DATA.titleLine1}
              <br />
              {HERO_DATA.titleLine2}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              {HERO_DATA.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <Button variant="white" to="/projects" className="w-full sm:w-auto">
                Explore our projects
              </Button>
              <Button variant="primary" to="/contact" className="w-full sm:w-auto">
                Start a conversation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Trust / Metrics Strip */}
      <section className="border-b border-primary/10 bg-[#F7F6F2] py-8">
        <Container>
          <div className="grid grid-cols-1 divide-y divide-primary/10 text-center md:grid-cols-3 md:divide-x md:divide-y-0 md:text-left">
            {TRUST_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-4 md:flex-row md:justify-start md:gap-4 md:py-1 ${
                  idx > 0 ? 'md:pl-10' : ''
                }`}
              >
                <span className="text-sm font-semibold text-primary">{stat.value}</span>
                <span className="hidden h-px w-8 bg-primary/20 md:inline-block" />
                <span className="mt-1 text-xs uppercase tracking-wider text-muted md:mt-0">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. About / Philosophy */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                {ABOUT_DATA.eyebrow}
              </p>
              <h2 className="text-3xl font-normal leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
                {ABOUT_DATA.titleLine1}
                <br />
                {ABOUT_DATA.titleLine2}
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {ABOUT_DATA.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="green" to={ABOUT_DATA.ctaTo}>
                  {ABOUT_DATA.ctaLabel}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-md bg-surface shadow-soft">
                <img
                  src={ABOUT_DATA.image}
                  alt={ABOUT_DATA.imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Services ("One partner. Every stage covered.") */}
      <section className="bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="OUR SERVICES"
            title={
              <>
                One partner.
                <br />
                Every stage covered.
              </>
            }
            description="From initial feasibility to final key handover, our integrated team guides every milestone."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES_LIST.map((service, index) => {
              const Icon = SERVICE_ICONS[index] ?? Building2;
              const isFeatured = service.featured;

              return (
                <article
                  key={service.number}
                  className={`flex flex-col justify-between rounded-md p-6 transition-shadow duration-200 ${
                    isFeatured
                      ? 'bg-primary text-white shadow-soft'
                      : 'border border-primary/10 bg-white text-ink hover:shadow-soft'
                  }`}
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <Icon
                        className={`h-5 w-5 ${isFeatured ? 'text-secondary' : 'text-primary'}`}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-[11px] font-medium ${
                          isFeatured ? 'text-white/50' : 'text-muted/70'
                        }`}
                      >
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium leading-snug">{service.title}</h3>
                    <p
                      className={`mt-3 text-xs leading-relaxed ${
                        isFeatured ? 'text-white/80' : 'text-muted'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Button
                      variant={isFeatured ? 'ghost-light' : 'ghost'}
                      size="tiny"
                      to={service.to}
                    >
                      Learn more
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Featured Projects ("A vision, made real.") */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="FEATURED DEVELOPMENTS"
            title="A vision, made real."
            action={
              <Button variant="ghost" size="compact" to="/projects">
                Explore our projects
              </Button>
            }
          />

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-12">
            {FEATURED_PROJECTS.map((project) => (
              <article key={project.id} className="group">
                <div className="overflow-hidden rounded-sm bg-surface">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  {project.location}
                </p>
                <h3 className="mt-1.5 text-xl font-normal text-ink sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                  {project.summary}
                </p>
                <Button variant="ghost" size="compact" to={project.to} className="mt-3">
                  Explore project
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Core Values ("Excellence is not an extra. It is our foundation.") */}
      <section className="bg-[#F7F6F2] pb-16 pt-20 lg:pb-24 lg:pt-28">
        <Container>
          <SectionHeader
            eyebrow="OUR CORE VALUES"
            title={
              <>
                Excellence is not an extra.
                <br />
                It is our foundation.
              </>
            }
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((item) => {
              const Icon = VALUE_ICONS[item.key] ?? ShieldCheck;

              return (
                <article
                  key={item.key}
                  className={`flex flex-col justify-between rounded-md p-6 ${item.cardClass}`}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <Icon className={`h-5 w-5 ${item.iconClass}`} strokeWidth={1.75} aria-hidden="true" />
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

      {/* 7. Process ("A clear path. A considered outcome.") */}
      <section className="border-t border-primary/10 bg-[#F7F6F2] py-20 lg:py-24">
        <Container>
          <SectionHeader
            align="center"
            title={
              <>
                A clear path.
                <br />
                A considered outcome.
              </>
            }
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="border-t border-primary/15 pt-5">
                <span className="text-[11px] font-medium tracking-[0.14em] text-secondary">
                  {step.number}
                </span>
                <h3 className="mt-2.5 text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Client Testimonial Carousel */}
      <TestimonialCarousel items={TESTIMONIALS} />

      {/* 9. Pre-Footer CTA */}
      <PreFooterCta />
    </>
  );
}
