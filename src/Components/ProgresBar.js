import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
export default function ProgresBar() {
    return (
        <div>
            <Box sx={{ display: 'flex',position:'fixed',zIndex:'1000',top:'47%',left:'47%' }}>
      <CircularProgress style={{width:'80px',height:'80px'}} />
         </Box> 
        </div>
    )
}
