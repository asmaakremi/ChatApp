// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQPRKFr7-swKG6DQgB9KyCKZ_01b98xF4",
  authDomain: "static-forest-388017.firebaseapp.com",
  databaseURL: "https://static-forest-388017-default-rtdb.firebaseio.com",
  projectId: "static-forest-388017",
  storageBucket: "static-forest-388017.appspot.com",
  messagingSenderId: "1092577163193",
  appId: "1:1092577163193:web:8a9d57684ee57e8fe9a868",
  measurementId: "G-PBPNZ0EX6H",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
export default firebase;
