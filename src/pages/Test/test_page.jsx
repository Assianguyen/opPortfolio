import React from 'react';

import { Button } from 'react-bootstrap';
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import pdf from '../../assests/Pdf_file/CV_Assia_NGUYEN.pdf'
import {
    Document,
    Page,
    pdfjs
} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function test_page(props) {
    return (
      <div>
        <Header theme={props.theme} setTheme={props.setTheme} />
        <Document file={pdf}>
            <Page pageNumber={1}></Page>
        </Document>
        <Footer theme={props.theme} />
      </div>
    );
  }

export default test_page;