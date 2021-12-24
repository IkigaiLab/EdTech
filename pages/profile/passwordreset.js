import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import ProfLayout from '../../components/Profile/layout';
import { AuthContext } from '../../firebase/auth';
import { reauthenticateWithCredential, updatePassword } from 'firebase/auth';
const Loader = () => <div className="loader"></div>;

const Passwordreset = () => {
  const { user, loading, setusername } = useContext(AuthContext);
  const [newpassword, setnewpassword] = useState('');
  const [error, seterror] = useState('');

  const [open, setOpen] = React.useState(false);
  const [openerror, setOpenerror] = React.useState(false);
  const [loadings, setloadings] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleerrorClick = () => {
    setOpenerror(true);
  };
  const handleerrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenerror(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    console.log(user?.providerData[0].providerId);
  }, [user]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setloadings(true);
    await updatePassword(user, newpassword)
      .then(() => {
        // Update successful.
        console.log('Password Updated');
        setloadings(false);
        handleClick();
      })
      .catch((error) => {
        // An error ocurred
        // ...
        console.log(error);
        if (error.code === 'auth/requires-recent-login') {
          // Require user to sign in again.
          seterror(error.code);
          setloadings(false);
          handleerrorClick();
        } else if (error.code === 'auth/weak-password') {
          seterror('auth/Password should be at least 6 characters');
          setloadings(false);
          handleerrorClick();
        } else {
          seterror(error.code);
          setloadings(false);
          handleerrorClick();
        }
      });
  };
  return (
    <ProfLayout>
      {loading || loadings ? <Loader /> : <></>}
      {/* for success */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        // style={{ height: '100%' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          severity="success"
          sx={{ width: '100%' }}
        >
          Your Password Changed Successfully!
        </Alert>
      </Snackbar>
      {/* for error */}
      <Snackbar
        open={openerror}
        autoHideDuration={6000}
        onClose={handleerrorClose}
        // style={{ height: '100%' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Alert
          onClose={handleerrorClose}
          variant="filled"
          severity="error"
          sx={{ width: '100%' }}
        >
          {error ? error.split('/')[1] : ''}!
        </Alert>
      </Snackbar>

      <Box sx={{ ml: 3 }}>
        <Typography variant="h6">Password & Security</Typography>
        <Grid container>
          <Grid item lg={8}>
            {user?.providerData[0].providerId === 'password' ? (
              <>
                <Typography sx={{ mt: 2 }}>
                  Note : For security reasons, you can only change your password
                  if you logged in recently, but if you logged in from long time
                  then you have to first logout then login again.
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Enter New Password"
                    type="password"
                    fullWidth
                    required
                    value={newpassword}
                    onChange={(e) => {
                      setnewpassword(e.target.value);
                    }}
                    margin="normal"
                    sx={{
                      mt: 2,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#293984',
                        },
                      },
                    }}
                  />
                  <Box textAlign="left">
                    <Button type="submit" variant="contained" sx={{ mt: 3 }}>
                      Change Password
                    </Button>
                  </Box>
                </Box>
              </>
            ) : (
              <>
                <Typography sx={{ mt: 2 }}>
                  Note : For google account signin you don't need any password.
                </Typography>
                <Box
                  component="form"
                  //  onSubmit={handleSubmit}
                >
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Enter New Password"
                    fullWidth
                    required
                    disabled
                    margin="normal"
                    sx={{
                      mt: 2,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#293984',
                        },
                      },
                    }}
                  />
                  <Box textAlign="left">
                    <Button
                      disabled
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3 }}
                    >
                      Change Password
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </Grid>
          <Grid item lg={4}></Grid>
        </Grid>
      </Box>
    </ProfLayout>
  );
};

export default Passwordreset;
