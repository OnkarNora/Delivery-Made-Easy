import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    getDoc,
    doc
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
};

const fetchDeliveriesData = async (user) => {
    try {
        const q = query(collection(db, "deliveries"),where("shopOwnerId" ,"==" ,user.uid));
        
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
        alert("An error occurred  while fetching  data");
    }
};

const getRequests = async (user,delivery) => {
    try{
        
        const ref = doc(db,"deliveries",delivery.id);
        const docSnap = await getDoc(ref);
        const data = docSnap.data().requests
        if (data){
            console.log(data);
            return data;
        } else{
            console.log("No requests");
            return "No requests";
        }
        

    } catch (err) {
        console.error(err);
        alert("An error occurred  while fetching  data");
    }
};

const getUsers =  async (usersid)=>{
    const data = await Promise.all(usersid.map(async (item,id)=>{
        try {
            const q = query(collection(db, "users"),where("uid" ,"==" ,item));
            const doc = await getDocs(q);
            return doc.docs[0].data() 
            // console.log(doc.docs[0].data())
            

        } catch (err) {
            console.error(err);
            alert("An error occurred  while fetching  data");
        }
    }))
    // console.log(data);
    return data;
    
}

const acceptRequest = (delivery,userId)=>{ // this should change the status of the delivery to Allocated and add the deliveryPerson
    
}

export {
    addNewDelivery,
    fetchDeliveriesData,
    getRequests,
    getUsers,
    acceptRequest,
}