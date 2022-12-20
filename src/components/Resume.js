import React from "react";
import Navbar from './Navbar';
import { Document, Page } from 'react-pdf';
import myResume from '../pdf/Miles_Resume.pdf';
import '../styles/Resume.css';

const Resume = () => {

    return (
        <main>
            <Navbar />
            <a href={myResume} target='_blank' rel='noopener noreferrer'>
                <Document file={myResume} options={{workerSrc: "pdf.worker.js"}} className='resume'>
                    <Page pageNumber={1} />
                </Document>
            </a>
        </main>
    )
}

export default Resume;