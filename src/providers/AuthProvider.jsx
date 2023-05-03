import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null)

const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);

    const createUser=(email,password)=>{
        setLoading(false)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser =(name,photo)=>{
        setLoading(false)
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        }).then(()=>{

        }).catch(error=>{
            console.log(error);
        })

    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{})
        .error(error=>console.log(error))
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo={
        user,
        createUser,
        loading,
        updateUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;