import { Stack } from '@mui/material'
import React from 'react'
import About_banner from '../Components/Banners/About_banner'
import Steering_Working from '../Components/Contents/Steering_Working'

const About = () => {
  return (
    <div>
      <h1>Abou page</h1>
      <Stack>
        <About_banner/>
        <Steering_Working/>
      </Stack>
    </div>
  )
}

export default About
