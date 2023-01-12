import React from "react";
import logo from '../images/me-logo.png';
import '../styles/Home.css';

const Home = () => {

    return (
        <main className='home'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id='stars4'></div>
            <div id='menu'>
                {/* <img className='logo' src={logo} alt='Nick Miles'></img> */}
                <div className='titleContainer'>
                    <h1 className='title title1'>Nick Miles</h1>
                    <h1 className='title title2'>Nick Miles</h1>
                    <h1 className='title title3'>Nick Miles</h1>
                </div>
   
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
            </div>
            {/* <div className='stars'></div>
            <div className='stars2'></div>
            <div className='stars3'></div>
            <section className='home'>
                <img className='logo' src={logo} alt='Nick Miles'></img>
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
            </section> */}
        </main>
    )
}

export default Home;