import data from "../../data/index1.json";
import React from "react";
export default function Myskill(){
    return(
        <section className="skills-section" id="myskills"> 
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h3 className="skills--section--heading">My Expertise</h3>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item,index)=>(
                    <div key={index}
                         className="skills--section--card">
                            <div className="skills--section--img">
                                <img src={item.src} alt="Product Chain"/>
                            </div>
                            <div className="skills--section--card--content">
                                <h3 className="skills--section--title">{item.title}</h3>
                                <p className="skilss--section--description">{item.description}</p>
                            </div>    
                    </div>
                ))}
            </div>
        </section>
    );
};