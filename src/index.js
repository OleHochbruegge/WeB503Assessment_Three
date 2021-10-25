// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKHyomGtaBubIlyuiDwt9td2xBBh17Il4",
  authDomain: "setup01-26724.firebaseapp.com",
  projectId: "setup01-26724",
  storageBucket: "setup01-26724.appspot.com",
  messagingSenderId: "260548198479",
  appId: "1:260548198479:web:a511b147639bed2c90ea3a",
  measurementId: "G-EYZM6G3F43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);