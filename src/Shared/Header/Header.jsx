import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav>
                    <img height={50} src={logo} alt="not available" />
                    <h2 className='ms-2'>Toy Shop</h2>
                </Nav>
                <Nav>
                    <Link className="text-decoration-none me-2 text-black" to="/home">Home</Link>
                    <Link className="text-decoration-none me-2 text-black" to="/alltoys">All toys</Link>
                    <Link className="text-decoration-none me-2 text-black" to="/mytoys">My toys</Link>
                    <Link className="text-decoration-none me-2 text-black" to="/addingatoy">Add a toy</Link>
                    <Link className="text-decoration-none me-2 text-black" to="/blogs">Blogs</Link>
                </Nav>
                <Nav>
                    <Link className="text-decoration-none me-2 text-black" to="/login">Login</Link>
                    <Link className="text-decoration-none me-2 text-black" to="/home">Logout</Link>
                    <img src="" alt="" />
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
