import { Box, Grid, Stack, Typography, styled } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const Header = () => {
  const classes = useStyle();
  return (
    
    <Box margin="0px 20px 0px 20px" >

    <Grid  container spacing={2} padding="15px 0px 0px 0px"  >

      <Grid item xs={6} sm={6} md={6} xl={6} >
        <Stack>
          <img src="./Assets/images/logo_img.png" alt='not loaded' width="150px" />
        </Stack>
      </Grid>


      <Grid item xs={6} sm={6} md={6} xl={6} sx={{ }} >

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


    <Box className = {classes.navlist} >

      <Box >
        <Typography className={classes.text} >ABOUT</Typography>
        <Typography className={classes.text} >gOVERNENCE</Typography>
        <Typography className={classes.text} >CODE OF CONDUCT</Typography>
        <Typography className={classes.text} >NEWS AND UPDATE</Typography>
        <Typography className={classes.text} >FAQS</Typography>
        <Typography className={classes.text} >DOWNLOADABLE</Typography>
        <Typography className={classes.text} >PRIVACY POLICY</Typography>
        <Typography className={classes.text} >DISCLAIMER</Typography>
      </Box>


    </Box>

      



    </Box>
    
  )
}

const useStyle = makeStyles({

  navlist:{
    backgroundColor:"#CAA64E",
    // height:{md:"100vh"},
    display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", 
    textAlign:"center",
    fontSize:"50px"

  },
  text:{
    color:"white",
    fontWeight:"Bold",
    fontSize:"30px",
    lineHeight:"50px"
  }
  
})
  


export default Header

