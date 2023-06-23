import React from "react";
import { Nav , Container,Navbar } from "react-bootstrap";
import './Navs.css'
import logo from './../../assets/logo.png'

const Navs = ()=>{
    return (




        <Navbar className="fixed-top" expand ="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} title="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#explore">Explore Food</Nav.Link>
                <Nav.Link href="#review">Review</Nav.Link>
                <Nav.Link href="#faq">F.A.Q</Nav.Link>
            </Nav>
            
            <Nav>
            <Nav.Link id ="phone-nav"><button><a href ="#">0558442782</a></button></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
);
}


export default Navs;