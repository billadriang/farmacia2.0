// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn2aj68892D_XLc10OyjV9q8CSgy9uxYs",
  authDomain: "farmacia-817f8.firebaseapp.com",
  projectId: "farmacia-817f8",
  storageBucket: "farmacia-817f8.appspot.com",
  messagingSenderId: "984306556446",
  appId: "1:984306556446:web:62f1889111964b4d9e180f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)