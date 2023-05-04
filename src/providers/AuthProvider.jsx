import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null)

const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser =(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        }).then(()=>{

        }).catch(error=>{
            console.log(error);
        })

    }
    const gitLogin=()=>{
return signInWithPopup(auth,gitProvider)
    }
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
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
        login,
        logOut,
        googleLogin,
        gitLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;