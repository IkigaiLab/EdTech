import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const practiceProblems = () => {
  return (
    <div>
      <Typography variant="h5" sx={{ mt: 4 }}>
        Practice Problems
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
        {[1, 2, 3, 4, 5, 6].map((value) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={value}>
            <Card key={value}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default practiceProblems;
