import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='300px'>
        <CircularProgress  sx={{border:1, borderRadius:'50%', padding:1,borderColor:"#ccc"}} color="inherit" />
    </Box>
  )
}

export default Loading