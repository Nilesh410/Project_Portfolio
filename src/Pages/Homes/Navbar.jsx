import { useState,useEffect } from "react";
import React from "react";
import { Link } from "react-scroll";

function Navbar(){
    const[navActive,setnavActive]=useState(false);
    const toggleNav=()=>{setnavActive(!navActive);};
    const closeMenu=()=>{setnavActive(false);};

    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth<=500){closeMenu();}
        };
        window.addEventListener("resize",handleResize);
        return()=>{
            window.removeEventListener("resize",handleResize);
        };
        
    },[]);
    useEffect(()=>{
        if(window.innerWidth<=1200)
        {
            closeMenu();}
    },[]);

    return (
        <nav className={`navbar ${navActive?"active":""}`}>
        <div>
            <img src="./img/logo1.png" alt="Logoipsum"/>
        </div>
        <a className={`nav_hamberger ${navActive?"active":""}`} onClick={toggleNav}>
            <span className="nav_hamburger_line">
            </span>
            <span className="nav_hamburger_line">
            </span>
            <span className="nav_hamburger_line">
            </span>
        </a>
        <div className={`navbar--items ${navActive?"active":""}`}>
            <ul>
                <li>
                    <Link onClick={closeMenu} 
                          activeClass="navbar--active-content"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          to="herosection"
                          className="navbar--content">Home</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} 
                          activeClass="navbar--active-content"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          to="Myportfolio"
                          className="navbar--content">Portfolio</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} 
                          activeClass="navbar--active-content"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          to="AboutMe"
                          className="navbar--content">About Me</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} 
                          activeClass="navbar--active-content"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          to="Testimonials"
                          className="navbar--content">Testimonials</Link>
                </li>
            </ul>
        </div>
        <Link onClick={closeMenu} 
                          activeClass="navbar--active-content"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          to="Contactme"
                          className="btn btn-outline-primary">Contact Me</Link>
     </nav>
    );
};

export default Navbar;
