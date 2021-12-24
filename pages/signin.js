import React, { useEffect, useContext, useState } from 'react';
import NextLink from 'next/link';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/auth';

const provider = new GoogleAuthProvider();
const auth = getAuth();

const db = getFirestore();
const theme = createTheme({
  palette: {
    background: {
      default: '#f5f6fa',
    },
  },
});

const Signin = () => {
  const { user, loading } = useContext(AuthContext);
  const [error, seterror] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.push('/dashboard');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(error.code);
        event.target.reset();
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const details = getAdditionalUserInfo(result);
        console.log(details);
        console.log(details.isNewUser);
        if (details.isNewUser != false) {
          const user = collection(db, 'users');
          return setDoc(doc(user, result.user.uid), {
            name: result.user.displayName,
            email: result.user.email,
            courses: [],
            tracks: [],
            practiceproblems: [],
            followers: [],
            following: [],
          });
        }
        // console.log('signin successful');
        // router.push('/dashboard');
      })
      .then(() => {
        console.log('signin successful');

        router.push('/dashboard');
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
              backgroundColor: '#0E3B7D',
              borderRadius: '20px 0 0 20px',
              display: { xs: 'none', sm: 'none', md: 'block' },
            }}
          >
            <img
              src="/signin.svg"
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
              Sign in
            </Typography>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="login-with-google-btn"
            >
              Sign in with Google
            </button>
            <Divider sx={{ mt: 2 }} style={{ width: '100%' }}>
              Or
            </Divider>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                sx={{ mt: 1 }}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ mt: 1 }}
              />
              <Typography textAlign="left" sx={{ m: 0, color: 'red' }}>
                {error ? error.split('/')[1] : ''}
              </Typography>
              <Box textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, mb: 2, backgroundColor: '#0E3B7D' }}
                >
                  Sign In
                </Button>
              </Box>
              <Grid container sx={{ pt: 3 }} textAlign="left">
                <Grid item xs={12} md={6}>
                  <NextLink href="/forgotpassword" passHref>
                    <Link variant="body2">Forgot password?</Link>
                  </NextLink>
                </Grid>
                <Grid item xs={12} md={6}>
                  <NextLink href="/signup" passHref>
                    <Link variant="body2">Don't have an account? Sign Up</Link>
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

export default Signin;
