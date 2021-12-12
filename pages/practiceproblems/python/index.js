import { Card, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import PracticeProblems from '../index';
import { useRouter } from 'next/router';

const data = [
  {
    topic: 'Array',
  },
  {
    topic: 'Loops',
  },
  {
    topic: 'String',
  },
  {
    topic: 'Functions',
  },
  {
    topic: 'Lists',
  },
  {
    topic: 'Tuples',
  },
];

const Python = () => {
  const router = useRouter();

  return (
    <PracticeProblems>
      <Typography sx={{ mt: 2 }} variant="h6">
        Solve by Topics
      </Typography>
      <Grid container sx={{ mt: 4, boxShadow: 3, backgroundColor: 'white' }}>
        {data.map((item, index) => (
          <Grid item lg={4} key={index}>
            <Card
              variant="outlined"
              sx={{
                // border: 1,
                p: 3,
                '&:hover': {
                  boxShadow: 10,
                  cursor: 'pointer',
                },
                borderRadius: '0px',
              }}
              onClick={() => router.push('/practiceproblems/python/id')}
            >
              <Grid container>
                <Grid item lg={6}>
                  {item.topic}
                </Grid>
                <Grid
                  item
                  lg={6}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Typography color="secondary">12</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PracticeProblems>
  );
};

export default Python;
