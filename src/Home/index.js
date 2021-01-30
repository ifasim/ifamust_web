// import React, { useState, useEffect } from 'react'

// import Navbar from '../containers/Navbar/index.js';
// import Sidebar from '../containers/Sidebar/index.js';
// import Footer from '../containers/Footer/index.js';
// import HeroSection from '../containers/HeroSection/index.js';
// import InfoSection from '../containers/InfoSection/index.js';
// import ContactUs from '../containers/contactInstagram/index.js';
// import AboutUs from '../containers/About/index.js';
// import Ad from '../containers/Ad/index.js';
// import Information from '../containers/Information/index.js';
// import Slider from '../containers/ImageSlider/index.js';
// import Slider2 from '../containers/ImageSlider2/index.js';

// import Shop from '../containers/Shop/index.js';




import { useSelector } from 'react-redux';
import { selectUser} from '../store/reducers/user';



// import {
//   homeObjOne,
//   homeObjTwo,
//   homeObjThree
// } from '../containers/InfoSection/Data';

// import {
//   homeObjFour,
// } from '../containers/contactInstagram/Data';



// import {
//   homeObjFive,
// } from '../containers/About/Data';

// import {
//   homeObjSix,
// } from '../containers/Information/Data';


// import {
//   homeObjSeven,
// } from '../containers/Ad/Data';


import { authAxios } from "../utils";

import { userIDURL } from "../constants";


import React, {useState,useRef, useEffect} from 'react'
import './home.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import WebIcon from '@material-ui/icons/Web';
import CodeIcon from '@material-ui/icons/Code';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StorageIcon from '@material-ui/icons/Storage';

import clouds from '../assets/images/clouds.png'; 
import brand from '../assets/images/brand1.png';
import kc from '../assets/images/kc.png';
import serge from '../assets/images/serge.png';


import { auth, provider} from '../firebase'



import me from '../assets/images/me.jpg';
import frame from '../assets/images/frame.png';


import backend from '../assets/images/backend.png';
import restore from '../assets/images/restore.png';

import {TweenMax, Power3} from 'gsap'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import Slider from '../containers/ImageSlider/index.js';

// import Fullsite from "./Fullsite";








