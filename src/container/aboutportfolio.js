import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Icon } from '@iconify/react';
import japanesePostOffice from '@iconify/icons-emojione/japanese-post-office';


const AboutPortfolio = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
            <div className="container-fluid" id="about" style={{
                    display:"flex",
                    alignItems:"center",
                    fontFamily:"Lexend Giga",
                    flexDirection:"column",
                    height:"100%",
                    padding:"1%"}}>
                <h1 data-aos="fade-up" style={{textAlign:"center"}}></h1>
                <div data-aos="fade-right" className="container-fluid " >
                    
                            <h2 style={{fontSize:"30px"}}>INTERIOR DESIGN PORTFOLIO – INDIAN INTERIORS <Icon icon={japanesePostOffice} /> </h2>
<p>INDIAN INTERIOR DESIGNER’S WILL HELPS YOU TO BEAUTIFY YOUR HOME, KITCHEN, CORPORATE OFFICE, RETAILS STORES AND WASHROOMS. OUR EXPERT DESIGNERS DESIGN YOUR PROJECT EFFICIENTLY BY UTILIZING THE RESOURCES. YOU CAN CHECKOUT SOME OF OUR BEST DESIGNS, WE HAVE CREATED OVER DIFFERENT VERTICALS.

</p><br/>
                            
                        
                </div>

            </div>
        </>
    )
}
export default AboutPortfolio;