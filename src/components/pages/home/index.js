import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import AboutPage from '../about';
import Header from '../../common/header';

//keyframes for type effect and background animations in animation folder
import { typing, blink } from './animation/keyframes';
import particleOpt from './animation/particleOpt';

const LandingPage = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  color: white;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const IntroTile = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const P1 = styled.p`
  font-size: 2em;
  font-weight: bolder;
  margin: 0.5em 0;
`;

const Name = styled.span`
  color: rgb(247, 245, 124);
`;
const P2 = styled.p`
  font-size: 2em;
  font-weight: bolder;
  margin: 0.5em 0;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid orange;
  opacity: 0;
  animation: ${typing} 3s steps(40, end),
    ${blink} 0.5s step-end infinite alternate;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  @media only screen and (max-width: 525px) {
    font-size: 1.75em;
  }
  @media only screen and (max-width: 460px) {
    font-size: 1.4em;
  }
  @media only screen and (max-width: 350px) {
    font-size: 1.2em;
  }
`;

const Button = styled.div`
  width: 8em;
  padding: 0.2em;
  margin-top: 1.5em;
  border: solid white 2px;
  background: transparent;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  :hover {
    background: #79cadc;
  }
  :hover > :first-child {
    transform: rotate(90deg);
    transition: all 1s;
  }
`;
const Arrow = styled.b`
  background: transparent;
  margin: 0;
  padding: 0;
  display: inline-block;
  color: white;
  transition: all 1s ease;
  font-weight: bold;
`;

const HomePage = () => {
  return (
    <>
      <LandingPage id="/">
        <IntroTile>
          <P1>
            Hi, I'm <Name>Burhan Baalwaan</Name>.{' '}
          </P1>
          <P2>I'm A Junior Fullstack Developer.</P2>
          <AnchorLink href="#aboutme" style={{ textDecoration: 'none' }}>
            <Button>
              View About me <Arrow>→</Arrow>
            </Button>
          </AnchorLink>
        </IntroTile>

        <StyledParticles width="100vw" params={particleOpt} />
      </LandingPage>
      {/* <Header /> */}
      <AboutPage />
    </>
  );
};

export default HomePage;
