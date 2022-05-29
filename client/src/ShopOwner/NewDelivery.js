import React, { useState, useEffect } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "../firebase";
import { addNewDelivery } from './Database';
import NavBar from './NavigationBar';
import { useNavigate } from 'react-router-dom'

// import {label,div,form} from 'react-bootstrap'
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

function NewDelivery() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState(null);
    const [weight, setWeight] = useState(null);
    const [points, setPoints] = useState(null);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
    }, [user, loading]);

    const itemList = {
        name:'',
        weight:'',
        points:'',
        from:'',
        to:'',
        shopOwnerId:user.uid,
        deliveryPerson:'',
        status:"Pending",
    }
    
    function getFormData(e) {
        e.preventDefault();
    }
    function getName(val) {
        setName(val.target.value);
    }
    function getWeight(val) {
        setWeight(val.target.value);
    }
    function getPoints(val) {
        setPoints(val.target.value);
    }
    function getFrom(val) {
        setFrom(val.target.value);
    }
    function getTo(val) {
        setTo(val.target.value);
    }
    function getItemList(val) {
        setTo(val.target.value);
        itemList.name = name
        itemList.weight = weight
        itemList.points = points
        itemList.from = from
        itemList.to = to
        console.log(itemList);
        addNewDelivery(itemList).then((status)=>{
            if (status === "success"){
                alert("New delivery has been added");
            }
            else if (status === "error"){
                alert("there is an error adding data")
            }
        })

    }
    return (
        <div>
            <NavBar/>
        <div className="position-absolute top-50 start-50 translate-middle mt-5" >
            <h1 style={{color:'orange',textAlign: "center"}}>Add item details</h1>
            <form onSubmit={getFormData}>
                <div className="row justify-content-center align-items-center">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputEmail4">Name of item</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Pizza" onChange={getName}></input>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputEmail4">Weight</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="50" onChange={getWeight}></input>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputPassword4">Points</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="20" onChange={getPoints}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">From</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="WIT college" onChange={getFrom}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">To</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="D-Mart" onChange={getTo}></input>
                    </div>
                </div>
                <center>
                    <button type="submit" className="submit btn btn-primary "onClick={getItemList} >
                        Submit<i className="icon-angle-right" ></i>
                    </button>
                </center>
            </form>
        </div>
        </div>
    )
}

export default NewDelivery