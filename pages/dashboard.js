import React from 'react';
import {
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  ListItem,
  Container,
  List,
  CardContent,
  CardActions,
} from '@mui/material';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Dashboard = () => {
  const router = useRouter();
  return (
    <Layout>
      <div>
        <Grid
          container
          component="main"
          sx={{
            minHeight: '100vh',
            // backgroundColor: '#2F4CD4',
            // borderRadius: '20px 45px 45px 20px',
          }}
        >
          <Grid
            container
            item
            // component={Paper}
            // elevation={6}
            // square
            // sx={{
            //   backgroundColor: '#F5F6FA',
            //   borderRadius: '20px ',
            // }}
          >
            <Container>
              <Grid container spacing={3} item>
                <Grid item md={8} sm={12}>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      borderBottom: '1.3px solid gray',
                      mt: 2,
                      display: 'inline-block',
                    }}
                  >
                    {/*  eslint-disable-next-line react/no-unescaped-entities */}
                    Today's Activity
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 2 }}>
                    Data Science BootCamp
                  </Typography>

                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    {[1, 2, 3, 4].map((value) => (
                      <Grid item xs={12} sm={12} lg={12} key={value}>
                        <Card key={value}>
                          <Grid container sx={{ p: 3 }} alignItems="center">
                            <Grid item xs={6} lg={9} md={8}>
                              <Typography>Lesson 2 - Python Basics</Typography>
                            </Grid>
                            <Grid
                              item
                              container
                              sx={{
                                display: {
                                  xs: 'none',
                                  sm: 'none',
                                  md: 'block',
                                },
                              }}
                              xs={6}
                              lg={3}
                              md={4}
                            >
                              <Button variant="contained">
                                view all details
                              </Button>
                            </Grid>
                            <Grid
                              item
                              container
                              sx={{
                                display: {
                                  xs: 'block',
                                  sm: 'block',
                                  md: 'none',
                                },
                              }}
                              textAlign="right"
                              xs={6}
                              lg={3}
                              md={4}
                            >
                              <Button variant="contained">view detail</Button>
                            </Grid>
                          </Grid>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

                  <Box
                    textAlign="center"
                    sx={{
                      mt: 3,
                    }}
                  >
                    <Button variant="contained">show more</Button>
                  </Box>
                  <Typography variant="h5" sx={{ mt: 4 }}>
                    Practice Problems
                  </Typography>
                  <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                    {[1, 2, 3, 4, 5, 6].map((value) => (
                      <Grid item xs={12} sm={12} md={6} lg={4} key={value}>
                        <Card key={value}>
                          <CardContent>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                              benevolent
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              adjective
                            </Typography>
                            <Typography variant="body2">
                              well meaning and kindly.
                              <br />
                              {'"a benevolent smile"'}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Learn More</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item md={4} sm={12}>
                  <Grid container spacing={6} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={12} lg={12} sx={{ mt: 4 }}>
                      <Card>
                        <CardContent>
                          <Typography
                            variant="h5"
                            component="div"
                            sx={{ mb: 1.5 }}
                          >
                            Challanges
                          </Typography>
                          <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                        <hr style={{ maxWidth: '80%' }} />
                        <CardContent>
                          <Typography
                            variant="h5"
                            component="div"
                            sx={{ mb: 1.5 }}
                          >
                            MasterClass
                          </Typography>
                          <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                      <Card>
                        <CardContent>
                          <Typography
                            variant="h5"
                            component="div"
                            sx={{ mb: 1.5 }}
                          >
                            Learning Associate
                          </Typography>
                          <Button
                            fullWidth
                            size="medium"
                            variant="contained"
                            sx={{ mt: 3 }}
                          >
                            Ask a Doubt
                          </Button>
                          <Button
                            fullWidth
                            size="medium"
                            variant="contained"
                            sx={{ mt: 2 }}
                          >
                            Schedule A Session
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Dashboard;
