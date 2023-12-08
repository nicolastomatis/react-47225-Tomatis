// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4XLIEz4W_C81p-n3nmSvA3kX0PpODog4",
  authDomain: "fabainforma-e55f3.firebaseapp.com",
  projectId: "fabainforma-e55f3",
  storageBucket: "fabainforma-e55f3.appspot.com",
  messagingSenderId: "869646927508",
  appId: "1:869646927508:web:aaf0fc230a3c2b21839681",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)