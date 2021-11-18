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

const continueLearning = () => {
  return (
    <Card sx={{ p: 4 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Grid item lg={6} md={6} xs={12}>
          <Typography>Data Science Track</Typography>
          <Typography>Mentor: Anirudh</Typography>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box>
            <Button variant="contained">Continue</Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default continueLearning;
