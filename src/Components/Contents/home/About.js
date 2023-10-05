import React from 'react'
// import Banner from '../../Common/Banner'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Container from "../../Common/Container"
import { makeStyles } from '@mui/styles'

const About = ({ HeadingContainer, headingSideLine,textStyle , text }) => {
  const classes = useStyle();
  return (
    
      <Box sx={{
        backgroundImage:`url(${"/assets/images/home's_about_bg_img.png"})`,
        m:"30px 0px"
      }} >
        <Container>
       
          <Box sx={HeadingContainer}>

            <Box sx={headingSideLine} />

            <Typography sx={textStyle}> {text}</Typography>

            <Box  sx={headingSideLine}/> 

          </Box>

          <Grid container spacing={2} sx={{
            display:{xs:"flex"},
            flexDirection:{xs:"column-reverse" , sm:"row", md:"row" }
          }} >
            <Grid item xs={12} sm={4} md={4} >
             <Stack>
              <Typography fontSize="11px" lineHeight="12.5px" textAlign="justify" m="20px 0px 10px 0px" >The Indian Gold industry has always worked towards improving its quality of business operations and upholding ethical standards. From the standardization of weights and measures to the introduction of hallmarking, it has not only climbed upwards in its developmental trajectory but also ensured the process is more tra <span style={{fontWeight:"bold"}}  > - Swarna Adarsh Abhiyaan.</span> It is a one-of-its- kind industry initiative that offers best practices and suitable solutions that will hand-hold you through your business journey in a principled manner. This will retain the trust of the existing stakeholders and generate interest and stimulate new stakeholders to follow these principles. Swarna Adarsh Abhiyaan is the ideal way for our industry to operate in order to thrive and induce trust amongst gold consumers. The principles have been developed for the whole gold industry to strive towards excellence. Combined, the Swarna Adarsh Abhiyaan aims to guide all its stakeholders towards a righteous yet profitable way of doing business. By pledging to follow these guiding principles together, we take a step forward in uplifting our businesses and restoring the golden glory of the industry as a whole.</Typography>

              <Typography color="#D0AC54" >READ MORE + </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={8} md={8} sx={{display:"flex", justifyContent:"center"}} >
              <Box sx={{ }}>
                <img className={classes.image} src='/assets/images/home_about_img.png' alt='not loaded'/>
              </Box>
            </Grid>
          </Grid>

        </Container>
      </Box>
     
  )
}

const useStyle = makeStyles({
  image:{
    width:"500px",
    '@media(max-width:600px)':{
      width:"330px"
    },
  }
})

export default About
