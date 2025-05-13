// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRTrjwcmpVeQt5jNTEYF98LRSFmfPPhqE",
  authDomain: "netflix-gpt-0404.firebaseapp.com",
  projectId: "netflix-gpt-0404",
  storageBucket: "netflix-gpt-0404.firebasestorage.app",
  messagingSenderId: "575516695545",
  appId: "1:575516695545:web:b67884b87168151b42fb28",
  measurementId: "G-5WZ32W3C94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
export const auth = getAuth(app);