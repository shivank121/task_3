import React from 'react'
import Banner from '../../Components/Common/Banner'

const About = () => {
  const css = {
    maxWidth:"500px", position:"absolute", 
        right:{xs:"3%",md:"10%"},
  } 

  return (
    <>
        <Banner style={css} backgroundImg="/assets/images/about_banner_img.png" text4="About SAA" />
    </>
  )
}

export default About
