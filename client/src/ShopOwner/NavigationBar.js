import React from 'react'
import {Navbar,Container,Nav,Button,LinkContainer} from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import {logout} from '../firebase'


function NavigationBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to="/shopOwnerDashboard" className="links">Delivery Made easy</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/shopOwnerDashboard">Pending</Nav.Link>
                        <Nav.Link as={NavLink} to="/shopOwnerAllocated">Allocated</Nav.Link>
                        <Nav.Link as={NavLink} to="/shopOwnerTaken">Collected</Nav.Link>
                        <Nav.Link as={NavLink} to="/shopOwnerCompleted">Completed</Nav.Link>
                    </Nav>
                    <div className="text-center m-3" ><Button onClick={logout} >Logout</Button></div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar