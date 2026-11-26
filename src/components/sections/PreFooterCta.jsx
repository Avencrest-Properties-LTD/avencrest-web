import Button from '../ui/Button';
import Container from '../ui/Container';

/**
 * Reusable deep-green pre-footer call-to-action banner.
 */
export default function PreFooterCta({
  eyebrow = 'START A PROJECT',
  titleLine1 = 'Your vision.',
  titleLine2 = 'Our next conversation.',
  ctaLabel = 'Book a consultation',
  ctaTo = '/contact',
}) {
  return (
    <section className="bg-primary py-16 text-white lg:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            {eyebrow && (
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/65">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl">
              {titleLine1}
              <br />
              {titleLine2}
            </h2>
          </div>

          <Button variant="white" to={ctaTo} className="rounded-md">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
