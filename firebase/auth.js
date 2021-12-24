import React, { useEffect, useState } from 'react';
import './firebaseconfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const db = getFirestore();
const auth = getAuth();

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setusername] = useState('');
  const [loading, setloading] = useState(true);

  // const getData = async (userf) => {
  //   const docRef = doc(db, 'users', userf.uid);
  //   const querySnapshot = await getDoc(docRef);
  //   console.log(querySnapshot.data().name);
  //   setusername(querySnapshot.data().name);
  // };

  // const getAllCourse = async () => {
  //   const querySnapshot = await getDocs(collection(db, 'Course'));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, ' => ', doc.data());
  //   });
  // };

  useEffect(() => {
    onAuthStateChanged(auth, (userfetch) => {
      if (userfetch) {
        setUser(userfetch);
        // getData(userfetch);
        // getAllCourse();
        setusername(userfetch.displayName);
        setloading(false);
      } else {
        setloading(false);
      }
    });
  }, [username, user]);

  return (
    <AuthContext.Provider
      value={{ user, username, setusername, setUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
