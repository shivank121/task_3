import React from 'react'
import Banner from '../../Components/Common/Banner'

const Faqs = () => {
    const css = {
        maxWidth:"450px", position:"absolute", 
        right:{xs:"1%",md:"2%"},
        marginTop:"80px",
    }
  return (
    <>
      <Banner style={css} backgroundImg="/assets/images/faqs_banner_img.png" text4="Swarna Adarsh Abhiyaan- Frequently Asked Questions:" />
    </>
  )
}
export default Faqs
