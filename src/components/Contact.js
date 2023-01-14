import React from "react";
import '../styles/Contact.css';
import Navbar from './Navbar';
import Email from '@mui/icons-material/Email';
import Github from '@mui/icons-material/GitHub';
import Linkedin from '@mui/icons-material/LinkedIn';

const Contact = () => {

    return (
        <main>
            <Navbar />
            <section>
                <div className='iconContainer'>
                    <a href='mailto:nmiles13@gmail.com' target='_blank' rel='noreferrer'>
                        <Email></Email>
                    </a>
                    <a href='http://www.linkedin.com/in/nick-miles-93328227' target='_blank' rel='noreferrer'>
                        <Linkedin></Linkedin>
                    </a>
                    <a href='https://github.com/kihno' target='_blank' rel='noreferrer'>
                        <Github></Github>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Contact;