import React from "react";
import logo from '../images/me-logo.png';
import '../styles/Home.css';

const Home = () => {

    return (
        <main className='home'>
            <img className='logo' src={logo}></img>
            <ul className='links home-links'>
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
        </main>
    )
}

export default Home;