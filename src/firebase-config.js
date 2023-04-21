import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcEakDJB-4m69FnicUD4pY75iFCd5ZlII",
  authDomain: "react-crud-cde2f.firebaseapp.com",
  projectId: "react-crud-cde2f",
  storageBucket: "react-crud-cde2f.appspot.com",
  messagingSenderId: "222063088195",
  appId: "1:222063088195:web:8ba5f77c0694c79e263af6",
  measurementId: "G-XW3MJ5CTSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);