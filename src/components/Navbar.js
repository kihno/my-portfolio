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
            {/* <img className='logo-abr' src={logoAbr} onClick={goHome} alt="NM"></img> */}
            <div className='heroContainer' onClick={goHome}>
                <h1 className='titleAbr titleAbr1'>NM</h1>
                <h1 className='titleAbr titleAbr2'>NM</h1>
                <h1 className='titleAbr titleAbr3'>NM</h1>
            </div>
            <ul className='links nav-links'>
                <input type='checkbox' id='checkbox'></input>
                <label htmlFor='checkbox' className='hamburger'>&#9776;</label>
                <div className='menu'>
                    <li>
                        <a href='about' className='navLink'>About Me</a>
                    </li>
                    <li>
                        <a href='projects' className='navLink'>Projects</a>
                    </li>
                    <li>
                        <a href='resume' className='navLink'>Resume</a>
                    </li>
                    <li>
                        <a href='contact' className='navLink'>Contact</a>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default About;