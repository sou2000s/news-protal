// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGiDUEgkGz8xUV4MbFbtlCpOMOdy3ZqLw",
  authDomain: "dragon-news-92f34.firebaseapp.com",
  projectId: "dragon-news-92f34",
  storageBucket: "dragon-news-92f34.appspot.com",
  messagingSenderId: "959526858091",
  appId: "1:959526858091:web:05e5b63c31ef472dec302e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app