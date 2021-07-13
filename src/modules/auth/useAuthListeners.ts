import { useEffect } from "react";
import { firebase, fireStore } from "../../firebase/firebaseClient";
import { useUserStore } from "./useUserStore";

export const useAuthListeners = () => {
  const { setUser } = useUserStore();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        fireStore
          .collection("users")
          .where("uid", "==", user.uid)
          .get()
          .then((query) => {
            const userDoc = query.docs[0]?.data();
            if (!userDoc) {
              fireStore
                .collection("users")
                .add({
                  uid: user.uid,
                  email: user.email,
                  isParked: false,
                  name: user.displayName,
                  space: "none",
                })
                .then(async (doc) => {
                  setUser(((await doc.get())?.data() as User) || null);
                })
                .catch(() => setUser(null));
            } else {
              setUser(userDoc as User);
            }
          });
      }
    });
  }, []);
};
