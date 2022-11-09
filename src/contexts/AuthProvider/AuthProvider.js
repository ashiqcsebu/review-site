import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setuser] = useState(null);
  const [loadding, setloadding] = useState(true);

  
  const createUser = (email, password) => {
    setloadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setloadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    localStorage.removeItem('genius-token');
    setloadding(true);
    return signOut(auth);
  };

  const googleSignin =() =>{
    return signInWithPopup(auth, provider)
  }

  const logIn = (email, password) => {
    setloadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloadding(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    logOut,
    login,
    logIn,
    loadding,
    googleSignin,
    setuser
  };
  return (

    <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;



