import { Stack } from '@mui/material'
import React from 'react'
import Swarna_banner from '../Components/Banners/Swarna_banner'
import Swarn_info from '../Components/Contents/Swarn_info'

const News_update = () => {
  return (
    <div>
      <h1>News and update</h1>
      <Stack>
        <Swarna_banner/>
        <Swarn_info/>
      </Stack>
    </div>
  )
}

export default News_update
