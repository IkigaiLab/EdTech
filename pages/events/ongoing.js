import React from 'react';
import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box,
  CardContent,
  CardActions,
} from '@mui/material';
import Events from '../events/index';

const Ongoing = () => {
  return (
    <Events>
      {[1, 2, 3].map((item, index) => (
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
              <Button size="small" variant="contained">
                Add To Calender
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Events>
  );
};

export default Ongoing;
