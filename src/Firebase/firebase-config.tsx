import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzJ-HnsL9vDMsG_JTHj0nf5624okbnNvw",
  authDomain: "react-app-cursos-e544f.firebaseapp.com",
  projectId: "react-app-cursos-e544f",
  storageBucket: "react-app-cursos-e544f.appspot.com",
  messagingSenderId: "197292594787",
  appId: "1:197292594787:web:eff7ab3b9898b4c64e4a56"
};

firebase.initializeApp( firebaseConfig );
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
};