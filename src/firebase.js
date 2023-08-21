// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn1RqlhyWbyEBbRhZD_fVbhElN3tDAzaU",
  authDomain: "game-share-98421.firebaseapp.com",
  projectId: "game-share-98421",
  storageBucket: "game-share-98421.appspot.com",
  messagingSenderId: "486993055254",
  appId: "1:486993055254:web:ceec983a21e01469c7ef37",
  measurementId: "G-E07ZNL8J17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export default app;
