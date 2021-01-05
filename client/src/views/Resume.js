import React from 'react';
import resume from '../documents/resume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import styles from '../styles/Resume.module.css';

const Resume = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return(
        <div className={ styles.resume }>
            <Document file={resume}>
                <Page object-fit="fill" pageNumber={1}></Page>
            </Document>
        </div>
    )
}

export default Resume;