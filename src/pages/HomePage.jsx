import heroImage from '../assets/images/hero/mockup-house.jpg';
import Button from '../components/ui/Button';

export default function HomePage() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[90svh] flex-col overflow-hidden bg-[#70adba] text-white"
        aria-labelledby="hero-title"
      >
        <img
          className="absolute bottom-0 left-1/2 z-[-1] h-auto w-[80%] max-w-[1400px] -translate-x-1/2 object-contain md:w-full"
          src={heroImage}
          alt=""
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(42,133,154,0.88)_0%,rgba(52,141,160,0.78)_44%,rgba(75,153,170,0.52)_62%,rgba(111,177,186,0.12)_76%,transparent_84%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-1 flex-col items-center px-5 pt-[clamp(4.25rem,10vw,8rem)] pb-12 text-center">
          <h1
            id="hero-title"
            className="m-0 max-w-full font-display text-[clamp(2.4rem,8vw,6.5rem)] font-normal leading-[0.9] tracking-[-0.055em] text-balance text-white drop-shadow-[0_2px_24px_rgba(0,47,40,0.1)]"
          >
            Exceptional Spaces.
            <br />
            Enduring Value.
          </h1>
          <p className="mt-5 max-w-[430px] text-[clamp(12px,1.5vw,18px)] font-normal leading-[1.45] text-white drop-shadow-[0_1px_12px_rgba(0,47,40,0.18)] md:mt-[26px]">
            Thoughtful spaces begin with clear plans, capable
            <br className="max-[480px]:hidden" /> professionals and responsible execution.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 max-[480px]:mt-5">
            <Button to="/contact" size="compact" variant="outline" showArrow={false}>
              Request a Consultation
            </Button>
            <Button to="/properties" size="compact">
              Explore Our Collections
            </Button>
          </div>
        </div>
      </section>

      <section
        className="relative z-10 -mt-7 min-h-[220px] rounded-t-[30px] bg-[#f7f8f5] px-[8.5%] pt-6"
        aria-label="About Avencrest"
      >
        <span className="inline-flex rounded-full bg-white px-3 py-1 text-[7px] font-semibold uppercase tracking-[0.04em] text-primary shadow-sm">
          Who Are We
        </span>
      </section>
    </>
  );
}
