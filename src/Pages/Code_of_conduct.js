import { Stack } from '@mui/material'
import React from 'react'
import CodeConduct_banner from '../Components/Banners/CodeConduct_banner'
import Code_Conduct from '../Components/Contents/Code_Conduct'

const Code_of_conduct = () => {
  return (
    <div>
      <h1>Code of conduct page</h1>
      <Stack>
        <CodeConduct_banner/>
        <Code_Conduct/>
      </Stack>
    </div>
  )
}

export default Code_of_conduct
