import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBUiPRL0bRChs4bDlhIYJCVzyQVJmFhfdI",
    authDomain: "news-letter-7a771.firebaseapp.com",
    databaseURL: "https://news-letter-7a771-default-rtdb.firebaseio.com",
    projectId: "news-letter-7a771",
    storageBucket: "news-letter-7a771.appspot.com",
    messagingSenderId: "1021353078741",
    appId: "1:1021353078741:web:4c15d0174fbd962dd9575c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();