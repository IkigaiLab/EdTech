import React, { useEffect, useContext } from 'react';
import { signOut, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/auth';
import { Button } from '@mui/material';

const Welcome = () => {
  const { user, username, setUser, loading } = useContext(AuthContext);
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
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {user ? (
        <>
          <h1>
            Welcome <span style={{ color: 'red' }}>{user.displayName}</span>
          </h1>
          <h2>
            Your email id is :{' '}
            <span style={{ color: 'red' }}>{user.email}</span>
          </h2>
          <Button variant="contained" sx={{ mt: 3 }} onClick={signout}>
            SignOut
          </Button>
        </>
      ) : (
        <h4>Loading......</h4>
      )}
    </div>
  );
};

export default Welcome;
