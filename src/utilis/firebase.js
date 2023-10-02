// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChR9cJjdwRpVI1Omqrmgvk2KFUikAGL4c",
  authDomain: "netflixgpt-5820c.firebaseapp.com",
  projectId: "netflixgpt-5820c",
  storageBucket: "netflixgpt-5820c.appspot.com",
  messagingSenderId: "1009768666067",
  appId: "1:1009768666067:web:11990f545f0f3363451526",
  measurementId: "G-71D7EXH27Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();