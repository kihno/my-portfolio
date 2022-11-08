import React from "react";
import '../styles/Home.css';

const Home = () => {

    return (
        <main className='home'>
            <h1 className='logo'>My Portfolio</h1>
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