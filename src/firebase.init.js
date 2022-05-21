// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALLurCI2REm1xs1Kg8YzP0PSPn84Zj8U0",
    authDomain: "final-assignment-auth.firebaseapp.com",
    projectId: "final-assignment-auth",
    storageBucket: "final-assignment-auth.appspot.com",
    messagingSenderId: "1047117659181",
    appId: "1:1047117659181:web:bd20933a622322cadecca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth