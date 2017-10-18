import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDxAF9oJMKRiZ8DRRcuYeLdvZFebXsAf3E",
  authDomain: "lunch-rush-23bb7.firebaseapp.com",
  databaseURL: "https://lunch-rush-23bb7.firebaseio.com",
  projectId: "lunch-rush-23bb7",
  storageBucket: "lunch-rush-23bb7.appspot.com",
  messagingSenderId: "155251745525"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
