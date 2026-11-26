import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Shared page shell wrapping every route with Navbar, Footer,
 * and automatic scroll-to-top on navigation.
 */
export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
