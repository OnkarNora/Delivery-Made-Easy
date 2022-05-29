import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import { Link , NavLink} from "react-router-dom";
import {logout} from '../firebase'

function NavigationBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to="/userDashboard" className="links">Delivery Made easy</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/userDashboard">Pending</Nav.Link>
                        <Nav.Link as={NavLink} to="/userAllocated">Allocated</Nav.Link>
                        <Nav.Link as={NavLink} to="/userTaken">Collected</Nav.Link>
                        <Nav.Link as={NavLink} to="/userCompleted">Completed</Nav.Link>
                        <Nav.Link as={NavLink} to="/userPoints">Points</Nav.Link>
                    </Nav>
                    <div className="text-center m-3" ><Button onClick={logout} >Logout</Button></div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar