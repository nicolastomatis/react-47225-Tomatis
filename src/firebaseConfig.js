// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLml72ANjz3SsoQmlqnCYKDVDlreQLPag",
  authDomain: "tiendafabainforma.firebaseapp.com",
  projectId: "tiendafabainforma",
  storageBucket: "tiendafabainforma.appspot.com",
  messagingSenderId: "538507527187",
  appId: "1:538507527187:web:74cfeed1041b3cfab86be6",
  measurementId: "G-S7G89XMRGB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
