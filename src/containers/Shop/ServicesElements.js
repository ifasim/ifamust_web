import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background: #fff;
  padding-left: 65px;
  // margin-top: -170px;

  
  

  @media screen and (max-width: 800px) {
    height: 1150px;
 
   
    
  }

  @media screen and (max-width: 545px) {
    height: 700px;

    
  }
`;
//

export const ServicesWrapper = styled.div`
  max-width: 500ßpx;
  
  display: grid;
  grid-template-columns: 1fr 1fr ;
  align-items: center;
  grid-gap: 16px;
  padding: 0 0px;
  padding-right: 60px;
  min-height: 200px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 0px;
    padding-right: 30px;
  }
`;

export const ServicesCard = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  

  
  padding: 0px;
 

  // &:hover {
  //   transform: scale(1.02);
  //   transition: all 0.2s ease-in-out;
  //   cursor: pointer;
  // }
`;

export const ServicesImg = styled.img`
  
  width: 100%;
  object-fit: cover;
  max-height: 500px;
  margin-bottom: 10px;
`;



export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: orange;
  margin-bottom: 64px;
  margin-top: -10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #ef807c;
  margin-bottom: 10px;
`;

export const ServicesH3 = styled.h3`
font-size: 1.5em;
color: black;
font-family: helvetica;
font-weight: 400;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  color: #282828;
  text-align: left;
  max-width: 250px;
  padding-bottom: 16px;
  height: 75px;
`;

export const VideoBg = styled.video`
  width: 550px;
  height: 400px;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
