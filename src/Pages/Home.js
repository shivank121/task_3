import { Stack } from '@mui/material'
import React from 'react'
import About from '../Components/Contents/About'
import Retail from '../Components/Contents/Retail'
import Code_Conduct from '../Components/Contents/Code_Conduct'
import Voice_Industry from '../Components/Contents/Voice_Industry'
import Form from '../Components/Auth/Form'
import Banner from '../Components/Common/Banner'

const Home = () => {
  return (
    <div>
      <Stack>
        <Banner/>
        <About/>
        <Retail/>
        <Code_Conduct/>
        <Voice_Industry/>
        <Form/>
        
       </Stack>

    </div>
  )
}

export default Home
