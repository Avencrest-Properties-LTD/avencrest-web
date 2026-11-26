import { Helmet } from 'react-helmet-async';
import { Button, Container, SectionHeader } from '../components/ui';
import { PreFooterCta } from '../components/sections';

/**
 * Shared scaffold for secondary routes until dedicated page screens are designed.
 */
export default function PageShell({
  title,
  eyebrow,
  heading,
  description,
  ctaLabel = 'Explore our projects',
  ctaTo = '/projects',
}) {
  return (
    <>
      <Helmet>
        <title>{title} | Avencrest Integrated Limited</title>
        <meta name="description" content={description} />
      </Helmet>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeader eyebrow={eyebrow} title={heading} description={description} />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" to="/contact">
              Start a conversation
            </Button>
            <Button variant="outline" to={ctaTo}>
              {ctaLabel}
            </Button>
          </div>
        </Container>
      </section>

      <PreFooterCta />
    </>
  );
}
