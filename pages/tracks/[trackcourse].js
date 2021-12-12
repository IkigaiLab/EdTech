import React, { useState, useEffect, useContext } from 'react';

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
import ReactPlayer from 'react-player';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Layout from '../../components/layout';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ForumIcon from '@mui/icons-material/Forum';
import { useRouter } from 'next/router';
import { AuthContext } from '../../firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import {
  getSpecificTrack,
  trackEnrolment,
} from '../../Utils/features/trackInfoSlice';
const Loader = () => <div className="loader"></div>;

const trackFeature = [
  {
    feature: (
      <>
        Mentor
        <br /> Based Learning
      </>
    ),
    icon: (
      <LibraryBooksIcon
        sx={{ height: '60px', width: '60px', color: '#2F4CD4' }}
      />
    ),
  },
  {
    feature: (
      <>
        1:1 Live
        <br />
        Sessions
      </>
    ),
    icon: (
      <SupervisorAccountIcon
        sx={{ height: '60px', width: '60px', color: '#2F4CD4' }}
      />
    ),
  },
  {
    feature: (
      <>
        Learning <br />
        With Community
      </>
    ),
    icon: (
      <ForumIcon sx={{ height: '60px', width: '60px', color: '#2F4CD4' }} />
    ),
  },
];

const Trackcourse = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, loading } = useContext(AuthContext);
  const trackname = router.query.trackcourse;

  const { specifictrack, loadings, trackEnrol } = useSelector(
    (state) => state.specifictrack
  );
  // console.log(specifictrack);
  const { id, description, name } = { ...specifictrack };

  useEffect(() => {
    if (!trackname) {
      return;
    }
    dispatch(getSpecificTrack(trackname));
  }, [trackname]);

  const [showDialog, setShowDialog] = useState(false);
  const [showEnrolledDialog, setShowEnrolledDialog] = useState(false);

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const openAlreadyDialog = () => setShowEnrolledDialog(true);
  const closeAlreadyDialog = () => setShowEnrolledDialog(false);

  const Enrollment = async () => {
    const userid = user.uid;
    const trackid = id;
    const res = await dispatch(trackEnrolment({ trackid, userid }));
    console.log(res);
    if (res) {
      if (res.payload) {
        if (res.payload === 'successful') {
          openDialog();
        }
        if (res.payload === 'already enrolled') {
          openAlreadyDialog();
          // alert('already enrolled');
        }
      }
    }
    console.log('done');
  };

  return (
    <Layout>
      {/* {loadings ? (
        <>
          <Loader />
        </>
      ) : ( */}
      <>
        <Dialog
          open={showDialog}
          onClose={closeDialog}
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
              Successfully Enrolled The Track
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push('/tracks/mytrack')}
              sx={{ mt: 3 }}
            >
              GO to Track section
            </Button>
          </Box>
        </Dialog>

        <Dialog
          open={showEnrolledDialog}
          onClose={closeAlreadyDialog}
          maxWidth="sm"
          onClose={(event, reason) => {
            if (reason !== 'backdropClick') {
              closeDialog();
            }
          }}
        >
          <Box p={5} textAlign="center">
            <PriorityHighIcon sx={{ height: 80, width: 80, color: 'red' }} />
            <Typography variant="h5" sx={{ mt: 1, pl: 5, pr: 5 }}>
              Already Enrolled The Track
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push('/tracks/mytrack')}
              sx={{ mt: 3, mb: 2 }}
            >
              GO to Track section
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
                <Typography
                  variant="h5"
                  //   sx={{ textTransform: 'capitalize' }}
                >
                  {name?.toUpperCase()} TRACK
                </Typography>
                <Button variant="contained" sx={{ mt: 3 }} onClick={Enrollment}>
                  Enroll Now
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              sx={{
                mt: 3,
              }}
            >
              {trackFeature.map((item, value) => (
                <Grid item xs={12} sm={12} md={6} lg={4} key={value}>
                  <Card
                    sx={{
                      display: 'flex',
                      // justifyContent: 'center',
                      textAlign: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      p: 4,
                    }}
                    key={value}
                  >
                    <Typography gutterBottom>{item.icon}</Typography>
                    <Typography variant="h6">{item.feature}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h5" sx={{ mt: 3 }}>
              MasterClass Included
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
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
                  textAlign: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h6" sx={{ p: 4 }}>
                  <b>LEARN FROM THE WORLD{"'"}S BEST</b> <br /> The greatest
                  have something to teach us all—at any level. Watch world-class
                  instructors share their stories, skills....
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </>
      {/* )} */}
    </Layout>
  );
};

export default Trackcourse;
