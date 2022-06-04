import React,{useEffect} from 'react'
import {ListGroup, Button, Alert} from 'react-bootstrap'
import {allocatePoints, deliverPackage, requestDelivery} from './Database'
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
            if(item.requests.includes(user?.uid)){
                return "disabled"
            }
        }
        
        return ""
    }

    function deliver(item) {
        if (window.confirm("Please confirm that you have delivered this package if not your account may get permanently Banned!")) {
            deliverPackage(item).then(()=>{
                allocatePoints(user,item);
                navigate("/userCompleted");
            })
          } else {
            console.log("Not confirmed");
          }
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

                        {['Requested','Pending'].includes(item.status)?<Button variant={getStatus(item)==="disabled"?'secondary':'outline-primary'} className={'my-3 ' + getStatus(item)} onClick={()=>{requestDelivery(item,user.uid);navigate('/userDashboard')}} >Request</Button>:null}
                        {item.status==='Allocated'?<Alert className='my-3' key={"primary"} variant={"primary"} >Take the package from shop</Alert>:null}
                        {item.status==='Collected' ? <Button className='my-3' variant='outline-success' onClick={()=>{deliver(item)}} >Delivered</Button> :null}
                        {item.status==='Delivered' ?  <Alert className='my-3' key={"primary"} variant={"success"} >Delivery has been successfully made and points received</Alert>:null}
                        {/*  */}
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