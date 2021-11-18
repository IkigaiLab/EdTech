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
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

const AllPosts = () => {
  const [alignment, setAlignment] = React.useState('Recent');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <Box sx={{ mt: 3 }} textAlign="right">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          sx={{
            background: 'white',
          }}
          size="small"
        >
          <ToggleButton value="Recent">Recent Posts</ToggleButton>
          <ToggleButton value="Old">Old Posts</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Card sx={{ p: 3, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid
            item
            lg={1}
            md={1}
            xs={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ width: 45, height: 45 }}></Avatar>
          </Grid>
          <Grid
            item
            lg={11}
            md={11}
            xs={10}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              //   alignItems: 'center',
            }}
          >
            Gaurav Thakur <br />
            <Typography sx={{ fontSize: '13px' }} color="text.secondary">
              2 hours ago
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ mt: 2 }}>
          Data Science Most Important part is.....
        </Typography>

        <Grid container sx={{ mt: 1 }}>
          <Grid
            item
            lg={3}
            md={3}
            xs={6}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon />
            </IconButton>
            <Typography> 2 Likes</Typography>
          </Grid>
          <Grid
            item
            lg={9}
            md={9}
            xs={6}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <CommentIcon />
            <Typography> &nbsp;0 comments</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid
            item
            lg={1}
            md={1}
            xs={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ width: 45, height: 45 }}></Avatar>
          </Grid>
          <Grid
            item
            lg={11}
            md={11}
            xs={10}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextField
              id="outlined-basic"
              label="Add Comment"
              variant="outlined"
              fullWidth
              size="small"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ p: 4 }}>
          <Grid
            item
            lg={1}
            md={2}
            xs={3}
            sx={
              {
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center',
              }
            }
          >
            <Avatar sx={{ width: 45, height: 45 }}></Avatar>
          </Grid>
          <Grid
            item
            lg={11}
            md={10}
            xs={9}
            sx={
              {
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'center',
                //   alignItems: 'center',
              }
            }
          >
            Himesh Sharma <br />
            <Typography sx={{ fontSize: '13px' }} color="text.secondary">
              2 hours ago
            </Typography>
            <Typography>hey whats up</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default AllPosts;
