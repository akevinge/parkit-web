import firebase from "firebase";
import create from "zustand";

export const useUserStore = create<{
  user: firebase.User | null;
  setUser: (user: firebase.User | null) => void;
}>((set) => ({
  user: null,
  setUser: (user: firebase.User | null) => set({ user }),
}));
