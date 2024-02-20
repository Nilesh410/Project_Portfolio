import { Herosection } from "../Herosection";
import React from "react";
import Myskill from "../Myskill";
import AboutMe from "../Aboutme";
import Myportfolio from "../Myportfolio";
import Testimonials from "../Testimonials";
import Contactme from "../Contactme";
import Footer from "../footer";

export const Homes=()=>
{
    return(
        <>
          <Herosection />
          <Myskill />
          <AboutMe />
          <Myportfolio />
          <Testimonials />
          <Contactme />
          <Footer />
          
        </>
    );
}