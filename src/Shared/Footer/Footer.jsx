import React from 'react';
import logo from '../../../src/assets/logo.jpg'
import { Nav, Navbar } from 'react-bootstrap';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { FaTwitch } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className=' d-flex justify-content-between container'>
            <section>
                <img height={50} src={logo} alt="" />
                <h2>Toy Shop</h2>
                <p>&copy; All rights reserved 2023</p>
            </section>
            <address>
                <p>Zijlweg 78</p>
                <p>2015CL, Haarlem</p>
                <p>North Holland , Netherlands</p>
            </address>
            <section>
                <Navbar>
                    <Nav  className='d-flex flex-column'>
                        <Nav.Link to="/home">Home</Nav.Link>
                        <Nav.Link to="/alltoys">All toys</Nav.Link>
                        <Nav.Link to="/mytoys">My toys</Nav.Link>
                        <Nav.Link to="/addingatoy">Add a toy</Nav.Link>
                        <Nav.Link to="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar>
            </section>
            <section>
                <p>Follow us on</p>
                <SiFacebook className='ms-2 fs-2'></SiFacebook>
                <FaTwitch className='ms-2 fs-2'></FaTwitch>
                <SiInstagram className='ms-2 fs-2'></SiInstagram>
            </section>
        </footer>
    );
};

export default Footer;