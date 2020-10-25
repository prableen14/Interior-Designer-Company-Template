import React , { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import GetStarted from "./getStarted";
import AboutUs from "./about";
import Contact from "./contact";
import Facilities from "./Facilities";
import Portfolio from "./portfolio";
import Navb from "./navbar";
import Review from "./review";
import { BrowserRouter,Route, Switch } from 'react-router-dom'


const Home = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
        <>
           <BrowserRouter>
      <Navb />
      
        <Switch>
          <Route exact path="/">
            <GetStarted />
          </Route>
          <Route path="/about">
            <AboutUs />
            </Route>
          <Route path="/Facilities">
            <Facilities />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      
    </BrowserRouter>
    </>
    )
}


export default Home;