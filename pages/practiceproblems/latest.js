import React from 'react';
import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import PracticeProblems from '.';

const data = [
  {
    problem: 'Predict Future Sales',
    text: 'Challenging time-series dataset consisting of daily sales data, kindly provided by... ',
  },
  {
    problem: 'Titanic - Machine Learning from Disaster',
    text: 'Predict survival on the Titanic and get familiar with ML basics',
  },
];

const latest = () => {
  return (
    <PracticeProblems>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {data.map((item, index) => (
          <Grid item xs={12} md={12} lg={6} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                mt: 3,
              }}
              key={index}
            >
              <Grid container>
                <Grid
                  item
                  lg={8}
                  md={8}
                  xs={12}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                    // textAlign: 'center',
                    justifyContent: 'center',
                    p: 1,
                  }}
                >
                  <Typography fontSize="17px" fontWeight="600">
                    {item.problem}
                  </Typography>
                  <Typography>{item.text}</Typography>
                  <Box sx={{ mt: 1 }}>
                    <Button variant="outlined" size="small">
                      view more
                    </Button>
                  </Box>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=727&q=80"
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PracticeProblems>
  );
};

export default latest;
