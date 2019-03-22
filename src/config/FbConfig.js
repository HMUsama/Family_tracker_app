import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyD5mGCTsyUKju2torq81NtnCnADD1WrKlM",
    authDomain: "hackathonfinal-4b942.firebaseapp.com",
    databaseURL: "https://hackathonfinal-4b942.firebaseio.com",
    projectId: "hackathonfinal-4b942",
    storageBucket: "hackathonfinal-4b942.appspot.com",
    messagingSenderId: "509247192177"
  };
  firebase.initializeApp(config);

  export default firebase;