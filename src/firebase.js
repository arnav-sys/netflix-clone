import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkIpJFkG9gEbPPjG4RPYelY4aHHvcOT3k",
  authDomain: "netflix-clone-c37fc.firebaseapp.com",
  projectId: "netflix-clone-c37fc",
  storageBucket: "netflix-clone-c37fc.appspot.com",
  messagingSenderId: "34884287817",
  appId: "1:34884287817:web:770ecda68982a8a045ae98",
  measurementId: "G-CPM41C35VF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
