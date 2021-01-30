
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBfN1VP2dMerVfbgqJgf8gUlyV-zjN1b2k",
  authDomain: "citipup1.firebaseapp.com",
  projectId: "citipup1",
  storageBucket: "citipup1.appspot.com",
  messagingSenderId: "25995030772",
  appId: "1:25995030772:web:a17869ddbc080875392ea1",
  measurementId: "G-CV9Z2GR44F"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default  db;