import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import photo from '../../assests/images/hrishi2.png'
//import react-bootstrap-carousel


// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import { Document, Page, pdfjs } from "react-pdf";

// import pdf from "../../assests/Pdf_file/oneM2M_Hackathon.pdf";


// export default class Keti extends React.Component {
//   render() {
//     return (
//       <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={125}
//         totalSlides={3}
//       >
//         <Slider>
//           <Slide index={0}>
//             <Document file={pdf}>
//               <Page pageNumber={1}></Page>
//             </Document>
//           </Slide>
//           <Slide index={1}>
//             <Document file={pdf}>
//               <Page pageNumber={2}></Page>
//             </Document>
//           </Slide>
//           <Slide index={2}>I am the third Slide.</Slide>
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     );
//   }
// }

// function Keti(props) {

//   return (
//     <div class="container">
//       <Carousel className='test'>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="../../assets/images/hrishi2.png"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="oneM2M_Hackathon-01.png"
//             alt="Second slide"
//           />

//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="oneM2M_Hackathon-01.png"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>

//   );

// }



function Keti(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-10 ml-auto mr-auto">
          <div class="card page-carousel">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item">
                  <img class="d-block img-fluid" src="../../assests/images/hrishi2.png" alt="First slide"/>
                    <div class="carousel-caption d-none d-md-block">
                      <p></p>
                    </div>
                </div>
                <div class="carousel-item active">
                  <img class="d-block img-fluid" src="../../assests/images/hrishi2.png" alt="Second slide"/>
                    <div class="carousel-caption d-none d-md-block">
                      <p>Somewhere else</p>
                    </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block img-fluid" src="../../assests/images/hrishi2.png" alt="Third slide"/>
                    <div class="carousel-caption d-none d-md-block">
                      <p>Here it is</p>
                    </div>
                </div>
              </div>
              <a class="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="fa fa-angle-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="fa fa-angle-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default Keti;
