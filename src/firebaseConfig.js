// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTSfVHOxLNTsJ5He4R2pe2pcpdItZevQw",
  authDomain: "shop-eba0c.firebaseapp.com",
  projectId: "shop-eba0c",
  storageBucket: "shop-eba0c.firebasestorage.app",
  messagingSenderId: "584135287937",
  appId: "1:584135287937:web:59afaeaff3f7c71a925980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
