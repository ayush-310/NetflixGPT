// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdt2SzQpcFWZzC0Di2mzVx2Km9gGPLHuc",
  authDomain: "netflixgpt-defec.firebaseapp.com",
  projectId: "netflixgpt-defec",
  storageBucket: "netflixgpt-defec.appspot.com",  // ✅ fixed
  messagingSenderId: "938095318162",
  appId: "1:938095318162:web:da859747ca51da7f28424b",
  measurementId: "G-KVCCNF0ZCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only enable analytics if running in a browser (optional safeguard)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
