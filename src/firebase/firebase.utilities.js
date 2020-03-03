import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyD0S_hmNvln3DWuR3R7n2PU7TJsDEBS3ME",
        authDomain: "crwn-clothing-35bd6.firebaseapp.com",
        databaseURL: "https://crwn-clothing-35bd6.firebaseio.com",
        projectId: "crwn-clothing-35bd6",
        storageBucket: "crwn-clothing-35bd6.appspot.com",
        messagingSenderId: "687073522910",
        appId: "1:687073522910:web:d0b359f6ceb3f73388fe4f",
        measurementId: "G-SSMD9FWBW1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;