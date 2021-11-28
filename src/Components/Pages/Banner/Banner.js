import React from 'react';
import './Banner.css'
import { Button, Carousel } from 'react-bootstrap';
import bannerImg1 from '../../../image/banner-img1.png'
import bannerImg2 from '../../../image/banner-img-2.png'
import bannerImg3 from '../../../image/banner-img-3.png'


const Banner = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src={bannerImg1}
      alt="First slide"
    />
    <Carousel.Caption className="slider">
      <h2>Amazing Tour In madagascar </h2>
      <h5 >7 Days, 8 Night Tour</h5>
       <Button variant="success">Read More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bannerImg2}
      alt="Second slide"
    />

    <Carousel.Caption className="slider">
      <h2>Amazing Tour In Hampshire </h2>
      <h5>7 Days, 8 Night Tour</h5>
       <Button variant="success">Read More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
    src={bannerImg3}
      alt="Third slide"
    />

    <Carousel.Caption className="slider">
      <h2>Amazing Tour In Indonesia </h2>
      <h5>7 Days, 8 Night Tour</h5>
       <Button variant="success">Read More</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;