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
  IconButton,
  AppBar,
  Toolbar,
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Layout from '../../../components/layout';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
  getMyTrackById,
  setSubmoduleTopicStatus,
} from '../../../Utils/features/myTrackSlice';
import { AuthContext } from '../../../firebase/auth';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
const Loader = () => <div className="loader"></div>;

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

  // const statusHandle = async (submodulesid, topicsid) => {
  //   const userid = user?.uid;
  //   console.log('Ids :', submoduleid, topicid, trackid, userid);
  //   const res = await dispatch(
  //     setSubmoduleTopicStatus({ submodulesid, topicsid, trackid, userid })
  //   );
  //   if (res) {
  //     dispatch(getMyTrackById({ trackid, userid }));
  //   }
  // };

  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState('');

  const handleClickOpen = (link) => () => {
    setUrl(link);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      {/* pdf modal */}
      <Dialog
        sx={{
          position: 'fixed',
          width: '100%',
          height: '100%',
        }}
        fullScreen
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="xl"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Reading Material
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              onClick={handleClose}
            >
              <CancelPresentationIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <iframe
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
          src={url}
        />

        {/* <object
          data={url}
          type="application/pdf"
          frameBorder="0"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        >
          <embed
            src="https://drive.google.com/file/d/1Hp1ARYpeUAfHjjox0meTfdBTLmgsileO/preview?usp=sharing"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
            }}
          />
        </object> */}
      </Dialog>
      {/* pdf modal */}

      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        {loadings ? (
          <>
            <Loader />
          </>
        ) : (
          <></>
        )}
        <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Typography sx={{ fontSize: 27 }}>Data Science Track</Typography>
          <Grid container spacing={3}>
            <Grid item lg={9} md={9} xs={12}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Assigned Tasks/Activity Weekwise
              </Typography>
              {mytrackbyid.map((item, index) => (
                <Accordion
                  key={index}
                  sx={{ boxShadow: 'none', border: 'none' }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: '#2F4CD4', color: 'white' }}
                  >
                    <Typography>
                      Module {index + 1} : {item.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ mt: 1, mb: 1 }}>
                      All Topics ({item.topics.length})
                    </Typography>
                    {item.topics.map((items, index) => (
                      <Accordion
                        key={index}
                        sx={{ boxShadow: 'none', border: 'none' }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            <Grid container>
                              <Grid item>
                                {index + 1}. {items.topic.name}
                              </Grid>
                              {/* <Grid item sx={{ color: 'green' }}>
                                      {items.status === true ? (
                                        <div>
                                          <CheckCircleOutlineIcon />
                                        </div>
                                      ) : (
                                        <></>
                                      )}
                                    </Grid> */}
                            </Grid>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Tooltip
                            title="Read"
                            componentsProps={{
                              tooltip: {
                                sx: {
                                  bgcolor: '#db1140',
                                  '& .MuiTooltip-arrow': {
                                    color: '#db1140',
                                  },
                                },
                              },
                            }}
                            placement="left"
                            arrow
                          >
                            <Card
                              onClick={handleClickOpen(items.topic.link)}
                              sx={{ cursor: 'pointer' }}
                              // elevation="4"
                            >
                              <CardContent>
                                <Grid container>
                                  <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={6}
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <LibraryBooksOutlinedIcon
                                      sx={{
                                        height: '35px',
                                        width: '35px',
                                        pr: 1,
                                      }}
                                    />
                                    {items.topic.type}
                                  </Grid>
                                  <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={6}
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'flex-end',
                                    }}
                                  >
                                    {/* <Typography sx={{ overflowWrap: 'break-word' }}>
                                {items.topic.link}
                                <iframe src="http://www.africau.edu/images/default/sample.pdf" />
                              </Typography> */}
                                    {/* <Button
                                    variant="outlined"
                                    onClick={handleClickOpen(items.topic.link)}
                                  >
                                    Read
                                  </Button> */}
                                    <Typography>
                                      Duration: {items.topic.duration}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          </Tooltip>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </AccordionDetails>
                  <Typography sx={{ mb: 2 }}></Typography>
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
