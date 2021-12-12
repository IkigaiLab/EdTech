import React, { useContext, useEffect } from 'react';
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
  Link as MuiLink,
} from '@mui/material';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getallpracticeproblems } from '../../Utils/features/practiceproblemsSlice';
import { AuthContext } from '../../firebase/auth';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Loader = () => <div className="loader"></div>;

const PracticeProblems = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  const dispatch = useDispatch();
  const { problems, loadings } = useSelector((state) => state.problems);

  useEffect(() => {
    console.log('hello');
    if (!user) {
      return;
    }
    const userid = user?.uid;
    dispatch(getallpracticeproblems(userid));
  }, [user]);

  return (
    <Layout>
      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        {/* <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Typography variant="h5">Practice Problems</Typography>
          <Grid container sx={{ mt: 3, mb: 1 }}>
            <Grid item lg={3} md={3} xs={4}>
              <Link href="/practiceproblems/latest" passHref>
                <MuiLink
                  sx={{
                    textDecoration: 'none',
                    color: 'gray',
                  }}
                  className={
                    router.pathname.startsWith('/practiceproblems/latest')
                      ? 'subactive'
                      : ''
                  }
                >
                  Latest
                </MuiLink>
              </Link>
            </Grid>
            <Grid item lg={9} md={9} xs={8}>
              <Link href="/practiceproblems/all" passHref>
                <MuiLink
                  sx={{
                    textDecoration: 'none',
                    color: 'gray',
                  }}
                  className={
                    router.pathname.startsWith('/practiceproblems/all')
                      ? 'subactive'
                      : ''
                  }
                >
                  All
                </MuiLink>
              </Link>
            </Grid>
          </Grid>
          {children}
        </Container> */}
        {/* <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Typography variant="h5">Practice Problems</Typography>
          <Grid container sx={{ mt: 3, mb: 1 }}>
            <Grid item lg={3} md={3} xs={4}>
              <Link href="/practiceproblems/python" passHref>
                <MuiLink
                  sx={{
                    textDecoration: 'none',
                    color: 'gray',
                  }}
                  className={
                    router.pathname.startsWith('/practiceproblems/python')
                      ? 'subactive'
                      : ''
                  }
                >
                  Python
                </MuiLink>
              </Link>
            </Grid>
            <Grid item lg={9} md={9} xs={8}>
              <Link href="/practiceproblems/machinelearning" passHref>
                <MuiLink
                  sx={{
                    textDecoration: 'none',
                    color: 'gray',
                  }}
                  className={
                    router.pathname.startsWith(
                      '/practiceproblems/machinelearning'
                    )
                      ? 'subactive'
                      : ''
                  }
                >
                  Machine Learning
                </MuiLink>
              </Link>
            </Grid>
          </Grid>
          {children}
        </Container> */}

        {loadings ? (
          <>
            <Loader />
          </>
        ) : (
          <></>
        )}

        <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Typography sx={{ mt: 2, mb: 3 }} variant="h6">
            Problems to Solve
          </Typography>
          {problems?.map((item, index) => (
            <>
              {/* display only on medium and large devices */}
              <Card
                sx={{
                  mt: 1,
                  p: 3,
                  display: { xs: 'none', sm: 'none', md: 'block' },
                }}
                key={index}
              >
                <Grid container>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={12}
                    sx={{
                      // justifyContent: 'center',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography>{item.question}</Typography>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  >
                    {item.status === false ? (
                      <Button
                        variant="outlined"
                        onClick={() =>
                          router.push(`/practiceproblems/${item.id}`)
                        }
                      >
                        Solve Problem
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        color="greenish"
                        onClick={() =>
                          router.push(`/practiceproblems/${item.id}`)
                        }
                      >
                        Solved <CheckCircleOutlineIcon />
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </Card>

              {/* display only on small devices */}
              <Card
                sx={{
                  mt: 1,
                  p: 3,
                  display: { xs: 'block', sm: 'block', md: 'none' },
                }}
                key={item.id}
              >
                <Grid container>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={12}
                    sx={{
                      justifyContent: 'center',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography>{item.question}</Typography>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {item.status === false ? (
                      <Button
                        variant="outlined"
                        onClick={() =>
                          router.push(`/practiceproblems/${item.id}`)
                        }
                      >
                        Solve Problem
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        color="greenish"
                        onClick={() =>
                          router.push(`/practiceproblems/${item.id}`)
                        }
                      >
                        Solved <CheckCircleOutlineIcon />
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </Card>
            </>
          ))}
        </Container>
      </Grid>
    </Layout>
  );
};

export default PracticeProblems;
