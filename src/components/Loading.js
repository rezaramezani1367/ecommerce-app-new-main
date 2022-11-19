import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='300px'>
        <CircularProgress color="success" />
    </Box>
  )
}

export default Loading