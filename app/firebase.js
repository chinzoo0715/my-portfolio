// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_9qT5pcn1Q739PY3bdaWA7YIVmrK3sqU",
  authDomain: "my-portfolio-6f11f.firebaseapp.com",
  projectId: "my-portfolio-6f11f",
  storageBucket: "my-portfolio-6f11f.appspot.com",
  messagingSenderId: "1044272521223",
  appId: "1:1044272521223:web:6ca0ff5a53aa5527594aa2",
  measurementId: "G-8NWS44WC37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
