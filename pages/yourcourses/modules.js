import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import Image from 'next/image';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getAllCourseTracking } from '../../Utils/database/course';

const Modules = () => {
  useEffect(() => {
    getAllCourseTracking();
  }, []);

  return (
    <Layout>
      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        <Container maxWidth="lg">
          <div
            style={{
              position: 'relative',
              textAlign: 'center',
              color: 'white',
              // backgroundColor: '#0E3B7D',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              // src="https://gstatic.com/classroom/themes/img_reachout.jpg"
              // src="https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              src="https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="course_img"
              height="250px"
              width="100%"
              style={{ borderRadius: '10px' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '26px',
              }}
            >
              <Typography variant="h4" component="h2">
                Welcome To Machine Learning
              </Typography>
            </div>
          </div>

          <Box sx={{ mb: 4 }}>
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <Card sx={{ mt: 3, borderRadius: '15px' }} key={value}>
                <Grid container>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      backgroundColor: '#2B275F',
                      color: 'white',
                      p: 2,
                    }}
                  >
                    <Container
                      sx={{
                        p: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        mt: 1,
                      }}
                    >
                      <Typography>Module {value}</Typography>
                      <Typography variant="h5" sx={{ mt: 1 }}>
                        Python Basics
                      </Typography>
                      <Typography sx={{ mt: 3 }}>View Topics {'>>'}</Typography>
                    </Container>
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sx={{
                      p: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Grid container sx={{ mt: 2 }}>
                      <Grid item xs={6}>
                        Topic
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <LinearProgress value={50} variant="determinate" />
                          <Typography textAlign="right">
                            5/10 Completed
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Typography variant="h5" sx={{ mt: 2 }}>
                      Topic Name
                    </Typography>
                    <Box textAlign="right" sx={{ mt: 4 }}>
                      <Button variant="contained" sx={{ borderRadius: '20px' }}>
                        Continue
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Box>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Modules;
