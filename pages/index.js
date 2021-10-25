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
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3">Welcome To Ikigai Edtech Platform</Typography>
        <br />
        <div
          style={{
            // minHeight: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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
        </div>
      </div>
    </>
  );
}
