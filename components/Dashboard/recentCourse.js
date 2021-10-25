import React from 'react';
import { Button, Card, Box, Grid, Typography } from '@mui/material';

const recentCourses = () => {
  return (
    <div>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Data Science BootCamp
      </Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {[1, 2, 3, 4].map((value) => (
          <Grid item xs={12} sm={12} lg={12} key={value}>
            <Card key={value}>
              <Grid container sx={{ p: 3 }} alignItems="center">
                <Grid item xs={6} lg={9} md={8}>
                  <Typography>Lesson 2 - Python Basics</Typography>
                </Grid>
                <Grid
                  item
                  container
                  sx={{
                    display: {
                      xs: 'block',
                      sm: 'block',
                      md: 'block',
                    },
                  }}
                  textAlign="right"
                  xs={6}
                  lg={3}
                  md={4}
                >
                  <Button variant="contained">view detail</Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        textAlign="center"
        sx={{
          mt: 3,
        }}
      >
        <Button variant="contained">show more</Button>
      </Box>
    </div>
  );
};

export default recentCourses;
