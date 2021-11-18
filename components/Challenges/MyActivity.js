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

const myActivity = [
  {
    text: 'Challenges Solved',
    number: '8',
  },
  {
    text: 'Monthly Earned Pts.',
    number: '13',
  },
];

const MyActivity = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          background: 'white',
          borderRadius: '20px',
        }}
      >
        <Grid item lg={6} md={6} xs={6}>
          Your Rank
        </Grid>
        <Grid item lg={6} md={6} xs={6} textAlign="right">
          23
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          mt: 1,
          background: 'white',
          borderRadius: '20px',
        }}
      >
        <Grid item lg={6} md={6} xs={6}>
          Total Points
        </Grid>
        <Grid item lg={6} md={6} xs={6} textAlign="right">
          44 Pts
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
        {myActivity.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
            <Card
              key={index}
              sx={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                borderRadius: '20px',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 15 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.text}
                </Typography>
                <Typography variant="h6">{item.number}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyActivity;
