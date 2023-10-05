import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Banner = ({ backgroundImg, style, text1, text2, text3, text4,borderBottomStyle,pageImg  }) => {

  const bannerStyle = {
    backgroundImage:`url(${backgroundImg})`,
    backgroundSize:{xs:"cover",md:"cover",sm:"cover"},
    height:{xs:"45vh", sm:"100vh",md:"100vh"},
    maxWidth:{xs:"100vw"},
    display:"flex", alignItems:"center", justifyContent:"space-evenly",
    backgroundRepeat:"no-repeat",
  }


  return (
    <Box 
    sx={bannerStyle}
    >
    <Box sx={style}>
      <Box sx={borderBottomStyle} >
        <Typography sx={{fontSize:"23px", color:"white",
        '@media(max-width:"600px")':{
             fontSize:"5px"
        },
        }} >{text1} <span>{text2}</span> {text3}</Typography>
        <Typography  sx={{fontSize:"35px", color:"#D0AC54"  }} >{text4}</Typography>
      </Box>
    </Box>
     
     <Grid>
      <Grid item xs={12}  md={12} sm={12}
      sx={{
        position:"absolute", 
        top:{xs:"37%", sm:"70%", md:"75%" }, 
        right:"10%"
      }} >
         <Box
          // sx={{position:"absolute", top:"70%", right:"10%"}} 
          >
           <img src={pageImg} alt='note loaded' width="150px" />
            </Box>

      </Grid>
     </Grid>
    
    </Box>
  );
};

export default Banner;