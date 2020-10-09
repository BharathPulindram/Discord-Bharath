import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBH0v0cNpp98JBXrg0TpMefmyQkCC4qJY0",
    authDomain: "discord-bharath.firebaseapp.com",
    databaseURL: "https://discord-bharath.firebaseio.com",
    projectId: "discord-bharath",
    storageBucket: "discord-bharath.appspot.com",
    messagingSenderId: "829137805784",
    appId: "1:829137805784:web:3fb355a4375371892112ad",
    measurementId: "G-LF2T8TY7KQ"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider} ;
export default db;