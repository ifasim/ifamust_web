import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"

import {Button, Image } from '@material-ui/core';


import phone1 from '../assets/phone_series.png'
import phone2 from '../assets/phone_watch.png'
import phone3 from '../assets/phone_chat.png'
import phone4 from '../assets/phone_list.png'
import phone5 from '../assets/phone_profile.png'


import Slider from "react-slick";

function ImageSlider() {
    const settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
        
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          // nextArrow: <SampleNextArrow />,
          // prevArrow: <SamplePrevArrow />

      };

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "orange" }}
            onClick={onClick}
          />
        );
      }

      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "orange" }}
            onClick={onClick}
          />
        );
      }
      


    return (
        <div className="ImageSlider">
            {/* <h3 className="ImageSlider__subtitle">SPECIALIZED IN </h3> */}
          
            
            <Slider className="slider" {...settings}>

                <img  className="slide__img" src={phone1} />

                <img  className="slide__img"  src={phone2} />

                <img  className="slide__img"  src={phone3} />

                <img  className="slide__img"  src={phone4} />

                <img  className="slide__img"  src={phone5} />


                
            </Slider>


        </div>
    )
}

export default ImageSlider
