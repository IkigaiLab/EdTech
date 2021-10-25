import React, { useEffect, useContext } from 'react';
import NextLink from 'next/link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';

import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/auth';

const provider = new GoogleAuthProvider();

const db = getFirestore();
const theme = createTheme({
  palette: {
    background: {
      default: '#0000bc',
    },
  },
});
const auth = getAuth();

const Signup = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (loading) {
    } else {
      if (user) {
        const uid = user.uid;
        const uemail = user.email;
        console.log('user signed in');
        console.log(uid);
        console.log(uemail);
        router.push('/dashboard');
      } else {
        console.log('user not signed in');
      }
    }
  }, [loading]);

  const signuphandle = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get('email');
    const password = data.get('password');
    const name = data.get('name');
    console.log({
      name,
      email,
      password,
    });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = collection(db, 'users');
        // return setDoc(doc(user, userCredential.user.uid), {
        //   name: name,
        // });
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then(() => {
        console.log('signin successful');

        router.push('/dashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        router.push('/dashboard');
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        spacing={0}
        direction="column"
        style={{ minHeight: '100vh' }}
        component="main"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            boxShadow: 4,
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px',
            backgroundColor: 'white',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#0000FF',
              borderRadius: '20px 0 0 20px',
              display: { xs: 'none', sm: 'none', md: 'block' },
            }}
          >
            <img
              src="/loginanimate.svg"
              height="550px"
              width="500px"
              style={{ maxWidth: 'calc(100% - 20px)' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: [3, 3, 3, 5],
            }}
          >
            <img src="/logo.png" />
            <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
              Sign up
            </Typography>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="login-with-google-btn"
            >
              Sign up with Google
            </button>
            <Divider sx={{ mt: 2 }} style={{ width: '100%' }}>
              Or
            </Divider>
            <Box component="form" onSubmit={signuphandle}>
              <Box>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="name"
                  name="name"
                  id="name"
                  label="Name"
                  autoFocus
                  size="small"
                />
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                sx={{ mt: 1 }}
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                sx={{ mt: 1 }}
                size="small"
              />
              <Box textAlign="center">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 1, backgroundColor: '#0000BC' }}
                >
                  Sign Up
                </Button>
              </Box>

              <Grid container justifyContent="flex-end" sx={{ pt: 2 }}>
                <Grid item>
                  <NextLink href="/signin" passHref>
                    <Link variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </NextLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
