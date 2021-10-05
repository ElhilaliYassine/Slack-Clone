import firebase from 'firebase/compat'

const firebaseConfig = {
    apiKey: "AIzaSyCn6uVVcCr8olbkeNTWT7JCEIU2YH5zuxA",
    authDomain: "slack-clone-ee050.firebaseapp.com",
    projectId: "slack-clone-ee050",
    storageBucket: "slack-clone-ee050.appspot.com",
    messagingSenderId: "308164849303",
    appId: "1:308164849303:web:03087e34dec517f79183d2"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }