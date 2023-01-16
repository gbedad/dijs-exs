import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import hongkong from './assets/hongkong.jpeg'
import  macao from './assets/macao.webp'
import japan from './assets/japan.webp'
import lasvegas from './assets/lasvegas.webp'


class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
      <div>
      <img src={hongkong} alt="Hongkong"/>
      <p className="legend">Hong Kong</p>
      </div>
      <div>
      <img src={macao} alt="Macao"/>
      <p className="legend">Macao</p>
      </div>
      <div>
      <img src={japan} alt="Japang"/>
      <p className="legend">Japan</p>
      </div>
      <div>
      <img src={lasvegas} alt="Las Vegas"/>
      <p className="legend">Las Vegas</p>
      </div>
      </Carousel>
    );
  }
};

export default DemoCarousel