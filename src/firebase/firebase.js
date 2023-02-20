// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "vape-mall",
    storageBucket: "vape-mall.appspot.com",
    messagingSenderId: "88365164033",
    appId: "1:88365164033:web:288cde1e442a1dd757c200",
    measurementId: "G-64S4S590FQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
