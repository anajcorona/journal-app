// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getEnviroments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(import.meta.env);

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STOREBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnviroments();

// Your web app's Firebase configuration
//DEV PROD
// const firebaseConfig = {
//   apiKey: "AIzaSyBc_q8IzqayX0QGCIIYU9HXKRIyGpZ9n70",
//   authDomain: "react-cursos-82597.firebaseapp.com",
//   projectId: "react-cursos-82597",
//   storageBucket: "react-cursos-82597.appspot.com",
//   messagingSenderId: "126874008795",
//   appId: "1:126874008795:web:1feabbeb4679f7881b20fe"
// };

//TESTING
// const firebaseConfig = {
//   apiKey: "AIzaSyAVaFzvFBS3h51R6sZJQp7VjwAp-YWIJ4M",
//   authDomain: "texto-38828.firebaseapp.com",
//   databaseURL: "https://texto-38828.firebaseio.com",
//   projectId: "texto-38828",
//   storageBucket: "texto-38828.appspot.com",
//   messagingSenderId: "596658809597",
//   appId: "1:596658809597:web:8637544b628c216b892c94"
// };


 const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STOREBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

