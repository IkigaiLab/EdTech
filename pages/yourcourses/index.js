import React, { useEffect, useState, useContext } from 'react';
import Layout from '../../components/layout';
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
} from '@mui/material';

import { getmyCourse } from '../../Utils/database/course';
import { AuthContext } from '../../firebase/auth';
import { useRouter } from 'next/router';

const YourCourses = () => {
  const router = useRouter();
  const [allcourse, setallcourse] = useState([]);
  const { user, loading } = useContext(AuthContext);

  const coursesdata = async () => {
    const courses = await getmyCourse(user.uid);
    setallcourse(courses);
    console.log(courses);
  };
  useEffect(() => {
    if (user) {
      coursesdata();
    }
  }, [loading]);

  return (
    <Layout>
      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h5" component="h2">
            Your Courses
          </Typography>

          {allcourse.length === 0 ? (
            <>
              <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
                You Don't have any course....
                <Button onClick={() => router.push('/courses')}>
                  Explore Some
                </Button>
              </Typography>
            </>
          ) : (
            <Grid container spacing={4} sx={{ mt: 1, mb: 2 }}>
              {allcourse?.map((item, index) => (
                <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                  <Card
                    key={index}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    elevation={5}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="190"
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
                      />
                      <CardContent>
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                            >
                              {item.Course_Name}
                            </Typography>
                          </Grid>
                          {/* <Grid item xs={4} textAlign="right">
                      <Typography gutterBottom variant="h6" component="div">
                        $200
                      </Typography>
                    </Grid> */}
                        </Grid>
                        <Typography variant="body2" color="text.secondary">
                          {item.Description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{
                        marginTop: 'auto',
                        // justifyContent: 'right',
                      }}
                    >
                      <Grid container>
                        <Grid item xs={6}>
                          <Typography sx={{ color: 'red', ml: 1 }}>
                            Duration : {item.Total_Duration} hours
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sx={{
                            display: 'flex',
                            justifyContent: 'right',
                          }}
                        >
                          <Button
                            size="small"
                            onClick={() => router.push('/yourcourses/modules')}
                          >
                            Start Now
                          </Button>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Grid>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default YourCourses;
