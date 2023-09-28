import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    
    <Box margin="0px 20px 0px 20px" >
    <Grid  container spacing={2} padding="15px 0px 0px 0px"  >
      <Grid item xs={6} sm={6} md={6} xl={6} >
        <Stack>
          <img src="./Assets/images/logo_img.png" alt='not loaded' width="150px" />
        </Stack>
      </Grid>


      <Grid item xs={6} sm={6} md={6} xl={6} sx={{
      
      }} >
        <Box sx={{
        display:"flex", justifyContent:"end", alignItems:"center",
        marginTop:"8px",
      }}>
        <Box mr="15px" >
          <Typography color="#D0AC54" fontSize="17px" >MENU</Typography>
        </Box>
        <Box>
          <img src='/Assets/Icons/menu_icon.png' alt='not loaded' width="25px" />
        </Box>
          
        </Box>
      </Grid>
    </Grid>
    </Box>
    
  )
}

export default Header

