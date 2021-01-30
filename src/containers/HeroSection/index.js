import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
  Image,
} from "semantic-ui-react";

import Video from '../../videos/pup2.mp4';
import CustoHeader from '../../assets/images/hero_bg.png'
import logo from '../../assets/images/citipup.png'


import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  Hero2H1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
        <div className="container" style={{ background: "pink", height: "550px", display: "flex", flexDirection: "row"}}>

            <div className="left" style={{ flex: "1"}}>
              <div className="content__container"  style={{ display: "flex", flexDirection: "column", padding: "8px 70px", alignItems: "left", paddingTop: "100px"}}>
                   <div className="hero__bg">
                      <Hero2H1 > FITNESS MEETS</Hero2H1>
                    </div>

                    <HeroH1>COMFORT</HeroH1>
                    <HeroP >
                      Experience maximum comfort with every movement. Don't let your sportswear be your limitations.
                    </HeroP>
                    <div className="hero__button">
                      <Button
                        style={{ width: "150px", marginTop: "30px"}}
                        to='signup'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary='true'
                        dark='false'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                      >
                        SHOP 
                      </Button>
                    </div>
             </div>

            </div>

            <div className="right" style={{ background: "white"}}>

               <img style={{width: '700px', height: '100%', objectFit: 'cover', }} src={CustoHeader} />
              
            </div>
          
        </div>


    // <HeroContainer id='home'>
    //   <HeroBg>
    //     {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
    //     <Image style={{backgroundSize: 'cover', width: '100%', height: '100%', objectFit: 'cover', display: "flex", alignItems: "right",}} src={CustoHeader} />
    //   </HeroBg>
    //   <HeroBg>
    //     {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
    //     <Image style={{backgroundSize: 'cover', width: '100%', height: '100%', objectFit: 'cover', display: "flex", alignItems: "right",}} src={CustoHeader} />
    //   </HeroBg>
      // <HeroContent>
      //   <HeroH1 >
      //     FITNESS MEETS
      //   </HeroH1>
      //   <Hero2H1>COMFORT</Hero2H1>
      //   <HeroP>
      //     Experience maximum comfort with every movement. Don't let your sportswear be your limitations.
      //   </HeroP>
      //   <HeroBtnWrapper>
      //     <Button
      //       to='signup'
      //       smooth={true}
      //       duration={500}
      //       spy={true}
      //       exact='true'
      //       offset={-80}
      //       primary='true'
      //       dark='false'
      //       onMouseEnter={onHover}
      //       onMouseLeave={onHover}
      //     >
      //       SHOP {hover ? <ArrowForward /> : <ArrowRight />}
      //     </Button>
      //   </HeroBtnWrapper>
      // </HeroContent>
    // </HeroContainer>
  );
}

export default HeroSection;
