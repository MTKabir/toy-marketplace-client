import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { UserContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user,userSignOut } = useContext(UserContext);
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav>
                    <img height={50} src={logo} alt="not available" />
                    <h2 className='ms-2'>Toy Shop</h2>
                </Nav>
                <Nav>
                    <Link className="text-decoration-none me-2 text-black" to="/">Home</Link>
                    <Link className="text-decoration-none me-2 text-black" to="/alltoys">All toys</Link>
                    <Link className="text-decoration-none me-2 text-black" to="/mytoys">My toys</Link>
                    <Link className="text-decoration-none me-2 text-black" to="/addingatoy">Add a toy</Link>
                    <Link className="text-decoration-none me-2 text-black" to="/blogs">Blogs</Link>
                </Nav>
                <Nav>
                    {
                        user ?
                            <div>
                                <Link onClick={userSignOut} className="text-decoration-none me-2 text-black"  to="/">Logout</Link>
                                <img className='rounded-circle bg-secondary' style={{width:'30px', height:'30px'}} src={user.photoURL} alt="url" />
                            </div>
                            :
                            <Link className="text-decoration-none me-2 text-black" to="/login">Login</Link>
                    }

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
