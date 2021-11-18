import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Avatar,
  TextField,
  Box,
} from '@mui/material';
import Layout from '../components/layout';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AllPosts from '../components/Discussion/AllPosts';
import MyPosts from '../components/Discussion/MyPosts';

const discussion = () => {
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
          <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
            Discussion Forum
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={8} md={8} xs={12}>
              <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
                Create a Post
              </Typography>
              <Card sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    lg={1}
                    md={1}
                    xs={2}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar sx={{ width: 45, height: 45 }}>
                      <AssignmentIcon sx={{ width: 35, height: 35 }} />
                    </Avatar>
                  </Grid>
                  <Grid
                    item
                    lg={11}
                    md={11}
                    xs={10}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Write Something"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                </Grid>

                <Box textAlign="right" sx={{ mt: 2 }}>
                  <Button variant="contained">Post</Button>
                </Box>
              </Card>

              <AllPosts />
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Your Posts
              </Typography>
              <MyPosts />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Layout>
  );
};

export default discussion;
