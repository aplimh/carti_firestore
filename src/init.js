import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "carti-xxxxxx.firebaseapp.com",
  projectId: "carti-xxxxxx",
  storageBucket: "carti-xxxxxx.appspot.com",
  messagingSenderId: "106980953060",
  appId: "1:106980953060:web:xxxxxxxxxxxxxxxxxxxxxxxx",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;
