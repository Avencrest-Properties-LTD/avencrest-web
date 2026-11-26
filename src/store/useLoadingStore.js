import { create } from 'zustand';

/**
 * Global loading state store supporting nested/concurrent loading requests.
 */
const useLoadingStore = create((set) => ({
  loadingCount: 0,
  isLoading: false,
  message: 'Shaping your space...',

  startLoading: (message = 'Shaping your space...') =>
    set((state) => {
      const nextCount = state.loadingCount + 1;
      return {
        loadingCount: nextCount,
        isLoading: true,
        message,
      };
    }),

  stopLoading: () =>
    set((state) => {
      const nextCount = Math.max(0, state.loadingCount - 1);
      return {
        loadingCount: nextCount,
        isLoading: nextCount > 0,
      };
    }),

  resetLoading: () =>
    set({
      loadingCount: 0,
      isLoading: false,
      message: 'Shaping your space...',
    }),
}));

export default useLoadingStore;
