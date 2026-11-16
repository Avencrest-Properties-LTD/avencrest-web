import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useShortlistStore = create(
  persist(
    (set, get) => ({
      shortlist: [],
      addToShortlist: (property) => {
        const items = get().shortlist;
        const exists = items.some((item) => item.id === property.id);

        if (!exists) {
          set({ shortlist: [...items, property] });
        }
      },
      removeFromShortlist: (propertyId) => {
        set({ shortlist: get().shortlist.filter((item) => item.id !== propertyId) });
      },
      clearShortlist: () => set({ shortlist: [] }),
    }),
    {
      name: 'avencrest-shortlist',
    }
  )
);

export default useShortlistStore;
