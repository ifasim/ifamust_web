import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/images/logo.png'
import {
  Container,
  Grid,
  Header,
  Image,
  Segment,
  Icon
} from "semantic-ui-react";

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ cart, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <React.Fragment>
        <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/' scrollNav={scrollNav}>
            {/* <MdFingerprint className='navbar-icon' color='black'/> */}
            <Image src={logo} style={{ marginRight: '0.3em', width: '30px' }} />

              KC.<span style={{ color: '#ff7878'}}>BEAUTY</span>
            </NavLogo>
            
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu >
              <NavItem >
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                  
                >
                  About
                </NavLinks>
              </NavItem>
            
              <NavItem>
                <NavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Services
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to='discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='book'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Book
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Contact Us
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>

    </React.Fragment>
  );
};

export default Navbar;







