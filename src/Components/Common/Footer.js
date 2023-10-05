import { Box, Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Container from './Container';

const Footer = () => {
   
  const classes = useStyle();

  return (

      <>
     <Box sx={{
      
      display:"flex", justifyContent:"space-around", 
      flexDirection:{xs:"column" ,sm:"row" , md:"row" }
      }} >

     <Box margin="0 auto" >
          <Grid container spacing={2}>
                <Grid item xs={5} sm={5} md={5}>
                    <Box>
                      <img src='/assets/images/logo_img.png' alt='not loaded' width="160px" />
                    </Box>
                </Grid>    
                <Grid item xs={2} sm={2} md={2} sx={{
                  display:"flex", justifyContent:"center"
                }}  >
                     <Box  ml="0px" >
                           <img src='/assets/images/divider.png' alt='not loaded' />
                    </Box> 
                </Grid>      
                <Grid item xs={5} sm={5} md={5}>
                      <Stack>
                    
                        <Typography style={{color:"green", fontSize:"13px"}}> Supported by</Typography>
                        <img src='/assets/images/footer_img.png' alt='not loaded' width="130px" />
                      </Stack>
                </Grid>
          </Grid>
     </Box>

      <Box margin="0 auto" >
        <Grid container spacing={5} >
          <Grid item sx={6} sm={6} md={6}>

                  {/* <Box> */}
                    <Stack width="140px" >
                      <p className={classes.text} >ABOUT US </p>
                      <p className={classes.text}>GOVERNANCE</p>
                      <p className={classes.text}>NEWS & UPDATES</p>
                    </Stack>
                  {/* </Box> */}
          </Grid>
          <Grid item sx={6} sm={6} md={6}>
                    <Stack>
                      <p className={classes.text}>FAQ’S </p>
                      <p className={classes.text}> PRIVACY POLICY</p>
                      <p className={classes.text}>DISCLAIMER</p>
                    </Stack>
          </Grid>

        </Grid>
      </Box>


      <Box width="350px"  >
        <Grid container spacing={5} margin="0 auto" >
          <Grid item xs={4} sm={4} md={4} maxWidth="400px" >
            <Box sx={{display:"flex" , justifyContent:"space-around", }}   >
              <img src='/assets/icons/facebook.png' alt='not loaded' />
              <img src='/assets/icons/twitter.png' alt='not loaded' />
              <img src='/assets/icons/insta.png' alt='not loaded' />
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={8} sx={{ display:"flex", justifyContent:"center" }} >
            <Box>
              <img src='/assets/icons/upwardArrow.png' alt='not loaded' />
            </Box>
          </Grid>
        </Grid>
      </Box>

     </Box>

     <Box marginLeft="60px" mb="50px" >
       <Typography color="#464749" fontSize="15px" >Inspired by the <br/>Retail Gold Investment Principles</Typography>
     </Box>

     <Box sx={{display:"flex" , textAlign:"center" , justifyContent:"center", mb:"30px" }} >
      <Box display="flex" alignItems="center" >
        <Typography  color="#D0AC54"  > ©2021 WORLD GOLD COUNCIL </Typography> 
      </Box>
      <Box color="#F7F7F7" fontSize="40px" fontWeight="bold" letterSpacing="5px" ml="5px"
      sx={{
        fontSize:{xs:"20px", md:"40px"}
      }} >SWARNA ADARSH ABHIYAAN</Box>
     </Box>
</>
       
  )
}

const useStyle = makeStyles({
  text:{
    color:"#D0AC54", 
    // lineHeight:"14px"
  }
}) 



export default Footer