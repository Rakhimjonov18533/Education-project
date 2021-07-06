import React from 'react'
import {Container, Next, Before, StudentIcon, TeacherIcon, SchoolIcon, Boxx, Left, Top, Right} from './StyleBotCaro';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



const BottomCarousel = () => {
    let Data = [
        {icon: <StudentIcon/>, title: "Students"},
        {icon: <TeacherIcon/>, title: "Teacher"},
        {icon: <SchoolIcon/>, title: "School"},
        {icon: <StudentIcon/>, title: "Students"},
        {icon: <TeacherIcon/>, title: "Teacher"},
        {icon: <SchoolIcon/>, title: "School"}
    ]
    return (
        <Container>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={Data.length}
                visibleSlides={3}

            >
                <Slider>
               {
                   Data.map((value, index) => {
                    return(
                            <Slide index={index}>
                                <Boxx>
                                    <Left>
                                        {value.icon}
                                    </Left>
                                    <Right>
                                        <Top>{value.title}</Top>
                                        Lorem ipsum dolor sit amet consectetur <br/>adipisicinged
                                        ita voluptates<br/> architecto voluptate antium eae quas!
                                    </Right>
                                </Boxx>
                            </Slide>
                    )
                   })
               }
               </Slider>
                <ButtonBack><Before/></ButtonBack>
                <ButtonNext><Next/></ButtonNext>
            </CarouselProvider>
        </Container>
    )
}

export default BottomCarousel
