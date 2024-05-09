// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDs9VNh0kp6P55bRotzZE0YfBh76kijK48",
    authDomain: "ksba-website.firebaseapp.com",
    projectId: "ksba-website",
    storageBucket: "ksba-website.appspot.com",
    messagingSenderId: "258768531639",
    appId: "1:258768531639:web:d01fcfddc26c2c44349d32",
    measurementId: "G-QZJ7FKK16Y"
};


// Initialize Firebase
;
const db = getFirestore(initializeApp(firebaseConfig))

export { db, firebaseConfig };