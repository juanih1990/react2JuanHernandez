// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV7oe2Sx2LUJCZ-pd9j7SmsO9YyQG2lfY",
  authDomain: "react-proyect-657ee.firebaseapp.com",
  projectId: "react-proyect-657ee",
  storageBucket: "react-proyect-657ee.appspot.com",
  messagingSenderId: "867658219400",
  appId: "1:867658219400:web:5753a9c66510b413e0443d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)