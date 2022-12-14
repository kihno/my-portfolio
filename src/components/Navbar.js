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
            <h1 className='titleAbr' onClick={goHome}>NM</h1>
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