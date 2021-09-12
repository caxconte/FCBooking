// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ6tKQpOF7LnPpbELCWf5GxMWVq-7rAo8",
  authDomain: "fcamara-62f52.firebaseapp.com",
  projectId: "fcamara-62f52",
  storageBucket: "fcamara-62f52.appspot.com",
  messagingSenderId: "686412733569",
  appId: "1:686412733569:web:91b71d1bc9c21a060b8180",
  measurementId: "G-LSNNHWL4R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);