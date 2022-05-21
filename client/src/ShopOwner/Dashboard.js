import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import NavBar from "./NavigationBar";
import { Button } from "react-bootstrap";
import {addNewDelivery} from './Database'
import ListDeliveries from "./ListDeliveries";

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [deliveries, setDeliveries] = useState("");
    const navigate = useNavigate();

    const fetchDeliveriesData = async () => {
        try {
            const q = query(collection(db, "deliveries"));
            
            const doc = await getDocs(q);
            let data = []
            // console.log(doc.docs)
            doc.docs.map((item)=>{
                // console.log(item.data)
                let d = item.data()
                d.id = item.id
                data.push(d)
                
            });
            setDeliveries(data);
        } catch (err) {
            console.error(err);
            alert("An error occurred  while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchDeliveriesData().then(()=>{
            console.log(deliveries)
        })
    }, [user, loading]);



    return (
        <div >
            <NavBar/>
            <h1 className="dashboard__container">{ deliveries ? <ListDeliveries deliveries={deliveries}/> :
                "No Deliveries to show"
            }</h1>
            <div className="text-center m-3" ><Button onClick={()=>{addNewDelivery(user)}} >Add new Delivery</Button></div>
        </div>
    );
}
export default Dashboard;