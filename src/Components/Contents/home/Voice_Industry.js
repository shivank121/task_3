import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Container from '../../Common/Container'

const Voice_Industry = ({HeadingContainer, headingSideLine,textStyle , text}) => {

  const img = [ '/assets/images/loren_img.png','/assets/images/lorem2_img.png','/assets/images/lorem3_img.png'];
  
  const industryData = [
    {
      id:1,
      img:"/assets/images/loren_img.png"
    },
    {
      id:2,
      img:"/assets/images/lorem2_img.png"
    },
    {
      id:2,
      img:"/assets/images/lorem3_img.png"
    }
  ]
  
  
  return (
      <Box sx={{
        backgroundImage:`url(${"assets/images/retail_bg_img.png"})`
      }} >
        <Container>
        <Box sx={HeadingContainer}>

          <Box sx={headingSideLine} />

          <Typography sx={textStyle}> {text}</Typography>

          <Box  sx={headingSideLine}/> 
        </Box>
        
        <Box>
          <Typography sx={{textAlign:"center", lineHeight:"20px" , fontSize:"13px", mb:"70px"  }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
        </Box>
         
         <Box sx={{display:'flex', justifyContent:"space-around", flexWrap:"wrap",  mb:"70px"}} >
          {
            industryData.map((Data)=>{

              return(
                <Box mb="30px" >                  
                    <img src={Data.img} alt='not loaded' width="200px"/>
                    <Typography textAlign="center" maxWidth="200px" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                </Box>
              )
            })
          }
         </Box>

        





        {/* <Box> */}
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4} >
              <Box sx={{display:'flex', justifyContent:"center"}} >
                <Stack>
                  <img src='/assets/images/loren_img.png' alt='not loaded' />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} >
            <Box sx={{display:'flex', justifyContent:"center"}} >
                <Stack>
                  <img src='/assets/images/lorem2_img.png' alt='not loaded' />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}> 
            <Box sx={{display:'flex', justifyContent:"center"}} >
                <Stack>

                    <img src='/assets/images/lorem3_img.png' alt='not loaded' />
                </Stack>

              </Box>
            </Grid>
          </Grid> */}

         
        {/* </Box> */}



        </Container>
      </Box>      
  )
}

export default Voice_Industry
