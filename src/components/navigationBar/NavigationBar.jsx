import React from 'react'
// import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"
import { FaBars } from "react-icons/fa"
import "./NavigationBar.css"
import { useRef } from 'react';
import Logo from "../../assets/logo.png"


const NavigationBar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };


    return (
        <div className="nav_container">

            <header>
                <a to="/">
                    <img src={Logo} alt="enterprise" />
                </a>

                <nav ref={navRef}>
                    {/* <Link className="anchor" to="">Home</Link>
                    <Link className="anchor" to="">About</Link>
                    <Link className="anchor" to="">Testimonial</Link>
                    <Link className="anchor contact" to="">Contact</Link> */}
                    <a className="anchor" href='#'>Why Open Enterprise</a>
                    <a className="anchor" href='#'>Features</a>
                    <a className="anchor" href='#'>Contribute</a>
                    <a className="anchor contact" href='#'>Request Early Access</a>

                    {/* mobile close btn */}
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}
                    >
                        <FaTimes />
                    </button>
                    {/* mobile close btn */}
                </nav>


                <button className="nav-btn"
                    onClick={showNavbar}
                >
                    <FaBars />
                </button>

            </header>

        </div>
    )
}

export default NavigationBar