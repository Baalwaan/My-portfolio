import React from 'react';
import styled from 'styled-components';

//keyframes in animation folder
import { left, right, type, type2, blink } from './animation/keyframes';

//images
import CodeImg from '../../../assets/code.png';
import Me from '../../../assets/me2.jpg';
import Skyline from '../../../assets/skyline.jpg';

const Page = styled.section`
  background-image: url(${Skyline});
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 1px 2000px rgba(20, 10, 10, 0.6);
  min-height: 90vh;
  width: 100vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 1em;
`;

const PageTitle = styled.h1`
  margin: 0.5em 0 0.5em 0;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
`;

const Container = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 70vh;
  border: solid darkgrey 1px;
  @media (max-width: 710px) {
      height: 50vh;
      width: 83vw;
    }
  }
`;

const TopTier = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  animation: ${left} 2s ease-in-out 0s;
  @media (max-width: 650px) {
    &:nth-child(1) {
      animation: none;
      height: 100%;
      font-size: 1.1em;
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
      display: none;
    }
  }
`;

const Tile = styled.div`
  background: transparent;
  font-weight: 700;
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

const P1 = styled.p`
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid orange;
  width: 5.6em;
  opacity: 0;
  animation: ${type} 2s steps(40, end);
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;
const P2 = styled.p`
  white-space: nowrap;
  overflow: hidden;
  border-right: 1px solid orange;
  width: 13em;
  opacity: 0;
  animation: ${type2} 3s steps(40, end),
    ${blink} 0.5s step-end infinite alternate;
  animation-delay: 6s;
  animation-fill-mode: forwards;
`;

const HomePage = () => {
  return (
    <Page>
      <PageTitle>Welcome To My Portfolio</PageTitle>
      <Container>
        <TopTier>
          <Tile projectImg={CodeImg} />
          <Tile>
            <p>Hi,</p>
            <P1>I'm Burhan,</P1>
            <P2>Junior Fullstack Developer</P2>
          </Tile>
        </TopTier>
        <LowerTier>
          <Tile />
          <Tile projectImg={Me} />
        </LowerTier>
      </Container>
    </Page>
  );
};

export default HomePage;
