import React, { Component } from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Greeting from '../../containers/greeting/Greeting';
import { Fade } from "react-reveal";
import "./Hackathon.css";
import { style } from "glamor";
import pdf from '../../assests/Pdf_file/CV_Assia_NGUYEN.pdf'
import {
    Document,
    Page,
    pdfjs
} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Hackathon(props) {
    return (
        <div className="hackathon-section">
            <Header theme={props.theme} setTheme={props.setTheme} />
            <Footer theme={props.theme} />
        </div>
    );
}

export default Hackathon;