import React, { useState, useEffect, useContext } from 'react';
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
import Tracks from '../index';
import { useRouter } from 'next/router';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../../firebase/auth';
import { getAllMyTracks } from '../../../Utils/features/myTrackSlice';
const Loader = () => <div className="loader"></div>;

const Mytrack = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, loading } = useContext(AuthContext);

  const { allmytracks, loadings } = useSelector((state) => state.allmytracks);

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch(getAllMyTracks(user.uid));
  }, [user]);

  return (
    <Tracks>
      {loadings ? (
        <>
          {' '}
          <Loader />
        </>
      ) : allmytracks.length === 0 ? (
        <>
          <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
            You Don't have any track....
            <Button onClick={() => router.push('/tracks/exploretrack')}>
              Explore Some
            </Button>
          </Typography>
        </>
      ) : (
        <Grid container spacing={3} sx={{ mt: 2, mb: 2 }}>
          {allmytracks?.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
              <Card
                key={index}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent
                  sx={{
                    background:
                      'linear-gradient(290deg, #2F4CD4 10.36%, #3355ea 95.36%)',
                    color: 'white',
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography gutterBottom>Mentor Based Learning</Typography>
                </CardContent>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      marginTop: '-60px',
                      marginRight: '15px',
                    }}
                  >
                    <Avatar
                      src="/datascience.jpg"
                      sx={{ width: 70, height: 70, boxShadow: 3 }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    marginTop: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    ml: 1,
                    mr: 1,
                  }}
                >
                  <Typography sx={{ color: 'red' }}>
                    Duration: {item.duration}
                  </Typography>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => router.push(`/tracks/mytrack/${item.id}`)}
                  >
                    Continue
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Tracks>
  );
};

export default Mytrack;