function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);
  const [userInfo, setUserInfo] = useState({});






  useEffect(() => {
    //get user details from django

    authAxios
    .post(userIDURL, user)
    .then(res => {
       console.log('setting user info...')
    })
    .catch(err => {
        console.log(err)
    });

}, []);


  const handleResume = () => {
    
      console.log("downloading...resume")
    }; 

  const handleLogin = () => {
      auth.signInWithPopup(provider)
      .catch(error => alert(error.message));
    }; 


  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
  
    <div >
          

            <div className="hero">
                <div className="content">
                    
                    <div className="meet">
                        <p>Hello, i code</p>
                    </div>
                    <p className="hero__mainTitle">Dreams</p>
                    <p><span className="hero__mainTitle hero__mainTitle2">Reality</span></p>

                    
                    <div>
                         <p  className="hero__p">If you can dream it, i can bring it to reality. 
                         Let's start this journey together. </p>

                    </div>

                   

                    <Button  style={{color: "#75dfe6", border: "1px solid #75dfe6", marginTop: "3em", width: "11em", height: "4em"}}> 
                        Get In Touch
                    </Button>

                    
                    

                </div>

                <div className="hero__design">
                        <div className="hero__clouds"> 

                            <div>
                                <img className="hero__cloudsItem cloudx" src={clouds} />
                                <img className="hero__cloudsItem" src={clouds} /> 

                            </div>
                            <img className="hero__cloudsItem2" src={clouds} />
                            

                            
                        </div>
                    
                        
                        {/* <img className="heroBrandImage"  src={brand} /> */}
                </div>

            </div>

            

            <section className='about '>
                <div className="left">
                    <div className="inner transition2">
                        
                        <a href="#" className="featured__title">{"{ About Me }"}</a>

                        <p className="featured__desc">Hello! I'm Ifamust, a software engineer based in New york, NY. </p>

                        <p className="featured__desc">I have been building mobile and web applications for years, 
                        turning dreams into reality. I help convert a vision and an idea into seamless 
                        software that enhance customers experiences.
                        </p>

                        <p className="featured__desc">Here are a list of technologies i've been working with to create magic.</p>

                        <div className="stack" >
                            <div className="stack__listLeft featured__desc" >
                                <h5>Front End</h5>
                                <ul className="stack__ul stack__listLeft">
                                    <li >JavaScript (ES6+)</li>
                                    <li>React.js</li>
                                    <li>React Native</li>
                                    <li>HTML & CSS</li>

                                </ul>

                            </div>

                            <div className="stack__listRight featured__desc" >
                                <h5>Back End</h5>
                                <ul className="stack__ul stack__listRightUL">
                                    <li>Python</li>
                                    <li>MongoDB</li>
                                    <li>AWS</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="about__frame">
                <img className="me__right transition2" src={me} alt="Feature Project" />
                </div>


               


            </section>




            <section className='featured'>
                <div className="left">
                    <div className="inner transition2">
                        <p className="subtitle"> Featured Project</p>
                        <a href="#" className="featured__title">NEXSHOW</a>

                        <p className="featured__desc"> A social tv show application to seamlessly manage and track your 
                        favorite shows. With a group-chat built in, users can chat with friends or find other fans with 
                        similar interest. </p>
                        <p><Button  style={{color: "#75dfe6", border: "1px solid #75dfe6", marginTop: "3em", width: "20em", height: "4em"}}> 
                                Download at Appstore
                            </Button></p>
                    </div>
                </div>

                {/* <img className="right transition2 phone" src={phone} alt="Feature Project" /> */}

                <Slider />

            </section>

            

            <section className="skills">
                <div className="skills__container">
                    <h1 className="skills__title">{"{ Some Of My Skills }"}</h1>
                    <ul >
                        <li className="transition2 skills__container__ul_li">
                            <div className="icon__container one">
                                <DeveloperModeIcon fontSize= "large" />
                            </div>
                            <p className="skills__title">React.js</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>

                        <li className="transition2 skills__container__ul_li">
                            <div className="icon__container two">
                                <WebIcon fontSize= "large" />
                            </div>
                            <p className="skills__title">JavaScript</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>

                        <li className="transition2 skills__container__ul_li">
                            <div className="icon__container three">
                              
                                <StorageIcon fontSize= "large" />

                                
                            </div>
                            <p className="skills__title">React Native</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>


                        <li className="transition2 skills__container__ul_li">
                            <div className="icon__container three">
                              
                                <StorageIcon fontSize= "large" />

                                
                            </div>
                            <p className="skills__title">Python</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>


                        <li className="transition2 skills__container__ul_li">
                            <div className="icon__container three">
                              
                                <StorageIcon fontSize= "large" />

                                
                            </div>
                            <p className="skills__title">M.E.R.N</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>


                        <li className="transition2 skills__container__ul_li">
                            <div className="icon__container three">
                              
                                <StorageIcon fontSize= "large" />

                                
                            </div>
                            <p className="skills__title">AWS</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>
                    </ul>
                </div>

            </section>

            <section className="portfolio">
            <h1 className="skills__title">{"{ My Experiences }"}</h1>

                <div className="portfolio__container transition3 ">
                    <div className="portfolio__left ">
                        <div className="inner">
                            <p className="subtitle ">Ecommerce </p>
                            <p className="featured__title "> Restore, LLC</p>
                            <p className="featured__desc ">Ecommerce webiste selling beauty lotion hand made with all natural ingredience.</p>
                            <p><Button style={{color: "#75dfe6", border: "1px solid #75dfe6", width: "10em", height: "3em", marginBottom: "3em" }}> Visit Website </Button></p>


                        </div>
                    </div>
                    <a href="#"><img src={serge} alt="the restore shop"/></a>
                </div>


                <div className="portfolio__container transition3 ">
                    <div className="portfolio__left ">
                        <div className="inner">
                            <p className="subtitle ">Beauty Spa</p>
                            <p className="featured__title "> KCBeauty, LLC</p>
                            <p className="featured__desc ">Body spa booking and reservation for body transformation. </p>
                            <p><Button style={{color: "#75dfe6", border: "1px solid #75dfe6", width: "10em", height: "3em", marginBottom: "3em"}}> Visit Website </Button></p>


                        </div>
                    </div>
                    <a href="#"><img src={kc} alt="the restore shop"/></a>
                </div>

{/* 
                <div className="portfolio__container transition3 ">
                    <div className="portfolio__left ">
                        <div className="inner">
                            <p className="subtitle ">Guitar App</p>
                            <p className="featured__title "> TheRestoreShop.com</p>
                            <p className="featured__desc ">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>


                        </div>
                    </div>
                    <a href="#"><img src={restore} alt="the restore shop"/></a>
                </div> */}

            </section>

            <section className="contact">

                <div>

                    <p className="subtitle ">What's Next</p>
                    <p className="featured__title "> Get In Touch</p>
                    <p className="contact__p">Let's Collaborate to create something new, or something old. 
                    I am always excited to solve problems and turn dreams into reality. </p>
                    <Button style={{color: "#75dfe6", border: "1px solid #75dfe6", width: "10em", height: "3em"}}> Say Hello </Button>           


                </div>

            </section>

          
        </div>
    
  );
}

export default Home;