import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWoYJ9z5kQQytPdZ7rNVyBr7DFzlE3eIU",
  authDomain: "facebook-clone-ak.firebaseapp.com",
  databaseURL: "https://facebook-clone-ak-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-ak",
  storageBucket: "facebook-clone-ak.appspot.com",
  messagingSenderId: "312313168532",
  appId: "1:312313168532:web:aa11305e9ecfc069466a81"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;