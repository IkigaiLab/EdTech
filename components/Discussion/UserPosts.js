import React, { useContext, useEffect, useState } from 'react';
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getAllPosts } from '../../Utils/features/allPostsSlice';
import { addLike } from '../../Utils/features/addLikeSlice';
import { addComment } from '../../Utils/features/addCommentSlice';
import { AuthContext } from '../../firebase/auth';
import moment from 'moment';
const Loader = () => <div className="loader"></div>;

const UserPosts = () => {
  const dispatch = useDispatch();
  const { posts, loadings } = useSelector((state) => state.posts);
  const router = useRouter();
  const [comment, setcomment] = useState('');
  const { user, loading } = useContext(AuthContext);
  const userid = router.query.userid;
  let like = false;

  useEffect(() => {
    if (!userid || user) {
      return;
    }
    dispatch(getAllPosts());
  }, [userid, user]);

  const checkLike = (items) => {
    if (items.userid === user?.uid) {
      like = true;
      return;
    }
  };
  const makeLikeFalse = (items) => {
    like = false;
  };

  const addingComment = async (postid) => {
    const userid = user.uid;
    var regExp = /[a-zA-Z]/i;
    if (regExp.test(comment) === true) {
      const res = await dispatch(addComment({ postid, userid, comment }));
      if (res) {
        setcomment('');
        dispatch(getAllPosts());
      }
    } else {
      alert('field should not be empty');
    }
  };

  const addingLike = async (postid) => {
    const userid = user.uid;
    const res = await dispatch(addLike({ postid, userid }));
    if (res) {
      dispatch(getAllPosts());
    }
  };

  return (
    <>
      {loadings ? <Loader /> : <></>}
      {posts.filter((post) => post.userid === userid).length > 0 ? (
        <>
          {posts
            ?.filter((post) => post.userid === userid)
            .slice(0, 3)
            .map((item, index) => (
              <Card sx={{ p: 3, mt: 3 }} key={index}>
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
                      flexDirection: 'row',
                    }}
                  >
                    <Grid
                      item
                      lg={11}
                      md={11}
                      xs={10}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {item.name} <br />
                      <Typography
                        sx={{ fontSize: '13px' }}
                        color="text.secondary"
                      >
                        {moment(new Date(item.date).toISOString()).fromNow()}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={1}
                      md={1}
                      xs={2}
                      sx={{ display: 'flex', justifyContent: 'flex-end' }}
                    ></Grid>
                  </Grid>
                </Grid>
                <Typography sx={{ mt: 2 }}>{item.text}</Typography>

                <Grid container sx={{ mt: 1 }}>
                  <Grid
                    item
                    lg={3}
                    md={3}
                    xs={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    {item.likes.map((items) => checkLike(items))}
                    {like && item.likes.length > 0 ? (
                      <IconButton
                        onClick={() => {
                          addingLike(item.id);
                        }}
                      >
                        <FavoriteIcon color="secondary" />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={() => {
                          addingLike(item.id);
                        }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    )}
                    {item.likes.map((items) => makeLikeFalse(items))}
                    <Typography> {item.likes.length} Likes</Typography>
                  </Grid>
                  <Grid
                    item
                    lg={9}
                    md={9}
                    xs={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <CommentIcon />
                    <Typography>
                      {' '}
                      &nbsp;{item.comments.length} comments
                    </Typography>
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
                      // value={comment}
                      onChange={(e) => {
                        setcomment(e.target.value);
                      }}
                      onBlur={(e) => {
                        e.target.value = '';
                        // setcomment('');
                      }}
                      onFocus={(e) => {
                        setcomment('');
                      }}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={() => {
                              addingComment(item.id);
                            }}
                          >
                            <SendIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                <br />
                {item.comments.map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      border: 'none',
                      boxShadow: 'none',
                      mt: 2,
                      pl: 4,
                      pr: 4,
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item lg={1} md={2} xs={3}>
                        <Avatar sx={{ width: 45, height: 45 }}></Avatar>
                      </Grid>
                      <Grid item lg={11} md={10} xs={9}>
                        {item.name}
                        <br />
                        <Typography
                          sx={{ fontSize: '13px' }}
                          color="text.secondary"
                        >
                          {moment(new Date(item.date).toISOString()).fromNow()}
                        </Typography>
                        <Typography>{item.text}</Typography>
                      </Grid>
                    </Grid>
                  </Card>
                ))}
              </Card>
            ))}
        </>
      ) : (
        <>
          <h6>No Posts Found</h6>
        </>
      )}
    </>
  );
};

export default UserPosts;
