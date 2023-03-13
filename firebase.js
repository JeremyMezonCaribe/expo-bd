// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDGjc-9ahfsWymPxKLcCdpFKbds2sPx-k",
  authDomain: "expo-bd.firebaseapp.com",
  projectId: "expo-bd",
  storageBucket: "expo-bd.appspot.com",
  messagingSenderId: "222090417431",
  appId: "1:222090417431:web:871f49fca258e74a29d352",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const fireDB = app.firestore();
export default app;
