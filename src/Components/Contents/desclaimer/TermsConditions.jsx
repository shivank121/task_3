import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Container from "../../Common/Container";
import { makeStyles } from "@mui/styles";

const TermsConditions = (()=>{

    const classes = useStyle();

    return(
        <Box>
            <Container>
                <Stack>
                    <Box sx={{display:"flex", justifyContent:"center", mb:"50px"}} >
                        <Box sx={{ maxWidth:"450px", borderBottom:"3px solid #D0AC54",}} >
                            <Typography fontSize="40px" fontWeight="bold" color="#D0AC54" mb="5px" >Terms and Conditions</Typography>
                        </Box> 
                    </Box>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Terms And Conditions of Use</Typography>

                    <p className={classes.para} >The website (www.mygoldguide.in) and all its associated sites, if any, (collectively called this "Website") are operated and published by World Gold Council (India) Private Limited ("World Gold Council" or “WGC”). Your use of this Website or any of its sections or pages is governed by these terms and conditions and by our Privacy Policy (collectively, these "terms and conditions"). By accessing or using this Website you will be taken to have read and accepted these terms and conditions and to have consented to the processing of your personal data in accordance with our Privacy Policy. The World Gold Council reserves the right, without notice, to change or modify any of these terms and conditions in any manner and at any time and changes to these terms and conditions will take effect when posted on this Website. <br/> You are responsible for reading these terms and conditions each time that you access or use this Website. World Gold Council (India) Private Limited is a company registered in India under the Companies Act, 1956 with registration number CIN: U74900MH2011FTC224567 and having its registered office at B-6/3, 6th Floor, Laxmi Towers, C-25 Bandra Kurla Complex, Bandra (East), Mumbai 400051, India.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Use of this website</Typography>
                    <p className={classes.para} >This Website and the information and materials on this Website are provided for general informational and educational purposes only. You are permitted to save, display or print out information contained on this Website only for your personal, non-commercial use. Except as otherwise permitted by these terms and conditions, you are not permitted to modify, copy, distribute, transmit, display, reproduce, publish, license, frame, link, create derivative works from, transfer or otherwise use in any manner, in whole or in part, this Website or the information and materials on this <br/> Website without the prior written authorization of the World Gold Council and with suitable accreditation to the World Gold Council. To request such authorization, please contact us at info@gold.org.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Changes to this website</Typography>
                    <p className={classes.para} >This Website and the information and materials on this Website are provided for general informational and educational purposes only. You are permitted to save, display or print out information contained on this Website only for your personal, non-commercial use. Except as otherwise permitted by these terms and conditions, you are not permitted to modify, copy, distribute, transmit, display, reproduce, publish, license, frame, link, create derivative works from, transfer or otherwise use in any manner, in whole or in part, this Website or the information and materials on this Website without the prior written authorization of the World Gold Council and with suitable accreditation to the World Gold Council. To request such authorization, please contact us at info@gold.org.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Disclaimers and Limitations</Typography>
                    <p className={classes.para} >
                     Disclaimer of warranties and limitation of liability WGC makes no express or implied condition, representation or warranty or other term concerning this Website or any information or material on this Website, including, without limitation, any condition, representation or warranty or other term as to non infringement, satisfactory quality, fitness for a particular purpose or use, or as to the accuracy or completeness of any information or materials on or accessible through this Website. WGC hereby expressly excludes all express or implied conditions, representations, warranties and other terms of any kind relating to the availability or operation of this Website and any information or materials on or accessible through this Website to the extent permitted by law.
                     <br/>
                      Neither WGC nor any of its parent companies or subsidiaries or affiliates nor any director, officer or employee of any of the foregoing shall be liable or have any responsibility for any loss, liability or damage, cost or expense that you may incur in connection with (i) your use of this Website and any information or materials on or accessible through this Website, (ii) any erroneous connection or communication between you and WGC or any of its parent companies or subsidiaries or affiliates made through this Website, (iii) the transmission of any computer viruses or other harmful components that may cause damage to another's computer system or network although every reasonable effort has been made to ensure that the website is free from viruses, (iv) any aspect of the performance of this Website, including, without limitation, any failure, delay, interruption or disruption of this Website or your access to this Website, (v) the delivery of any information and materials or services available on or through this Website or the execution of any transactions made on or through this Website, (vi) any other cause relating to your access, or use of this Website and any of the information or materials on this Website, and (vii) any unauthorized access, theft, operator errors, strikes or other labour problems or any force majeure, regardless of whether any of the foregoing circumstances in this paragraph giving rise to such loss, liability or damage may have been within the control of WGC, any of its parent companies or subsidiaries or affiliates or any third party servicing this Website.<br/>
                       Without limiting any of the foregoing, in no event will WGC or any of its parent companies or subsidiaries or affiliates or any director, officer or employee of any of the foregoing be liable, whether in tort (including, without limitation, negligence), contract or otherwise, for any loss of profits, income, goodwill, or contracts, loss or corruption of data, business interruption, consequential, special, punitive, incidental, indirect or similar losses or damages arising from, related to or connected with your access or inability to access this Website, your use of this Website and/or your reliance on the information and materials on this Website, even if notified or advised of the possibility of such losses or damages.
                    </p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Security</Typography>
                    <p className={classes.para} >Whilst every reasonable effort has been made to ensure that the content of this Website is secure, WGC makes no condition, representation or warranty or other term, express or implied, concerning the security of this Website, including, without limitation, with respect to the ability of unauthorized persons to access, intercept or use information or materials transmitted by you to this Website or from this Website to you.<br/> Neither WGC nor any of its parent companies or subsidiaries or affiliates nor any director, officer or employee of any of the foregoing shall be liable or have any responsibility for any loss, liability or damage, cost or expense that you may incur from any third party access, interception or use of any information, materials or services on or accessible through this Website or any tampering with your computer system done by unauthorized parties.</p>
                   
                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Accuracy of Information</Typography>
                    <p className={classes.para} >Although the information and materials on this Website were obtained or compiled from sources WGC believes to be reliable, WGC does not make any express or implied condition, representation, warranty or other term as to the accuracy, validity, reliability, timeliness or completeness of any such information or materials in general or in connection with any particular use or purpose.<br/> WGC does not represent or endorse the accuracy or reliability of any third party advice, opinion, statement, information or materials on (including links from) or accessible through this Website.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Investment Advice - No offer or recommendation</Typography>
                    <p className={classes.para} >This Website and the information and materials on this Website are not, and should not be construed as, an offer to buy or sell, or as a solicitation of an offer to buy or sell, any gold related products or any other products, securities or investments. This Website does not, and should not be construed as acting to, sponsor, advocate, endorse or promote any gold related products or any other products, securities or investments. This Website and the information and materials on this Website do not, and shall not be construed as, making any recommendation or providing any investment or other advice with respect to the purchase, sale or other disposition of any gold related products or any other products, securities or investments, including, without limitation, any advice to the effect that any gold related transaction is appropriate or suitable for any investment objective or financial situation of a prospective investor. A decision to invest in any gold related products or any other products, securities or investments should not be made in reliance on any of the information or materials on this Website. Before making any investment decision, prospective investors should seek advice from their financial, legal, tax and accounting advisers, take into account their individual financial needs and circumstances and carefully consider the risks associated with such investment decision.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Local Legal Restrictions</Typography>
                    <p className={classes.para} >The information and materials on this Website are not directed to and may not be used by any person or entity in any jurisdiction where the direction or use of such information and materials is prohibited or would be contrary to applicable laws, rules or regulations of any governmental authority or regulatory organization. <br/>
                     You agree that given the nature of the internet, even though the Website is targeted to Indian residents only, it may be accessed in other parts of the world. If you are not an Indian resident and yet use the Website, you acknowledge, understand and agree that you are doing so on your own initiative and at your own risk and that it is your responsibility (and not WGC’s responsibility) to make sure that your use of the Website complies with all applicable local laws in your jurisdiction. If you are not an Indian resident, by using this Website and/or submitting your personally identifiable information or any other information on the Website, you expressly consent to the transfer of such data to India, and to the processing of such data on WGC’s Indian servers, where this data will be governed by Indian laws that may provide a level of data protection different than your country.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Use of forward-looking statements</Typography>
                    <p className={classes.para} >Information on this Website is provided solely for general information and educational purposes. It is not, and should not be construed as, an offer to buy or sell, or as a solicitation of an offer to buy or sell. The use of the words 'believes,' 'expects,' 'may,' or 'suggests' or words of similar import, identifies a statement as 'forward-looking.' In light of the significant uncertainties inherent in the forward-looking information included herein, the inclusion of such information should not be regarded as a representation by WGC that the forward-looking statements will be achieved.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Third Party Links</Typography>
                    <p className={classes.para} >This Website may contain links to websites owned, sponsored or maintained by third parties, including, without limitation, links to members of the World Gold Council’s ultimate parent and links to investment partners associated with WGC or its parent companies or subsidiaries or affiliates. These links are provided only as a convenience to you. The inclusion of any link on this Website to a third party website is not and does not imply any affiliation, sponsorship, endorsement, approval, investigation, verification or authorization by WGC of such third party website or the information or materials on such third party website. WGC makes no representations, warranties or guarantees with respect to, and is not responsible for, any third party website or the information and materials on such third party website or your use of or inability to use such third party website. You should also be aware that the terms and conditions of use for any third party website and such website's privacy policies may be different from those applicable to your use of this Website.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Content of the website available in regional languages</Typography>
                    <p className={classes.para} >The content of website along with being in English is also available in some regional languages. The content available in regional languages has been translated from English. The original content of this site is in English and in the event of any differences between the content in English and content in regional languages, the content in English language is to be considered as the most accurate. By choosing to view the content in regional language you expressly understand and accept the shortcomings or differences in the translation. You acknowledge that in no event shall WGC be responsible for any act, including result or claim arising out of you relying on content in regional languages.</p>


                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Indemnity</Typography>
                    <p className={classes.para} >You agree to indemnify, defend and hold harmless WGC, its parent companies, subsidiaries, affiliates and group companies and their directors, officers, employees, agents, third party service providers, and any other third providing any service to WGC (each an “Indemnitee”), whether directly or indirectly, from and against any and all losses, liabilities, claims, damages, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by WGC or any other Indemnitee that arise out of, result from, or may be 
                    <br/> payable by virtue of, any breach of any terms of this Agreement including any representation, warranty, covenant or agreement made or obligation to be performed by you pursuant to this Agreement.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Privacy & Cookies</Typography>
                    <p className={classes.para} >Read about our Privacy Statement. Read about our Cookies usage.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >General</Typography>
                    <p className={classes.para} >WGC is not responsible for the content or the privacy policies of websites to which it may provide links or the websites of its advertisers. WGC uses all reasonable precautions to keep the personal information disclosed to us secure and to disclose such information only to responsible third parties after permission from the visitor.</p>

                    <Typography variant='h5' sx={{color:"#0F4430", mb:"15px" }} >Governing Law and Severability</Typography>
                    <p className={classes.para} >This Website is governed by and shall be construed in accordance with laws of India and any dispute as to its terms shall be submitted to the exclusive jurisdiction of the courts in Mumbai.
                    <br/> Should any part of these terms and conditions be found to be illegal, invalid or unenforceable under any applicable law, such term shall, insofar as it is severable from the remaining terms and conditions, be deemed omitted from these terms and conditions and shall in no way affect the legality, validity or enforceability of the remaining terms and conditions.</p>

             

                </Stack>
            </Container>
        </Box>
    )
})

const useStyle = makeStyles({
    para:{
        marginBottom:"35px",
        lineHeight:"15px",
        fontSize:"12px",
        color:"#231F20",
        fontWeight:"500"
    }
})

export default TermsConditions;