import React from "react";
import Navbar from './Navbar';
import '../styles/About.css';

const About = () => {

    return (
        <main>
            <Navbar />
            <div className='aboutContainer'>
                <p>Hello and welcome. My name is Nick Miles and I am a Los Angeles based web developer. A problem-solver at heart, I love taking on challenges and figuring out how all the peices fit together</p>
            </div>
        </main>
    )
}

export default About;