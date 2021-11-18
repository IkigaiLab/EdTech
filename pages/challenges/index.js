import React from 'react';
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
import Layout from '../../components/layout';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Leaderboard from '../../components/Challenges/Leaderboard';
import MyActivity from '../../components/Challenges/MyActivity';

const Challenges = ({ children }) => {
  const router = useRouter();
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
            <Grid item lg={8} md={12} xs={12}>
              <Typography variant="h5">Challenges</Typography>
              <Grid container sx={{ mt: 3 }}>
                <Grid item lg={3} md={3} xs={4}>
                  <NextLink href="/challenges/upcoming" passHref>
                    <Link
                      sx={{
                        textDecoration: 'none',
                        color: 'gray',
                      }}
                      className={
                        router.pathname.startsWith('/challenges/upcoming')
                          ? 'subactive'
                          : ''
                      }
                    >
                      Upcoming
                    </Link>
                  </NextLink>
                </Grid>
                <Grid item lg={3} md={3} xs={4}>
                  <NextLink href="/challenges/ongoing" passHref>
                    <Link
                      sx={{
                        textDecoration: 'none',
                        color: 'gray',
                      }}
                      className={
                        router.pathname.startsWith('/challenges/ongoing')
                          ? 'subactive'
                          : ''
                      }
                    >
                      Ongoing
                    </Link>
                  </NextLink>
                </Grid>
                <Grid item lg={6} md={6} xs={4}>
                  <NextLink href="/challenges/completed" passHref>
                    <Link
                      sx={{
                        textDecoration: 'none',
                        color: 'gray',
                      }}
                      className={
                        router.pathname.startsWith('/challenges/completed')
                          ? 'subactive'
                          : ''
                      }
                    >
                      Completed
                    </Link>
                  </NextLink>
                </Grid>
              </Grid>
              {children}
            </Grid>
            <Grid item lg={4} md={12} xs={12}>
              <Typography variant="h5">Leaderboard</Typography>
              <Leaderboard />
              <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
                My Activity
              </Typography>

              <MyActivity />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Challenges;
