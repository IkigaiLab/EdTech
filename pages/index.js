import {
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  ListItem,
  Container,
  List,
} from '@mui/material';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Grid
        container
        component="main"
        sx={{
          // mt: 4,
          minHeight: '100vh',
          backgroundColor: '#2F4CD4',
          borderRadius: '20px 45px 45px 20px',
        }}
      >
        <Grid item md={2}></Grid>
        <Grid
          container
          item
          component={Paper}
          elevation={6}
          square
          md={10}
          sx={{
            backgroundColor: '#F5F6FA',
            borderRadius: '20px ',
          }}
        >
          <Container>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                router.push('/signin');
              }}
            >
              SignIn
            </Button>
            <Button
              sx={{ ml: 3 }}
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => {
                router.push('/signup');
              }}
            >
              SignUp
            </Button>
          </Container>
          <Container>
            <Grid container item>
              <Grid item md={8} sx={{ p: 4 }}>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    borderBottom: '2px solid black',
                  }}
                >
                  {/*  eslint-disable-next-line react/no-unescaped-entities */}
                  Today's Activity
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                  Data Science BootCamp
                </Typography>
                <Card
                  sx={{
                    mt: 3,
                  }}
                >
                  <Grid container sx={{ p: 3 }} alignItems="center">
                    <Grid item xs={8}>
                      <Typography>Lesson 2 - Python Basics</Typography>
                    </Grid>
                    <Grid item container justifyContent="flex-end" xs={4}>
                      <Button variant="contained">view all details</Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item md={4}>
                34
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
