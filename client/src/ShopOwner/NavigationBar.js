import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {logout} from '../firebase'

function NavigationBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to="/" className="links">Delivery Made easy</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#profile">Profile</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <div className="text-center m-3" ><Button onClick={logout} >Logout</Button></div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar