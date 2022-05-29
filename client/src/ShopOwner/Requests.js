import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import { acceptRequest, getRequests, getUsers } from './Database';
import { ListGroup, Button } from 'react-bootstrap'
import NavBar from "./NavigationBar";

function Requests() {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [requestedUsers, setRequestedUsers] = useState([]);

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        console.log("id : ", id);

        getRequests(user, id).then((users) => {
            if (users === "No requests"){
                alert("No requests found for this delivery")
                navigate('/shopOwnerDashboard')
                return ;
            }
            getUsers(users).then((data) => {
                setRequestedUsers(data);
                console.log(data);
            })
        })


    }, [user, loading]);

    function acceptUser(userId){
        acceptRequest(id,userId).then((result)=>{
            if (result === "accepted"){
                alert("User has been accepted");
                navigate('/shopOwnerAllocated')
            }else if (result === "rejected"){
                alert("there was an error accepting user");
            }
        });
    }

    return (
        <div>
            <NavBar />
            <ListGroup as="ol" numbered>
                {requestedUsers.map((item, key) => {
                    return (
                        <ListGroup.Item
                            as="li"
                            className="d-flex h4 "
                            key={key}
                        >

                            <div className="ms-2 me-auto text-justify">
                                <div className="fw-bold">{item.name}</div>

                                <div className='d-flex flex-column ' >
                                    <div>Email  : {item.email}</div>
                                </div>
                                <Button variant="warning" className="m-2" onClick={() => {
                                    acceptUser(item.uid);
                                }} >Accept Request</Button>
                            </div>
                            <hr />
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default Requests