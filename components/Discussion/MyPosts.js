import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Avatar,
  TextField,
  Box,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

const MyPosts = () => {
  return (
    <>
      {[1, 2].map((index) => (
        <Card sx={{ p: 2, mt: 3 }} key={index}>
          <Typography sx={{ mt: 2 }}>
            Data Science Most Important part is.....
          </Typography>

          <Grid container sx={{ mt: 1 }}>
            <Grid
              item
              lg={6}
              md={12}
              xs={6}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
              <Typography> 5 Likes</Typography>
            </Grid>
            <Grid
              item
              lg={6}
              md={12}
              xs={6}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton aria-label="read comments">
                <CommentIcon />
              </IconButton>
              <Typography> &nbsp;3 comments</Typography>
            </Grid>
          </Grid>
        </Card>
      ))}

      <Box textAlign="right" sx={{ mt: 2 }}>
        <Button variant="contained">view all</Button>
      </Box>
    </>
  );
};

export default MyPosts;
