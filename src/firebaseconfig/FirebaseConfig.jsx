// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUfoqtUtafGvBPbHrIUFVWyN6BXffxlb0",
    authDomain: "furniro-fb426.firebaseapp.com",
    projectId: "furniro-fb426",
    storageBucket: "furniro-fb426.appspot.com",
    messagingSenderId: "566335947896",
    appId: "1:566335947896:web:1cd3cc6c3ef5d53cc2598d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)