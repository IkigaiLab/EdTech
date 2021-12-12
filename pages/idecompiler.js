import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
// import { javascript } from '@codemirror/lang-javascript';
import { EditorView, basicSetup } from '@codemirror/basic-setup';
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
} from '@mui/material';
import Layout from '../components/layout';
import axios from 'axios';
const Loader = () => <div className="loader"></div>;

// const myTheme = EditorView.theme({
//   '&.cm-editor': {
//     fontSize: '16px',
//   },
//   '.cm-scroller': {
//     fontFamily:
//       'Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace',
//   },
// });

const Idecompiler = () => {
  const [loading, setloading] = useState(false);
  const [code, setCode] = useState('');
  const [codeoutput, setCodeoutput] = useState('');
  const [codeinput, setCodeinput] = useState('');
  const [lang, setlang] = useState();

  const checkCode = async () => {
    setloading(true);
    console.log(code);
    const res = await axios.post(
      '/execute',
      {
        script: code,
        language: 'python3',
        versionIndex: '3',
        clientId: 'e57c2d9bafc4964c61f72f765d3aab99',
        clientSecret:
          '7bbd212eb3a1a67f60e3c4b5a60d379690087249a39f3bbe87f83928143c8250',
      },
      {
        headers: {
          // 'application/json' is the modern content-type for JSON, but some
          // older servers may use 'text/json'.
          // See: http://bit.ly/text-json
          'content-type': 'application/json',
        },
      }
    );
    setloading(false);
    console.log(res);
    console.log(res.data);
    console.log(res.data.output);
    setCodeoutput(res.data.output);
  };
  return (
    <Layout>
      {loading && <Loader />}
      <Grid
        container
        component="main"
        sx={{
          mt: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mt: 1, mb: 1 }}>
            Python Only :
          </Typography>
          <CodeMirror
            value={code}
            // height="260px"
            minHeight="250px"
            maxHeight="360px"
            extensions={[basicSetup, python()]}
            theme="dark"
            autoFocus="true"
            placeholder="write your code here"
            onChange={(value, viewUpdate) => {
              setCode(value);
              //   console.log('value:', value);
            }}
          />
          <CodeMirror
            value={codeinput}
            height="200px"
            theme="light"
            onChange={(value, viewUpdate) => {
              setCodeinput(value);
            }}
          />
          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={() => checkCode()}
          >
            Execute
          </Button>
          <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
            Output
          </Typography>
          {/* <Typography varaint="body2">{codeoutput}</Typography> */}
          <CodeMirror
            value={codeoutput}
            contentEditable="false"
            height="200px"
            // extensions={[basicSetup, myTheme]}
            theme="dark"
          />
        </Container>
      </Grid>
    </Layout>
  );
};

export default Idecompiler;
