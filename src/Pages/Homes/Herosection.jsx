import React from "react";
export const Herosection=()=>
{
    return(
        <section id="herosection" className="hero--section">
           <div className="hero--section--content--box">
            <div className="hero--section--content">
              <p className="section--title">Hey, I'm Nilesh Shirude</p>
              <h1 className="hero--section--title">
                <span className="hero--section--title--color">Full Stack</span>{" "}
                <br />
                Developer
              </h1>
              <p className="hero--section-description">Passionate about coding and Web Designing
                 <br/>
                 Experience in creeating more visually and user friendly websites.
              </p>
            </div>
            <button className="btn btn-primary">Get In Touch</button>
           </div>
           <div className="hero--section-image">
              <img src="./img/my_photo_without_background.png" alt="Hero Section" />
           </div>
        </section>
    );
};