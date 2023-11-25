// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM_OZMTPajj9OLqqYBYVQy0ovz9w3EbX4",
  authDomain: "shogun-42283.firebaseapp.com",
  projectId: "shogun-42283",
  storageBucket: "shogun-42283.appspot.com",
  messagingSenderId: "548026518484",
  appId: "1:548026518484:web:3bbf69ab9b4ab2440ae441",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
  