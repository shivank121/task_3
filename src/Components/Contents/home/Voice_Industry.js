import { Box, Typography } from '@mui/material'
import React from 'react'
import Container from '../../Common/Container'

const Voice_Industry = ({HeadingContainer, headingSideLine,textStyle , text}) => {
  return (
      <Box>
        <Container>
        <Box sx={HeadingContainer}>

          <Box sx={headingSideLine} />

          <Typography sx={textStyle}> {text}</Typography>

          <Box  sx={headingSideLine}/> 
        </Box>
        
        <Box>
          <Typography sx={{textAlign:"center", lineHeight:"20px" , fontSize:"13px" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
        </Box>

        <Box>
          
        </Box>



        </Container>
      </Box>      
  )
}

export default Voice_Industry
