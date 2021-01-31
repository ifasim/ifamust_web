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

import {TweenMax, Power3, Power4, Back, gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import Slider from '../containers/ImageSlider/index.js';

// import Fullsite from "./Fullsite";

gsap.registerPlugin(ScrollTrigger); 








function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);
  const [userInfo, setUserInfo] = useState({});

  let logoItem = useRef(null);




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

useEffect(() => {
    TweenMax.from(
        '.content',
        {
            opacity: 0,
            y: '-30%',
            duration: 2,
            ease: Power4.easeOut
           
        }
    )

    TweenMax.from(
        '.stagger1',
        {
            opacity: 0,
            y: '-50%',
            stagger: .3,
            duration: 2,
            ease: Power4.easeOut
           
        }, "-=1.5"
    )

    TweenMax.from(
        '.transition2',
        {
            scrollTrigger: {
                trigger: '.transition2',
                start: 'top bottom'
            },
            y: 100,
    
            opacity: 0,
            duration: 1.2,
            stagger: .6
           
        }, "-=6"
    )

    TweenMax.from(
        '.transition3',
        {
            scrollTrigger: {
                trigger: '.transition3',
                start: 'top bottom'
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: .3
           
        }, "-=3"
    )


    TweenMax.from(
        '.transition4',
        {
            scrollTrigger: {
                trigger: '.transition4',
                start: 'top bottom'
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: .3
           
        }, "-=3"
    )

    TweenMax.from(
        '.transition5',
        {
            scrollTrigger: {
                trigger: '.transition5',
                start: 'top bottom'
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: .3
           
        }, "-=3"
    )


    // TweenMax.from(
    //     '.clouds',
    //     {
    //         stagger: .5,
    //         scale: 0.1,
    //         duration: 1,
    //         ease: Power3.easeOut
           
    //     },
    // )


}, [])


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
                        <p className="stagger1"> Hello, I code</p>
                    </div>
                    <p className="hero__mainTitle stagger1">Dreams</p>
                    <p><span className="hero__mainTitle hero__mainTitle2 stagger1">Reality</span></p>

                    
                    <div>
                         <p  className="hero__p stagger1">If you can dream it, I can bring it to reality. 
                         Let's start this journey together. </p>

                    </div>

                   

                    <Button className="stagger1" style={{color: "#75dfe6", border: "1px solid #75dfe6", marginTop: "3em", width: "11em", height: "4em"}}> 
                        Get In Touch
                    </Button>

                    
                    

                </div>

                <div className="hero__design stagger1 ">
                        <div className="hero__clouds "> 

                            <div>
                                <img ref= {el => {logoItem = el }} className="hero__cloudsItem cloudx stagger1" src={clouds} />
                                <img className="hero__cloudsItem stagger1" src={clouds} /> 

                            </div>
                            <img className="hero__cloudsItem2 clouds" src={clouds} />
                            

                            
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
                        software that enhances customers experiences.
                        </p>

                        <p className="featured__desc">Here is a list of technologies i've been working with to create magic.</p>

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

                <div className="about__frame ">
                <img className="me__right transition2" src={me} alt="Feature Project" />
                </div>


               


            </section>




            <section className='featured'>
                <div className="left transition3">
                    <div className="inner transition3">
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
                <div  className="transition3">
                    <Slider />
                </div>
                

            </section>

            

            <section className="skills">
                <div className="skills__container ">
                    <h1 className="skills__title transition4">{"{ Some Of My Skills }"}</h1>
                    <ul >
                        <li className="skills__container__ul_li transition4">
                            <div className="icon__container one">
                                <DeveloperModeIcon fontSize= "large" />
                            </div>
                            <p className="skills__title">React.js</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>

                        <li className="skills__container__ul_li transition4">
                            <div className="icon__container two">
                                <WebIcon fontSize= "large" />
                            </div>
                            <p className="skills__title">JavaScript</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>

                        <li className=" skills__container__ul_li transition4">
                            <div className="icon__container three">
                              
                                <StorageIcon fontSize= "large" />

                                
                            </div>
                            <p className="skills__title">React Native</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>


                        <li className="skills__container__ul_li transition4">
                            <div className="icon__container three">
                              
                                <StorageIcon fontSize= "large" />

                                
                            </div>
                            <p className="skills__title">Python</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>


                        <li className="skills__container__ul_li transition4">
                            <div className="icon__container three">
                              
                                <StorageIcon fontSize= "large" />

                                
                            </div>
                            <p className="skills__title">M.E.R.N</p>
                            <p className="featured__desc skills__desc">lorem jsump dolor, sit consectetur adipiscing. lorem jsump dolor, sit consectetur adipiscing</p>
                        </li>


                        <li className="skills__container__ul_li transition4">
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
            <h1 className="skills__title transition5">{"{ My Experiences }"}</h1>

                <div className="portfolio__container transition5">
                    <div className="portfolio__left ">
                        <div className="inner">
                            <p className="subtitle ">Ecommerce </p>
                            <p className="featured__title "> Restore, LLC</p>
                            <p className="featured__desc ">Ecommerce webiste selling hand made beauty lotion with all natural ingredients.</p>
                            <p><Button style={{color: "#75dfe6", border: "1px solid #75dfe6", width: "10em", height: "3em", marginBottom: "3em" }}> Visit Website </Button></p>


                        </div>
                    </div>
                    <a href="#"><img src={serge} alt="the restore shop"/></a>
                </div>


                <div className="portfolio__container transition5 ">
                    <div className="portfolio__left ">
                        <div className="inner">
                            <p className="subtitle ">Beauty Spa</p>
                            <p className="featured__title "> KCBeauty, LLC</p>
                            <p className="featured__desc ">Body spa booking and reservation for body and spa servives. </p>
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

                <div className="transition5">

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