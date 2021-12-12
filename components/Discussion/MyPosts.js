import React, { useContext } from 'react';
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
  ListItemText,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../firebase/auth';

const MyPosts = () => {
  const { posts, loadings } = useSelector((state) => state.posts);
  const { user, loading } = useContext(AuthContext);

  return (
    <>
      {posts.filter((post) => post.userid === user?.uid).length > 0 ? (
        <>
          {posts.filter((post) => post.userid === user?.uid).length > 3 ? (
            <>
              {posts
                ?.filter((post) => post.userid === user?.uid)
                .slice(0, 3)
                .map((item, index) => (
                  <Card sx={{ p: 2, mt: 3 }} key={index}>
                    <Typography sx={{ mt: 2 }}>
                      {item.text.length > 35 ? (
                        <>{item.text.slice(0, 37)} .....</>
                      ) : (
                        <>{item.text}</>
                      )}
                    </Typography>
                    <Grid container sx={{ mt: 1 }}>
                      <Grid
                        item
                        lg={6}
                        md={12}
                        xs={6}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <FavoriteBorderIcon />
                        <Typography> {item.likes.length} Likes</Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={12}
                        xs={6}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <CommentIcon />
                        <Typography>
                          &nbsp;{item.comments.length} comments
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                ))}
            </>
          ) : (
            <>
              {posts
                ?.filter((post) => post.userid === user?.uid)
                .map((item, index) => (
                  <Card sx={{ p: 2, mt: 3 }} key={index}>
                    <Typography sx={{ mt: 2 }}>
                      {item.text.length > 35 ? (
                        <>{item.text.slice(0, 37)} .....</>
                      ) : (
                        <>{item.text}</>
                      )}
                    </Typography>
                    <Grid container sx={{ mt: 1 }}>
                      <Grid
                        item
                        lg={6}
                        md={12}
                        xs={6}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <FavoriteBorderIcon />
                        <Typography> {item.likes.length} Likes</Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={12}
                        xs={6}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <CommentIcon />
                        <Typography>
                          &nbsp;{item.comments.length} comments
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                ))}
            </>
          )}
        </>
      ) : (
        <>
          <Card sx={{ p: 3 }}>
            <Typography color="secondary">
              You dont have any post !!!!.
            </Typography>
          </Card>
          <Card sx={{ mt: 2, pt: 3 }}>
            <Typography variant="h6" sx={{ ml: 3 }}>
              Grow with Community
            </Typography>
            <ul>
              <li>
                <Typography>
                  Share your knowlege or ask question with community.
                </Typography>
              </li>
              <li>
                <Typography color="primary">
                  Post something and always stay connected with the community
                </Typography>
              </li>
            </ul>
          </Card>
        </>
      )}

      {/* {posts.filter((post) => post.userid === user?.uid).length > 0 ? (
        <Box textAlign="right" sx={{ mt: 2 }}>
          <Button variant="contained">view</Button>
        </Box>
      ) : (
        <></>
      )} */}
    </>
  );
};

export default MyPosts;
