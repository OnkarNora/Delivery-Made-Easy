import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyACpZdE4Ff2XLZg2TlkCJwQkq-rSDk_jFA",
  authDomain: "delivery-made-easy.firebaseapp.com",
  databaseURL: "https://delivery-made-easy-default-rtdb.firebaseio.com",
  projectId: "delivery-made-easy",
  storageBucket: "delivery-made-easy.appspot.com",
  messagingSenderId: "528491488333",
  appId: "1:528491488333:web:27c5eb956af9ef80456804",
  measurementId: "G-F89RMJDFVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);