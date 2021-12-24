import React, { useContext } from 'react';
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
  Avatar,
} from '@mui/material';
import Layout from '../../components/Community/layout';
import { AuthContext } from '../../firebase/auth';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const myprofile = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Layout>
      <Card sx={{ mt: 4, borderRadius: '10px' }}>
        <Grid container>
          <Grid item lg={11} md={10} xs={12}>
            <CardContent>
              <Grid container>
                <Grid item lg={6} md={6}>
                  <Avatar
                    alt="Remy Sharp"
                    src={user?.photoURL}
                    sx={{
                      width: 130,
                      height: 130,
                      border: `3px solid white`,
                    }}
                  />
                  <Typography sx={{ mt: 2 }}>{user?.displayName}</Typography>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item lg={6}>
                      <Typography>Followers</Typography>
                      <Typography>10</Typography>
                    </Grid>
                    <Grid item lg={6}>
                      <Typography>Following</Typography>
                      <Typography>20</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
          <Grid item lg={1} md={2} xs={12}>
            <Button
              onClick={() => {
                router.push('/profile');
              }}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item lg={12}>
          <NextLink href="/community/myprofile" passHref>
            <Link
              sx={{
                textDecoration: 'none',
                color: 'gray',
              }}
              className="subactive"
            >
              Posts
            </Link>
          </NextLink>
        </Grid>
      </Grid>
      <h6>No Posts Found</h6>
    </Layout>
  );
};

export default myprofile;
