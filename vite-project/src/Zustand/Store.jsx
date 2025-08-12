import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0, // starting value
  increase: () => set((state) => ({ count: state.count + 1 })), //  add 1
  decrease: () => set((state) => ({ count: state.count - 1 })), //  subtract 1
  reset: () => set((state) => ({ count: 0 })), // reset
}));
