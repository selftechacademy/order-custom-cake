// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB-meVstlmm_lPsCUlVm24mN9whBzu1KSE",
	authDomain: "chicago-bakes.firebaseapp.com",
	projectId: "chicago-bakes",
	storageBucket: "chicago-bakes.appspot.com",
	messagingSenderId: "340544204715",
	appId: "1:340544204715:web:d5748dc786173fb8a0ecee",
	measurementId: "G-WV20SBEBLT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ---AUTHENTICATION/
// FIXME: Need to add google sign up
export const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// sign in the user
export const signInWithEmail = async (email, password) => {
	if (!email && !password) return;
	signInWithEmailAndPassword(auth, email, password);
};

// it listens for users if they are signed in
export const userStateListener = (callback) =>
	onAuthStateChanged(auth, callback);

// signs out the user
export const SignOutUser = async () => signOut(auth);

// Create user
export const createNewUser = async (email, password) => {
	if (!email && !password) return;
	createUserWithEmailAndPassword(auth, email, password);
};
