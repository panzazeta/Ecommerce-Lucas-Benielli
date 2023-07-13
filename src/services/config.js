
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBujTCiHLr8gzAllVqZK0_dQVBLSKqaMwE",
  authDomain: "base-de-datos---proyecto-react.firebaseapp.com",
  projectId: "base-de-datos---proyecto-react",
  storageBucket: "base-de-datos---proyecto-react.appspot.com",
  messagingSenderId: "720037485733",
  appId: "1:720037485733:web:65c13ffdcd55f9f1be014c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);