import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../firebase/auth';
import { Grid, Typography, Container } from '@mui/material';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import RecentCourse from '../components/Dashboard/recentCourse';
import PracticeProblems from '../components/Dashboard/practiceProblems';
import ChallengesMasterclass from '../components/Dashboard/challengesMasterclass';
import LearningAssocites from '../components/Dashboard/learningAssocites';

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
            <div>
              <Grid
                container
                component="main"
                sx={{
                  minHeight: '100vh',
                  mt: 2,
                }}
              >
                <Grid container item>
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

                        <RecentCourse />
                        <PracticeProblems />
                      </Grid>
                      <Grid item md={4} sm={12}>
                        <Grid container spacing={6} sx={{ mb: 4 }}>
                          <Grid item xs={12} sm={12} lg={12} sx={{ mt: 4 }}>
                            <ChallengesMasterclass />
                          </Grid>

                          <Grid item xs={12} sm={12} lg={12}>
                            <LearningAssocites />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
              </Grid>
            </div>
          </Layout>
        </>
      ) : (
        <h4>Loading......</h4>
      )}
    </>
  );
};

export default Dashboard;
