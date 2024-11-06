// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJPY2liWzFfGVHa-KFDTQVlLX0bB2sciA",
  authDomain: "login-ce4de.firebaseapp.com",
  projectId: "login-ce4de",
  storageBucket: "login-ce4de.appspot.com",
  messagingSenderId: "1079447080702",
  appId: "1:1079447080702:web:11c63936eb02a4fc105faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };

const auth = getAuth();
export {auth};