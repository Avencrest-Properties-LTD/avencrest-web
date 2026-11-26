import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import BuildingLoader from '../ui/BuildingLoader';
import useLoadingStore from '../../store/useLoadingStore';

const LOADER_MS = 1250;
const SESSION_KEY = 'av_initial_loaded';

/**
 * Global overlay that shows the branded loader:
 *  1. On every hard mount / page reload (once per browser session via sessionStorage).
 *  2. When navigating back to "/" from another route.
 */
export default function GlobalLoader() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(null);
  const isLoading = useLoadingStore((state) => state.isLoading);
  const message = useLoadingStore((state) => state.message);
  const startLoading = useLoadingStore((state) => state.startLoading);
  const stopLoading = useLoadingStore((state) => state.stopLoading);

  /* ── Initial mount / page-reload delay ──────────────────────────── */
  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem(SESSION_KEY);
    if (alreadyLoaded) return undefined;

    startLoading('Shaping your space...');
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1');
      prevPathnameRef.current = pathname;
      stopLoading();
    }, LOADER_MS);

    return () => {
      window.clearTimeout(timer);
      stopLoading();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Return-to-home delay ───────────────────────────────────────── */
  useEffect(() => {
    // Skip during the initial-mount window (prevPathnameRef still null)
    if (prevPathnameRef.current === null) {
      prevPathnameRef.current = pathname;
      return undefined;
    }

    if (pathname !== '/' || prevPathnameRef.current === '/') {
      prevPathnameRef.current = pathname;
      return undefined;
    }

    startLoading('Shaping your space...');
    const timer = window.setTimeout(() => {
      prevPathnameRef.current = '/';
      stopLoading();
    }, LOADER_MS);

    return () => {
      window.clearTimeout(timer);
      stopLoading();
    };
  }, [pathname, startLoading, stopLoading]);

  if (!isLoading) return null;

  return <BuildingLoader fullScreen message={message} />;
}
