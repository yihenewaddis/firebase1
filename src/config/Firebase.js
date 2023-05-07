// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEXPXVnUSiu2SBJfgITNrAQjaTcjY1vRY",
  authDomain: "fir-1-pro-4c749.firebaseapp.com",
  projectId: "fir-1-pro-4c749",
  storageBucket: "fir-1-pro-4c749.appspot.com",
  messagingSenderId: "486498169979",
  appId: "1:486498169979:web:5923551783d82678b15ede",
  measurementId: "G-HMFK6MRZVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
// const analytics = getAnalytics(app);