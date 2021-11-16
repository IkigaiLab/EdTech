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
import Layout from '../components/layout';
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

const masterclass = () => {
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
          <Typography variant="h5">Your Scheduled MasterClass</Typography>
          <Card sx={{ mt: 3 }}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  height="280px"
                  width="100%"
                  src="https://images.pexels.com/photos/3949100/pexels-photo-3949100.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="imga"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5">Every Week Saturday</Typography>
                  <Typography variant="h5">@ 8 : 00 pm</Typography>
                  <Box sx={{ mt: 3 }}>
                    <Button variant="contained">Join class</Button>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>

          <Typography variant="h5" sx={{ mt: 3 }}>
            MasterClass Featured
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
        </Container>
      </Grid>
    </Layout>
  );
};

export default masterclass;
