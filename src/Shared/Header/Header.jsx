import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
                <Container>
                        <Nav>
                            <img height={50} src={logo} alt="not available" />
                            <h2 className='ms-2'>Toy Shop</h2>
                        </Nav>
                        <Nav>
                            <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link to="/alltoys">All toys</Nav.Link>
                            <Nav.Link to="/mytoys">My toys</Nav.Link>
                            <Nav.Link to="/addingatoy">Add a toy</Nav.Link>
                            <Nav.Link to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link to="/login">Login</Nav.Link>
                            <Nav.Link to="/home">Logout</Nav.Link>
                            <img src="" alt="" />
                        </Nav>
                </Container>
        </Navbar>
    );
};

export default Header;