import React,{useEffect} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import {requestDelivery} from './Database'
import {auth} from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom'

function ListDeliveries({deliveries}) {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
    }, [user, loading]);

    function getStatus(item){
        if(item.requests){
            if(item.requests.includes(user.uid)){
                return "disabled"
            }
        }
        
        return ""
    }

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
                            <div>Status : {item.status}</div>
                            {/* <div>id : {item.id}</div> */}
                        </div>

                        <Button className={'m-2 ' + getStatus(item)} onClick={()=>{requestDelivery(item,user.uid);navigate('/userDashboard')}} >Request</Button>
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