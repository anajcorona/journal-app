// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc_q8IzqayX0QGCIIYU9HXKRIyGpZ9n70",
  authDomain: "react-cursos-82597.firebaseapp.com",
  projectId: "react-cursos-82597",
  storageBucket: "react-cursos-82597.appspot.com",
  messagingSenderId: "126874008795",
  appId: "1:126874008795:web:1feabbeb4679f7881b20fe"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

