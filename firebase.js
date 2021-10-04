// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDg4ahSd9fUVKYMjYp36HPoNQ7HWxwouks",
    authDomain: "rav-aharon-levi.firebaseapp.com",
    projectId: "rav-aharon-levi",
    storageBucket: "rav-aharon-levi.appspot.com",
    messagingSenderId: "741204522156",
    appId: "1:741204522156:web:03c4aec7f5a1cddfd4db09",
    measurementId: "G-QLGN81DH1Y"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };