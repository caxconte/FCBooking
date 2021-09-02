// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const auth = getAuth();
const db = getFirestore();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM4nhESfR8CSq8u_PSpyoCV2lteoRuwLs",
    authDomain: "fcbooking-8c1b2.firebaseapp.com",
    projectId: "fcbooking-8c1b2",
    storageBucket: "fcbooking-8c1b2.appspot.com",
    messagingSenderId: "289034697015",
    appId: "1:289034697015:web:91c18f504411966fdc02b2",
    measurementId: "G-3RZ0N288WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);