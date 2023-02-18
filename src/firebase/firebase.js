// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAvj5YbxNf9nqzNi_mYA8zBUckK8JWr9Ig",
    authDomain: "vape-mall.firebaseapp.com",
    databaseURL: "https://vape-mall-default-rtdb.firebaseio.com",
    projectId: "vape-mall",
    storageBucket: "vape-mall.appspot.com",
    messagingSenderId: "88365164033",
    appId: "1:88365164033:web:288cde1e442a1dd757c200",
    measurementId: "G-64S4S590FQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
