import firebase from 'firebase/app';
import "firebase/auth"; // For authentication purposes
import "firebase/database"; // Makes use of database
import "firebase/storage"; // Store media files

var firebaseConfig = {
    apiKey: "AIzaSyB41YtR-K0te_qVdqxKiGUzj0fIeiPppB0",
    authDomain: "caleb-slack-clone.firebaseapp.com",
    databaseURL: "https://caleb-slack-clone.firebaseio.com",
    projectId: "caleb-slack-clone",
    storageBucket: "caleb-slack-clone.appspot.com",
    messagingSenderId: "757714492868",
    appId: "1:757714492868:web:e94611ada5a7c29b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;