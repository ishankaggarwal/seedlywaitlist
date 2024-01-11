// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFDLX1KCtD8FfA5zvqPzs0llNK2yEN3lA",
  authDomain: "waitlist-9086e.firebaseapp.com",
  projectId: "waitlist-9086e",
  storageBucket: "waitlist-9086e.appspot.com",
  messagingSenderId: "648584781921",
  appId: "1:648584781921:web:8e4be4b1fef9ea5dd6ca20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);