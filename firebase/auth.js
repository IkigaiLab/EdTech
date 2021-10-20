import React, { useEffect, useState } from 'react';
import './firebaseconfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const db = getFirestore();
const auth = getAuth();

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setusername] = useState('');

  const getData = async (userf) => {
    const docRef = doc(db, 'users', userf.uid);
    const querySnapshot = await getDoc(docRef);
    console.log(querySnapshot.data().name);
    setusername(querySnapshot.data().name);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userfetch) => {
      if (userfetch) {
        setUser(userfetch);
        getData(userfetch);
      } else {
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, username, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
