import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import NavBar from "./NavigationBar";
import { Button } from "react-bootstrap";
import ListDeliveries from "./ListDeliveries";
import {fetchDeliveriesData} from './Database'

function Dashboard() {

    const [user, loading, error] = useAuthState(auth);
    const [deliveries, setDeliveries] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchDeliveriesData(user).then((d)=>{
            setDeliveries(d);
            console.log(d)
        })
    }, [user, loading]);


    return (
        <div >
            <NavBar/>
            <h1 className="dashboard__container">{ deliveries.length>0 ? <ListDeliveries deliveries={deliveries}/> :
                "No Deliveries to show"
            }</h1>
            
        </div>
    );
}
export default Dashboard;