import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBU0LJF_jZRowrExh1jKZzzHjcPvq7Z3zE",
    authDomain: "ecommerce-app-db-e85f5.firebaseapp.com",
    projectId: "ecommerce-app-db-e85f5",
    storageBucket: "ecommerce-app-db-e85f5.appspot.com",
    messagingSenderId: "348985089787",
    appId: "1:348985089787:web:de840e2c17059317df9a5e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const  provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;