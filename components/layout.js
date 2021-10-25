import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../firebase/auth';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import BookIcon from '@mui/icons-material/Book';
import SourceIcon from '@mui/icons-material/Source';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

const drawerWidth = 240;

export default function Layout(props) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  const { window } = props;
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
        router.push('/');
      }
    }
  }, [loading]);

  const drawer = (
    <div>
      {/* <Toolbar />
      <Divider /> */}
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
      {/* <Divider /> */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SourceIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Your Courses" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AnalyticsIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Challenges" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Inventory2Icon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Pratice Problems" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AnnouncementIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="MasterClass" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          color: 'black',
          boxShadow: 'none',
        }}
        // position="absolute"
        // sx={{
        //   width: '100%',
        //   zIndex: '99999',
        // }}
      >
        <Toolbar>
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
            variant="p"
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', md: 'block', lg: 'block', xl: 'block' },
            }}
          >
            Welcome {user?.displayName}
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
          <Typography variant="p" sx={{ ml: 1, mr: 1 }}>
            |
          </Typography>
          <Typography variant="p" noWrap component="div">
            Log out
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
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
        sx={
          {
            // flexGrow: 1,
            // width: { sm: `calc(100% - ${drawerWidth}px)` },
          }
        }
      >
        <Toolbar />
        {props.children}
        {/* <Container style={{ minHeight: '80vh' }}>{props.children}</Container> */}
      </Box>
    </Box>
  );
}
