import { Box, Button, Grid, Stack, Typography, styled } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const classes = useStyle();

  const [menu , setMenu] = useState()

  return (
    
<>
  <Box margin="0px 20px 0px 20px"  className={menu ? classes.header : null} >

    <Grid  container spacing={2} padding="15px 0px 0px 0px"  >

      <Grid item xs={6} sm={6} md={6} xl={6} >
        <Stack>
          <img src="./Assets/images/logo_img.png" alt='not loaded' width="150px" />
        </Stack>
      </Grid>


      <Grid item xs={6} sm={6} md={6} xl={6} sx={{ }} >
        <Box sx={{
        display:"flex", justifyContent:"end", alignItems:"center",
        marginTop:"8px",
        }}>
          <Box mr="15px" >
            <Typography sx={{
              color:"#D0AC54", 
              fontSize:"17px",
              cursor:"pointer"

              }}  
              onClick={()=>setMenu(true)}>  MENU</Typography>
          </Box>
          <Box>
            <img 
            style={{cursor:"pointer"}}
            onClick={()=>setMenu(true)} src='/Assets/Icons/menu_icon.png' alt='not loaded' width="25px" />
          </Box>

        </Box>

      </Grid>

    </Grid>

    </Box>

 


    <Box className = {menu ? classes.navItem : classes.navlist} >

      <Box  sx={{
        display:"flex", flexDirection:'column',
        height:"100%",
      }}>

      <NavLink to='about' >
        <Button className={classes.abc} onClick={()=>setMenu(false)}>ABOUT</Button>
      </NavLink>

      <NavLink to="governence" >
        <Button className={classes.abc} onClick={()=>setMenu(false)}>GOVERNENCE</Button>
      </NavLink>

      <NavLink to='code' >
        <Button sx={{color:"white"}} onClick={()=>setMenu(false)}>CODE OF CONDUCT</Button>
      </NavLink>

      <NavLink to="news" >
        <Button className={classes.text} onClick={()=>setMenu(false)}>NEWS AND UPDATE</Button>
      </NavLink>

      <NavLink to="faqs" >
        <Button className={classes.text} onClick={()=>setMenu(false)}>FAQS</Button>
      </NavLink>

      <NavLink to="" >
        <Button className={classes.text} onClick={()=>setMenu(false)}>DOWNLOADABLE</Button>
      </NavLink>

      <NavLink to='privacy'>
        <Button className={classes.text} onClick={()=>setMenu(false)}>PRIVACY POLICY</Button>
      </NavLink>

      <NavLink to='disclaimer'>
        <Button  className={classes.text} onClick={()=>setMenu(false)}>DISCLAIMER</Button>
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
    display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", 
    textAlign:"center",
    margin:"0px",
    padding:"0px",    
  },
  abc:{
  color:"red"
  },
  
  header:{
    display:"none"
  }

  
})
  


export default Header

