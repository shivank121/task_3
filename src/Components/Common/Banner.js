import React from 'react';
import { Box, Typography } from '@mui/material';

const Banner = ({ backgroundImg, style, text1, text2, text3, text4 }) => {

  const bannerStyle = {
    backgroundImage:`url(${backgroundImg})`,
    backgroundSize:{xs:"cover",md:"cover",sm:"cover"},
    height:{xs:"28vh", sm:"50vh",md:"100vh"},
    display:"flex", alignItems:"center", justifyContent:"space-evenly",
    backgroundRepeat:"no-repeat",
  }


  return (
    <Box 
    sx={bannerStyle}
    >
    <Box sx={style}>
      <Box sx={{ }} >
        <Typography sx={{fontSize:"23px", color:"white",
        '@media(max-width:"600px")':{
             fontSize:"5px"
        },
        }} >{text1} <span>{text2}</span> {text3}</Typography>
        <Typography  sx={{fontSize:"35px", color:"#D0AC54"  }} >{text4}</Typography>
      </Box>
    </Box>
    
      {/* <Typography
        sx={{
          color: 'white',fontSize: { xs: '10px', sm: '23px', md: '24px', xl: '70px' },}}>byyyy </Typography>

        <Typography sx={{ color: '#D0AC54', fontSize: { xs: '20px', sm: '40px', md: '40px', xl: '70px' } }}>
         hiiiii </Typography> */}
    
    </Box>
  );
};

export default Banner;