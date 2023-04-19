// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-6nkSZ5nPQMrRe8FpUI30dIPQOHLWqu8",
  authDomain: "journal-app-ed73e.firebaseapp.com",
  projectId: "journal-app-ed73e",
  storageBucket: "journal-app-ed73e.appspot.com",
  messagingSenderId: "112863801100",
  appId: "1:112863801100:web:75b689d7360d3ec1796329"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)