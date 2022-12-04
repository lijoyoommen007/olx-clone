import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyA_1aEfdMavjUNLjoBhEs0-X-qzwrBIffY",
  authDomain: "fir-c3f42.firebaseapp.com",
  projectId: "fir-c3f42",
  storageBucket: "fir-c3f42.appspot.com",
  messagingSenderId: "1008085321657",
  appId: "1:1008085321657:web:3aba1e4939e36a9bbb9868",
  measurementId: "G-6GK9X2JTYB"
  };
 export default firebase.initializeApp(firebaseConfig)