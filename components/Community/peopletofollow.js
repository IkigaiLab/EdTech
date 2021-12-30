import React, { useContext, useEffect } from 'react';
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
  Avatar,
  Snackbar,
  Alert,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../firebase/auth';
import {
  followbuttonpeople,
  tofollowpeople,
} from '../../Utils/features/community/peopletofollowslice';
import { userfollow } from '../../Utils/features/community/myprofileSlice';
import { useRouter } from 'next/router';

const Peopletofollow = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { followpeople, loadings } = useSelector((state) => state.followpeople);
  const { user, loading } = useContext(AuthContext);

  const [open, setOpen] = React.useState(false);

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
    dispatch(tofollowpeople(user?.uid));
  }, [user]);

  const handlefollow = async (followuserid) => {
    const userid = user?.uid;
    const res = await dispatch(followbuttonpeople({ userid, followuserid }));
    if (res) {
      setOpen(true);
      const result = await dispatch(tofollowpeople(user?.uid));
      if (result) {
        dispatch(userfollow(user?.uid));
      }
    }
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          variant="filled"
          severity="success"
          sx={{ width: '100%' }}
        >
          Successfully followed User!
        </Alert>
      </Snackbar>
      <Card
        sx={{
          p: 2,
          mt: 3,
          borderRadius: '10px',
        }}
      >
        <Grid container sx={{ mb: 2 }}>
          <Grid
            item
            lg={6}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography>People To Follow</Typography>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'right',
            }}
          >
            <Button>view all</Button>
          </Grid>
        </Grid>
        {followpeople.length > 0 ? (
          <>
            {followpeople?.map((item, index) => (
              <Grid container key={index}>
                <Grid item lg={3} md={3}>
                  <Avatar
                    alt="Remy Sharp"
                    //   src={userimg}
                    sx={{
                      width: 50,
                      height: 50,
                      border: `3px solid white`,
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      router.push(`/community/userprofile/${item.userid}`);
                    }}
                  >
                    {item.name.slice(0, 1)}
                  </Avatar>
                </Grid>
                <Grid
                  item
                  lg={5}
                  md={5}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography>
                    {item.name.length > 13 ? (
                      <>{item.name.slice(0, 12) + '...'}</>
                    ) : (
                      <>{item.name}</>
                    )}
                  </Typography>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right',
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      handlefollow(item.userid);
                    }}
                  >
                    Follow
                  </Button>
                </Grid>
              </Grid>
            ))}
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2 }}></Typography>
            <h6>No Recommendations</h6>
          </>
        )}
      </Card>
    </>
  );
};

export default Peopletofollow;
