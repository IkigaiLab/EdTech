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
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/auth';

const auth = getAuth();

const theme = createTheme({
  palette: {
    background: {
      default: '#0000bc',
    },
  },
});

const Forgetpassword = () => {
  const { user, loading } = useContext(AuthContext);
  const [error, seterror] = useState('');
  const [success, setsuccess] = useState('');
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
    const df = new FormData(event.currentTarget);
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        seterror('');
        setsuccess('Password reset email sent!');
        alert('Password reset email sent!');
        // ..
        event.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setsuccess('');
        seterror(error.code);
        console.log(error.code);
        console.log(error.message);
        event.target.reset();
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
              src="/forgotpassword.svg"
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
            <Typography component="h1" variant="h5" sx={{ mt: 3, mb: 1 }}>
              Forgot Password
            </Typography>
            <Divider sx={{ mt: 2 }} style={{ width: '100%' }}>
              You will recieve an email with link
            </Divider>

            <Box>
              <Typography textAlign="left" sx={{ mt: 1, color: 'red' }}>
                {error ? error.split('/')[1] : ''}
              </Typography>
            </Box>
            <Box>
              <Typography textAlign="left" sx={{ mt: 1, color: '#03a518' }}>
                {success ? success : ''}
              </Typography>
            </Box>

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

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2, backgroundColor: '#0000BC' }}
              >
                Reset my password
              </Button>
              <Grid container justifyContent="flex-end" sx={{ pt: 3 }}>
                <Grid item>
                  <NextLink href="/signin" passHref>
                    <Link variant="body2">Back to Sign In Page</Link>
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

export default Forgetpassword;
