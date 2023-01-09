import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  //   apiKey: "AIzaSyDhlmHLvYayhhMna9rLh3pM4f8f--jfeA4",
  //   authDomain: "bseb-f0d27.firebaseapp.com",
  //   projectId: "bseb-f0d27",
  //   storageBucket: "bseb-f0d27.appspot.com",
  //   messagingSenderId: "142210169144",
  //   appId: "1:142210169144:web:d11233da3e21fbe6c729cd",

  //   my: test-final
  // apiKey: "AIzaSyCHWrMMHnSfVf8zdcFzDNmLM9grTOWvsSQ",
  // authDomain: "test-23847.firebaseapp.com",
  // projectId: "test-23847",
  // storageBucket: "test-23847.appspot.com",
  // messagingSenderId: "551454654011",
  // appId: "1:551454654011:web:9063edb59170c9b86c661e",

  // crud
  apiKey: "AIzaSyBJZ89wAE7o-RkyaKXm-ot_UDB9Y6IGwEc",
  authDomain: "crud-e90ff.firebaseapp.com",
  projectId: "crud-e90ff",
  storageBucket: "crud-e90ff.appspot.com",
  messagingSenderId: "55672668158",
  appId: "1:55672668158:web:7a67f1acfb932887da8aaf",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// export const db = app.firestore();
// export const auth = firebase.auth();
// export const dbreal = app
//   .database
//   //   "https://bseb-f0d27-default-rtdb.asia-southeast1.firebasedatabase.app"
//   ();

// const dbreal = app.database('https://bseb-f0d27-default-rtdb.asia-southeast1.firebasedatabase.app');
// Please change your database URL to https://bseb-f0d27-default-rtdb.asia-southeast1.firebasedatabase.app (https://bseb-f0d27-default-rtdb.firebaseio.com/)


// crud

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
export const rtdb = firebase.database();