import { Box, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Container from '../Common/Container'

const Form = ({ HeadingContainer, headingSideLine,textStyle , text }) => {
  return (


    <Box>
      <Container>
        <Box sx={HeadingContainer}>
          <Box sx={headingSideLine} />
          <Typography sx={textStyle}> {text}</Typography>
        <Box  sx={headingSideLine}/> 
        </Box>
        <Box>
         <Grid container spacing={2} >
          <Grid item xs={12} sm={6} md={6}>
          <Stack>
            <TextField label="First Name" variant="standard" />
            <TextField label="yourmail@gmail.com" variant="standard" />
            <TextField label="business Type" variant="standard" />
          </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={6}></Grid>
         </Grid>

        </Box>
      </Container>
    </Box>      
  )
}

export default Form
