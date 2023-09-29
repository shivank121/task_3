import React from 'react'
import Banner from '../../Components/Common/Banner'

const CodeOfConduct = () => {
    const css = {
        maxWidth:"500px", position:"absolute", 
        right:{xs:"1%",md:"2%"},
        marginTop:"80px",
    }



  return (
    <>

      <Banner style={css} backgroundImg="/assets/images/code_conduct_banner_img.png" text4="Code Of Conduct" />
      
    </>
  )
}

export default CodeOfConduct
