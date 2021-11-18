import React from 'react';
import {
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  Button,
  CardMedia,
} from '@mui/material';

const Sidebar = () => {
  return (
    <>
      <Card sx={{ p: 4 }}>
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Grid item lg={12} md={6} xs={12}>
            <Typography variant="h6">Weekly MasterClass</Typography>
            <Typography variant="body2" fontSize="15px" color="text.secondary">
              Every Saturday
            </Typography>
          </Grid>
          <Grid item lg={12} md={6} xs={12}>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained">Join </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Card sx={{ mt: 3, p: 4 }}>
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Grid item lg={12} md={6} xs={12}>
            <Typography variant="h6">Your Posts</Typography>
            <Typography variant="body2" fontSize="15px" color="text.secondary">
              Discussion
            </Typography>
          </Grid>
          <Grid item lg={12} md={6} xs={12}>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained">View</Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Sidebar;
