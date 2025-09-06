// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7dxiW6R3T4Pn4Z8fqlbDQO--w2B0VLEo",
  authDomain: "portfolio-1d0ed.firebaseapp.com",
  projectId: "portfolio-1d0ed",
  storageBucket: "portfolio-1d0ed.firebasestorage.app",
  messagingSenderId: "422442650682",
  appId: "1:422442650682:web:7c58b20b74b5d502663903",
  measurementId: "G-DVP3LHK9YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
const db = getFirestore(app);

export { db, analytics };
