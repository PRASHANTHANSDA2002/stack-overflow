import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyB6F16VaSdGkjEVMn0DrHC4ASrmh5vRuTU",

  authDomain: "stackoverflowclone-836f2.firebaseapp.com",

  projectId: "stackoverflowclone-836f2",

  storageBucket: "stackoverflowclone-836f2.appspot.com",

  messagingSenderId: "1093610549658",

  appId: "1:1093610549658:web:3ed987f0d0ebc1bc158a23",

  measurementId: "G-SK51JCHB1J"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
