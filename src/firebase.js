import { initializeApp } from "firebase/app";
import { getFirestore } from"@firebase/firestore"

import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy2cnIqnd689OiHNRaAcOJZi1jb0Wc9S0",
  authDomain: "twitter-clone-app-785f7.firebaseapp.com",
  projectId: "twitter-clone-app-785f7",
  storageBucket: "twitter-clone-app-785f7.appspot.com",
  messagingSenderId: "902709471668",
  appId: "1:902709471668:web:ff2f41ffc03909df11eae1",
  measurementId: "G-34KPBRXYG4"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export default db;
  export const auth = getAuth(app);

  