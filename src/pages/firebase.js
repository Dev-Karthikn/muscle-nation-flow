// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOJOqJZM2ekD1PGF8BoNitGfCmcM0bGGA",
  authDomain: "musclenation-169f4.firebaseapp.com",
  projectId: "musclenation-169f4",
  storageBucket: "musclenation-169f4.firebasestorage.app",
  messagingSenderId: "184098148786",
  appId: "1:184098148786:web:2bb99643262bf3e03a94ab",
  measurementId: "G-98JN60PGRZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
