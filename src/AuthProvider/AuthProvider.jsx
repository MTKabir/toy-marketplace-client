import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.config';

export const UserContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app); 
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        createUser
    }
    return (
        <UserContext.Provider value = {authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;