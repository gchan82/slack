import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

var config = {
  apiKey: "AIzaSyAm69XQAi59vigtnmsHKIhjfdwL6JjxtZQ",
  authDomain: "react-slack-clone-598f3.firebaseapp.com",
  databaseURL: "https://react-slack-clone-598f3.firebaseio.com",
  projectId: "react-slack-clone-598f3",
  storageBucket: "react-slack-clone-598f3.appspot.com",
  messagingSenderId: "293859787138"
};
firebase.initializeApp(config);

export default firebase;