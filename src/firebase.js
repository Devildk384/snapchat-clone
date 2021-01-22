import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmE0OqGny4o8I9z5mTmA6O08_xqp5goDY",
  authDomain: "snapchat-clone-41e7c.firebaseapp.com",
  projectId: "snapchat-clone-41e7c",
  storageBucket: "snapchat-clone-41e7c.appspot.com",
  messagingSenderId: "794369871370",
  appId: "1:794369871370:web:094e8fb25abf67f2c219f3",
  measurementId: "G-MW6F64YX5P"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { db, auth, storage, provider};
   