import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assests/images/img1.jpg';
import img2 from '../../assests/images/img2.jpg';
import img3 from '../../assests/images/img3.jpg';
import "./Carousels.css";

function Carousels() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={img1} alt="First Slide" className='w-100' />
                <Carousel.Caption>
                    <h3>Read Book, Be happy!</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} alt="Second Slide" className='w-100' />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} alt="Third Slide" className='w-100' />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels