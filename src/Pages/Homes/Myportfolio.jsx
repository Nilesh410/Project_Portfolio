import data from "../../data/index1.json";
import React from "react";
export default function Myportfolio()
{
    return(
        <section className="portfolio--section" id="Myportfolio">
            <div className="potfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">Recat Projects</p>
                    <h2 className="section--heading">My Portfolio</h2>
                </div>
                <div>
                   <button className="btn btn-github">Visit My Github</button>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item,index)=>
                   (
                     <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="placeholder" />
                        </div>
                       <div className="portfolio--section--card--content">
                          <div>
                            <h3 className="portfolio--section--title">{item.title}</h3>
                            <p className="text-md">{item.description}</p>
                          </div>
                          <p className="text-sm--portfolio--link">{item.link}</p>
                        </div>
                      </div>  
                   ) )}
            </div>
        </section>

    );
};