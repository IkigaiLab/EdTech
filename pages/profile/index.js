import React, { useContext, useEffect, useState } from 'react';
import ProfLayout from '../../components/Profile/layout';
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
  Badge,
  Box,
  Link,
  Avatar,
  TextField,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { AuthContext } from '../../firebase/auth';
import { getAuth, updateProfile } from 'firebase/auth';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
const auth = getAuth();
const Loader = () => <div className="loader"></div>;
const db = getFirestore();
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const storage = getStorage();

const index = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [contact, setcontact] = useState('');
  const [image, setimage] = useState('');
  const [userimg, setuserimg] = useState('');
  const [loadings, setloadings] = useState(false);
  const { user, loading, setusername } = useContext(AuthContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setloadings(true);
    const docRef = doc(db, 'users', user.uid);
    await updateDoc(docRef, {
      contactNumber: contact,
    });
    await updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(async () => {
        // Profile updated!
        const docRef = doc(db, 'users', user.uid);
        await updateDoc(docRef, {
          name: name,
        });
        setusername(name);
        setloadings(false);
      })
      .catch((error) => {
        console.log('error occoured');
      });
  };

  const imageUpdate = async (file) => {
    setloadings(true);
    const type = file && file['type'] === 'image/jpeg';
    console.log(type);
    if (type === true) {
      const storageRef = ref(storage, 'user/' + user.uid + '/profile.jpg');

      // 'file' comes from the Blob or File API
      await uploadBytes(storageRef, file).then(async (snapshot) => {
        console.log('Uploaded file!');
        try {
          setloadings(true);
          const storageRefs = ref(storage, 'user/' + user.uid + '/profile.jpg');
          if (storageRefs) {
            await getDownloadURL(storageRef).then(async (downloadURL) => {
              console.log('File available at', downloadURL);
              setuserimg(downloadURL);

              await updateProfile(auth.currentUser, {
                photoURL: downloadURL,
              });
              setloadings(false);
            });
          } else {
            setloadings(false);
          }
        } catch {
          setloadings(false);
        }
        setloadings(false);
      });
    }
    setloadings(false);
  };

  useEffect(async () => {
    if (!user) {
      return;
    }
    setname(user.displayName);
    setemail(user.email);
    setloadings(true);
    const docRef = doc(db, 'users', user.uid);
    const querySnapshot = await getDoc(docRef);
    console.log(querySnapshot.data());
    if (querySnapshot) {
      setcontact(querySnapshot.data().contactNumber);
      setloadings(false);
    }
    setloadings(true);
    try {
      const storageRef = ref(storage, 'user/' + user.uid + '/profile.jpg');
      if (storageRef) {
        await getDownloadURL(storageRef).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setuserimg(downloadURL);
          setloadings(false);
        });
      } else {
        setloadings(false);
      }
    } catch {
      setloadings(false);
    }
  }, [user]);
  return (
    <ProfLayout>
      <Box sx={{ ml: 3 }}>
        {loading || loadings ? <Loader /> : <></>}
        <Typography variant="h6">Edit Profile</Typography>
        <Grid container>
          <Grid item lg={8}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <label htmlFor="icon-button-file">
                <input
                  style={{ display: 'none' }}
                  accept="image/jpeg"
                  id="icon-button-file"
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setimage(e.target.files[0]);
                    imageUpdate(e.target.files[0]);
                  }}
                />
                <IconButton aria-label="upload picture" component="span">
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                      <Avatar
                        sx={{
                          width: 28,
                          height: 28,
                          bgcolor: '#2F4CD4',
                          border: `2px solid white`,
                        }}
                        alt="Remy Sharp"
                      >
                        <EditIcon style={{ height: '13px', width: '13px' }} />
                      </Avatar>
                    }
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={userimg}
                      sx={{
                        width: 130,
                        height: 130,
                        border: `3px solid white`,
                      }}
                    />
                  </Badge>
                </IconButton>
              </label>
            </Box>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Name"
                fullWidth
                required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
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
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
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
                disabled
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Contact Number"
                fullWidth
                value={contact}
                onChange={(e) => {
                  setcontact(e.target.value);
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
              <Box textAlign="center">
                <Button type="submit" variant="contained" sx={{ mt: 3 }}>
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4}></Grid>
        </Grid>
      </Box>
    </ProfLayout>
  );
};

export default index;
