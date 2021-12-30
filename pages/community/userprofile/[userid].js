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
} from '@mui/material';
import MainLayout from '../../../components/layout';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import People from '../../../components/Community/peopletofollow';
import { useDispatch, useSelector } from 'react-redux';
import {
  followunfollowpeople,
  userdataprofile,
} from '../../../Utils/features/community/userprofileSlice';
import UserPosts from '../../../components/Discussion/UserPosts';
import { userfollow } from '../../../Utils/features/community/myprofileSlice';
import { AuthContext } from '../../../firebase/auth';
import { tofollowpeople } from '../../../Utils/features/community/peopletofollowslice';
const Loader = () => <div className="loader"></div>;

const UserProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const otheruserid = router.query.userid;

  const { userprodata, loadings } = useSelector((state) => state.userprodata);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!otheruserid || !user) {
      return;
    }
    dispatch(userdataprofile(otheruserid));
  }, [otheruserid, user]);

  const followunfollow = async () => {
    const followuserid = userprodata[0]?.id;
    const userid = user?.uid;
    const res = await dispatch(followunfollowpeople({ userid, followuserid }));
    if (res) {
      dispatch(userdataprofile(otheruserid));
      const result = await dispatch(tofollowpeople(user?.uid));
    }
  };

  const checkfollowing = (followers) => {
    let match = false;
    if (!followers) {
      return;
    }
    console.log(followers);
    if (followers.length > 0) {
      for (const id of followers) {
        if (id?.userid === user?.uid) {
          match = true;
        }
      }
    }
    if (match === true) {
      return 'unfollow';
    } else {
      return 'follow';
    }
  };

  return (
    <MainLayout>
      {/* {loadings ? <Loader /> : <></>} */}
      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Typography variant="h6">Userprofile</Typography>
          <Grid container spacing={3}>
            <Grid item lg={8} md={7}>
              <Card sx={{ mt: 3, borderRadius: '10px' }}>
                <CardContent>
                  <Grid container>
                    <Grid item lg={10} md={9} xs={12}>
                      <Grid container>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            // src={user?.photoURL}
                            sx={{
                              width: 110,
                              height: 110,
                              border: `3px solid white`,
                            }}
                          />
                          <Typography sx={{ mt: 2, pl: 1 }}>
                            {userprodata[0]?.name}
                          </Typography>
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
                            <Grid item lg={6}>
                              <Typography>Followers</Typography>
                              <Typography>
                                {userprodata[0]?.followers.length}
                              </Typography>
                            </Grid>
                            <Grid item lg={6}>
                              <Typography>Following</Typography>
                              <Typography>
                                {userprodata[0]?.following.length}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      lg={2}
                      md={3}
                      xs={12}
                      sx={{ textAlign: 'right' }}
                    >
                      <Button
                        onClick={() => {
                          followunfollow();
                        }}
                        variant="outlined"
                      >
                        {checkfollowing(userprodata[0]?.followers)}
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
              <UserPosts />
            </Grid>
            <Grid item lg={4} md={5}>
              <People />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </MainLayout>
  );
};

export default UserProfile;
