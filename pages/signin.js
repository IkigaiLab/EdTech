import React, { useEffect, useContext } from 'react';
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
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/auth';

const provider = new GoogleAuthProvider();
const auth = getAuth();

const theme = createTheme({
  palette: {
    background: {
      default: '#0000bc',
    },
  },
});

const Signin = () => {
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
        router.push('/welcome');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        router.push('/welcome');
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
            {/* <Button onClick={handleGoogleSignIn}>Sign in with Google</Button> */}
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
              />
              <Box textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 3, mb: 2, backgroundColor: '#0000BC' }}
                >
                  Sign In
                </Button>
              </Box>
              {/* <Grid container sx={{ pt: 3 }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
              <Grid container justifyContent="flex-end" sx={{ pt: 3 }}>
                <Grid item>
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
