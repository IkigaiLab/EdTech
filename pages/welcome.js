import React, { useEffect, useContext } from 'react';
import { signOut, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/auth';

const Welcome = () => {
  const { loading, user, username, setUser } = useContext(AuthContext);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    if (loading) {
    } else {
      if (user) {
      } else {
        console.log('user not signed in');
        router.push('/');
      }
    }
  }, [loading]);

  const signout = () => {
    signOut(auth)
      .then(function () {
        setUser(null);
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div>
      {user ? (
        <>
          <h2>
            Welcome <span style={{ color: 'red' }}>{username}</span>
          </h2>
          <button onClick={signout}>SignOut</button>
        </>
      ) : (
        <h4>Loading......</h4>
      )}
    </div>
  );
};

export default Welcome;
