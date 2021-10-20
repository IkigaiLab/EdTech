import React, { useEffect, useContext } from 'react';
import NextLink from 'next/link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';

import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/auth';

const db = getFirestore();
const theme = createTheme({
  palette: {
    background: {
      default: '#e4f0e2',
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
        router.push('/welcome');
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
        const user = collection(db, 'users');
        return setDoc(doc(user, userCredential.user.uid), {
          name: name,
        });
      })
      .then(() => {
        console.log('signin successful');

        router.push('/welcome');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
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
          flexDirection: 'column',
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
            flexDirection: 'column',
            alignItems: 'center',
            padding: [3, 3, 7, 7],
            borderRadius: '40px',
            backgroundColor: 'white',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
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
            />
            <Box textAlign="center">
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
            </Box>

            <Grid container justifyContent="flex-end" sx={{ pt: 3 }}>
              <Grid item>
                <NextLink href="/signin" passHref>
                  <Link variant="body2">Already have an account? Sign in</Link>
                </NextLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
