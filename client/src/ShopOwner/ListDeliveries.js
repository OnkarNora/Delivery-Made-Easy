import { Button } from 'react-bootstrap'
import React from 'react'
import {ListGroup} from 'react-bootstrap'
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { acceptRequest,  getRequests, getUsers } from './Database'

function ListDeliveries({deliveries}) {

    const [user, loading, error] = useAuthState(auth);

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
                        <div className="fw-bold">{item.name}</div>
                        
                        <div className='d-flex flex-column ' >
                            <div>weight : {item.weight}</div>
                            <div>Pointes : {item.points}</div>
                            <div>From : {item.from}</div>
                            <div>To : {item.to}</div>
                            <div className='text-danger'>Status : {item.status}</div>
                            <div>Delivery Person : {item.deliveryPerson}</div>
                            <div>id : {item.id}</div>
                        </div>

                        <Button className="m-2"onClick={()=>{

                            getRequests(user,item).then((users)=>{getUsers(users).then((d)=>{ acceptRequest( item,d[0].uid ); })});
                        
                        
                        }} >showRequests</Button>
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