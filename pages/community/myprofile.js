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
  IconButton,
} from '@mui/material';
///////
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

////////////
import Layout from '../../components/Community/layout';
import { AuthContext } from '../../firebase/auth';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { userfollow } from '../../Utils/features/community/myprofileSlice';
import { useDispatch, useSelector } from 'react-redux';
import MyPosts from '../../components/Discussion/MyPosts';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const myprofile = () => {
  const dispatch = useDispatch();
  const { userdatafollow, loadings } = useSelector(
    (state) => state.userdatafollow
  );
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch(userfollow(user?.uid));
  }, [user]);

  const [open, setOpen] = React.useState(false);
  const [openfollowers, setOpenfollowers] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  followers dialog handle
  const handleClickOpenfollowers = (scrollType) => () => {
    setOpenfollowers(true);
    setScroll(scrollType);
  };

  const handleClosefollowers = () => {
    setOpenfollowers(false);
  };

  return (
    <Layout>
      {/* following people check */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Following</Typography>
          <IconButton onClick={handleClose}>
            <CancelPresentationIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Grid container spacing={2} direction="row">
              {userdatafollow[0]?.followingdata.map((item, index) => (
                // <Typography>{item.userid}</Typography>
                <Grid item xs={12} lg={6} md={6} key={index}>
                  <Card
                    sx={{ p: 1, cursor: 'pointer' }}
                    onClick={() => {
                      router.push(`/community/userprofile/${item.id}`);
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        lg={6}
                        md={6}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          //   src={userimg}
                          sx={{
                            width: 50,
                            height: 50,
                            border: `3px solid white`,
                            cursor: 'pointer',
                          }}
                        >
                          {item.name.slice(0, 1)}
                        </Avatar>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={6}
                        sx={{
                          display: 'flex',
                          // justifyContent: 'center',
                          alignItems: 'center',
                          // flexDirection: 'column',
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
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      {/* following people check */}

      {/* followers people check */}
      <Dialog
        open={openfollowers}
        onClose={handleClosefollowers}
        fullWidth
        maxWidth="sm"
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Followers</Typography>
          <IconButton onClick={handleClosefollowers}>
            <CancelPresentationIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Grid container spacing={2} direction="row">
              {userdatafollow[0]?.followersdata.map((item, index) => (
                // <Typography>{item.userid}</Typography>
                <Grid item xs={12} lg={6} md={6} key={index}>
                  <Card
                    sx={{ p: 1, cursor: 'pointer' }}
                    onClick={() => {
                      router.push(`/community/userprofile/${item.id}`);
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        lg={6}
                        md={6}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          //   src={userimg}
                          sx={{
                            width: 50,
                            height: 50,
                            border: `3px solid white`,
                            cursor: 'pointer',
                          }}
                        >
                          {item.name.slice(0, 1)}
                        </Avatar>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={6}
                        sx={{
                          display: 'flex',
                          // justifyContent: 'center',
                          alignItems: 'center',
                          // flexDirection: 'column',
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
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      {/* followers people check */}

      <Card sx={{ mt: 4, borderRadius: '10px' }}>
        <CardContent>
          <Grid container>
            <Grid item lg={10} md={10} xs={12}>
              <Grid container>
                <Grid item lg={6} md={6}>
                  <Avatar
                    alt="Remy Sharp"
                    src={user?.photoURL}
                    sx={{
                      width: 110,
                      height: 110,
                      border: `3px solid white`,
                    }}
                  />
                  <Typography sx={{ mt: 2 }}>{user?.displayName}</Typography>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid
                      item
                      lg={6}
                      sx={{ cursor: 'pointer' }}
                      onClick={handleClickOpenfollowers('paper')}
                    >
                      <Typography>Followers</Typography>
                      <Typography>
                        {userdatafollow[0]?.followers.length}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      sx={{ cursor: 'pointer' }}
                      onClick={handleClickOpen('paper')}
                    >
                      <Typography>Following</Typography>
                      <Typography>
                        {userdatafollow[0]?.following.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={2} md={2} xs={12} sx={{ textAlign: 'right' }}>
              <Button
                onClick={() => {
                  router.push('/profile');
                }}
                variant="outlined"
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item lg={12}>
          <NextLink href="/community/myprofile" passHref>
            <Link
              sx={{
                textDecoration: 'none',
                color: 'gray',
              }}
              className="subactive"
            >
              Posts
            </Link>
          </NextLink>
        </Grid>
      </Grid>
      {/* <h6>No Posts Found</h6> */}
      <MyPosts />
    </Layout>
  );
};

export default myprofile;
