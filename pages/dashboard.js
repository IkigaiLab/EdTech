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
import Layout from '../components/layout';
import DashboardBoxes from '../components/Dashboard/dashboardBoxes';
import ContinueLearning from '../components/Dashboard/ContinueLearning';
import UpcomingEvents from '../components/Dashboard/UpcomingEvents';
import UpcomingChallenges from '../components/Dashboard/UpcomingChallenges';
import Sidebar from '../components/Dashboard/Sidebar';

const Dashboard = () => {
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
                <DashboardBoxes />
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Continue Learning
                </Typography>
                <Grid container spacing={3}>
                  <Grid item lg={8} md={12} xs={12}>
                    <ContinueLearning />

                    <Grid container sx={{ mt: 3, mb: 3 }}>
                      <UpcomingEvents />
                      <UpcomingChallenges />
                    </Grid>
                  </Grid>
                  <Grid item lg={4} md={12} xs={12}>
                    <Sidebar />
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

export default Dashboard;
