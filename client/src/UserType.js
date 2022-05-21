import {  db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";



const UserType = async ( user )=>{
    
    try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        return data.type
      } catch (err) {
        const q = query(collection(db, "shopowner"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        return data.type
      }
}

export{
    UserType,
}