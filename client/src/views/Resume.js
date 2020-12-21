import React from 'react';
import resume from '../documents/resume.pdf';
import { Document, Page } from "react-pdf";

const Resume = () => {

    return(
        <div>
            <Document file={resume}></Document>
        </div>
    )
}