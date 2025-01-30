// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB02qH7_xAtdjsL74j8e3iImMDjFWN45oQ",
  authDomain: "e-commerce-project-fffa4.firebaseapp.com",
  projectId: "e-commerce-project-fffa4",
  storageBucket: "e-commerce-project-fffa4.firebasestorage.app",
  messagingSenderId: "142823077129",
  appId: "1:142823077129:web:77ac9348384ccbaec6cfd8",
  measurementId: "G-2XWTGGCPWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);