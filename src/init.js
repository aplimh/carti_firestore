import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdXOoEq_Pkm43q7Kk3i6DFmSi4",
  authDomain: "carti-2b007.firebaseapp.com",
  projectId: "carti-2b003",
  storageBucket: "carti-2b003.appspot.com",
  messagingSenderId: "106980953060",
  appId: "1:106980953060:web:b48ce626882fcec13f95f1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;
