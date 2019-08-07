import React from 'react';
import styled from 'styled-components';

//socials
import GithubLogo from '../../../assets/socials/github.png';
import LinkedInLogo from '../../../assets/socials/linkedin.png';
import CVLogo from '../../../assets/socials/cv.png';
//CV
import CV from '../../../assets/JuniorDeveloperCV.pdf';

const Container = styled.footer`
  //   display: none;
  // position: absolute;
  // width: 100%;
  // bottom: 0;
  z-index: 1;
  min-height: 70px;
  border-bottom: black solid 1px;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LogoContainer = styled.div``;

const Link = styled.a`
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  color: lightgray;
  text-decoration: none;
  margin: 0 2em;
  border-bottom: solid 1px transparent;
  :hover {
    color: white;
    border-bottom: solid white 2px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <Link
          href="http://www.github.com/baalwaan"
          target="_blank"
          title="Github"
        >
          <img src={GithubLogo} />
        </Link>
        <Link to="/about" title="LinkedIn">
          <img src={LinkedInLogo} />
        </Link>
        <Link href={CV} target="_blank" title="CV">
          <img src={CVLogo} />
        </Link>
      </LogoContainer>
    </Container>
  );
};

export default Footer;
