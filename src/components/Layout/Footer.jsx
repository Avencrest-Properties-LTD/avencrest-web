import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import avLogo from '../../assets/images/branding/Avlogo.png';

const EXPLORE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
];

const PORTFOLIO_LINKS = [
  { label: 'Our Projects', to: '/projects' },
  { label: 'Our Works', to: '/works' },
  { label: 'Contact Us', to: '/contact' },
];

const CONNECT_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
  { label: 'hello@avencrest.com', href: 'mailto:hello@avencrest.com', external: false },
];

const LEGAL_LINKS = [
  { label: 'Privacy notice', to: '/privacy' },
  { label: 'Terms of service', to: '/terms' },
];

const linkClassName =
  'inline-flex items-center gap-1.5 text-sm text-white/90 transition-colors duration-200 hover:text-secondary';

const headingClassName = 'mb-4 text-xs font-normal tracking-wide text-white/50';

function InternalLinkColumn({ title, links, className = '' }) {
  return (
    <div className={className}>
      <h3 className={headingClassName}>{title}</h3>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className={linkClassName}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Desktop-first site footer with 5-column navigation, centered brand mark,
 * and an edge-to-edge display wordmark.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black pb-8 pt-12 text-white lg:pb-0 lg:pt-20">
      {/* Subtle warm radial glow behind the bottom wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_75%_65%_at_50%_100%,rgba(215,160,42,0.16),transparent_70%)] lg:h-64 lg:bg-[radial-gradient(ellipse_60%_65%_at_50%_100%,rgba(215,160,42,0.16),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-2 items-start gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-12">
          <InternalLinkColumn
            title="Explore"
            links={EXPLORE_LINKS}
            className="lg:col-span-2"
          />

          <InternalLinkColumn
            title="Portfolio"
            links={PORTFOLIO_LINKS}
            className="lg:col-span-2"
          />

          <div className="order-first col-span-2 mb-2 flex flex-col items-center text-center md:col-span-4 lg:order-none lg:col-span-4 lg:mb-0">
            <img
              src={avLogo}
              alt="Avencrest Integrated Limited"
              className="mb-5 h-20 w-auto object-contain lg:mb-4 lg:h-24"
            />
            <p className="text-xs text-white/55">
              &copy; {currentYear} Avencrest Integrated Limited. All rights reserved.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-white/55 lg:mt-4">
              Exceptional spaces. Enduring value.
              <br />
              Architecture. Development. Construction.
            </p>
          </div>

          <div className="lg:col-span-2 lg:pl-6">
            <h3 className={headingClassName}>Connect</h3>
            <ul className="space-y-3">
              {CONNECT_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={linkClassName}
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <span>{item.label}</span>
                    {item.external && (
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/75" aria-hidden="true" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <InternalLinkColumn
            title="Legal"
            links={LEGAL_LINKS}
            className="lg:col-span-2 lg:pl-6"
          />
        </div>
      </div>

      {/* Oversized bottom brand wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-10 mt-14 select-none overflow-hidden text-center lg:mt-16"
      >
        <p className="whitespace-nowrap font-display text-[12.2vw] font-normal uppercase leading-[0.85] tracking-[-0.03em] text-[#6E7A70] sm:text-[13vw] lg:-mb-[1.2vw] lg:text-[13.5vw] lg:leading-[0.82]">
          AVENCREST
        </p>
      </div>
    </footer>
  );
}
