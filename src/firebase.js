// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPa9sM0jLA7xgwIdcAU_8F8BD118c1wb0",
  authDomain: "auth-914a4.firebaseapp.com",
  projectId: "auth-914a4",
  storageBucket: "auth-914a4.appspot.com",
  messagingSenderId: "225028886301",
  appId: "1:225028886301:web:a7da2826b8ed8098df9bf4",
  measurementId: "G-T776S6QV5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app