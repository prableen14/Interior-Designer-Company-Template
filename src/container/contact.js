import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import contact from "../assets/contact.jpg"
import classes from "../CSS/contact.module.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from "react-bootstrap";
import Footer from "../component/footer";
import {FaHome} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";

import { Row,Col } from "react-bootstrap";


const useStyles = makeStyles(() => ({
    root: {
        background: "white",
        padding:"0 1%",
        borderRadius:"10px"
      },
      input: {
        color: "black",
        padding:"1%"
      }
    }));



const Contact = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    const myclasses = useStyles();
    return(
             <>
            <div className={classes.Contact} id="contact" style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                fontFamily:"Lexend Giga",
                backgroundImage:`url(${contact})`,
                backgroundSize:"100% 100%",
                padding:"4%",
                marginTop: "3%",
                color:"brown"
            }}>
                <h1 data-aos="fade-up" style={{textAlign:"center"}}>CONTACT US</h1>
                <br/>
                <h3 data-aos="fade-down" style={{textAlign:"center", color:"black"}}>Contact <span style={{color: "brown"}}>INDIAN INTERIORS</span> to start your dream project with our team of Expert Designers</h3>
                <br/>
                <br/>
                <Row>
                 <Col md={6} xs={12} style={{}} >
                <h4 data-aos="fade-up" style={{ color:"black"}}>Drop your information:</h4>
                <TextField  data-aos="fade-right" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Name" /><br/><br/>
                <TextField data-aos="fade-right" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Phone number" /><br/><br/>
                <TextField data-aos="fade-right" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Email" /><br/><br/>
                <TextField data-aos="fade-right" className={myclasses.root} 
                InputProps={{className: myclasses.input}} 
                id="standard-basic" label="Your Message" /><br/><br/>
                  <Button style={{marginRight:"10px",borderRadius:"20px", backgroundColor:"#F0B6E6", height:"60px"}} variant="light">Submit</Button>
            
               </Col>
            <Col md={6} xs={12}>
            <h4 data-aos="fade-up" style={{ color:"black"}}>Reach us at:</h4>
             <div data-aos="fade-left">
               <FaHome size="2rem" color="black"/> 
                <span className="pl-2"  style={{color: "#2a2a2a",fontWeight:"500"}}>New Delhi, <br /> <span style={{color:"black"}} className="pl-5">India</span></span>
                 </div>
<div data-aos="fade-left" className="pt-5">
  <FaMobileAlt size="2rem" color="black"/> 
  <span className="pl-2"  style={{color: "#2a2a2a",fontWeight:"500"}}> 98654533355 <br /> <span style={{color:"black"}} className="pl-5"></span>93764564454</span>
   </div>
<div data-aos="fade-left" className="pt-5">
 <AiOutlineMail  size="2rem" color="black"/> 
  <span className="pl-2"  style={{color: "#2a2a2a",fontWeight:"500"}}>IndianInteriors@gmail.com<br /> <span style={{color:"grey"}} className="pl-5"></span>customer@IndianInteriors</span>
   </div>
   
</Col>
</Row>
</div>

<div><Footer/></div>
        
          </>
    )
}
export default Contact;