import {Box, Button, Grid, Stack, Typography, styled } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const classes = useStyle();

  const [menu , setMenu] = useState()

  return (
    
<>
  <Box   className={menu ? classes.header : null} padding="6px" >

    <Grid  container spacing={2}  >

      <Grid item xs={6} sm={6} md={6} xl={6} >
        <Stack ml="20px">
          <img src="./Assets/images/logo_img.png" alt='not loaded' width="180px" />
        </Stack>
      </Grid>


      <Grid item xs={6} sm={6} md={6}   >
         <Box sx={{
        display:"flex",justifyContent:"end", alignItems:"center",
        marginTop:"20px",
        }}>
          <Box 
          mr="15px" 
          >
            <Typography sx={{
              color:"#D0AC54", 
              fontSize:"20px",
              cursor:"pointer",
              display:{xs:"none",sm:"inline-block", md:"inline-block"}

              }}  
              onClick={()=>setMenu(true)}>  MENU</Typography>
          </Box> 
          <Box mr="20px" >
            <img 
            style={{cursor:"pointer"}}
            onClick={()=>setMenu(true)} src='/Assets/Icons/menu_icon.png' alt='not loaded' width="30px" />
          </Box>

        </Box>

      </Grid>

    </Grid>

    </Box>

 


    <Box className = {menu ? classes.navItem : classes.navlist} sx={{
      height:{xs:"100vh",sm:"100vh",md:"100vh"}, 
      width:"100vw",
      zIndex:"999", 
      position:"fixed"}} >
       
      <Box  sx={{
        display:"flex",
        flexDirection:"column" ,
        justifyContent:"left",
        // height:"100%",
        lineHeight:"60px" ,
        
        ml:"50px"
      }}>

      <Box sx={{display:"flex", justifyContent:"right"}} >
        <Button sx={{fontSize:"27px", color:"white", mr:"20px"}} onClick={()=>setMenu(false)} >X</Button>
      </Box>

      <NavLink to='about' >
        <Button sx={{color:"white", 
        fontSize:"25px", lineHeight:"40px"}} onClick={()=>setMenu(false)}>ABOUT</Button>
      </NavLink>


        <NavLink to="governance"  >
          <Button sx={{color:"white", 
            fontSize:"25px", lineHeight:"40px"}} onClick={()=>setMenu(false)}>GOVERNENCE
          </Button>
        </NavLink>


      <NavLink to='code' >
        <Button sx={{color:"white",  
        fontSize:"25px", lineHeight:"40px"}} onClick={()=>setMenu(false)}>CODE OF CONDUCT</Button>
      </NavLink>

      <NavLink to="news" >
        <Button sx={{color:"white", 
        fontSize:"24px", lineHeight:"40px"}}  onClick={()=>setMenu(false)}>NEWS AND UPDATE</Button>
      </NavLink>

      <NavLink to="faqs" >
        <Button sx={{color:"white", 
        fontSize:"25px", lineHeight:"40px"}} onClick={()=>setMenu(false)}>FAQS</Button>
      </NavLink>

      <NavLink to="faqs" >
        <Button sx={{color:"white",  
        fontSize:"25px", lineHeight:"40px"}} onClick={()=>setMenu(false)}>DOWNLOADABLE</Button>
      </NavLink>

      <NavLink to='privacy'>
        <Button sx={{color:"white", 
        fontSize:"25px", lineHeight:"40px"}} onClick={()=>setMenu(false)}>PRIVACY POLICY</Button>
      </NavLink>

      <NavLink to='disclaimer'>
        <Button  sx={{color:"white", 
        fontSize:"25px", lineHeight:"40px"}} onClick={()=>setMenu(false)}>DISCLAIMER</Button>
      </NavLink>
      </Box>
      
    </Box>


    </>
    
  )
}

const useStyle = makeStyles({

  navlist:{
    // height:{md:"100vh"},
    display:"none"
    
  },
  navItem:{
    display:"inline-block",
    backgroundColor:"#CAA64E",
    // display:"flex",
    // flexDirection:"column", justifyContent:"left", 
    // textAlign:"center",
    float:"left",
    margin:"0px",
    padding:"0px",    
  },
  
  header:{
    display:"none"
  },
  // text:{
  //   color:"red",
  //   outline:"none",
  //   borderBottom:"none"
  // }

  
})
  


export default Header

