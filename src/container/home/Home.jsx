import React from 'react'
import Banner from '../../Components/Common/Banner'
import About from '../../Components/Contents/About'
import Retail from '../../Components/Contents/Retail'
import Code_Conduct from '../../Components/Contents/Code_Conduct'
import Voice_Industry from '../../Components/Contents/Voice_Industry'
import Form from '../../Components/Auth/Form'

const Home = () => {
    const css ={
        maxWidth:"500px", position:"absolute", 
        right:{xs:"3%",md:"25%"},
    } 
  return (
    <>
      <Banner style={css} backgroundImg="/assets/images/banner_img.png" text1="Working" text2="together," text3="on principles" text4="Isi Mey Faida Hai."/>
      <About/>
      <Retail/>
      <Code_Conduct/>
      <Voice_Industry/>
      <Form/>
    </>
  )
}

export default Home

