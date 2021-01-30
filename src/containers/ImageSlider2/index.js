import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider2.css"
import Slider from "react-slick";

function ImageSlider() {
    const settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
                breakpoint: 725,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
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
            <div className="ImageSlider_titleWrapper">
                <h1 className="ImageSlider__title" > The Latest & Greatest </h1>
            </div>
            
            <Slider className="slider" {...settings}>

            <div>
                    <div style={{minHeight: "510px", marginRight: "20px" }} >
                      
                        <img style={{marginBottom: "20px"}} width="100%" src="https://fitever.s3.us-east-2.amazonaws.com/d2.png" />
                        <div className="ImageSlider__wrapper"  > 
                          <h2 className="ImageSlider__item">Sports Bra</h2>
                          
                        </div>
                        
                      </div>
                </div>

                <div>
                    <div style={{minHeight: "510px", marginRight: "20px" }} >
                      
                        <img style={{marginBottom: "20px"}} width="100%" src="https://fitever.s3.us-east-2.amazonaws.com/b1.png" />
                        <div className="ImageSlider__wrapper"  > 
                          <h2 className="ImageSlider__item">Sports Bra</h2>
                          
                        </div>
                        
                      </div>
                </div>

                <div>
                    <div style={{minHeight: "510px", marginRight: "20px" }} >
                      
                        <img style={{marginBottom: "20px"}} width="100%" src="https://fitever.s3.us-east-2.amazonaws.com/d3.png" />
                        <div className="ImageSlider__wrapper"  > 
                          <h2 className="ImageSlider__item" >Sports Bra</h2>
                          
                        </div>
                        
                      </div>
                </div>

            </Slider>


        </div>
    )
}

export default ImageSlider
