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
} from '@mui/material';
import Layout from '../components/layout';
import MasterClassFeatured from '../components/MasterClass/MasterClassFeatured';

const masterclass = () => {
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
          <Typography variant="h5">Your Scheduled MasterClass</Typography>
          <Card sx={{ mt: 3 }}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  height="280px"
                  width="100%"
                  src="https://images.pexels.com/photos/3949100/pexels-photo-3949100.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="imga"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5">Every Week Saturday</Typography>
                  <Typography variant="h5">@ 8 : 00 pm</Typography>
                  <Box sx={{ mt: 3 }}>
                    <Button variant="contained">Join class</Button>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>

          <Typography variant="h5" sx={{ mt: 3 }}>
            MasterClass Featured
          </Typography>
          <MasterClassFeatured />
        </Container>
      </Grid>
    </Layout>
  );
};

export default masterclass;
