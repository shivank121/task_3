import { Box, Grid, Stack, Typography, } from '@mui/material'
import React from 'react'
import Container from '../../Common/Container'
import { makeStyles } from '@mui/styles'

const Code_Conduct = ({HeadingContainer, headingSideLine,textStyle , text}) => {

  const classes = useStyle();

  return (
   <Box sx={{
    backgroundImage:`url(${"/assets/images/code_bg_img.png"})`
   }} >
    <Container>

      <Box sx={HeadingContainer}>
        <Box sx={headingSideLine}/>
        <Typography sx={textStyle}> {text} </Typography>
        <Box sx={headingSideLine}/>
      </Box>

      <Box mb="50px" >
        <Typography textAlign="center" fontSize="13px" >While Indians have a strong affinity for investment in gold, individuals seeking to invest in gold face several challenges in doing so, particularly around price transparency and quality assurance. As the market is fragmented and there is no overarching supervisory body, an industry - defined Code of Conduct is deemed to be an effective mechanism for protecting the interest of retail investors. Read about the various code of conduct below:</Typography>
      </Box>

      <Grid container spacing={2} mb="20px" >
        <Grid item xs={12} sm={4} md={4} className={classes.common}  >
          <Stack> 
            <img src="/assets/images/code_retail_img.png" alt='not loaded'  />
            <Typography  sx={{ m:"25px 0px", textAlign:"center",fontSize:"20px" }} >RETAIL</Typography>
           </Stack>
        </Grid>

        <Grid item xs={12} sm={4} md={4} className={classes.common} >
        <Stack> 
            <img src="/assets/images/code_menufacturing_img.png" alt='not loaded' />
            <Typography sx={{fontSize:"20px", m:"25px 0px", textAlign:"center", color:"#D0AC54" }} >MANUFACTURING</Typography>
           </Stack>
        </Grid>

        <Grid item xs={12} sm={4} md={4} className={classes.common} >
        <Stack> 
            <img src="/assets/images/code_digitalLogo_img.png" alt='not loaded' />
            <Typography  sx={{ m:"25px 0px", textAlign:"center", fontSize:"20px"}} >DIGITAL LOGO</Typography>
           </Stack>
        </Grid>

      </Grid>


      <Grid container spacing={2} >
        <Grid item xs={12} sm={4} md={4} className={classes.common} >
        <Stack> 
            <img src="/assets/images/code_bullion_img.png" alt='not loaded'/>
            <Typography  sx={{ m:"25px 0px", textAlign:"center",fontSize:"20px" }} >BULLION TRADING</Typography>
           </Stack>
        </Grid>

        <Grid item xs={12} sm={4} md={4} className={classes.common} >
        <Stack> 
            <img src="/assets/images/code_assaying_img.png" alt='not loaded'/>
            <Typography  sx={{ m:"25px 0px", textAlign:"center", fontSize:"20px" }} >ASSAYING</Typography>
           </Stack>
        </Grid>

        <Grid item xs={12} sm={4} md={4} className={classes.common} >
        <Stack  > 
            <img src="/assets/images/code_refining_img.png" alt='not loaded'/>
            <Typography  sx={{ m:"25px 0px", textAlign:"center" ,fontSize:"20px"}} >REFINING</Typography>
           </Stack>
        </Grid>
      </Grid>

    </Container>
   </Box>
  )
}

const useStyle = makeStyles({
 common:{
  display:"flex",
  justifyContent:"center"
 },
 
})
export default Code_Conduct
