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
import Layout from '../components/layout';

const mentorData = [
  {
    name: 'Anirudh',
    img: 'https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg',
    profession: 'Data Scientist',
  },
  {
    name: 'Veenit',
    img: 'https://image.freepik.com/free-photo/smiling-man-white-shirt-typing-text-message-scrolling-feed-social-network-using-smartphone-gray_171337-634.jpg',
    profession: 'ML Engineer',
  },
  {
    name: 'Gaurav',
    img: 'https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg',
    profession: 'Data Scientist',
  },
  {
    name: 'Tejas',
    img: 'https://image.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg',
    profession: 'Data Scientist',
  },
];

const Mentor = () => {
  return (
    <Layout>
      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Typography sx={{ fontSize: 27 }}>Our Experienced Mentors</Typography>
          <Grid container spacing={3} sx={{ mt: 1, mb: 2 }}>
            {mentorData.map((item, index) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                <Card
                  key={index}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="mentor image"
                    height="210"
                    image={item.img}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        background:
                          'linear-gradient(90deg, #00205B 0%, #84358E 100%)',
                        backgroundClip: 'text;',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography>{item.profession}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Mentor;
