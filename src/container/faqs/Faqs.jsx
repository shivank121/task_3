import React from 'react'
import Banner from '../../Components/Common/Banner'
import Question from '../../Components/Contents/faqs/Question'

const Faqs = () => {
    const css = {
        maxWidth:"450px", position:"absolute", 
        right:{xs:"1%",md:"2%"},
        marginTop:"80px",
    }

    const borderBottomStyle = {
      borderBottom:"2px solid #D0AC54",
      // borderRadius:"3px"
    } 
  return (
    <>
      <Banner style={css} backgroundImg="/assets/images/faqs_banner_img.png" borderBottomStyle={borderBottomStyle} text4="Swarna Adarsh Abhiyaan- Frequently Asked Questions:" />
      <Question/>    
    </>
  )
}
export default Faqs
