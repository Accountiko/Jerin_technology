// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRu2-79HdZPQxMjeVaABWsDh6SGaRHUWo",
  authDomain: "jerintechnologies-blogs.firebaseapp.com",
  projectId: "jerintechnologies-blogs",
  storageBucket: "jerintechnologies-blogs.appspot.com",
  messagingSenderId: "383863375304",
  appId: "1:383863375304:web:aa58458862efe0f91e2cfd",
  measurementId: "G-9V65SWVVPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)