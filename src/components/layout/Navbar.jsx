import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';

const pageNavItems = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/shortlist', label: 'Shortlist' },
];

const homeNavItems = [
  { to: '/about', label: 'About Us' },
  { to: '/properties', label: 'Services' },
  { to: '/properties', label: 'Our Collections' },
  { to: '/about', label: 'Our Process' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const isHome = useLocation().pathname === '/';

  if (isHome) {
    return (
      <header className="absolute inset-x-0 top-0 z-30 text-white">
        <div className="mx-auto grid w-[87%] max-w-[1220px] grid-cols-[max-content_minmax(0,1fr)_max-content] items-center gap-2 py-3">
          <Link to="/" className="font-sans text-[20px] font-bold leading-none tracking-[-0.03em] text-white">
            Avencrest
          </Link>

          <nav
            className="min-w-0 justify-self-center rounded-full border border-white/25 bg-white/10 px-4.5 py-[7px] shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_5px_18px_rgba(0,47,40,0.08)] backdrop-blur-md max-[420px]:hidden"
            aria-label="Main navigation"
          >
            <ul className="m-0 flex list-none items-center justify-center gap-[clamp(7px,1.3vw,18px)] px-[12px]">
              {homeNavItems.map((item) => (
                <li key={`${item.label}-${item.to}`}>
                  <NavLink
                    to={item.to}
                    className="whitespace-nowrap px-2 py-[9.5px] text-[clamp(10px,0.85vw,14px)] font-medium leading-none text-white/90 transition-colors hover:text-secondary"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            to="/contact"
            size="compact"
            className="shadow-[0_5px_16px_rgba(0,47,40,0.08)]"
          >
            Request a Consultation
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header className="relative z-20 border-b border-white/10 bg-primary/90 text-white backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link to="/" className="text-xl font-semibold tracking-[0.2em] uppercase">
          Avencrest
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {pageNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition hover:text-yellow-300 ${isActive ? 'text-yellow-300' : 'text-white/80'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-secondary hidden md:inline-flex">
          Book a Call
        </Link>
      </Container>
    </header>
  );
}
