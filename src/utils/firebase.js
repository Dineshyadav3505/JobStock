// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWW5P2AdboAiMZ-vJSX7FnvlcsBd2qXQQ",
  authDomain: "naukrivacancycom-32409.firebaseapp.com",
  projectId: "naukrivacancycom-32409",
  storageBucket: "naukrivacancycom-32409.appspot.com",
  messagingSenderId: "789513294830",
  appId: "1:789513294830:web:5f34162fd3b79a47b9f4ff",
  measurementId: "G-LRN5FEN7TE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);