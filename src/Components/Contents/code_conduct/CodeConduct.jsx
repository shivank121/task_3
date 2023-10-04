import React, { useState } from 'react'
import data from "../../../helper/constants"
import Container from '../../Common/Container'
import { Box, Stack, Typography } from '@mui/material'

const CodeConduct = () => {

  return (
    <>
      <Box>
        <Container>
            <Box sx={{
              marginBottom:"40px"
            }} >
                <Typography sx={{textAlign:{md:"center",xs:"justify"}, lineHeight:"15px", fontSize:"12px"}} >While Indians have a strong affinity for gold, consumers seeking to purchase gold face some challenges e.g. price transparency, quality assurance amongst others. As the industry is fragmented and there is no overarching supervisory body, an industry-defined Code of Conduct is deemed to be an effective mechanism for protecting the interest of gold consumers and achieve sustainable growth of the industry. Effective adoption of Code of Conduct should enhance trust of consumers across all gold products. This should, in turn, drive demand for both established and new gold products, benefitting both consumers and the industry. These documents are a step in that direction, as it lays out the self-regulated code of conduct across gold value chain including retailing, digital gold retailing, manufacturing, bullion trading, refining and assaying & hallmarking</Typography>
            </Box>



            <Box sx={{display:"flex" , flexWrap:"wrap" , justifyContent:"center" }} >
                {
                    data.code_Conduct.map((cruEle)=>{
                        const {id , img, name} = cruEle
                        return(

                            <Box key={id} sx={{maxWidth:"350px", margin:"20px 20px"}}  >
                                <Stack>
                                <Box mb="10px">
                                    <img src={img} alt="not loaded"/>
                                </Box>
                                <Box>
                                  <Typography sx={{color:"#0E4934",textAlign:"center",}} >{name}</Typography>
                                </Box>
                                <Box sx={{
                                  display:"flex", 
                                  justifyContent:"center",
                                  mr:"10px"}} >

                                  <Typography >Download Brochure</Typography>
                                  <Box> 
                                    <img src="/assets/Icons/download_icon.png" alt='not loaded'/> 
                                  </Box>
                                </Box>
                                    
                                </Stack>
                            </Box>
                        )
                    })
                }
            </Box>
        </Container>
      </Box>
    </>
  )
}

export default CodeConduct
