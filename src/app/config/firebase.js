import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAjcZfyi8sMchvcpSKtquu-48AUJC7fETc",
    authDomain: "gymshareweb.firebaseapp.com",
    databaseURL: "https://gymshareweb-default-rtdb.firebaseio.com",
    projectId: "gymshareweb",
    storageBucket: "gymshareweb.appspot.com",
    messagingSenderId: "481658878950",
    appId: "1:481658878950:web:9185d6acf91c2c573db427"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;