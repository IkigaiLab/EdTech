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
  Skeleton,
} from '@mui/material';
import Tracks from '../tracks/index';
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTracks } from '../../Utils/features/exploreTrackSlice';
const Loader = () => <div className="loader"></div>;

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

  const dispatch = useDispatch();
  const { tracks, loadings } = useSelector((state) => state.tracks);

  useEffect(() => {
    dispatch(getAllTracks());
  }, []);

  return (
    <Tracks>
      {loadings ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Typography sx={{ fontSize: 20, mt: 4 }}>Introducing</Typography>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Learning Tracks
          </Typography>
          <Typography sx={{ fontSize: 22, fontWeight: 'medium', mb: 3 }}>
            Our expert instructors believe that systematically designed paths
            can help you to master your skills & achieve your career goals. We
            have got your back! Learning Tracks are carefully crafted with a
            step by step guide that saves you the effort to find out which
            course fits you well, and in what sequence to maximize your learning
            experience. Happy learning!
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2, mb: 2 }}>
            {tracks?.map((item, index) => (
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
                      onClick={() => router.push(`/tracks/${item.id}`)}
                    >
                      Explore
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
        </>
      )}
    </Tracks>
  );
};

export default Exploretrack;
