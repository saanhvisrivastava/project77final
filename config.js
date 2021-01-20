import firebase from 'firebase';
require('@firebase/firestore')

/* var firebaseConfig = {
  apiKey: "AIzaSyDSzmLoNPk9g4oa5WGhOJFemUxnqnEdPNw",
  authDomain: "barter-system-a72b8.firebaseapp.com",
  projectId: "barter-system-a72b8",
  storageBucket: "barter-system-a72b8.appspot.com",
  messagingSenderId: "29101680879",
  appId: "1:29101680879:web:a0aafd5eecc7c8118e531a"
};
*/


var firebaseConfig = {
  apiKey: "AIzaSyBJsTqwL8yjTWW8mrCWgrBird7HI944SIw",
  authDomain: "book-santa.firebaseapp.com",
  databaseURL: "https://book-santa.firebaseio.com",
  projectId: "book-santa",
  storageBucket: "book-santa.appspot.com",
  messagingSenderId: "546422247592",
  appId: "1:546422247592:web:a82af183e05f978755f29d",
  measurementId: "G-MLCQNSGDLH"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
