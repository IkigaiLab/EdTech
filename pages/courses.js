import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Carousel from 'react-multi-carousel';
import MobileDetect from 'mobile-detect';
import { getAllCourse } from '../Utils/database/course';
import { useRouter } from 'next/router';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Courses = ({ deviceType }) => {
  const [allcourse, setallcourse] = useState([]);
  const router = useRouter();
  const coursesall = async () => {
    const courseall = await getAllCourse();
    setallcourse(courseall);
    console.log(courseall);
  };
  useEffect(() => {
    coursesall();
  }, []);

  const enrolPage = (id) => {
    router.push(`/courseenrollment/${id}`);
  };

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
          <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
            Recommended For You
          </Typography>
          <Carousel
            deviceType={deviceType} // `deviceType` needs to be set
            infinite={true}
            autoPlay={true}
            ssr
            responsive={responsive}
          >
            {allcourse.map((item, index) => (
              <Card
                sx={{
                  ml: 2,
                  mr: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  // justifyContent: 'space-between',
                }}
                elevation={3}
                key={index}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
                />
                <CardContent>
                  <Grid container>
                    <Grid item xs={8}>
                      <Typography gutterBottom variant="h6" component="div">
                        {item.Course_Name}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                      <Typography gutterBottom variant="h6" component="div">
                        $200
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="text.secondary">
                    {item.Description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 'auto' }}>
                  <Button
                    size="small"
                    fullWidth
                    variant="outlined"
                    onClick={() => enrolPage(item.id)}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Carousel>
          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 3 }}>
            Trending Courses
          </Typography>
          <Carousel
            deviceType={deviceType} // `deviceType` needs to be set
            infinite={true}
            autoPlay={true}
            ssr
            responsive={responsive}
          >
            {allcourse.map((item, index) => (
              <Card
                sx={{
                  ml: 2,
                  mr: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  // justifyContent: 'space-between',
                }}
                key={index}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
                />
                <CardContent>
                  <Grid container>
                    <Grid item xs={8}>
                      <Typography gutterBottom variant="h6" component="div">
                        {item.Course_Name}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                      <Typography gutterBottom variant="h6" component="div">
                        $200
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="text.secondary">
                    {item.Description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 'auto' }}>
                  <Button size="small" fullWidth variant="outlined">
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Carousel>
        </Container>
      </Grid>
    </Layout>
  );
};
Courses.getInitialProps = ({ req }) => {
  let userAgent;
  let deviceType;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const md = new MobileDetect(userAgent);
  if (md.tablet()) {
    deviceType = 'tablet';
  } else if (md.mobile()) {
    deviceType = 'mobile';
  } else {
    deviceType = 'desktop';
  }
  return { deviceType };
};

export default Courses;
