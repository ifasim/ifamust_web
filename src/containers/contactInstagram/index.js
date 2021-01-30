import React from 'react';
import { Button } from '../ButtonElements';

import storePicture from '../../assets/images/pupStore.png'
import storePicture2 from '../../assets/images/pupStore2.png'


import Form from './ContactForm.js';




import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './Info2Elements';

const ContactUs = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Form />
              </TextWrapper>
            </Column1>
            <Column2>
              {/* <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap> */}
              {/* <Services /> */}
              <h2 style={{color: "#282828"}}> Our Location</h2>
              <img src={storePicture} width="500px"/>
              <img src={storePicture2} width="500px"/>

            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ContactUs;
