import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from "firebase/auth";


const Registration = () => {
    const {createUser} = useContext(UserContext);
    const registerUser = (event) =>{
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        createUser(email,password)
        .then((userCredentilas)=>{
            const user = userCredentilas.user;
            updateProfile(user,{
                displayName: userName,
                photoURL: url
            })
            form.reset();
        })
        .catch((error)=>{ 
            console.log(error);
        })
    }
    return (
        <div className='container w-25 mt-5 mb-5'>
            <Form onSubmit={registerUser}>
                <Form.Text className='fw-medium fs-3 text-center'><p>Register</p></Form.Text>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control type="text" name='url' placeholder="Url" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Registration;