import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../AuthProvider/AuthProvider';

const ForgetPassword = () => {
    const{passwordResetEmailSend} = useContext(UserContext);
    const[emailSent,setEmailSent] = useState(false);
    const resetPassword = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        passwordResetEmailSend(email)
        .then(()=>{
            setEmailSent(true);
            form.reset();
        })
        .catch(error=>{
            console.log(error);
        })


    }
    return (
        <div className='container w-25 mt-2 mb-5'>
            <Form onSubmit={resetPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
                {
                    emailSent?<p className='mt-3 text-info'>Password  reset email sent</p>:""
                }
            </Form>
        </div>
    );
};

export default ForgetPassword;