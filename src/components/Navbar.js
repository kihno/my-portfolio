import React from "react";
import '../styles/Navbar.css';

const About = () => {

    return (
        <nav>
            <ul className='links nav-links'>
                <li>
                    <a href='about'>About Me</a>
                </li>
                <li>
                    <a href='projects'>Projects</a>
                </li>
                <li>
                    <a href='resume'>Resume</a>
                </li>
                <li>
                    <a href='contact'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default About;