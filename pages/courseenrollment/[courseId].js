import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
  Dialog,
  Box,
  TextField,
  CardActionArea,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../firebase/auth';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import ReactPlayer from 'react-player';
import { getIntroCourse, CourseEnrollment } from '../../Utils/database/course';

const Index = () => {
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { courseId } = router.query;
  const [courseinfo, setcourseinfo] = useState([]);

  const coursesall = async (id) => {
    const courseall = await getIntroCourse(id);
    setcourseinfo(courseall);
    console.log(courseall);
  };
  useEffect(() => {
    coursesall(courseId);
  }, []);

  const Enrollment = async () => {
    let message = await CourseEnrollment(courseId, user.uid);
    console.log(message);
    if (message === 'successful') {
      openDialog();
    }
  };

  return (
    <Layout>
      <Dialog
        open={showDialog}
        // onClose={closeDialog}
        maxWidth="sm"
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            closeDialog();
          }
        }}
      >
        <Box p={4} textAlign="center">
          <CheckCircleIcon sx={{ height: 80, width: 80, color: 'green' }} />
          <Typography variant="h5" sx={{ mt: 1 }}>
            Successfully Enrolled The Course
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push('/courses')}
            sx={{ mt: 3 }}
          >
            GO to course section
          </Button>
        </Box>
      </Dialog>

      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <ReactPlayer
                height="300px"
                url="https://www.youtube.com/watch?v=Tj2szvjET_o"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5">{courseinfo?.Course_Name}</Typography>
              <Button variant="contained" sx={{ mt: 3 }} onClick={Enrollment}>
                Enroll Now
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {courseinfo?.courseIntro?.Benefits?.map((item, value) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={value}>
                <CardActionArea>
                  <Card
                    sx={{
                      textAlign: 'center',
                      '&:hover': {
                        backgroundColor: '#2F4CD4',
                        color: 'white',
                      },
                    }}
                    elevation={5}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ p: 4 }} component="div">
                        {item}
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
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

export default Index;
