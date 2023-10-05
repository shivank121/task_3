import React from 'react'
import Banner from '../../Components/Common/Banner'
import Code_Conduct from '../../Components/Contents/code_conduct/CodeConduct'

const CodeOfConduct = () => {
    const css = {
        maxWidth:"500px", position:"absolute", 
        right:{xs:"1%",md:"2%"},
        marginTop:"80px",
    }
    const borderBottomStyle = {
      borderBottom:"2px solid #D0AC54",
      // borderRadius:"3px"
    } 


  return (
    <>

      <Banner style={css} backgroundImg="/assets/images/code_conduct_banner_img.png"  borderBottomStyle ={borderBottomStyle}  text4="Code Of Conduct" />
      <Code_Conduct/>
      
    </>
  )
}

export default CodeOfConduct
