import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY_unrHiaqzm-SCNPyyP7U3iybR_cNj4c",
  authDomain: "whatsapp-clone-12b9c.firebaseapp.com",
  projectId: "whatsapp-clone-12b9c",
  storageBucket: "whatsapp-clone-12b9c.appspot.com",
  messagingSenderId: "1047963267396",
  appId: "1:1047963267396:web:676c57028f1108b6e0a711",
  measurementId: "G-7X25HFJ76J",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;