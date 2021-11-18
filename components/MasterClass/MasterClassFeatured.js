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

import ReactPlayer from 'react-player';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const masterFeature = [
  {
    feature: 'Weekly Session',
    icon: (
      <CalendarTodayIcon
        sx={{ height: '60px', width: '60px', color: '#2F4CD4' }}
      />
    ),
  },
  {
    feature: '100% Exclusive',
    icon: (
      <LibraryBooksIcon
        sx={{ height: '60px', width: '60px', color: '#2F4CD4' }}
      />
    ),
  },
  {
    feature: '1-2 hours',
    icon: (
      <AccessTimeIcon
        sx={{ height: '60px', width: '60px', color: '#2F4CD4' }}
      />
    ),
  },
];

const MasterClassFeatured = () => {
  return (
    <>
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
            <b>LEARN FROM THE WORLD{"'"}S BEST</b> <br /> The greatest have
            something to teach us all—at any level. Watch world-class
            instructors share their stories, skills....
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 3,
        }}
      >
        {masterFeature.map((item, value) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={value}>
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'center',
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
    </>
  );
};

export default MasterClassFeatured;
