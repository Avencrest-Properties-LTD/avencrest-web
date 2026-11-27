import { Helmet } from 'react-helmet-async';
import { Container } from '../ui';

/**
 * Shared layout for legal documentation pages (Terms of Service, Privacy Notice).
 * Features an editorial header, sticky "On this page" table of contents,
 * and a prose content column with anchor-scroll offsets.
 */
export default function LegalPageLayout({
  metaTitle,
  metaDescription,
  eyebrow = 'LEGAL',
  title,
  description,
  lastUpdated,
  lastUpdatedIso,
  sections = [],
  children,
}) {
  return (
    <>
      <Helmet>
        <title>{metaTitle} | Avencrest Integrated Limited</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* ── Header ──────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-primary/10 bg-[#FAF9F5] pb-12 pt-28 sm:pb-16 sm:pt-36">
        <Container>
          <div className="flex max-w-3xl flex-col items-start">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-secondary">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-normal leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[54px]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
            {lastUpdated && (
              <div className="mt-8 w-full">
                <p className="text-sm text-muted">
                  Last updated{' '}
                  <time dateTime={lastUpdatedIso}>{lastUpdated}</time>
                </p>
              </div>
            )}
          </div>
        </Container>
      </header>

      {/* ── Sticky TOC + Content ────────────────────────────── */}
      <section className="relative bg-white pb-20 pt-12 sm:pb-24 sm:pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[14rem_1fr]">
            <nav
              aria-label="On this page"
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                On this page
              </p>
              <ul className="flex flex-col gap-2 border-l border-primary/15 text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-muted transition-colors hover:border-secondary hover:text-ink"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex max-w-3xl flex-col gap-5 text-base leading-relaxed text-muted [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-secondary [&_h2]:mt-8 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-ink [&_h3]:mt-4 [&_h3]:font-medium [&_h3]:text-ink [&_li]:marker:text-secondary [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {children}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
