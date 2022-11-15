import { Box, Paper, useMediaQuery } from '@mui/material';
import React from 'react'
import { HeaderProfile } from './Profile';

const ChangePassword = () => {
  const mediumViewport = useMediaQuery('(min-width:700px)');
  return (
    <>
      <Box flexDirection={mediumViewport ? "row" : "column"} sx={{width:'100%',display:'flex',gap:2}}>
        <Box>
          <HeaderProfile value="3" />
        </Box>
        <Paper elevation={4} className="flex-1">
          ChangeProfile
        </Paper>
      </Box>
    </>
  );
}

export default ChangePassword