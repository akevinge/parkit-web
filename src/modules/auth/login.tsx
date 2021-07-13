import { firebase } from "../../firebase/firebaseClient";

export const login = (provider: "google" | "apple") => {
  switch (provider) {
    case "google": {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
      break;
    }
    case "apple": {
      // Note: add apple login
      //   const provider = new firebase.auth.OAuthProvider("apple.com");
      //   firebase.auth().signInWithPopup(provider);
    }
  }
};
