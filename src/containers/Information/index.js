import React from 'react';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Column1N,
  Column2N,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  IconRow
} from './InfoElements';

import {
  Grid,
  Header,
  Icon,
  GridColumn,
} from "semantic-ui-react";

const InfoSection = ({
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

                  <IconRow >
                      <Column1N>
                      <Icon style={{color: '#c0c0c0'}} size='huge' name='handshake outline icon' />
                      </Column1N>

                      <Column2N style={{width: '400px'}}>
                          <Header>Easy Payments</Header>
                          <p style={{color: 'grey'}}>Book one session at a time or book a package with multiple sessions</p>
                      </Column2N>
                  </IconRow>

                  <IconRow >
                    <Column1N>
                    <Icon style={{color: '#c0c0c0'}} size='huge' name='calendar alternate outline' />
                    </Column1N>

                    <Column2N style={{width: '400px'}}>
                        <Header>Flexible Schedule</Header>
                        <p style={{color: 'grey'}}>We work on your schedule, selects the day and time you want.</p>
                    </Column2N>
                  </IconRow>

                  <IconRow >
                    <Column1N>
                    <Icon style={{color: '#c0c0c0'}} size='huge' name='bed icon' />
                    </Column1N>

                    <Column2N style={{width: '400px'}}>
                        <Header>Zero Downtime</Header>
                        <p style={{color: 'grey'}}>Get back to your life as soon as we are done. There is no recovery time.</p>
                    </Column2N>
                  </IconRow>

              </TextWrapper>

            </Column1>
            <Column2 style={{backgroundSize: 'cover', width: '100%', height: '100%', objectFit: 'cover',  backgroundColor: 'black' }}>
              <ImgWrap>
                <Img src={img} alt={alt} style={{backgroundSize: 'cover', width: '100%', height: '100%', objectFit: 'cover'}} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
