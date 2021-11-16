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
  List,
  Divider,
  ListItem,
  ListItemText,
  Collapse,
  Link,
} from '@mui/material';
import Layout from '../../../components/layout';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Tracks = () => {
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
          <Typography sx={{ fontSize: 27 }}>Data Science Track</Typography>
          <Grid container spacing={3}>
            <Grid item lg={9}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Assigned Tasks/Activity Weekwise
              </Typography>
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>week {index}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                      <Accordion key={index}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>Day {index}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>Tasks</Typography>
                          <Grid container>
                            <Grid
                              item
                              lg={6}
                              sx={{ display: 'flex', alignItems: 'center' }}
                            >
                              Video to watch
                            </Grid>
                            <Grid item lg={6}>
                              <Link
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=gMoJIH0prL4&list=RDQMGLFlZrEFhvY&index=4"
                              >
                                https://www.youtube.com/watch?v=gMoJIH0prL4&list=RDQMGLFlZrEFhvY&index=4
                              </Link>
                            </Grid>
                          </Grid>
                          <Grid container sx={{ mt: 2 }}>
                            <Grid
                              item
                              lg={6}
                              sx={{ display: 'flex', alignItems: 'center' }}
                            >
                              Read article
                            </Grid>
                            <Grid item lg={6}>
                              <Link
                                rel="noreferrer"
                                target="_blank"
                                href="https://hackernoon.com/what-on-earth-is-data-science-eb1237d8cb37"
                              >
                                https://hackernoon.com/what-on-earth-is-data-science-eb1237d8cb37
                              </Link>
                            </Grid>
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
            <Grid item lg={3}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Your Mentor
              </Typography>
              <Card sx={{ p: 3 }}>
                <Grid container>
                  <Grid item lg={6}>
                    <Avatar
                      alt="mentor"
                      src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg"
                      sx={{ width: 56, height: 56 }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    Anirudh
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Tracks;
