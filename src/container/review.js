import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../CSS/review.css";
import Footer from "../component/footer";

export default class Review extends Component {
  render() {
    return (
      <>
      <div className="Review">
      <div  style={{
            
            justifyContent:"center",
            fontFamily:"Lexend Giga",
            backgroundColor:"whitesmoke",
            marginTop:"2%",
            padding:"5%"}}>
            
    <h1 data-aos="fade-down" style={{textAlign:"center", fontFamily:"Lexend Giga",}}>TESTIMONIALS</h1>
    
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/shirley.png" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <p>
            If you are in Delhi and want to avail services of best interior design firms in delhi then do consider them. They were so nice and fun to be around. It made the entire experience wonderful.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <p>
            The Design that they provide is very nice and detailed. They can make a small place even look to its best. Bestest Designer in Delhi and NCR.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <p>
            Provided great design for our office and home in a low budget.Their Team was very friendly and provided a human touch in all of their services.teriors.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
    </div>
    
    <Footer/>
  </>
    );
  }
}