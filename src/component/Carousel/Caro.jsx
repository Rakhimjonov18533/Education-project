import React from 'react';
import {Img, Next, Before} from './styleCaro';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import rasm from '../Accets/rasm.jpg';
import rasm1 from '../Accets/rasm1.jpg';
import rasm2 from '../Accets/rasm2.jpg';



function Caro() {
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        visibleSlides={1}
        currentSlide={1}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><Img src={rasm}/></Slide>
          <Slide index={1}><Img src={rasm1}/></Slide>
          <Slide index={2}><Img src={rasm2}/></Slide>
        </Slider>
        <ButtonBack><Before/></ButtonBack>
        <ButtonNext><Next/></ButtonNext>
      </CarouselProvider>
    )
}

export default Caro
