import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,Link } from "react-router-dom";
import "./Dashboard.css";
import { auth } from "../firebase";
import NavBar from "./NavigationBar";
import { Button } from "react-bootstrap";
import ListDeliveries from "./ListDeliveries";
import {addNewDelivery,fetchDeliveriesData} from './Database'


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
            <div className="text-center" ><Link className="btn btn-primary " to="/newdelivery" >Add new Delivery</Link></div>
            
        </div>
    );
}
export default Dashboard;