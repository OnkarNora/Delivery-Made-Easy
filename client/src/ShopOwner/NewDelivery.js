import React, { useState } from 'react'
// import {label,div,form} from 'react-bootstrap'
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

function NewDelivery() {
    const [name, setName] = useState(null);
    const [weight, setWeight] = useState(null);
    const [points, setPoints] = useState(null);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const itemList = {name:'',weight:'',points:'',from:'',to:''}
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
    }
    return (
        <div className="position-absolute top-50 start-50 translate-middle " >
            <h1 style={{color:'orange',textAlign: "center"}}>Add item details</h1>
            <form onSubmit={getFormData}>
                <div className="row justify-content-center align-items-center">
                    <div className="form-group col-md-12">
                        <label for="inputEmail4">Name of item</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Pizza" onChange={getName}></input>
                    </div>
                    <div className="form-group col-md-12">
                        <label for="inputEmail4">Weight</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="50" onChange={getWeight}></input>
                    </div>
                    <div className="form-group col-md-12">
                        <label for="inputPassword4">Points</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="20" onChange={getPoints}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">From</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="WIT college" onChange={getFrom}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">To</label>
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
    )
}

export default NewDelivery