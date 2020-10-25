import ShowMoreText from 'react-show-more-text';
import React , { Component } from "react";
import { Row,Col } from "react-bootstrap";
import about from "../assets/about.jpg";
import WorkDone from "./workdone";
import Footer from "../component/footer";

export default class AboutUs extends Component {
   
    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
   
    render() {
        return (
            <>
            <div className="container-fluid" id="about" style={{
                display:"flex",
                alignItems:"center",
                fontFamily:"Lexend Giga",
                flexDirection:"column",
                
                height:"100%",
                padding:"6%"}}>
            <h1 data-aos="fade-up" style={{textAlign:"center"}}>A DEEP DIVE INTO US</h1>
            <div data-aos="fade-right" className="container-fluid " style={{margin:"2% 0"}}>
            <Row>
                        <Col md={6} xs={12} style={{}} >
                            <div style={{backgroundImage:`url(${about})`,backgroundSize:"100% 100%",height:"100%"}} ></div>
                        </Col>
                        <Col md={6} xs={12}>
            <ShowMoreText
                
                lines={12}
                more='Deep more'
                less='Deep less'
                anchorClass=''
                onClick={this.executeOnClick}
                expanded={false}
                width={380}
            >
                Our company is one of the leading interior designing company in Delhi NCR which offers you best designs as per your need and also in a good budget. And what we need! Just a floor plan of your house or office along with your requirement and in return we offer you your Dream office/home.We are also manufacture furniture as a part of interior designing because we know its relevance in interior designing. A furniture designer can make furniture as per your demand but will it match with your interior is a different issue as far as interior designing is concern. We manufacture furniture on demand and also for our interiors designing process if a client requires that. We use only premium quality material for the purpose. We are one of the prominent furniture designersin Delhi. Our products are resistant to the weather fluctuations, resistant to heat and water and you get only the quality product as per your requirement. We have a dedicated unit indulge in manufacturing as well as designing new concept based furniture which are good looking on one hand and durable and practical at the other.
            </ShowMoreText>
            </Col>
         </Row>
        <WorkDone/>
          </div>
         </div>
         <Footer/>
         </>
        );
    }
}