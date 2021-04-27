import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_R2jS8t2dzFBurj2IF6oIaHlMN2snBTc",
    authDomain: "react-firebase-ff1dc.firebaseapp.com",
    projectId: "react-firebase-ff1dc",
    storageBucket: "react-firebase-ff1dc.appspot.com",
    messagingSenderId: "37936227075",
    appId: "1:37936227075:web:7e14cb800f9da51a8a3f36",
    measurementId: "G-KRG4E6R6JB"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;