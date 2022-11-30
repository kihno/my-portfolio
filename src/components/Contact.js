import React from "react";
import '../styles/Contact.css';
import Navbar from './Navbar';
import Email from '../images/email-icon.png';
import Github from '../images/github-icon.png';
import Linkedin from '../images/linkedin-icon.png';

const Contact = () => {

    return (
        <main>
            <Navbar />
            <section>
                <div className='iconContainer'>
                    <a href='mailto:nmiles13@gmail.com' target='_blank' rel='noreferrer'><img src={Email} alt='Email' className='icon'></img></a>
                    <a href='http://www.linkedin.com/in/nicholas-miles-93328227' target='_blank' rel='noreferrer'><img src={Linkedin} alt='LinkedIn' className='icon'></img></a>
                    <a href='https://github.com/kihno' target='_blank' rel='noreferrer'><img src={Github} alt='Github' className='icon'></img></a>
                </div>
            </section>
        </main>
    )
}

export default Contact;