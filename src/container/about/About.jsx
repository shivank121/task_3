import React from 'react'
import Banner from '../../Components/Common/Banner'
import Streeing_committee from '../../Components/Contents/about/Streeing_committee'

// import Code_Conduct from '../../Components/Contents/home/Code_Conduct'

const About = () => {
  const css = {
    maxWidth:"500px", position:"absolute", 
        right:{xs:"3%",md:"10%"},
  } 


  const borderBottomStyle = {
    borderBottom:"2px solid #D0AC54",
    // borderRadius:"3px"
  } 

  return (
    <>
        <Banner style={css} borderBottomStyle={borderBottomStyle} backgroundImg="/assets/images/about_banner_img.png" text4="About SAA" />
        <Streeing_committee/>
    </>
  )
}

export default About
