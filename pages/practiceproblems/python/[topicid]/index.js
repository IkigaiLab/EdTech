import React from 'react';
import { Button, Card, Grid, Paper, Typography, Box } from '@mui/material';
import PracticeProblems from '../../index';
import { useRouter } from 'next/router';

const Topics = () => {
  const router = useRouter();
  return (
    <PracticeProblems>
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ mt: 2, mb: 3 }} variant="h6">
          Problems to Solve
        </Typography>
        {[1, 2, 3, 4, 5].map((index) => (
          <Card sx={{ mt: 1, p: 3 }} key={index}>
            <Grid container>
              <Grid
                item
                lg={7}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography>
                  Count the frequency of an element in an array
                </Typography>
              </Grid>
              <Grid
                item
                lg={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Easy
              </Grid>
              <Grid
                item
                lg={3}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() =>
                    router.push('/practiceproblems/python/olid/problem')
                  }
                >
                  Solve Problem
                </Button>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Box>
    </PracticeProblems>
  );
};

export default Topics;
