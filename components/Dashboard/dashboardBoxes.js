import React from 'react';
import {
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  Button,
  CardMedia,
} from '@mui/material';

const data = [
  {
    topic: 'Challenges Rank',
    value: '33',
  },
  {
    topic: 'Challenges Solved',
    value: '6',
  },
  {
    topic: 'Events Attended',
    value: '4',
  },
  {
    topic: 'Practice Problem Solved',
    value: '8',
  },
];

const dashboardBoxes = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 2 }}>
      {data.map((item, index) => (
        <Grid item xs={12} md={3} lg={3} sx={{ mt: 3 }} key={index}>
          <Card
            key={index}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              justifyContent: 'center',
              p: 3,
            }}
          >
            <Typography variant="body2" fontSize="18px" color="text.secondary">
              {item.topic}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {item.value}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default dashboardBoxes;
