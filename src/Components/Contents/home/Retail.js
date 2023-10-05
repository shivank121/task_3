import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Container from "../../Common/Container";

import data from '../../../helper/constants'
import { makeStyles } from "@mui/styles";


const Retail = ({HeadingContainer, headingSideLine,textStyle , text}) =>{

  const [info, setInfo] = useState(data.Investment_Principle_data)
const classes = useStyle();
    return(
        <Box sx={{
            backgroundImage:`url(${"/assets/images/retail_bg_img.png"})`
        }} >
            <Container>
            <Box sx={HeadingContainer}>

                <Box sx={headingSideLine} />

                <Typography sx={textStyle}> {text}</Typography>

                <Box  sx={headingSideLine}/> 

            </Box>

            <Box sx={{display:"flex" , flexWrap:"wrap", justifyContent:"space-around",  margin:"0 auto" }}  >
                { 
                    info.map((currEle)=>{
                     
                    const {id, name , img} = currEle

                        return(
                            
                            <Box  key={id} sx={{maxWidth:{md:"200px"}, display:'flex', flexDirection:"column", textAlign:"center" }}  >
                                <Box m="30px 20px 0px 20px" >
                                  <img className={classes.images} src={img} alt="not loaded" /> 
                                </Box>
                                <Box m="20px 0px"> 
                                <Typography sx={{color:"#D0AC54" ,}} >{name}</Typography>
                                </Box>
                                
                            </Box>
                        
                        )
                    })
                }
            </Box>
            
            <Box sx={{display:"flex", justifyContent:"center"}} > <Button sx={{color:"#D0AC54"}} > READ MORE + </Button> </Box>

            </Container>
        </Box>
    )
}

const useStyle = makeStyles({
    images:{
        width:"100px",
        '@media(max-width':{
            width:"50px"
        },
    }
})

export default Retail