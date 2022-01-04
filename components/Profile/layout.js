import React from 'react';
import MainLayout from '../layout';
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
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Layout = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <MainLayout>
      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Grid container>
            <Grid item lg={4} md={4}>
              <List>
                <Link href="/profile">
                  <ListItem button sx={{ color: '#c9c7c7' }}>
                    <ListItemIcon sx={{ color: '#c9c7c7' }}>
                      <EditIcon
                        className={
                          currentRoute === '/profile' ? 'sublinkactive' : ''
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      className={
                        currentRoute === '/profile' ? 'sublinkactive' : ''
                      }
                      primary="Edit Profile"
                    />
                  </ListItem>
                </Link>

                <Link href="/profile/passwordreset">
                  <ListItem button sx={{ color: '#bab8b8' }}>
                    <ListItemIcon sx={{ color: '#bab8b8' }}>
                      <GppGoodIcon
                        className={
                          currentRoute === '/profile/passwordreset'
                            ? 'sublinkactive'
                            : ''
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      className={
                        currentRoute === '/profile/passwordreset'
                          ? 'sublinkactive'
                          : ''
                      }
                      primary="Password & Security"
                    />
                  </ListItem>
                </Link>
              </List>
            </Grid>
            <Grid item lg={8} md={8}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </MainLayout>
  );
};

export default Layout;
