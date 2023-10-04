import React from 'react'
import Container from '../../Common/Container'
import { Box, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const Question = () => {
    const classes = useStyle();
  return (
    <Box>
        <Container>
            <Stack>
                <Box>
                    <p className={classes.questions} > + What is Swarna Adarsh Abhiyaan?</p>
                    <Typography sx={{fontSize:"13px", lineHeight:"15px", marginLeft:"20px", mb:"20px"}} >A – Swarna Adarsh Abhiyaan is an Indian gold industry initiative based on the Retail Gold Investment Principles by the World Gold Council to introduce best practices and operational guidance to the industry providers. The initiative has been kicked off with the help of various leaders of the Indian gold industry led by the World God Council to improve trust amongst gold consumers with the help of the code of conducts for various business types.</Typography>
                </Box>

                <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />
                    <p className={classes.questions} >+ How is the Swarna Adarsh Abhiyaan different from 
                    <Box className={classes.questions} ml="23px" mt='0px' >Retail Gold Investment Principles developed by the World Gold Council? </Box> </p>

                <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />

                    <p className={classes.questions} >+ Why is the Swarna Adarsh Abhiyaan important for the Indian Gold Industry?       </p>
                <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />
                    <p className={classes.questions} >+ Who has developed the Swarna Adarsh Abhiyaan?</p>
                <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />
                    <p className={classes.questions} >+ What are “Code of Conducts”?</p>
                <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />    
                    <p className={classes.questions} >+ How have the Code of Conducts been developed?</p>
                 <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />
                    <p className={classes.questions} >+ How will the Swarna Adarsh Abhiyaan help gold consumers?</p>
                <Box sx={{height:"2px", backgroundColor:"#D0AC54"}} />
                    <p className={classes.questions} >+ How can I be a part of the Swarna Adarsh Abhiyaan?</p>
            </Stack>
        </Container>
    </Box>
  )
}

const useStyle = makeStyles({
    questions:{
        color:"#6A122D",
        fontSize:"20px",
        fontWeight:"500",
        margin:"10px 0px"
    }
})

export default Question;