import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9sC0i7KFVnuBUZSoQN8EHRz14m8f5EOM",
    authDomain: "waya-auth.firebaseapp.com",
    projectId: "waya-auth",
    storageBucket: "waya-auth.appspot.com",
    messagingSenderId: "131355231710",
    appId: "1:131355231710:web:d8fdf4ea89282f1ccf094f"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;