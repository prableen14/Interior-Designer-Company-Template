import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row,Col } from "react-bootstrap";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m7 from "../assets/m7.jpg";
import m6 from "../assets/m6.PNG";
import m8 from "../assets/m8.PNG";
import m9 from "../assets/m9.PNG";
import m10 from "../assets/m10.PNG";
import AboutPortfolio from "./aboutportfolio";
import Footer from "../component/footer";

const Portfolio = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
             <>
             <div className="Portfolio">
            <div className="container-fluid" id="about" style={{
                    display:"flex",
                    alignItems:"center",
                    fontFamily:"Lexend Giga",
                    flexDirection:"column",
                    backgroundColor:"whitesmoke",
                    height:"100%",
                    marginTop:"55px",
                    padding:"2%"}}>
                    
                <h1 data-aos="fade-down" style={{textAlign:"center"}}>OUR PORTFOLIO</h1>
                
                <div  className="container-fluid " style={{margin:"2% 0"}}>
                
                <Row style={{alignContent:"center"}}><AboutPortfolio></AboutPortfolio>
                        <Col md={6} xs={12} >
                        
                            <div  ></div> 
                             
                            <img src={m1} data-aos="fade-right" alt="Menu image" height={400} width={265}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                            <img src={m9} data-aos="fade-right" alt="Menu image" height={400} width={265}/>&nbsp;&nbsp; 
                            </Col>
                        <Col md={6} xs={12}>
                        <img src={m8} data-aos="fade-left"  alt="Menu image" height={400} width={265}/>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  
                            <img src={m7} data-aos="fade-left" alt="Menu image" height={400} width={265}/>
                            
                        </Col>
                    </Row><br></br>
                    <Row style={{alignContent:"center"}}>
                        <Col md={6} xs={12} >
                            <div  ></div>  
                            <img src={m6} data-aos="fade-right" alt="Menu image" height={400} width={265}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                            <img src={m4} data-aos="fade-right" alt="Menu image" height={400} width={265}/>&nbsp;&nbsp; 
                            </Col>
                        <Col md={6} xs={12}>
                        <img src={m10} data-aos="fade-left"  alt="Menu image" height={400} width={265}/>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  
                            <img src={m1} data-aos="fade-left" alt="Menu image" height={400} width={265}/>
                            
                        </Col>
                    </Row><br></br>
                    <Row style={{alignContent:"center"}}>
                        <Col md={6} xs={12} >
                            <div  ></div>  
                            <img src={m3} data-aos="fade-right" alt="Menu image" height={400} width={265}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                            <img src={m4} data-aos="fade-right" alt="Menu image" height={400} width={265}/>&nbsp;&nbsp; 
                            </Col>
                        <Col md={6} xs={12}>
                        <img src={m2} data-aos="fade-left"  alt="Menu image" height={400} width={265}/>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  
                            <img src={m1} data-aos="fade-left" alt="Menu image" height={400} width={265}/>
                            
                        </Col>
                    </Row>
                 </div>
                 </div>
                 </div>
                 <Footer/>
        </>
    )
}
export default Portfolio;


