import { Stack } from '@mui/material'
import React from 'react'

const Container = ({sx={}, ...props }) => {
  const css ={
    maxWidth:"900px",
    margin:"20px auto",
    padding:"20px",
    ...sx
  }
  
    return (
    <>
      <Stack sx={css} {...props} />
    </>
    )

}

export default Container;
