import { create } from "zustand";

export interface CartStore {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
}

export interface Item {
  id: string;
  name: string;
  price: number;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== item.id) })),
}));
