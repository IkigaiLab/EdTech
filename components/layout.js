import React, { useContext, useEffect } from 'react';
import { signOut, getAuth } from 'firebase/auth';
import { AuthContext } from '../firebase/auth';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExploreIcon from '@mui/icons-material/Explore';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SourceIcon from '@mui/icons-material/Source';
import CodeIcon from '@mui/icons-material/Code';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import EventIcon from '@mui/icons-material/Event';
import ForumIcon from '@mui/icons-material/Forum';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Card, Container, Grid } from '@mui/material';
import Badge from '@mui/material/Badge';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 240;

export default function Layout({ children }) {
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#EB0014',
      },
      redish: {
        main: '#c41d1d',
      },
      greenish:{
        main: "#10ed2a"
      }
    },
  });

  const { user, setUser, loading } = useContext(AuthContext);
  const router = useRouter();
  const currentRoute = router.pathname;
  const auth = getAuth();
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (loading) {
    } else {
      if (user) {
      } else {
        console.log('user not signed in');
        router.push('/signin');
      }
    }
  }, [loading]);

  const signout = () => {
    signOut(auth)
      .then(function () {
        setUser(null);
        router.push('/signin');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const drawer = (
    <div>
      <Grid
        container
        sx={{ pl: 2, mt: 1 }}
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Image src="/logowhite.png" alt="logo" width={70} height={60} />
        </Grid>
        <Grid item>
          <Typography sx={{ pl: 1 }}>The Ikigai Lab</Typography>
        </Grid>
      </Grid>
      <List>
        <Link href="/dashboard">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <HomeIcon
                className={currentRoute === '/dashboard' ? 'active' : ''}
              />
            </ListItemIcon>
            <ListItemText
              className={currentRoute === '/dashboard' ? 'active' : ''}
              primary="Dashboard"
            />
          </ListItem>
        </Link>

        <Link href="/tracks/mytrack">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <AlignHorizontalLeftIcon
                className={
                  router.pathname.startsWith('/tracks/') ? 'active' : ''
                }
              />
            </ListItemIcon>
            <ListItemText
              className={router.pathname.startsWith('/tracks/') ? 'active' : ''}
              primary="My Tracks"
            />
          </ListItem>
        </Link>

        <Link href="/mymentor">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <SupervisorAccountIcon
                className={currentRoute === '/mymentor' ? 'active' : ''}
              />
            </ListItemIcon>
            <ListItemText
              className={currentRoute === '/mymentor' ? 'active' : ''}
              primary="My Mentor"
            />
          </ListItem>
        </Link>

        <Link href="/events/upcoming">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <EventIcon
                className={
                  router.pathname.startsWith('/events/') ? 'active' : ''
                }
              />
            </ListItemIcon>
            <ListItemText
              className={router.pathname.startsWith('/events/') ? 'active' : ''}
              primary="Events"
            />
          </ListItem>
        </Link>

        {/* <Link href="/courses">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <ExploreIcon
                className={currentRoute === '/courses' ? 'active' : ''}
              />
            </ListItemIcon>
            <ListItemText
              className={currentRoute === '/courses' ? 'active' : ''}
              primary="Explore Courses"
            />
          </ListItem>
        </Link> */}

        {/* <Link href="/yourcourses">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <SourceIcon
                className={currentRoute === '/yourcourses' ? 'active' : ''}
              />
            </ListItemIcon>
            <ListItemText
              className={currentRoute === '/yourcourses' ? 'active' : ''}
              primary="Your Courses"
            />
          </ListItem>
        </Link> */}

        <Link href="/challenges/upcoming">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <AnalyticsIcon
                className={
                  router.pathname.startsWith('/challenges/') ? 'active' : ''
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Challenges"
              className={
                router.pathname.startsWith('/challenges/') ? 'active' : ''
              }
            />
          </ListItem>
        </Link>

        <Link href="/practiceproblems">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <Inventory2Icon
                className={
                  router.pathname.startsWith('/practiceproblems')
                    ? 'active'
                    : ''
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Pratice Problems"
              className={
                router.pathname.startsWith('/practiceproblems') ? 'active' : ''
              }
            />
          </ListItem>
        </Link>

        <Link href="/masterclass">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <AnnouncementIcon
                className={currentRoute === '/masterclass' ? 'active' : ''}
              />
            </ListItemIcon>
            <ListItemText
              className={currentRoute === '/masterclass' ? 'active' : ''}
              primary="MasterClass"
            />
          </ListItem>
        </Link>

        <Link href="/discussion">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <ForumIcon
                className={currentRoute === '/discussion' ? 'active' : ''}
              />
            </ListItemIcon>
            <ListItemText
              className={currentRoute === '/discussion' ? 'active' : ''}
              primary="Discussion"
            />
          </ListItem>
        </Link>

        <Link href="/idecompiler">
          <ListItem button sx={{ color: '#c9c7c7' }}>
            <ListItemIcon sx={{ color: '#c9c7c7' }}>
              <CodeIcon
                className={currentRoute === '/idecompiler' ? 'active' : ''}
              />
            </ListItemIcon>
            <ListItemText
              className={currentRoute === '/idecompiler' ? 'active' : ''}
              primary="Coding Playground"
            />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: '#F5F6FA',
            color: 'black',
            boxShadow: 'none',
          }}
        >
          <Toolbar sx={{ mt: 2, mb: 2 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              IKIGAI LAB
            </Typography>
            <div
              css={css`
                flex-grow: 1;
              `}
            ></div>
            <Typography
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', md: 'block', lg: 'block', xl: 'block' },
              }}
            >
              Welcome Back! {user?.displayName}
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{
                display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' },
              }}
            >
              {user?.displayName}
            </Typography>
            <Typography
              variant="p"
              sx={{
                ml: 1,
                mr: 1,
                display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' },
              }}
            >
              |
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{
                display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' },
              }}
              onClick={signout}
            >
              Log out
            </Typography>
            <Grid
              item
              xs={4}
              sm={4}
              lg={3}
              sx={{
                ml: 2,
                display: { xs: 'none', md: 'block', lg: 'block', xl: 'block' },
              }}
            >
              <Card sx={{ height: '11vh' }}>
                <Grid container sx={{ p: 2 }} alignItems="center">
                  <Grid item xs={6} lg={9} md={8}>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Avatar />
                      </Grid>
                      <Grid item>
                        <Button variant="text" onClick={signout}>
                          Logout
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    sx={{
                      display: {
                        xs: 'block',
                        sm: 'block',
                        md: 'block',
                      },
                    }}
                    textAlign="right"
                    xs={6}
                    lg={3}
                    md={4}
                  >
                    <Button variant="text">
                      <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                background: '#2F4CD4',
                color: 'white',
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                background: '#2F4CD4',
                color: 'white',
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            // boxSizing: 'content-box',
            // width: { sm: `calc(100% - ${drawerWidth}px)` },
            backgroundColor: '#F5F6FA',
          }}
        >
          <Toolbar />
          {children}
          {/* <Container style={{ minHeight: '80vh' }}>{children}</Container> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
