import React, { useEffect } from 'react';
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
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Peopletofollow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <Card sx={{ p: 2, mt: 5, borderRadius: '10px' }}>
      <Grid container sx={{ mb: 2 }}>
        <Grid
          item
          lg={6}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography>People To Follow</Typography>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
          }}
        >
          <Button>view all</Button>
        </Grid>
      </Grid>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid container key={item}>
          <Grid item lg={3} md={3}>
            <Avatar
              alt="Remy Sharp"
              //   src={userimg}
              sx={{
                width: 60,
                height: 60,
                border: `3px solid white`,
              }}
            />
          </Grid>
          <Grid
            item
            lg={5}
            md={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography>Honey Singh</Typography>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'right',
            }}
          >
            <Button variant="contained">Follow</Button>
          </Grid>
        </Grid>
      ))}
    </Card>
  );
};

export default Peopletofollow;
