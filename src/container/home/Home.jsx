import React from 'react'
import Banner from '../../Components/Common/Banner'
import About from '../../Components/Contents/home/About'
 import Retail from '../../Components/Contents/home/Retail'
 import Code_Conduct from '../../Components/Contents/home/Code_Conduct'
 import Voice_Industry from '../../Components/Contents/home/Voice_Industry'
 import Form from '../../Components/Auth/Form'




const Home = () => {
    const css ={
        maxWidth:"500px", position:"absolute", 
        right:{xs:"3%",md:"26%"},
    } 

    const HeadingContainer ={
      display:"flex" ,
      justifyContent:"center", 
      alignItems:"center" , 
      mb:"30px"
    }

    const headingSideLine = {
      width:"50px", 
      height:"5px", 
      backgroundColor:"#D0AC54", 
      borderRadius:"5px" 
    }
    
    const textStyle = {
      fontSize:{xs:"14px",md:"25px"},
      color:"#D0AC54",
      m:"0px 10px"
    }

  return (
    <>
      <Banner style={css} pageImg="/assets/images/bannerPageImg.png" backgroundImg="/assets/images/banner_img.png" text1="Working" text2="together," text3="on principles" text4="Isi Mey Faida Hai."/>
      <About HeadingContainer={HeadingContainer} headingSideLine={headingSideLine} textStyle={textStyle} text="About Swarna Adarsh Abhiyaan"  />
      <Retail HeadingContainer={HeadingContainer} headingSideLine={headingSideLine} textStyle={textStyle} text="Retail Gold Investment Principles" />
      <Code_Conduct HeadingContainer={HeadingContainer} headingSideLine={headingSideLine} textStyle={textStyle} text="Code of Conduct" />
      <Voice_Industry HeadingContainer={HeadingContainer} headingSideLine={headingSideLine} textStyle={textStyle} text="Voice of the Industry" />
      <Form HeadingContainer={HeadingContainer} headingSideLine={headingSideLine} textStyle={textStyle} text="Register Your Interest" /> 
    </>
  )
}

export default Home

