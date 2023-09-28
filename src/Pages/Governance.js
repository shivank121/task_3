import { Stack } from '@mui/material'
import React from 'react'
import Banner from '../Components/Banners/Banner'
import Steering_Working from '../Components/Contents/Steering_Working'

const Governance = () => {
  return (
    <div>
      <h1>Governance page</h1>
      <Stack>
        <Banner/>
        <Steering_Working/>
      </Stack>
    </div>
  )
}

export default Governance
