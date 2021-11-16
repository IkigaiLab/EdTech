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
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

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

              <Card sx={{ p: 3, mt: 3 }}>
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
                    <Avatar sx={{ width: 45, height: 45 }}></Avatar>
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
                      //   alignItems: 'center',
                    }}
                  >
                    Gaurav Thakur <br />
                    <Typography
                      sx={{ fontSize: '13px' }}
                      color="text.secondary"
                    >
                      2 hours ago
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ mt: 2 }}>
                  Data Science Most Important part is.....
                </Typography>

                <Grid container sx={{ mt: 1 }}>
                  <Grid
                    item
                    lg={3}
                    md={3}
                    xs={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <IconButton aria-label="add to favorites">
                      <FavoriteBorderIcon />
                    </IconButton>
                    <Typography> 2 Likes</Typography>
                  </Grid>
                  <Grid
                    item
                    lg={9}
                    md={9}
                    xs={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <CommentIcon />
                    <Typography> &nbsp;0 comments</Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
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
                    <Avatar sx={{ width: 45, height: 45 }}></Avatar>
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
                      label="Add Comment"
                      variant="outlined"
                      fullWidth
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <IconButton>
                            <SendIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ p: 4 }}>
                  <Grid
                    item
                    lg={1}
                    md={2}
                    xs={3}
                    sx={
                      {
                        // display: 'flex',
                        // flexDirection: 'column',
                        // justifyContent: 'center',
                        // alignItems: 'center',
                      }
                    }
                  >
                    <Avatar sx={{ width: 45, height: 45 }}></Avatar>
                  </Grid>
                  <Grid
                    item
                    lg={11}
                    md={10}
                    xs={9}
                    sx={
                      {
                        // display: 'flex',
                        // flexDirection: 'column',
                        // justifyContent: 'center',
                        //   alignItems: 'center',
                      }
                    }
                  >
                    Himesh Sharma <br />
                    <Typography
                      sx={{ fontSize: '13px' }}
                      color="text.secondary"
                    >
                      2 hours ago
                    </Typography>
                    <Typography>hey whats up</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Your Posts
              </Typography>
              {[1, 2].map((index) => (
                <Card sx={{ p: 2, mt: 3 }} key={index}>
                  <Typography sx={{ mt: 2 }}>
                    Data Science Most Important part is.....
                  </Typography>

                  <Grid container sx={{ mt: 1 }}>
                    <Grid
                      item
                      lg={6}
                      md={12}
                      xs={6}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <IconButton aria-label="add to favorites">
                        <FavoriteBorderIcon />
                      </IconButton>
                      <Typography> 5 Likes</Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={12}
                      xs={6}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <IconButton aria-label="read comments">
                        <CommentIcon />
                      </IconButton>
                      <Typography> &nbsp;3 comments</Typography>
                    </Grid>
                  </Grid>
                </Card>
              ))}

              <Box textAlign="right" sx={{ mt: 2 }}>
                <Button variant="contained">view all</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Layout>
  );
};

export default discussion;
