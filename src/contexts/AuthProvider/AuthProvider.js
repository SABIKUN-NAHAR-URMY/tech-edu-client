import React, { useEffect } from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [photourl, setPhotourl] = useState(null);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUserPhoto) =>{
                setPhotourl(currentUserPhoto);
        });
        return () => {
            unsubscribe();
        }
    },[]);

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {user, photourl, providerLogin, logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;