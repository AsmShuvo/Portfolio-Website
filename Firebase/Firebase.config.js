import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBpNsoqbcpUCZIo3I6UO7JtnnjFxT4aqCM",
  authDomain: "portfolio-fcaca.firebaseapp.com",
  projectId: "portfolio-fcaca",
  storageBucket: "portfolio-fcaca.appspot.com",
  messagingSenderId: "548957665900",
  appId: "1:548957665900:web:8ed3688b2c581a0314f649",
  measurementId: "G-2SGM4HBGYC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);