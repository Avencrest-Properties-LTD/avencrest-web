import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import BuildingLoader from '../ui/BuildingLoader';
import useLoadingStore from '../../store/useLoadingStore';

const HOME_RETURN_LOADER_MS = 5550;

/**
 * Global overlay mounted at the app root that responds to useLoadingStore
 * and enforces a brief architectural loader when returning to the home page.
 */
export default function GlobalLoader() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);
  const isLoading = useLoadingStore((state) => state.isLoading);
  const message = useLoadingStore((state) => state.message);
  const startLoading = useLoadingStore((state) => state.startLoading);
  const stopLoading = useLoadingStore((state) => state.stopLoading);

  useEffect(() => {
    if (pathname !== '/') {
      prevPathnameRef.current = pathname;
      return undefined;
    }

    if (prevPathnameRef.current === '/') {
      return undefined;
    }

    startLoading('Shaping your space...');
    const timer = window.setTimeout(() => {
      prevPathnameRef.current = '/';
      stopLoading();
    }, HOME_RETURN_LOADER_MS);

    return () => {
      window.clearTimeout(timer);
      stopLoading();
    };
  }, [pathname, startLoading, stopLoading]);

  if (!isLoading) return null;

  return <BuildingLoader fullScreen message={message} />;
}
