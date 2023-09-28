import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
    <Box sx={{
      // width:"100vw",
      backgroundImage:`url(${"/assets/images/banner_img.png"})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:{xs:"cover", sm:"cover", md:"cover"},
      height:{xs:"25vh", sm:"50vh",md:"100vh"},
      // width:{xs:"10vw", sm:"100vw",md:"100vw"},
      // height:"100vh"
    }} >
    <Container>
      <Box sx={{
        // position:"absolute",
        // top:{xs:"140px" ,sm:"200px", md:"260px"},
        // right:{xs:"15px",sm:"0", md:"150px" }

      }} >
        <Typography sx={{
          color:"white",
          fontSize:{xs:"10px" , sm:"23px", md:"24px", xl:"70px"},
        }}  >Working <span style={{fontWeight:"bold"}} > together,</span> on principles.</Typography>
        
        <Typography  sx={{
          color:"#D0AC54",
          fontSize:{xs:"20px" , sm:"40px", md:"40px", xl:"70px"},
        }}>Isi Mey Faida Hai.</Typography>
      </Box>
    </Container>

    </Box>
  )
}

export default Banner
