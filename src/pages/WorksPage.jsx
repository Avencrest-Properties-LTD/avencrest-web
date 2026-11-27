import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../components/ui';
import { PreFooterCta } from '../components/sections';

/* ─── Images ────────────────────────────────────────────── */
import heroImg from '../assets/images/properties/palm dulex.jpg';
import work1Img from '../assets/images/properties/palm dulex.jpg';
import work2Img from '../assets/images/properties/architectural floor (1).jpg';
import work3Img from '../assets/images/properties/tile duplex.jpg';
import work4Img from '../assets/images/properties/wooden paloor.jpg';
import work5Img from '../assets/images/properties/Glass Mall.jpg';
import work6Img from '../assets/images/properties/duplexwth 2cars.jpg';
import featurePlanImg from '../assets/images/properties/building plan (1).jpg';

/* ─── Data & API Migration Note ────────────────────────────
 * NOTE: For now, works entries are statically defined below.
 * Subsequently, this dataset will be dynamically fetched from the backend API
 * (managed and published via the Avencrest Admin Portal).
 * See `/works.md` for API contract, schema, admin form specs, and backend integration.
 * ────────────────────────────────────────────────────────── */
const CATEGORIES = [
  { id: 'all', label: 'All works' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'construction', label: 'Construction' },
  { id: 'interiors', label: 'Interiors' },
];

const WORKS = [
  {
    id: 'work-1',
    category: 'architecture',
    eyebrow: 'IKOYI RESIDENCE',
    title: 'Contemporary residential\ndesign',
    image: work1Img,
    imageAlt: 'Contemporary residential timber facade',
    link: '/projects/ikoyi-residence',
  },
  {
    id: 'work-2',
    category: 'architecture',
    eyebrow: 'DEVELOPMENT STUDY',
    title: 'Planning the possibilities',
    image: work2Img,
    imageAlt: 'Architectural floor plans and 3D house rendering',
    link: '/services',
  },
  {
    id: 'work-3',
    category: 'construction',
    eyebrow: 'ON-SITE DELIVERY',
    title: 'From drawings to built form',
    image: work3Img,
    imageAlt: 'On site duplex construction and finishing',
    link: '/services',
  },
  {
    id: 'work-4',
    category: 'interiors',
    eyebrow: 'RESIDENTIAL LIVING',
    title: 'Material warmth. Natural light.',
    image: work4Img,
    imageAlt: 'Double height living room with natural wood and generous daylight',
    link: '/projects/ikoyi-residence',
  },
  {
    id: 'work-5',
    category: 'architecture',
    eyebrow: 'COMMERCIAL HUB',
    title: 'A confident architectural\nidentity',
    image: work5Img,
    imageAlt: 'Commercial multi-storey stone and glass facade',
    link: '/projects/avencrest-commercial',
  },
  {
    id: 'work-6',
    category: 'architecture',
    eyebrow: 'TERRACE LIVING',
    title: 'A fresh perspective on living',
    image: work6Img,
    imageAlt: 'Modern white multi-level terrace with evening ambient lights',
    link: '/projects/garden-collection',
  },
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredWorks =
    activeCategory === 'all'
      ? WORKS
      : WORKS.filter((w) => w.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Works | Avencrest Integrated Limited</title>
        <meta
          name="description"
          content="Explore the thinking, the craft, and the detail behind Avencrest's delivered architecture, construction, and interior spaces across Nigeria."
        />
      </Helmet>

      {/* ── 1. Hero Section ───────────────────────────────────── */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-primary text-white lg:min-h-[680px]">
        <img
          src={heroImg}
          alt="Avencrest selected works and craft"
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
              OUR WORKS
            </p>
            <h1 className="text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              The thinking.
              <br />
              The craft. The
              <br />
              detail.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              A deeper look at the architectural ideas, construction discipline, and
              curated spaces behind our work.
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

      {/* ── 2. Filter & Works Grid Section ────────────────────── */}
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

          {/* 2-Column Responsive Works Grid matching design */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {filteredWorks.map((work) => (
              <article key={work.id} className="group flex flex-col">
                <Link to={work.link} className="block overflow-hidden bg-surface">
                  <div className="aspect-[16/11] w-full overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Link>

                {/* Eyebrow Label */}
                <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  {work.eyebrow}
                </p>

                {/* Title */}
                <h2 className="mt-2 whitespace-pre-line text-2xl font-normal leading-snug tracking-tight text-ink transition-colors group-hover:text-primary sm:text-[26px]">
                  <Link to={work.link}>{work.title}</Link>
                </h2>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. Feature Callout Block ("A clear idea. Carefully realised.") ── */}
      <section className="bg-primary py-16 text-white lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left: Architectural Drawing & Material Composition */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden bg-[#002f28]/60 p-3 sm:p-4">
                <img
                  src={featurePlanImg}
                  alt="Avencrest architectural floor plan and resolution"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Narrative & CTA */}
            <div className="lg:col-span-7 lg:pl-6">
              <h2 className="text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[42px]">
                A clear idea.
                <br />
                Carefully realised.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                From early concept sketches to precise on-site execution, every detail is
                guided by disciplined design and uncompromising craftsmanship.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-secondary"
                >
                  <span>Start your project</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. PreFooter CTA ─────────────────────────────────── */}
      <PreFooterCta />
    </>
  );
}
