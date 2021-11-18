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
  Link as MuiLink,
} from '@mui/material';
import Layout from '../../components/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Events = ({ children }) => {
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
          <Typography variant="h5">Events</Typography>
          <Grid container sx={{ mt: 3, mb: 3 }}>
            <Grid item lg={3} md={3} xs={4}>
              <Link href="/events/upcoming" passHref>
                <MuiLink
                  sx={{
                    textDecoration: 'none',
                    color: 'gray',
                  }}
                  className={
                    router.pathname.startsWith('/events/upcoming')
                      ? 'subactive'
                      : ''
                  }
                >
                  Upcoming
                </MuiLink>
              </Link>
            </Grid>
            <Grid item lg={3} md={3} xs={4}>
              <Link href="/events/ongoing" passHref>
                <MuiLink
                  sx={{
                    textDecoration: 'none',
                    color: 'gray',
                  }}
                  className={
                    router.pathname.startsWith('/events/ongoing')
                      ? 'subactive'
                      : ''
                  }
                >
                  Ongoing
                </MuiLink>
              </Link>
            </Grid>
            <Grid item lg={6} md={6} xs={4}>
              <Link href="/events/completed" passHref>
                <MuiLink
                  sx={{
                    textDecoration: 'none',
                    color: 'gray',
                  }}
                  className={
                    router.pathname.startsWith('/events/completed')
                      ? 'subactive'
                      : ''
                  }
                >
                  Completed
                </MuiLink>
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mb: 2 }}>
            {children}
          </Grid>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Events;
