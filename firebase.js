 
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyCrlxgS9hbbPP5Z_ON4Mgv1DQeazwW1TdE",
  authDomain: "insta-clone-2-9f6c2.firebaseapp.com",
  projectId: "insta-clone-2-9f6c2",
  storageBucket: "insta-clone-2-9f6c2.appspot.com",
  messagingSenderId: "915937771686",
  appId: "1:915937771686:web:bb40d0bd4e6315f5657467"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore();
const storage = getStorage()

export  {app, db,storage}