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

const PracticeProblems = ({ children }) => {
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
          <Typography variant="h5">Practice Problems</Typography>
          <Grid container sx={{ mt: 3, mb: 1 }}>
            <Grid item lg={3} md={3} xs={4}>
              <Link href="/practiceproblems/latest" passHref>
                <MuiLink
                  sx={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  Latest
                </MuiLink>
              </Link>
            </Grid>
            <Grid item lg={9} md={9} xs={8}>
              <Link href="/practiceproblems/all" passHref>
                <MuiLink
                  sx={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  All
                </MuiLink>
              </Link>
            </Grid>
          </Grid>
          {children}
        </Container>
      </Grid>
    </Layout>
  );
};

export default PracticeProblems;
