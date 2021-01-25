
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDTUsCI5mCJeTS7StyeYncaKHM2eeijjeU",
    authDomain: "music-fleet.firebaseapp.com",
    databaseURL: "https://music-fleet.firebaseio.com",
    projectId: "music-fleet",
    storageBucket: "music-fleet.appspot.com",
    messagingSenderId: "891796848015",
    appId: "1:891796848015:web:2348f026f941f17ec35ffa",
    measurementId: "G-QSR8QWF86E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default  db;