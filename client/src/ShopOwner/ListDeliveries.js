import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import {ListGroup} from 'react-bootstrap'
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collectDelivery } from './Database'
import { Link, useNavigate } from 'react-router-dom';
import MapView from './MapView';

function ListDeliveries({deliveries}) {

    const [user, loading, error] = useAuthState(auth);
    const [showMap,setShowMap] = useState(false)
    const navigate = useNavigate();
    

    return (
        <ListGroup as="ol" numbered>
            {deliveries.map((item,id)=>{
                return (
                <ListGroup.Item
                    as="li"
                    className="d-flex h4 "
                    key={id}
                    >

                    <div className="ms-2 me-auto text-justify">
                        <div className="fw-bold">{item.name} </div>
                        
                        <div className='d-flex flex-column ' >
                            <div>Weight : {item.weight}</div>
                            <div>Points : {item.points}</div>
                            <div>From : {item.from}</div>
                            <div>To : {item.to}</div>
                            <div>Status : <span className="text-danger" >{item.status}</span></div>
                            {/* <div>Delivery Person : {item.deliveryPerson==="" ? "Not accepted by anyone":item.deliveryPerson}</div> */}
                            {/* <div>id : {item.id}</div> */}
                        </div>
                        {/* {showMap ? <Button className='my-3' onClick={()=>{setShowMap(false)}} >Hide Map</Button>:<Button className='my-3' onClick={()=>{setShowMap(true)}} >Show Map</Button>} */}
                        {showMap ? <MapView delivery={item} />:null}
                        {item.status==='Requested'?<Link className='btn btn-primary my-3' to={'/requests/'+ item.id} >Show Requests</Link> :null}
                        {item.status==='Allocated'?<Button className='my-3' variant='outline-info' onClick={()=>{collectDelivery(item.id).then(()=>{navigate("/shopOwnerTaken")});}} >Collected</Button> :null}
                    </div>
                    <hr/>
                </ListGroup.Item>
                )
            })
            }
        </ListGroup>
    )
}

export default ListDeliveries