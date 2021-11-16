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
} from '@mui/material';
import Tracks from '../index';
import { useRouter } from 'next/router';

const data = [
  {
    trackName: 'Data Scientist',
    trackDescription:
      ' Become a Data scientists, learn machine learning, deep learning ,natural language processing.',
    courses: 'Mentor Based Learning',
  },
];

const Mytrack = () => {
  const router = useRouter();
  return (
    <Tracks>
      <Grid container spacing={3} sx={{ mt: 2, mb: 2 }}>
        {data.map((item, index) => (
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
                  {item.trackName}
                </Typography>
                <Typography gutterBottom>{item.courses} Course</Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.trackDescription}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  marginTop: 'auto',
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    router.push('/tracks/mytrack/datascience');
                  }}
                >
                  Begin
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Tracks>
  );
};

export default Mytrack;
