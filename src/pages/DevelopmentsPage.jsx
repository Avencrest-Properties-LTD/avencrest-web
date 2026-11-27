import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../components/ui';
import { PreFooterCta } from '../components/sections';
/* ─── Data & API Migration Note ────────────────────────────
 * NOTE: For now, development items reuse the shared projects dataset.
 * Subsequently, this dataset will be dynamically fetched from the dedicated
 * Developments REST API (managed and published via the Avencrest Admin Portal).
 * See `/development.md` for API contract, schema, admin form specs, and backend integration.
 * ────────────────────────────────────────────────────────── */
import { CATEGORIES, PROJECTS } from '../data/projectsData';

/* ─── Images ────────────────────────────────────────────── */
import heroImg from '../assets/images/properties/palm dulex.jpg';

export default function DevelopmentsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Developments | Avencrest Integrated Limited</title>
        <meta
          name="description"
          content="Buildings shaped by a shared vision. Discover contemporary residential and commercial real estate developments delivered by Avencrest Integrated Limited across Nigeria."
        />
      </Helmet>

      {/* ── 1. Hero Section ───────────────────────────────────── */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-primary text-white lg:min-h-[680px]">
        <img
          src={heroImg}
          alt="Avencrest developments across Nigeria"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Gradients matching exact hero design */}
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
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
              OUR DEVELOPMENTS
            </p>
            <h1 className="text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              Buildings shaped
              <br />
              by a shared
              <br />
              vision.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              From concept development through delivery, our multi-unit and boutique residential
              and commercial developments create enduring value for communities and investors.
            </p>

            {/* Exact hero buttons requested by user */}
            <div className="mt-8 flex flex-col gap-3.5 sm:items-start sm:gap-4">
              <Button variant="white" to="/projects" className="!rounded-none">
                Explore our expertise
              </Button>
              <Button variant="ghost-light" to="/contact" className="!rounded-none">
                Start a conversation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Filter & Developments Grid Section ──────────────── */}
      <section className="bg-[#FAF9F5] py-12 lg:py-20">
        <Container>
          {/* Category Filter Tabs */}
          <div className="mb-12 flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-white text-muted hover:bg-white/80 hover:text-ink'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* 2-Column Responsive Grid matching design */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article key={project.id} className="group flex flex-col">
                {/* Image Card with Floating Badge */}
                <div className="relative mb-5 aspect-[16/11] w-full overflow-hidden bg-surface">
                  <Link to={`/projects/${project.id}`}>
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  {/* Category Tag */}
                  <span className="absolute left-4 top-4 bg-white/95 px-3 py-1 text-[11px] font-medium tracking-wider text-primary shadow-sm backdrop-blur-sm">
                    {project.badge}
                  </span>
                </div>

                {/* Eyebrow / Location */}
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  {project.location}
                </p>

                {/* Title */}
                <h2 className="text-2xl font-normal leading-snug tracking-tight text-ink transition-colors group-hover:text-primary sm:text-[26px]">
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                </h2>

                {/* Typology Subtitle */}
                <p className="mt-1 text-xs text-muted/80">{project.typology}</p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                  {project.description}
                </p>

                {/* Action Link */}
                <div className="mt-4 pt-1">
                  <Link
                    to={`/projects/${project.id}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-secondary"
                  >
                    <span>Explore project</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. PreFooter CTA ─────────────────────────────────── */}
      <PreFooterCta />
    </>
  );
}
