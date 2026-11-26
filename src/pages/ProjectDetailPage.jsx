import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button, Container } from '../components/ui';
import { PreFooterCta } from '../components/sections';
import ProjectLocationMap from '../components/sections/ProjectLocationMap';
import { getProjectById, PROJECTS } from '../data/projectsData';

export default function ProjectDetailPage() {
  const { id } = useParams();

  const project = useMemo(() => {
    return getProjectById(id) || PROJECTS[0];
  }, [id]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${project.title} | Projects | Avencrest Integrated Limited`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* ── 1. Hero Section ───────────────────────────────────── */}
      <section className="relative flex min-h-[580px] items-end overflow-hidden bg-primary text-white lg:min-h-[700px]">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Dark gradient overlay matching reference exactly */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#061612]/95 via-[#061612]/60 to-[#061612]/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#061612]/75 via-[#061612]/40 to-transparent"
        />

        <Container className="relative z-10 pb-14 pt-32 lg:pb-20 lg:pt-44">
          <div className="max-w-2xl">
            {/* Breadcrumb / Eyebrow */}
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
              OUR PROJECTS · {project.badge.toUpperCase()}
            </p>

            {/* Display Title */}
            <h1 className="text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              {project.heroSubtitle || project.description}
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-col gap-3.5 sm:items-start sm:gap-4">
              <Button variant="white" to="/contact" className="!rounded-none">
                Start a conversation
              </Button>
              <Button variant="ghost-light" to="/projects" className="!rounded-none">
                Back to all projects
              </Button>
            </div>
          </div>

          {/* Bottom Bar: Category breadcrumb + Carousel Arrows */}
          <div className="mt-14 flex items-center justify-between border-t border-white/15 pt-5 text-xs text-white/60">
            <span className="text-[11px] uppercase tracking-wider text-white/50">
              Avencrest / {project.badge} / {project.title}
            </span>
            <div className="flex items-center gap-2">
              <Link
                to={`/projects/${project.nextProject?.id || 'ikoyi-residence'}`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
              </Link>
              <Link
                to={`/projects/${project.nextProject?.id || 'ikoyi-residence'}`}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. The Project Overview & Key Facts ───────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                {project.overviewEyebrow || 'THE PROJECT'}
              </p>
              <h2 className="whitespace-pre-line text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
                {project.overviewHeading || 'A considered home.\nAn exceptional way to live.'}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {project.overviewParagraphs ? (
                  project.overviewParagraphs.map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
              {project.overviewFootnote && (
                <p className="mt-8 border-t border-primary/10 pt-4 text-xs italic text-muted/70">
                  {project.overviewFootnote}
                </p>
              )}
            </div>

            {/* Right Column: Key Facts Panel */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF9F5] p-8 lg:p-10">
                <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                  KEY PROJECT INFORMATION
                </p>
                <dl className="space-y-6">
                  {project.keyFacts?.map((fact) => (
                    <div key={fact.label} className="border-b border-primary/10 pb-4 last:border-b-0 last:pb-0">
                      <dt className="text-[10px] font-medium uppercase tracking-wider text-muted">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Gallery / Spatial Experience ───────────────────── */}
      {project.galleryItems && project.galleryItems.length > 0 && (
        <section className="bg-[#FAF9F5] py-16 lg:py-24">
          <Container>
            <div className="mb-12">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                {project.galleryEyebrow || 'SPATIAL EXPERIENCE'}
              </p>
              <h2 className="whitespace-pre-line text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[42px]">
                {project.galleryHeading || 'Material. Light.\nSpace.'}
              </h2>
            </div>

            {/* 2-Column Gallery Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {project.galleryItems.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="overflow-hidden bg-surface">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {item.caption && (
                    <p className="mt-3 text-xs text-muted/80">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 4. Features & Location Split Section ──────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Features & Amenities */}
            <div className="lg:col-span-6">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                {project.featuresEyebrow || 'FEATURES & AMENITIES'}
              </p>
              <h2 className="whitespace-pre-line text-3xl font-normal leading-[1.12] tracking-tight text-ink sm:text-4xl">
                {project.featuresHeading || 'Details that make\na difference.'}
              </h2>

              <ul className="mt-8 space-y-3.5">
                {project.featuresList?.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Dark Emerald Location Card */}
            {project.locationCard && (
              <div className="lg:col-span-6">
                <div className="bg-primary p-8 text-white sm:p-10 lg:p-12">
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                    {project.locationCard.tag}
                  </span>
                  <h3 className="mt-3 whitespace-pre-line text-2xl font-normal leading-snug tracking-tight text-white sm:text-3xl">
                    {project.locationCard.title}
                  </h3>
                  <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-white/80">
                    {project.locationCard.address}
                  </p>
                  <p className="mt-4 border-t border-white/15 pt-4 text-xs text-white/60">
                    {project.locationCard.subtext}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ── 4B. Interactive Location Map ──────────────────────── */}
      {project.locationCard?.coordinates && (
        <section className="border-t border-primary/10 bg-[#FAF9F5] py-16 lg:py-20">
          <Container>
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  SITE & NEIGHBORHOOD
                </p>
                <h2 className="text-2xl font-normal leading-tight tracking-tight text-ink sm:text-3xl">
                  Locate on map
                </h2>
              </div>
              <p className="text-xs text-muted">
                {project.locationCard.address.replace('\n', ', ')}
              </p>
            </div>

            {/* React Leaflet Interactive Map */}
            <ProjectLocationMap
              coordinates={project.locationCard.coordinates}
              title={project.title}
              address={project.locationCard.address}
              zoom={15}
            />
          </Container>
        </section>
      )}

      {/* ── 5. Next Project Teaser ────────────────────────────── */}
      {project.nextProject && (
        <section className="border-t border-primary/10 bg-[#FAF9F5] py-16 lg:py-24">
          <Container>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              MORE PROJECTS
            </p>
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
              <Link
                to={`/projects/${project.nextProject.id}`}
                className="group overflow-hidden bg-surface"
              >
                <img
                  src={project.nextProject.image}
                  alt={project.nextProject.imageAlt}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">Next project</p>
                <h3 className="mt-2 text-2xl font-normal text-ink sm:text-3xl">
                  {project.nextProject.title}
                </h3>
                <div className="mt-6">
                  <Link
                    to={`/projects/${project.nextProject.id}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-secondary"
                  >
                    <span>Explore project</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── 6. PreFooter CTA ─────────────────────────────────── */}
      <PreFooterCta />
    </>
  );
}
