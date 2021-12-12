import React, { useContext, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../Utils/features/addPostSlice';
import { AuthContext } from '../firebase/auth';
import { getAllPosts } from '../Utils/features/allPostsSlice';

const discussion = () => {
  const dispatch = useDispatch();
  const { addpost, loadings } = useSelector((state) => state.post);
  const { user, loading } = useContext(AuthContext);
  const [text, settext] = useState('');

  const addingPost = async () => {
    const userid = user.uid;
    // console.log(userid, text);
    var regExp = /[a-zA-Z]/i;
    if (regExp.test(text) === true) {
      const res = await dispatch(addPost({ text, userid }));
      console.log(res);
      if (res) {
        dispatch(getAllPosts());
      }
      settext('');
    } else {
      alert('field should not be empty');
    }
  };

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
                <Grid container spacing={2} sx={{ pt: 2 }}>
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
                      value={text}
                      onChange={(e) => settext(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Box textAlign="right" sx={{ mt: 2 }}>
                  <Button variant="contained" onClick={addingPost}>
                    Post
                  </Button>
                </Box>
              </Card>

              <AllPosts />
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Your Latest Posts
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
