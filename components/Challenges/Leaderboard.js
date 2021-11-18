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
  Link,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';

const leaderboardData = [
  {
    name: 'Rajeev',
    points: '999',
  },
  {
    name: 'Sourav',
    points: '490',
  },
  {
    name: 'Ankita',
    points: '390',
  },
  {
    name: 'Anirudh',
    points: '280',
  },
  {
    name: 'Sanjeev',
    points: '100',
  },
];

const Leaderboard = () => {
  return (
    <Box sx={{ mt: 3, background: 'white', p: 3, borderRadius: '20px' }}>
      {leaderboardData.map((item, index) => (
        <Grid
          container
          key={index}
          sx={{
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item lg={1} md={1} xs={1}>
            <Typography variant="h6">{index + 1}</Typography>
          </Grid>
          <Grid item lg={2} md={2} xs={2}>
            <Avatar sx={{ width: 24, height: 24 }}>
              {item.name.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item lg={5} md={5} xs={5}>
            {item.name}
          </Grid>
          <Grid item lg={3} md={3} xs={3} textAlign="right">
            {item.points} Pts
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Leaderboard;
