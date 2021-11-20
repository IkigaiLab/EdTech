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
import Events from '../events/index';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Upcoming = () => {
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const Registeration = () => {
    openDialog();
  };
  return (
    <Events>
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
      {[1, 2, 3, 4].map((item, index) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
          <Card
            key={index}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              // textAlign: 'center',
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Data Analytics
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A new approch
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
        </Grid>
      ))}
    </Events>
  );
};

export default Upcoming;
