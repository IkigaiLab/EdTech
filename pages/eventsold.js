import React from 'react';
import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import Layout from '../components/layout';

const Events = () => {
  return (
    <Layout>
      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Typography variant="h5">Upcoming Events</Typography>
              {[1, 2].map((index) => (
                <Card sx={{ minWidth: 275, mt: 3 }} key={index}>
                  <Grid container>
                    <Grid item lg={4} md={4} xs={12}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=727&q=80"
                      />
                    </Grid>
                    <Grid
                      item
                      lg={5}
                      md={5}
                      xs={12}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      Data Science Webinar: A Gentle Introduction
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      md={3}
                      xs={12}
                      sx={{
                        background: '#16333C',
                        // background: '#' + Math.floor(Math.random() * 16777210).toString(16),
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      24 Nov
                      <Button variant="contained">Add To Calender</Button>
                    </Grid>
                  </Grid>
                </Card>
              ))}

              <Typography variant="h5" sx={{ mt: 3 }}>
                Events
              </Typography>
              {[1, 2, 3, 4].map((index) => (
                <Card sx={{ minWidth: 275, mt: 3 }} key={index}>
                  <Grid container>
                    <Grid item lg={4} md={4} xs={12}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=727&q=80"
                      />
                    </Grid>
                    <Grid
                      item
                      lg={5}
                      md={5}
                      xs={12}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      Data Science Webinar: A Gentle Introduction
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      md={3}
                      xs={12}
                      sx={{
                        background: '#16333C',
                        // background: '#' + Math.floor(Math.random() * 16777210).toString(16),
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      24 Nov
                    </Grid>
                  </Grid>
                </Card>
              ))}
              <Box sx={{ textAlign: 'center' }}>
                <Button variant="contained" sx={{ mt: 3 }}>
                  Show more
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h5">Featured Events</Typography>
              {[1, 2].map((index) => (
                <Card sx={{ position: 'relative', mt: 3 }} key={index}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://images.pexels.com/photos/6963061/pexels-photo-6963061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Contemplative Reptile"
                  />
                  <Typography
                    gutterBottom
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      //   width: '90%',
                      transform: 'translateX(-50%) translateY(-50%)',
                      display: 'flex',
                      textAlign: 'center',
                      alignContent: 'center',
                      color: 'white',
                      background: 'rgba(0, 0, 0, 0.5)',
                      fontSize: '20px',
                    }}
                  >
                    Learn data science step by step
                    <br />
                    25/11/2021
                  </Typography>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Events;
