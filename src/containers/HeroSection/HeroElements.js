import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import CustoHeader from '../../assets/images/bg_skin.png'


// ------- RAND COLORS -------

// pink-dark #ef807c
//pink #fae6e9
//spaceGrey #535353

// ---------------------------



// export const HeroIMG = styled.div`
//   object-fit: 'contain';  
//   background-size: 'cover';
//   width: '100%'; 
//   height: '100%';
// `;

export const HeroContainer = styled.div`
  background: blue;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 65px;
  height: 550px;
  position: relative;
  z-index: 1;
  
  

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: -webkit-gradient(
    //     linear,
    //     left top,
    //     left bottom,
    //     from(rgba(0, 0, 0, 0.2)),
    //     to(rgba(0, 0, 0, 0.2))
    //   ),
    //   -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    // background: linear-gradient(
    //     180deg,
    //     rgba(0, 0, 0, 0.2) 0%,
    //     rgba(0, 0, 0, 0.6) 100%
    //   ),
    //   linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 800px;
  height: 100%;
  background-color: red;
  overflow: hidden;

  
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const HeroH1 = styled.h1`
  color: #282828;
  font-size: 90px;
  text-align: left;
  font-family: Helvetica;
  margin-top: -5px;

  @media screen and (max-width: 768px) {
    font-size: 70px;
    margin-top: -5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Hero2H1 = styled.h1`
  margin-top: -10px;
  color: black;
  font-size: 20px;
  text-align: left;
  letter-spacing: 5px;
  font-family: Helvetica;
  font-weight: 400;
  padding-left: 10px;
 

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 5px;
  color: #000;
  font-size: 18px;
  text-align: left;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  margin-left: -300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-left: -200px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
