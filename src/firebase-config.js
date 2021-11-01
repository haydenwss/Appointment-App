import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuA4_YktaeKAom_WQ7WQyUU8J87Hfjk7k",
    authDomain: "crud-project-7d4ee.firebaseapp.com",
    projectId: "crud-project-7d4ee",
    storageBucket: "crud-project-7d4ee.appspot.com",
    messagingSenderId: "1057409747714",
    appId: "1:1057409747714:web:507cddb413e216a229901b",
    measurementId: "G-XJFLS7PT7Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
