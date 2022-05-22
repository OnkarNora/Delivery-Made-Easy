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

const fetchDeliveriesData = async (user) => {
    try {
        const q = query(collection(db, "deliveries"),where("deliveryPerson" ,"==" ,user.uid));
        
        const doc = await getDocs(q);
        let data = []
        // console.log(doc.docs)
        doc.docs.map((item)=>{
            // console.log(item.data)
            let d = item.data()
            d.id = item.id
            data.push(d)
            
        });
        return data;
    } catch (err) {
        console.error(err);
        alert("An error occurred  while fetching user data");
    }
};

export {
    fetchDeliveriesData,

}