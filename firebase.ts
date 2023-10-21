import {getApp ,getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getFunctions} from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZLhBGKqea4aCqQvVmXlGbmRZnNDyU9dg",
  authDomain: "langchat-5d26b.firebaseapp.com",
  projectId: "langchat-5d26b",
  storageBucket: "langchat-5d26b.appspot.com",
  messagingSenderId: "767888271552",
  appId: "1:767888271552:web:08557ac75b62e0b2d3e525"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db,auth,functions };