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
import Tracks from '../tracks/index';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/router';

const data = [
  {
    trackName: 'ML Engineer',
    trackDescription:
      'Become a Machine Learning Engineer, learn machine learning by building cool projects',
    courses: 'Mentor Based Learning',
    image: '/machinelearning.jpg',
    path: '/tracks/ml-engineer',
  },
  {
    trackName: 'Data Scientist',
    trackDescription:
      ' Become a Data scientists, learn machine learning, deep learning ,natural language processing.',
    courses: 'Mentor Based Learning',
    image: '/datascience.jpg',
    path: '/tracks/data-science',
  },
];

const learningTrackBenefits = [
  {
    benefit: 'Mentor Based Learning',
  },
  {
    benefit: 'Community Learning',
  },
  {
    benefit: 'Masterclasses',
  },
  {
    benefit: 'Events',
  },
  {
    benefit: 'Challenges',
  },
];

const Exploretrack = () => {
  const router = useRouter();

  return (
    <Tracks>
      <Typography sx={{ fontSize: 20, mt: 4 }}>Introducing</Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Learning Tracks
      </Typography>
      <Typography sx={{ fontSize: 22, fontWeight: 'medium', mb: 3 }}>
        Our expert instructors believe that systematically designed paths can
        help you to master your skills & achieve your career goals. We have got
        your back! Learning Tracks are carefully crafted with a step by step
        guide that saves you the effort to find out which course fits you well,
        and in what sequence to maximize your learning experience. Happy
        learning!
      </Typography>
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
                <Typography gutterBottom>{item.courses}</Typography>
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
                    src={item.image}
                    sx={{ width: 70, height: 70, boxShadow: 3 }}
                  />
                </Box>
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
                  onClick={() => router.push(item.path)}
                >
                  Start
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" sx={{ mt: 3 }}>
        Benefits
      </Typography>
      <Box sx={{ mt: 2, mb: 2 }}>
        {learningTrackBenefits.map((item, index) => (
          <Typography variant="h6" component="div" key={index}>
            <li>{item.benefit}</li>
          </Typography>
        ))}
      </Box>
    </Tracks>
  );
};

export default Exploretrack;
