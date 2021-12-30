import { Box } from '@mui/material';
import React from 'react';
import Layout from '../../components/Community/layout';
import Discussion from '../discussion';

const PostCommunity = () => {
  return (
    <Layout>
      <Box sx={{ mt: 4 }}>
        <Discussion />
      </Box>
    </Layout>
  );
};

export default PostCommunity;
