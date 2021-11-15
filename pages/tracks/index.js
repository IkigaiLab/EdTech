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
import NextLink from 'next/link';
import Layout from '../../components/layout';

const Tracks = ({ children }) => {
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
          <Grid container sx={{ mt: 3 }}>
            <Grid item lg={2} md={4} xs={6}>
              <NextLink href="/tracks/mytrack" passHref>
                <Link
                  sx={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  My Track
                </Link>
              </NextLink>
            </Grid>
            <Grid item lg={10} md={8} xs={6}>
              <NextLink href="/tracks/exploretrack" passHref>
                <Link
                  sx={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  Explore Track
                </Link>
              </NextLink>
            </Grid>
          </Grid>
          {children}
        </Container>
      </Grid>
    </Layout>
  );
};

export default Tracks;
