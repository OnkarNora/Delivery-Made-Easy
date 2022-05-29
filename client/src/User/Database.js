import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    updateDoc,
    doc,
    arrayUnion,
    increment,
    getDoc
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
        const q = query(collection(db, "deliveries"),where('status','in',['Pending','Requested']));
        
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

const fetchAllocatedData = async (user) => {
    try {
        const q = query(collection(db, "deliveries"),where('status','==','Allocated'),where('deliveryPerson','==',user.uid));
        
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

const fetchCollectedData = async (user) => {
    try {
        const q = query(collection(db, "deliveries"),where('status','==','Collected'),where('deliveryPerson','==',user.uid));
        
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

const fetchCompletedData = async (user) => {
    try {
        const q = query(collection(db, "deliveries"),where('status','==','Delivered'),where('deliveryPerson','==',user.uid));
        
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

const requestDelivery = async (delivery,userId) => {
    try{
        
        const ref = doc(db,"deliveries",delivery.id);
        const docSnap = await updateDoc(ref, {
            "requests": arrayUnion(userId),
            "status": "Requested"
        });
        console.log("request has been made",docSnap);
        alert("request has been made please refresh");
        return "Done"
        

    } catch (err) {
        console.error(err);
        alert("An error occurred  while fetching  data");
        return "Failed"
    }
}

const deliverPackage = async (delivery)=>{
    try{
        
        const ref = doc(db,"deliveries",delivery.id);
        const docSnap = await updateDoc(ref, {
            "status": "Delivered"
        });
        console.log("delivery has been made",docSnap);
        alert("Delivery confirmed");
        return "Done"
        

    } catch (err) {
        console.error(err);
        alert("An error occurred  while fetching  data");
        return "Failed"
    }
}

const allocatePoints = async(user,delivery)=>{
    try{
        const q = query(collection(db, "users"),where('uid','==',user.uid));
        
        const doc = await getDocs(q);
        console.log("ref",doc.docs[0].ref)
        const docSnap = await updateDoc(doc.docs[0].ref, {
            ["points."+delivery.shopOwnerId]:increment(Number(delivery.points))
        });
        console.log("request has been made",docSnap);
        alert("points allocated successfully");
        return "Done"
        

    } catch (err) {
        console.error(err);
        alert("An error occurred  while fetching  data");
        return "Failed"
    }
}

const fetchPoints = async(user)=>{
    try{
        
        const q = query(collection(db, "users"),where('uid','==',user.uid));
        
        const doc = await getDocs(q);
        // console.log("data",doc.docs[0].data().points)
        return doc.docs[0].data().points
        

    } catch (err) {
        console.error(err);
        alert("An error occurred  while fetching  data");
        return "Failed"
    }
}

const shopOwnerInfo = async(shopId)=>{
    try{

        const q = query(collection(db, "shopowner"),where('uid','==',shopId));
        const doc = await getDocs(q);

        if (doc.docs[0]){
            return doc.docs[0].data()
        }
        return "Not found"
        
        

    } catch (err) {
        console.error(err);
        alert("An error occurred  while fetching  data");
        return "Failed"
    }
}

export {
    fetchDeliveriesData,
    requestDelivery,
    fetchAllocatedData,
    fetchCompletedData,
    fetchCollectedData,
    deliverPackage,
    allocatePoints,
    fetchPoints,
    shopOwnerInfo,

}