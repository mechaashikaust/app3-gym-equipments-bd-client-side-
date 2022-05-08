// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwhH2P5p0_mMJvPqACpm9S3UNivI_LGm4",
  authDomain: "assignment-11-p-hero.firebaseapp.com",
  projectId: "assignment-11-p-hero",
  storageBucket: "assignment-11-p-hero.appspot.com",
  messagingSenderId: "47197585303",
  appId: "1:47197585303:web:1dcca55792b2cb6ee8ced2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;