import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { UserContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const{signIn} = useContext(UserContext);
    const loginForm = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then((userCredentials)=>{
            const user = userCredentials.user;
            form.reset();
        })
        .catch((error)=>{
            console.log(error);
        })
       
    }
    return (
        <div className='container w-25 mt-5 mb-5'>
            <Form onSubmit={loginForm}>
                <Form.Text className='fw-medium fs-3 text-center'><p>Login</p></Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className='ms-4'>
                    Don't have a account yet?
                    <Link to="/registration" className='text-decoration-none'>Register</Link>
                </Form.Text>
                <br/>
                <Form.Text className='text-center mt-2'><p>Or</p></Form.Text>
                <Button className='bg-white w-100 mt-2 border'><FcGoogle className='fs-4'></FcGoogle></Button>
            </Form>

        </div>
    );
};

export default Login;