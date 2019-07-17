import React from 'react';
import styled, { keyframes } from 'styled-components';

import { left, right } from './animation/keyframes';

//images
import CodeImg from '../../../assets/code.png';
import Me from '../../../assets/me2.jpg';

const Page = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: auto;
`;

const PageTitle = styled.h1`
  margin: 0.5em 0 0.5em 0;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
`;

const Container = styled.div`
  // max-width: 41em;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 75vh;
  border: solid black 1px;
`;

const TopTier = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  animation: ${left} 2s ease-in-out 0s;
  @media (max-width: 650px) {
    &:nth-child(1) {
      height: 100%;
      // position: absolute;
      background-color: red;
    }
  }
`;

const LowerTier = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  animation: ${right} 2s ease-in-out 0s;
  @media (max-width: 650px) {
    &:nth-child(2) {
      // position: absolute;
      // background-color: red;
      display: none;
    }
  }
`;

const ImageTile = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${props => props.projectImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
  @media (max-width: 650px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
const HomePage = () => {
  const tileImages = [CodeImg];
  return (
    <Page>
      <PageTitle>Welcome To My Portfolio</PageTitle>
      <Container>
        <TopTier>
          <ImageTile projectImg={CodeImg} />
          <ImageTile>
            <p>Hi,</p>
            <p>I'm Burhan,</p>
            <p>Junior Fullstack Developer</p>
          </ImageTile>
        </TopTier>
        <LowerTier>
          <ImageTile />
          <ImageTile projectImg={Me} />
        </LowerTier>
      </Container>
    </Page>
  );
};

export default HomePage;
