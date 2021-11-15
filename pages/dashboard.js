import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../firebase/auth';
import {
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  Button,
  CardMedia,
} from '@mui/material';
import { useRouter } from 'next/router';
import Carousel from 'react-multi-carousel';
import MobileDetect from 'mobile-detect';
import Layout from '../components/layout';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const data = [
  {
    topic: 'Challenges Rank',
    value: '33',
  },
  {
    topic: 'Challenges Solved',
    value: '6',
  },
  {
    topic: 'Events Attended',
    value: '4',
  },
  {
    topic: 'Practice Problem Solved',
    value: '8',
  },
];

const Dashboard = ({ deviceType }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (loading) {
    } else {
      if (user) {
      } else {
        console.log('user not signed in');
        router.push('/signin');
      }
    }
  }, [loading]);

  return (
    <>
      {user ? (
        <>
          <Layout>
            <Grid
              container
              component="main"
              sx={{
                mt: 5,
              }}
            >
              <Container maxWidth="lg" sx={{ mb: 3 }}>
                <Typography variant="h5">Dashboard</Typography>
                <Grid container spacing={3} sx={{ mb: 2 }}>
                  {data.map((item, index) => (
                    <Grid item xs={12} md={3} lg={3} sx={{ mt: 3 }} key={index}>
                      <Card
                        key={index}
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          textAlign: 'center',
                          justifyContent: 'center',
                          p: 3,
                        }}
                      >
                        <Typography
                          variant="body2"
                          fontSize="18px"
                          color="text.secondary"
                        >
                          {item.topic}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {item.value}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Continue Learning
                </Typography>
                <Grid container spacing={3}>
                  <Grid item lg={8} md={12} xs={12}>
                    <Card sx={{ p: 4 }}>
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center',
                        }}
                      >
                        <Grid item lg={6} md={6} xs={12}>
                          <Typography>Data Science Track</Typography>
                          <Typography>Mentor: Anirudh</Typography>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                          <Box>
                            <Button variant="contained">Continue</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Card>

                    <Grid container sx={{ mt: 3, mb: 3 }}>
                      <Grid item lg={12} md={12} xs={12}>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                          Upcoming Events
                        </Typography>
                        <Carousel
                          deviceType={deviceType} // `deviceType` needs to be set
                          infinite={true}
                          autoPlay={true}
                          ssr
                          responsive={responsive}
                        >
                          {[1, 2, 3, 4].map((item, index) => (
                            <Card
                              sx={{
                                ml: 2,
                                mr: 2,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                // justifyContent: 'space-between',
                              }}
                              elevation={3}
                              key={index}
                            >
                              <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
                              />
                              <CardContent>
                                <Grid container>
                                  <Grid item xs={12}>
                                    <Typography
                                      gutterBottom
                                      variant="h6"
                                      component="div"
                                    >
                                      Name of Event
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Event Description
                                </Typography>
                              </CardContent>
                            </Card>
                          ))}
                        </Carousel>
                      </Grid>
                      <Grid item lg={12} md={12} xs={12} sx={{ mt: 3 }}>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                          Upcoming Challenges
                        </Typography>
                        <Carousel
                          deviceType={deviceType} // `deviceType` needs to be set
                          infinite={true}
                          autoPlay={true}
                          ssr
                          responsive={responsive}
                        >
                          {[1, 2, 3, 4].map((item, index) => (
                            <Card
                              sx={{
                                ml: 2,
                                mr: 2,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                // justifyContent: 'space-between',
                              }}
                              elevation={3}
                              key={index}
                            >
                              <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
                              />
                              <CardContent>
                                <Grid container>
                                  <Grid item xs={12}>
                                    <Typography
                                      gutterBottom
                                      variant="h6"
                                      component="div"
                                    >
                                      Name of the Challenge
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Challenges Description
                                </Typography>
                              </CardContent>
                            </Card>
                          ))}
                        </Carousel>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item lg={4} md={12} xs={12}>
                    <Card sx={{ p: 4 }}>
                      <Grid
                        container
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center',
                        }}
                      >
                        <Grid item lg={12} md={6} xs={12}>
                          <Typography variant="h6">
                            Weekly MasterClass
                          </Typography>
                          <Typography
                            variant="body2"
                            fontSize="15px"
                            color="text.secondary"
                          >
                            Every Saturday
                          </Typography>
                        </Grid>
                        <Grid item lg={12} md={6} xs={12}>
                          <Box sx={{ mt: 2 }}>
                            <Button variant="contained">Join </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Card>
                    <Card sx={{ mt: 3, p: 4 }}>
                      <Grid
                        container
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center',
                        }}
                      >
                        <Grid item lg={12} md={6} xs={12}>
                          <Typography variant="h6">Your Posts</Typography>
                          <Typography
                            variant="body2"
                            fontSize="15px"
                            color="text.secondary"
                          >
                            Discussion
                          </Typography>
                        </Grid>
                        <Grid item lg={12} md={6} xs={12}>
                          <Box sx={{ mt: 2 }}>
                            <Button variant="contained">View</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Layout>
        </>
      ) : (
        <h4>Loading......</h4>
      )}
    </>
  );
};

Dashboard.getInitialProps = ({ req }) => {
  let userAgent;
  let deviceType;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const md = new MobileDetect(userAgent);
  if (md.tablet()) {
    deviceType = 'tablet';
  } else if (md.mobile()) {
    deviceType = 'mobile';
  } else {
    deviceType = 'desktop';
  }
  return { deviceType };
};

export default Dashboard;
