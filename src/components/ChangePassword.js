import { Box, Paper, useMediaQuery } from '@mui/material';
import React from 'react'
import { HeaderProfile } from './Profile';

const ChangePassword = () => {
  const mediumViewport = useMediaQuery('(min-width:700px)');
  return (
    <HeaderProfile value="3">ChangePassword</HeaderProfile>
  );
}

export default ChangePassword