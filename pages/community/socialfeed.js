import React, { useContext, useEffect } from 'react';
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
  Avatar,
  TextField,
  IconButton,
} from '@mui/material';
import Layout from '../../components/Community/layout';
import NextLink from 'next/link';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { AuthContext } from '../../firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getpersonalisePosts } from '../../Utils/features/community/socialfeedSlice';
import moment from 'moment';
import { addComment } from '../../Utils/features/addCommentSlice';
import { addLike } from '../../Utils/features/addLikeSlice';
const Loader = () => <div className="loader"></div>;

const Socialfeed = () => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  let like = false;
  const router = useRouter();
  const { personaliseposts, loadings } = useSelector(
    (state) => state.personaliseposts
  );

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch(getpersonalisePosts(user?.uid));
  }, [user]);

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
        dispatch(getpersonalisePosts(user?.uid));
      }
    } else {
      alert('field should not be empty');
    }
  };

  const addingLike = async (postid) => {
    const userid = user.uid;
    const res = await dispatch(addLike({ postid, userid }));
    if (res) {
      dispatch(getpersonalisePosts(user?.uid));
    }
  };

  return (
    <Layout>
      {loadings ? (
        <>
          <Loader />
        </>
      ) : (
        <></>
      )}
      {personaliseposts.length > 0 ? (
        <>
          {personaliseposts?.map((item, index) => (
            <Card sx={{ p: 3, mt: 4 }} key={index}>
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
                    {item?.name} <br />
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
                  >
                    {item?.userid === user?.uid ? (
                      <IconButton
                        onClick={() => {
                          deletingPost(item.id);
                        }}
                      >
                        <DeleteIcon color="redish" />
                      </IconButton>
                    ) : (
                      <></>
                    )}
                  </Grid>
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
                  {item?.likes?.map((items) => checkLike(items))}
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
                  {item?.likes?.map((items) => makeLikeFalse(items))}
                  <Typography> {item?.likes?.length} Likes</Typography>
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
                    &nbsp;{item?.comments?.length} comments
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
                    onChange={(e) => {
                      setcomment(e.target.value);
                    }}
                    onBlur={(e) => {
                      e.target.value = '';
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
              {item?.comments?.map((item, index) => (
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
                      {item?.name}
                      <br />
                      <Typography
                        sx={{ fontSize: '13px' }}
                        color="text.secondary"
                      >
                        {moment(new Date(item.date).toISOString()).fromNow()}
                      </Typography>
                      <Typography>{item?.text}</Typography>
                    </Grid>
                  </Grid>
                </Card>
              ))}
            </Card>
          ))}
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2 }}></Typography>
          <h5>No Post : Follow Someone</h5>
        </>
      )}
    </Layout>
  );
};

export default Socialfeed;
