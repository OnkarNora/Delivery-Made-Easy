import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth } from "../firebase";
import NavBar from "./NavigationBar";
import { fetchPoints, shopOwnerInfo } from './Database'
import {Table} from 'react-bootstrap'

function Points() {
    const [user, loading, error] = useAuthState(auth);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchPoints(user).then(async (pointsData) => {
            const df = await Promise.all(Object.keys(pointsData).map(async (item,id)=>{
                return (<tr key={id} >
                    <td>{id+1}</td>
                    <td>{(await shopOwnerInfo(item)).email}</td>
                    <td>{(await shopOwnerInfo(item)).name}</td>
                    <td>{pointsData[item]}</td>
                </tr>)
            }))
            setData(df);
        })
    }, [user, loading]);



    function putData() {

        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>ShopOwner Email </th>
                            <th>ShopOwner Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data}
                    </tbody>    
                </Table>
            </div>
        )
    }

    return (
        <div >
            <NavBar />
            {putData()}

        </div>
    );
}

export default Points