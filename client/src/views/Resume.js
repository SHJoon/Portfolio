import React from 'react';
import resume from '../documents/resume_howard_shin.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import '../styles/Resume.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const Resume = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return(
        <div>
            <div className="resume" >
                <Document file={resume} size="A4">
                    <Page
                    object-fit="fill"
                    pageNumber={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={true}
                    width={1000}></Page>
                </Document>
                <div style={{height:"10px"}}></div>
            </div>
            <div>
                <a className="dl" href={resume} download="Resume_Howard_Shin">Download Resume</a>
            </div>
            <div style={{height:"20px"}}></div>
        </div>
    )
}

export default Resume;