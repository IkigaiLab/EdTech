import React, { useState } from 'react';
import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box,
  Dialog,
  CardContent,
  CardActions,
} from '@mui/material';
import Carousel from 'react-multi-carousel';
import MobileDetect from 'mobile-detect';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const UpcomingEvents = ({ deviceType }) => {
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);
  const Registeration = () => {
    openDialog();
  };
  return (
    <Grid item lg={12} md={12} xs={12}>
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
            Successfully Registered for Event
          </Typography>
          <Typography sx={{ mt: 1 }}>Check your email for details</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => closeDialog()}
            sx={{ mt: 3 }}
          >
            OK
          </Button>
        </Box>
      </Dialog>

      <Typography variant="h6" sx={{ mb: 3 }}>
        Upcoming Events
      </Typography>
      <Carousel
        deviceType={deviceType} // `deviceType` needs to be set
        infinite={true}
        autoPlay={true}
        ssr
        responsive={responsive}
      >
        {[1, 2, 3, 4].map((item, index) => (
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
                <Grid item xs={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Name of Event
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body2" color="text.secondary">
                Event Description
              </Typography>
            </CardContent>
            <CardActions
              sx={{ m: 1, display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography>15 Nov, 6:00pm</Typography>
              <Button size="small" variant="contained" onClick={Registeration}>
                Register
              </Button>
            </CardActions>
          </Card>
        ))}
      </Carousel>
    </Grid>
  );
};

UpcomingEvents.getInitialProps = ({ req }) => {
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

export default UpcomingEvents;
