export default function Footer() {
  return (
    <footer className="relative isolate m-0 min-h-[345px] w-full overflow-hidden bg-primary" id="contact">
      <div className="relative z-10 mx-auto grid max-w-[1220px] grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] gap-x-12 gap-y-[26px] px-[7.1%] pt-11 pb-7 max-[680px]:grid-cols-1 max-[680px]:gap-8 max-[360px]:px-5 min-[900px]:gap-x-[60px] min-[900px]:px-[7.1%]">
        <section className="flex min-w-0 flex-col items-start" aria-labelledby="footer-brand-name">
          <a
            className="font-serif text-[27px] font-bold leading-[1.2] tracking-[-0.8px] text-[#f8f7f2] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[26px]"
            id="footer-brand-name"
            href="#home"
          >
            Avencrest
          </a>
          <p className="mt-[15px] text-[12px] font-light leading-[1.52] text-[var(--color-text)] max-[680px]:mt-3 max-[680px]:max-w-[340px] max-[680px]:text-[14px] max-[680px]:leading-[1.6] min-[900px]:text-[14px]">
            Exceptional Spaces. Enduring Value. Guiding your building
            <br className="max-[680px]:hidden" /> journey through disciplined project management,
            <br className="max-[680px]:hidden" /> responsible construction, and architectural excellence.
          </p>

          <div className="mt-10 max-[680px]:mt-6">
            <p className="mb-2 text-[12px] font-normal text-[var(--color-muted)] max-[680px]:mb-[10px] max-[680px]:text-[13px] min-[900px]:text-[14px]">
              Follow Us on Social Media
            </p>
            <ul className="m-0 flex list-none gap-[7px] p-0 max-[680px]:gap-[10px]" aria-label="Social media">
              <li>
                <a
                  className="grid h-[22px] w-[22px] place-items-center rounded-[3px] bg-secondary text-primary transition-[background-color,transform] duration-[160ms] hover:-translate-y-0.5 hover:bg-[#e8b746] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:h-7 max-[680px]:w-7 max-[680px]:rounded-[5px]"
                  href="https://www.facebook.com/share/1FypseJkBe/"
                  aria-label="Facebook"
                >
                  <svg className="block h-4 w-4 fill-current max-[680px]:h-[19px] max-[680px]:w-[19px]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="grid h-[22px] w-[22px] place-items-center rounded-[3px] bg-secondary text-primary transition-[background-color,transform] duration-[160ms] hover:-translate-y-0.5 hover:bg-[#e8b746] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:h-7 max-[680px]:w-7 max-[680px]:rounded-[5px]"
                  href="https://www.linkedin.com/"
                  aria-label="LinkedIn"
                >
                  <svg className="block h-4 w-4 fill-current max-[680px]:h-[19px] max-[680px]:w-[19px]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5.2 8.3a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.5 10h3.4v10H3.5V10Zm5.5 0h3.2v1.4h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.2V20h-3.4v-4.6c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V20H9V10Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="grid h-[22px] w-[22px] place-items-center rounded-[3px] bg-secondary text-primary transition-[background-color,transform] duration-[160ms] hover:-translate-y-0.5 hover:bg-[#e8b746] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:h-7 max-[680px]:w-7 max-[680px]:rounded-[5px]"
                  href="https://x.com/avencrest_prop"
                  aria-label="X"
                >
                  <svg className="block h-4 w-4 fill-current max-[680px]:h-[19px] max-[680px]:w-[19px]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3L12 14.8 6.6 21H3.5l7.3-8.4L3 3h6.4l4.5 6 5-6Zm-1.1 16h1.7L8.4 4.9H6.6L17.8 19Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="grid h-[22px] w-[22px] place-items-center rounded-[3px] bg-secondary text-primary transition-[background-color,transform] duration-[160ms] hover:-translate-y-0.5 hover:bg-[#e8b746] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:h-7 max-[680px]:w-7 max-[680px]:rounded-[5px]"
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                >
                  <svg className="block h-4 w-4 fill-current max-[680px]:h-[19px] max-[680px]:w-[19px]" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="grid h-[22px] w-[22px] place-items-center rounded-[3px] bg-secondary text-primary transition-[background-color,transform] duration-[160ms] hover:-translate-y-0.5 hover:bg-[#e8b746] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:h-7 max-[680px]:w-7 max-[680px]:rounded-[5px]"
                  href="https://tiktok.com/@avencrestproperties"
                  aria-label="TikTok"
                >
                  <svg className="block h-4 w-4 fill-current max-[680px]:h-[19px] max-[680px]:w-[19px]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.6 6.3a5.7 5.7 0 0 1-3.5-3.5A6.2 6.2 0 0 1 15.8 1h-4.1v14.2a2.8 2.8 0 1 1-2.8-2.8c.4 0 .8.1 1.2.3V8.5a7 7 0 1 0 5.7 6.9V8.2a9.7 9.7 0 0 0 5.2 1.5V5.6c-.5.2-.9.4-1.4.7Z" transform="translate(1 1) scale(.92)" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="grid h-[22px] w-[22px] place-items-center rounded-[3px] bg-secondary text-primary transition-[background-color,transform] duration-[160ms] hover:-translate-y-0.5 hover:bg-[#e8b746] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:h-7 max-[680px]:w-7 max-[680px]:rounded-[5px]"
                  href="https://youtube.com/@avencreatintegratedlimited?si=_yilA4BcIXQoLWY9"
                  aria-label="YouTube"
                >
                  <svg className="block h-4 w-4 fill-current max-[680px]:h-[19px] max-[680px]:w-[19px]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <nav className="grid grid-cols-3 gap-[22px] pt-0.5 max-[680px]:grid-cols-2 max-[680px]:gap-x-5 max-[680px]:gap-y-7 max-[360px]:gap-x-[14px]" aria-label="Footer navigation">
          <div>
            <h2 className="mb-[10px] text-[10px] font-medium uppercase leading-[1.4] text-secondary max-[680px]:mb-3 max-[680px]:text-[11px] min-[900px]:text-xs">
              Main Pages
            </h2>
            <ul className="m-0 grid list-none gap-[10px] p-0 max-[680px]:gap-3">
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#home">Home</a></li>
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#about">About Avencrest</a></li>
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#services">Services</a></li>
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#process">Our Process</a></li>
            </ul>
          </div>
          <div id="collections">
            <h2 className="mb-[10px] text-[10px] font-medium uppercase leading-[1.4] text-secondary max-[680px]:mb-3 max-[680px]:text-[11px] min-[900px]:text-xs">
              Collections
            </h2>
            <ul className="m-0 grid list-none gap-[10px] p-0 max-[680px]:gap-3">
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#essential-living">Essential Living</a></li>
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#signature-homes">Signature Homes</a></li>
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#grand-residences">Grand Residences</a></li>
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#legacy-developments">Legacy Developments</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-[10px] text-[10px] font-medium uppercase leading-[1.4] text-secondary max-[680px]:mb-3 max-[680px]:text-[11px] min-[900px]:text-xs">
              Utility Pages
            </h2>
            <ul className="m-0 grid list-none gap-[10px] p-0 max-[680px]:gap-3">
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#contact">Contact</a></li>
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#privacy">Privacy Notice</a></li>
              <li><a className="text-[12px] font-light leading-[1.35] text-[var(--color-text)] no-underline transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 max-[680px]:text-[14px] max-[360px]:text-[13px] min-[900px]:text-[14px]" href="#legal">Legal Verification</a></li>
            </ul>
          </div>
        </nav>

        <p className="col-start-2 m-0 text-right text-[10px] font-light text-[#91a9a1] max-[680px]:col-start-1 max-[680px]:text-left max-[680px]:text-[11px] min-[900px]:text-xs">
          ©2026 Avencrest Integrated Limited. All rights reserved.
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-[-0.04em] left-[1.5%] right-[3%] z-0 select-none whitespace-nowrap font-serif text-[clamp(100px,17.5vw,230px)] font-bold leading-[0.78] tracking-[-0.055em] max-[680px]:hidden" aria-hidden="true">
        <span className="absolute inset-0 block text-[#155247] opacity-[0.42] blur-[10px] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,transparent_76%)] [mask-image:linear-gradient(to_bottom,#000_0%,transparent_76%)]">
          Avencrest
        </span>
        <span className="relative block bg-[linear-gradient(to_bottom,var(--color-primary-deep)_10%,#063d33_55%,#155247_100%)] bg-clip-text text-transparent [-webkit-background-clip:text]">
          Avencrest
        </span>
      </div>
    </footer>
  );
}
