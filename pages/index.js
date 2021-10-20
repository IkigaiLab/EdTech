import { Button, Grid, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Container
        direction="column"
        style={{ minHeight: '100vh' }}
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Typography>
        <Grid sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              router.push('/signin');
            }}
          >
            SignIn
          </Button>{' '}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {
              router.push('/signup');
            }}
          >
            SignUp
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
