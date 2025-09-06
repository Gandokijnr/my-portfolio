// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVdQ-ThpMNe-73SHRrjLPl4nYUh3L5UqI",
    authDomain: "portfolio-c24e0.firebaseapp.com",
    projectId: "portfolio-c24e0",
    storageBucket: "portfolio-c24e0.firebasestorage.app",
    messagingSenderId: "775339744045",
    appId: "1:775339744045:web:d7fc692212a0d3ce7d11a4",
    measurementId: "G-CK17TQ8GFR"
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
