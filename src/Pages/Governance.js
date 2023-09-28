import { Stack } from '@mui/material'
import React from 'react'
import Steering_Working from '../Components/Contents/Steering_Working'
import Banner from '../Components/Common/Banner'

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
