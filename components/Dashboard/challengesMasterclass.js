import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';

const challengesMasterclass = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Challanges
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
      <hr style={{ maxWidth: '80%' }} />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          MasterClass
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
  );
};

export default challengesMasterclass;
