import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATDBrKg-rNH_NvNqN6Ik0jGjsrMzlMlFs",
    authDomain: "slack-clone-a728f.firebaseapp.com",
    projectId: "slack-clone-a728f",
    storageBucket: "slack-clone-a728f.appspot.com",
    messagingSenderId: "9886208166",
    appId: "1:9886208166:web:bfe78591b78bdc68c7e467"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;