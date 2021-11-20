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
  Link,
} from '@mui/material';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';

const Challenge = () => {
  const router = useRouter();
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
          <Typography variant="h5">
            Titanic - Machine Learning from Disaster
          </Typography>
          <Typography sx={{ color: 'red' }}>[ Points : 12Pts ]</Typography>
          <Typography sx={{ mt: 3 }}>
            <b> The Challenge </b>
            <br />
            <br />
            Predict survival on the Titanic and get familiar with ML basics.
            <br />
            <br />
            The sinking of the Titanic is one of the most infamous shipwrecks in
            history. On April 15, 1912, during her maiden voyage, the widely
            considered “unsinkable” RMS Titanic sank after colliding with an
            iceberg. Unfortunately, there weren’t enough lifeboats for everyone
            onboard, resulting in the death of 1502 out of 2224 passengers and
            crew. While there was some element of luck involved in surviving, it
            seems some groups of people were more likely to survive than others.
            In this challenge, we ask you to build a predictive model that
            answers the question: “what sorts of people were more likely to
            survive?” using passenger data (ie name, age, gender, socio-economic
            class, etc).
          </Typography>
          <Typography sx={{ mt: 3 }}>
            Dataset Link :- Download Dataset <Link>Click here</Link>
          </Typography>
          <Typography variant="h6" sx={{ mt: 3 }}>
            Challenge Solution Submission :
          </Typography>
          <Button variant="contained" sx={{ mt: 3 }}>
            Submission
          </Button>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Challenge;
