import create from "zustand";

export const useSpotStore = create<{
  spots: Spot[];
  setSpots: (spots: Spot[]) => void;
}>((set) => ({
  spots: [],
  setSpots: (spots: Spot[]) => set({ spots }),
}));
