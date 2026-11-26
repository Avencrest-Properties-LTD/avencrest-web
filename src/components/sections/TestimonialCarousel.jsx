import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';

/**
 * Interactive testimonial slider matching the editorial quote + client portrait layout.
 */
export default function TestimonialCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = items[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
            {/* Client avatar — top centered on mobile, right column on desktop */}
            <div className="flex flex-col items-center text-center md:order-last md:col-span-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-secondary/70 bg-primary/10 font-display text-xl font-semibold text-primary shadow-soft sm:h-24 sm:w-24">
                {current.initials}
              </div>
              <p className="mt-4 text-sm font-medium text-ink">{current.name}</p>
              <p className="mt-0.5 text-xs text-muted">{current.role}</p>
            </div>

            {/* Quote */}
            <div className="md:col-span-8">
              <span
                aria-hidden="true"
                className="mb-3 block font-display text-4xl leading-none text-secondary"
              >
                &ldquo;
              </span>
              <blockquote className="font-display text-xl italic leading-relaxed text-ink sm:text-2xl lg:text-[26px]">
                {current.quote}
              </blockquote>
            </div>
          </div>

          {/* Project tag pill */}
          <div className="mt-8 flex justify-center md:justify-start">
            <span className="inline-flex items-center rounded-full bg-[#F7F6F2] px-4 py-1.5 text-xs text-muted">
              Project Delivered &middot; {current.project}
            </span>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between border-t border-primary/10 pt-6">
            <div className="flex items-center gap-2">
              {items.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    idx === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/15 bg-white text-primary transition-colors hover:bg-surface"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white transition-colors hover:bg-[#002f28]"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
