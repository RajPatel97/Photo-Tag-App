// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyCV73nCkr04lwKBMIh1IGc3zu7ZojVBK4U",
    authDomain: "photo-tag-69251.firebaseapp.com",
    projectId: "photo-tag-69251",
    storageBucket: "photo-tag-69251.appspot.com",
    messagingSenderId: "133774276293",
    appId: "1:133774276293:web:2da2dc09aef9c9cfc162ac"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);