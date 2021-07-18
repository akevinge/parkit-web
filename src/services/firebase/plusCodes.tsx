import { fireStore } from "./firebaseClient";

// only takes first four digits
export const getSpots = async (code: string) => {
  return fireStore
    .collection("spots")
    .doc(code)
    .collection(code)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()));
};
