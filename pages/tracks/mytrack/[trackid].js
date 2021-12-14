import React, { useContext, useEffect } from 'react';
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
  List,
  Divider,
  ListItem,
  ListItemText,
  Collapse,
  Link,
} from '@mui/material';
import Layout from '../../../components/layout';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getMyTrackById } from '../../../Utils/features/myTrackSlice';
import { AuthContext } from '../../../firebase/auth';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const Tracks = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, loading } = useContext(AuthContext);
  const trackid = router.query.trackid;
  const { mytrackbyid, loadings } = useSelector((state) => state.allmytracks);

  useEffect(() => {
    if (!trackid || !user) {
      return;
    }
    const userid = user?.uid;
    dispatch(getMyTrackById({ trackid, userid }));
  }, [trackid, user]);

  const statusHandle = (submoduleid, topicid) => {
    console.log('Ids :', submoduleid, topicid);
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
          <Typography sx={{ fontSize: 27 }}>Data Science Track</Typography>
          <Grid container spacing={3}>
            <Grid item lg={9} md={9} xs={12}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Assigned Tasks/Activity Weekwise
              </Typography>
              {mytrackbyid.map((item, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Day {index + 1}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.submodules.map((item, index) => (
                      <Accordion key={index}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{item.name}</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                          {item.topics.map((items, index) => (
                            <Accordion key={index}>
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                              >
                                <Typography>{items.name}</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Grid container>
                                  <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    Status :{' '}
                                    {items.status === false ? (
                                      <>False</>
                                    ) : (
                                      <>True</>
                                    )}
                                  </Grid>
                                  <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'flex-end',
                                    }}
                                  >
                                    <Button
                                      variant="contained"
                                      onClick={() => {
                                        statusHandle(item.id, items.id);
                                      }}
                                    >
                                      Mark as true
                                    </Button>
                                    <Button
                                      variant="contained"
                                      color="redish"
                                      sx={{ ml: 3, color: 'white' }}
                                    >
                                      Schedule Session
                                    </Button>
                                  </Grid>
                                </Grid>
                              </AccordionDetails>
                            </Accordion>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Your Mentor
              </Typography>
              <Card sx={{ p: 3 }}>
                <Grid container>
                  <Grid item lg={6} md={6} xs={6}>
                    <Avatar
                      alt="mentor"
                      src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg"
                      sx={{ width: 56, height: 56 }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    Anirudh
                  </Grid>
                </Grid>
              </Card>
              <Typography variant="h6" sx={{ mt: 3 }}>
                Session With Mentor
              </Typography>
              <Card sx={{ p: 4, mt: 3 }}>
                <Grid
                  container
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Grid item lg={12} md={12} xs={12}>
                    <Typography variant="h6">Mentor Session</Typography>
                    <Typography
                      variant="body2"
                      fontSize="15px"
                      color="text.secondary"
                    >
                      Every Week
                    </Typography>
                  </Grid>
                  <Grid item lg={12} md={12} xs={12}>
                    <Box sx={{ mt: 2 }}>
                      <Button variant="contained">Join </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Tracks;
