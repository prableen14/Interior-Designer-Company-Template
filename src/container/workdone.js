import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row,Col } from "react-bootstrap";
import work from "../assets/work.jpg"
import { Icon } from '@iconify/react';
import coffeeIcon from '@iconify/icons-ls/coffee';
import baselineCloudDone from '@iconify/icons-ic/baseline-cloud-done';
import hourglassNotDone from '@iconify/icons-emojione-monotone/hourglass-not-done';
import feedbackIcon from '@iconify/icons-codicon/feedback';



const WorkDone = ()=>{
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
                    backgroundImage:`url(${work})`,
                    backgroundSize:"100% 100%",
                    marginTop:"55px",
                    padding:"5%"}}>
                    
                <div  className="container-fluid "  data-aos="fade-left" style={{margin:"2% 0"}}>
                
                <Row style={{alignContent:"center"}}>
                        <Col md={6} xs={12} >
                        
                            <div  ></div> 
                             <h2 style={{color:"#80ffff"}}>35187</h2>
                             <h3>Hours of Work <Icon icon={hourglassNotDone}  style={{height: "70px", width:"60px"}} /></h3><br></br>
                             <h2 style={{color:"#80ffff"}}>1219</h2>
                             <h3>FeedBack <Icon icon={feedbackIcon} style={{height: "70px", width:"60px"}} /> </h3>
                            </Col>
                        <Col md={6} xs={12}>
                        
                        <h2 style={{color:"#80ffff"}}>2548</h2>
                             <h3>Task Done <Icon icon={baselineCloudDone}  style={{height: "70px", width:"60px"}} /></h3><br></br>
                             <h2 style={{color:"#80ffff"}}>1008</h2>
                             <h3>Cups of Coffee <Icon icon={coffeeIcon} style={{height: "70px", width:"60px"}} /></h3>
                        </Col>
                        
                    </Row>
                 </div>
                 </div>
                 
        </>
    )
}
export default WorkDone;


