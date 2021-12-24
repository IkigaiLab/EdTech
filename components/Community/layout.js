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
import MainLayout from '../layout';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import People from './peopletofollow';

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <MainLayout>
      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Typography variant="h5">Community</Typography>
          <Grid container spacing={3}>
            <Grid item lg={8} md={7}>
              <Grid container sx={{ mt: 3 }}>
                <Grid item lg={3} md={3} xs={4}>
                  <NextLink href="/community/myprofile" passHref>
                    <Link
                      sx={{
                        textDecoration: 'none',
                        color: 'gray',
                      }}
                      className={
                        router.pathname.startsWith('/community/myprofile')
                          ? 'subactive'
                          : ''
                      }
                    >
                      MyProfile
                    </Link>
                  </NextLink>
                </Grid>
                <Grid item lg={3} md={3} xs={4}>
                  <NextLink href="/community/socialfeed" passHref>
                    <Link
                      sx={{
                        textDecoration: 'none',
                        color: 'gray',
                      }}
                      className={
                        router.pathname.startsWith('/community/socialfeed')
                          ? 'subactive'
                          : ''
                      }
                    >
                      Social Feed
                    </Link>
                  </NextLink>
                </Grid>
                <Grid item lg={6} md={6} xs={4}>
                  <NextLink href="/community/postcommunity" passHref>
                    <Link
                      sx={{
                        textDecoration: 'none',
                        color: 'gray',
                      }}
                      className={
                        router.pathname.startsWith('/community/postcommunity')
                          ? 'subactive'
                          : ''
                      }
                    >
                      Community
                    </Link>
                  </NextLink>
                </Grid>
              </Grid>
              {children}
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

export default Layout;
