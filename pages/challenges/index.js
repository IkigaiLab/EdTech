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
import NextLink from 'next/link';

const leaderboardData = [
  {
    name: 'Rajeev',
    points: '999',
  },
  {
    name: 'Sourav',
    points: '490',
  },
  {
    name: 'Ankita',
    points: '390',
  },
  {
    name: 'Anirudh',
    points: '280',
  },
  {
    name: 'Sanjeev',
    points: '100',
  },
];

const myActivity = [
  {
    text: 'Challenges Solved',
    number: '8',
  },
  {
    text: 'Monthly Earned Pts.',
    number: '13',
  },
];

const Challenges = ({ children }) => {
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
                        color: 'black',
                      }}
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
                        color: 'black',
                      }}
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
                        color: 'black',
                      }}
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
              <Box
                sx={{ mt: 3, background: 'white', p: 3, borderRadius: '20px' }}
              >
                {leaderboardData.map((item, index) => (
                  <Grid
                    container
                    key={index}
                    sx={{
                      display: 'flex',
                      // justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Grid item lg={1} md={1} xs={1}>
                      <Typography variant="h6">{index + 1}</Typography>
                    </Grid>
                    <Grid item lg={2} md={2} xs={2}>
                      <Avatar sx={{ width: 24, height: 24 }}>
                        {item.name.charAt(0)}
                      </Avatar>
                    </Grid>
                    <Grid item lg={5} md={5} xs={5}>
                      {item.name}
                    </Grid>
                    <Grid item lg={3} md={3} xs={3} textAlign="right">
                      {item.points} Pts
                    </Grid>
                  </Grid>
                ))}
              </Box>
              <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
                My Activity
              </Typography>
              <Grid
                container
                sx={{
                  display: 'flex',
                  // justifyContent: 'center',
                  alignItems: 'center',
                  p: 2,
                  background: 'white',
                  borderRadius: '20px',
                }}
              >
                <Grid item lg={6} md={6} xs={6}>
                  Your Rank
                </Grid>
                <Grid item lg={6} md={6} xs={6} textAlign="right">
                  23
                </Grid>
              </Grid>

              <Grid
                container
                sx={{
                  display: 'flex',
                  // justifyContent: 'center',
                  alignItems: 'center',
                  p: 2,
                  mt: 1,
                  background: 'white',
                  borderRadius: '20px',
                }}
              >
                <Grid item lg={6} md={6} xs={6}>
                  Total Points
                </Grid>
                <Grid item lg={6} md={6} xs={6} textAlign="right">
                  44 Pts
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
                {myActivity.map((item, index) => (
                  <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                    <Card
                      key={index}
                      sx={{
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        borderRadius: '20px',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                      }}
                    >
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 15 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {item.text}
                        </Typography>
                        <Typography variant="h6">{item.number}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Challenges;
