
import React, { useState } from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesImg,
  ServicesH2,
  ServicesP,
  VideoBg,
  ServicesH3,

} from './ServicesElements';

import { Link, } from "react-router-dom";

import './Shop.css'


import men from '../../assets/images/fitever_men.jpg'
import women from '../../assets/images/fitever_women.jpg'

import { Container, Button } from 'semantic-ui-react';

import Video from '../../videos/pup.mp4';
import Video3 from '../../videos/pup3.mp4';
import Video4 from '../../videos/pup4.mp4';
import Video5 from '../../videos/pup5.mp4';



// import { Button } from 'react-scroll';


const Services = () => {

  const [loadMore, setLoadMore] = useState(false)
 
  const handleLoadMore = () => {
    
    setLoadMore(true)
    console.log(loadMore)
  }


  return (
    
    <ServicesContainer >

      <ServicesH3>Trending Now</ServicesH3>

      <ServicesWrapper>

      {/* <div>
                    <div style={{minHeight: "510px", marginRight: "20px" }} >
                      
                    <img src={men} style={{width: "100%"}} />
                        <div className="ImageSlider__wrapper"  > 
                          <h2 className="ImageSlider__item" style={{marginTop: "-60px", color: "red"}}>Sports Bra</h2>
                          
                        </div>
                        
                      </div>
                </div>

                <div>
                    <div style={{minHeight: "510px", marginRight: "20px" }} >
                      
                    <img src={women} style={{width: "100%"}} />
                        <div className="ImageSlider__wrapper"  > 
                          <h2 className="ImageSlider__item" style={{marginTop: "-60px", color: "red"}}>Sports Bra</h2>
                          
                        </div>
                        
                      </div>
                </div> */}

        
        <ServicesCard>
          <div className="image__container" style={{ width: "100%",  display: "flex", alignItems: "flex-end"}}>
                <img src={men} style={{width: "100%"}} />

                <h1 style={{padding: "50px 30px", color: "white", marginLeft: "0px", position: "absolute", fontSize: '1.5em'}}>Men's Wear</h1>
                <div 
                    className="image__button" 
                    style={{width: "75px", 
                    backgroundColor: "white",  
                    paddingLeft: "20px", 
                    borderRadius: '50px', 
                    height: "35px", 
                    color: 'black', 
                    display: "flex", 
                    alignItems: "center", 
                    marginLeft: "30px", 
                    position: "absolute",
                    marginBottom: '20px'}}> <p>Shop</p> </div>  
            </div>
            
        </ServicesCard>
       
       <ServicesCard>
            <div className="image__container" style={{ width: "100%", display: "flex", alignItems: "flex-end"}}>
              <img src={women} style={{width: "100%"}} />
            <h1 style={{padding: "50px 30px", color: "white", marginLeft: "0px", position: "absolute", fontSize: '1.5em'}}>Women's Wear</h1>
                <div 
                  className="image__button" 
                  style={{width: "75px", 
                  backgroundColor: "white",  
                  paddingLeft: "20px", 
                  borderRadius: '50px', 
                  height: "35px", 
                  color: 'black', 
                  display: "flex", 
                  alignItems: "center", 
                  marginLeft: "30px", 
                  position: "absolute",
                  marginBottom: '20px'}}> <p>Shop</p> </div>
                
            </div>

       </ServicesCard>

       </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
