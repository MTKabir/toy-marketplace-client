import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../firebase.config';

export const UserContext = createContext();
const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const auth = getAuth(app); 
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const userSignOut = ()=>{
        signOut(auth)
        .then(()=>{
            console.log("sign out successful")
        }).catch(error =>{
            console.log(error);
        })

    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
        })
        return(()=>{
            return unsubscribe();
        })
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        userSignOut
    }
    return (
        <UserContext.Provider value = {authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;