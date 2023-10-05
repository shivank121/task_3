import { Box, Checkbox, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Container from '../Common/Container'

const Form = ({ HeadingContainer, headingSideLine,textStyle , text }) => {

  

  return (


    <Box sx={{
      backgroundImage:`url(${"/assets/images/code_bg_img.png"})`
    }} >

      <Container>
      <Box sx={{marginBottom:"50px"}}>

      <Box sx={HeadingContainer}>

       <Box sx={headingSideLine} />

        <Typography sx={textStyle}> {text}</Typography>

       <Box  sx={headingSideLine}/> 
      </Box>

      </Box>

<Grid container spacing={5}>
  <Grid item xs={12} sm={6} md={6}>
    <Stack>
      <TextField sx={{marginBottom:"30px"}} label="First Name:" variant="standard" />
    </Stack>
  </Grid>
  <Grid item xs={12} sm={6} md={6}>
    <Stack>
    <TextField sx={{marginBottom:"30px"}} label="Last Name:" variant="standard"  />
    </Stack>
  </Grid>
</Grid>


<Grid container spacing={5}>
  <Grid item xs={12} sm={6} md={6}>
    <Stack>
      <TextField sx={{marginBottom:"30px"}} label="Email:" variant="standard"/>
    </Stack>
  </Grid>
  <Grid item xs={12} sm={6} md={6}>
    <Stack>
      <TextField sx={{marginBottom:"30px"}} label="Phone Number:" variant="standard"/>
    </Stack>
  </Grid>
</Grid>

<Grid container spacing={5}>
  <Grid item xs={12} sm={6} md={6}>
    <Stack>
      <TextField sx={{marginBottom:"30px"}} label="Business Name:" variant="standard"/>
    </Stack>
  </Grid>
  <Grid item xs={12} sm={6} md={6}>
    <Stack>
      <TextField sx={{marginBottom:"30px"}}  label="Bussen Type:" variant="standard"/>
    </Stack>
  </Grid>
</Grid>
 
 <Box sx={{maxWidth:"200px", height:"50px", bgcolor:"#F7F7F7", border:"2px solid #F7F7F7", marginBottom:"20px", mt:"50px"}} > <Checkbox/> <span> I’m not a robot</span> <img src='/assets/Icons/captcha_icon.png' alt='not loaded' width="33px" /> </Box>
 <Box sx={{maxWidth:"170px", backgroundColor:"#D0AC54", color:"white", textAlign:"center", padding:"7px"}} >PARTICIPATE</Box>
 </Container>
      
    </Box>      
  )
}







export default Form
