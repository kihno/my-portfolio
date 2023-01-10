import React from "react";
import { useNavigate } from "react-router-dom";
import logoAbr from '../images/nm-logo-abr.png';
import '../styles/Navbar.css';

const About = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    return (
        <nav className='navbar'>
            <img className='logo-abr' src={logoAbr} onClick={goHome} alt="NM"></img>
            <ul className='links nav-links'>
                <input type='checkbox' id='checkbox'></input>
                <label htmlFor='checkbox' className='hamburger'>&#9776;</label>
                <div className='menu'>
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
                </div>
            </ul>
        </nav>
    )
}

export default About;