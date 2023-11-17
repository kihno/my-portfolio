import React from "react";
import Navbar from './Navbar';
import { Document, Page } from 'react-pdf';
import myResume from '../pdf/Miles_Resume.pdf';
import '../styles/Resume.css';

const Resume = () => {

    return (
        <main>
            <Navbar />
                <div className='resumeContainer'>
                    <a href={myResume} target='_blank' rel='noopener noreferrer' className='resume'>
                        <Document file={myResume} options={{workerSrc: "pdf.worker.js"}} >
                            <Page pageNumber={1} style={ {width: '100%'} } />
                        </Document>
                    </a>
                </div>
        </main>
    )
}

export default Resume;
