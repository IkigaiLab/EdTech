import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const learningAssocites = () => {
  return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
            Learning Associate
          </Typography>
          <Button fullWidth size="medium" variant="contained" sx={{ mt: 3 }}>
            Ask a Doubt
          </Button>
          <Button
            fullWidth
            size="medium"
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Schedule A Session
          </Button>
        </CardContent>
      </Card>
  );
};

export default learningAssocites;
