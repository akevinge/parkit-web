import { firebaseInstance } from "../../firebase/firebaseClient";
import { useUserStore } from "./useUserStore";

export const useAuthListeners = () => {
  const { setUser } = useUserStore();
  firebaseInstance.auth().onAuthStateChanged((user) => setUser(user));
};
