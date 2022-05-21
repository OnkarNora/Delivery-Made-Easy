import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const addNewDelivery = async (user) => {
    // this is temporary object that i am passing we need to take this input from user
    const delivery = {
        name : "Pizza ",
        weight : "200gm",
        points : 40,
        shopOwnerId : user.uid,
        from : "ashok nagar",
        to : "ramesh nagar",
        deliveryPerson : "",
        status : "Pending",
    }
    

    try {
        await addDoc(collection(db, "deliveries"), delivery);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }

    console.log("delivery request");
}

export {
    addNewDelivery,

}