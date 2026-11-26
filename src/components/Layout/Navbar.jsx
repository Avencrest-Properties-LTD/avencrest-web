import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import avFullLogo from '../../assets/images/branding/AvFullLogo.png';

export const DEFAULT_NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Our Works', to: '/works' },
  { label: 'Developments', to: '/developments' },
  { label: 'Contact Us', to: '/contact' },
];

/**
 * Reusable responsive navigation bar with desktop horizontal links
 * and a mobile "Menu" toggle drawer.
 */
export default function Navbar({ links = DEFAULT_NAV_LINKS, className = '' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-primary/10 bg-white/95 backdrop-blur-sm ${className}`.trim()}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link
          to="/"
          className="flex shrink-0 items-center focus:outline-none"
          aria-label="Avencrest Integrated Limited Home"
        >
          <img
            src={avFullLogo}
            alt="Avencrest Integrated Limited"
            className="h-12 w-auto object-contain lg:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex xl:gap-10">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'text-secondary'
                    : 'text-primary hover:text-secondary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex items-center gap-2.5 rounded-md py-2 pl-3 pr-1 text-base font-medium text-primary transition-colors hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 lg:hidden"
        >
          <span>{mobileOpen ? 'Close' : 'Menu'}</span>
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          className="border-t border-primary/10 bg-white px-6 pb-6 pt-3 shadow-soft lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-primary/10">
            {links.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-3.5 text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-secondary'
                        : 'text-primary hover:text-secondary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
