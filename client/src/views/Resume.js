import React from 'react';
import resume from '../documents/resume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import '../styles/Resume.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const Resume = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return(
        <div className="resume" >
            <Document file={resume} size="A4">
                <Page
                object-fit="fill"
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={true}
                width={1000}></Page>
            </Document>
        </div>
    )
}

export default Resume;