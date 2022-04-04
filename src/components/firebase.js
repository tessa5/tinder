import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeKbJ7-BdywvddSIgUpu9i-EF8KLzDfl8",
    authDomain: "tinder-clone-tailwindcss.firebaseapp.com",
    projectId: "tinder-clone-tailwindcss",
    storageBucket: "tinder-clone-tailwindcss.appspot.com",
    messagingSenderId: "841877965060",
    appId: "1:841877965060:web:604c35b5168d241ecea851",
    measurementId: "G-90X22JLLCG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;