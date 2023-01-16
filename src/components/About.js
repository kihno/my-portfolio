import React from "react";
import Navbar from './Navbar';
import '../styles/About.css';

const About = () => {

    return (
        <main>
            <Navbar />
            <div className='aboutContainer'>
                <p>Hello and welcome. My name is Nick Miles and I am a Los Angeles-based Web Developer. I have a passion for building accessible, responsive, and purposeful software. A natural born problem-solver, I love the challenge that programming presents. From the simple problem of how to get a program to work, to the larger issue of what real-world problems this program can solve, I'm driven to find answers.</p>
                <p>I have experience with all facets of modern web development, including semantic HTML, Javascript ES6, and modern frameworks such as Webpack and React. I also have experience with back-end development and am well versed in Express and Node as well as NoSQL databases such as Firebae and MongoDB.</p>
                <p>When I'm not coding I enjoy watching movies, playing video games, reading, and spending time outdoors with my dog. If you browse some of the <a className='hyperlink' href='projects'>projects</a> I've created you'll get a pretty good sense of some of my interests.</p>
                <p>If you think you can utilize my talents, <a  className='hyperlink' href='contact'>let's build something together</a>.</p>
            </div>
        </main>
    )
}

export default About;