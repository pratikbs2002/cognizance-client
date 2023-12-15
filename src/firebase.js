// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjHyBtaaARQlwxtdYRaUmjFoBagxTTQDM",
    authDomain: "czfilestorage.firebaseapp.com",
    projectId: "czfilestorage",
    storageBucket: "czfilestorage.appspot.com",
    messagingSenderId: "1026076596995",
    appId: "1:1026076596995:web:605f7b43bc6ad3b2b9e736",
    measurementId: "G-Q20GQEL5RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const cz = storage;
