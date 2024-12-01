
import  firebase  from "firebase/compat/app";
// fire authontication 
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiWzf7rLJrGOXczuaPyPIjqTkarl0UJug",
  authDomain: "clone-43a1d.firebaseapp.com",
  projectId: "clone-43a1d",
  storageBucket: "clone-43a1d.firebasestorage.app",
  messagingSenderId: "674982791169",
  appId: "1:674982791169:web:625f76551534f1b52cd800"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=app.firestore()