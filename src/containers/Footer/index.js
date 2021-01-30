import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
import {
  Grid,
  Header,
  Image,
  Segment,
  Icon
} from "semantic-ui-react";



const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
          {/* <FooterLinkItems>
              <FooterLinkTitle style={{color: "white"}}>LOCATIONS</FooterLinkTitle>
              <div style={{marginBottom: "20px", marginTop: "20px"}}>
              <FooterLinkTitle>CHELSEA STORE</FooterLinkTitle>
              <FooterLink to='/sign-up'>
              166 Eighth Avenue New York NY 10011 (between 18th & 19th Streets)
              </FooterLink>
              </div>
              <div style={{marginBottom: "20px"}}>
              <FooterLinkTitle>VILLAGE STORE</FooterLinkTitle>
              <FooterLink to='/sign-up'>
              45 Christopher Street New York NY 10014 (near 7th Avenue)
              </FooterLink>
              </div>

              <div>
              <FooterLinkTitle>CITIPET PLAYSTORE CHELSEA</FooterLinkTitle>
              <FooterLink to='/sign-up'>
              242 West 20th Street New York NY 10011 (Between Seventh & Eighth Avenue)
              </FooterLink>
              </div>
              
            </FooterLinkItems> */}



            {/* <FooterLinkItems>
              <FooterLinkTitle style={{color: "white"}}>BUSINESS HOURS</FooterLinkTitle>
              <div style={{marginBottom: "20px", marginTop: "20px", display: "flex", flexDirection: "column" }}>
              <FooterLinkTitle>CHELSEA</FooterLinkTitle>
              <FooterLink to='/sign-up'>Weekdays: 11AM – 8PM</FooterLink>
              <FooterLink to='/'>Saturday : 11AM – 8PM</FooterLink>
              <FooterLink to='/'>Sunday : 10AM – 5PM</FooterLink>
              
              </div>

              <div style={{marginBottom: "20px", display: "flex", flexDirection: "column" }}>
              <FooterLinkTitle>VILLAGE</FooterLinkTitle>
              <FooterLink to='/sign-up'>Weekdays: 11AM – 8PM</FooterLink>
              <FooterLink to='/'>Saturday : 11AM – 8PM</FooterLink>
              <FooterLink to='/'>Sunday : 11AM – 7PM</FooterLink>
              
              </div>

              <div style={{marginBottom: "20px", display: "flex", flexDirection: "column" }}>
              <FooterLinkTitle>CITIPET PLAYSTORE</FooterLinkTitle>
              <FooterLink to='/sign-up'>Weekdays: 7AM – 8:30PM</FooterLink>
              <FooterLink to='/'>Saturday : 10AM – 6PM</FooterLink>
              <FooterLink to='/'>Sunday : 10AM – 6PM</FooterLink>
              
              </div>
             
            </FooterLinkItems> */}



            {/* <FooterLinkItems>
              <FooterLinkTitle style={{color: "white"}}>CONTACT US</FooterLinkTitle>
              <div style={{marginBottom: "20px", marginTop: "20px"}}>
              <FooterLinkTitle>CHELSEA </FooterLinkTitle>
              <FooterLink to='/sign-up'>
              Tel: (888)400-0859  Ext: 2
              </FooterLink>
              </div>

              <div style={{marginBottom: "20px"}}>
              <FooterLinkTitle>VILLAGE </FooterLinkTitle>
              <FooterLink to='/sign-up'>
              Tel: (888) 400-0859 Ext: 1
              </FooterLink>
              </div>


              <div style={{marginBottom: "20px"}}>
              <FooterLinkTitle>CITIPET PLAYSTORE </FooterLinkTitle>
              <FooterLink to='/sign-up'>
              Tel: (888) 400-0859 Ext: 3
              </FooterLink>
              </div>



              <FooterLink to='/' style={{marginTop: "30px"}}><Icon name='location arrow' /> New York, NY</FooterLink>
             
              <FooterLink to='/'><Icon name='mail' /> support@citipups.com</FooterLink>
             
            </FooterLinkItems> */}



          </FooterLinksWrapper>
          
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <b style={{color:"white"}}>FITEVER</b>
            </SocialLogo>
            <WebsiteRights>© 2020 All Rights Reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/citipups/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/citipupsnyc/?hl=en' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              {/* <SocialIconLink
                href='//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink> */}
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='https://twitter.com/citipups?lang=en'
              >
                <FaTwitter />
              </SocialIconLink>
              {/* <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
