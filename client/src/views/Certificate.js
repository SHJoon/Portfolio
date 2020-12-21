import React from "react";
import dojoCert from "../documents/dojo_certificate.pdf";
import { Document, Page } from "react-pdf";

const Certificate = () => {

    return(
        <div>
            <Document file={dojoCert}></Document>
        </div>
    )
}