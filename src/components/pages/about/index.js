import React from 'react';
import styled from 'styled-components';

//image of me
import BurhanImage from '../../../assets/me1.JPG';
import Fac from '../../../assets/fac.jpg';

// array of objects containing techstack Icons, url and info
import stack from './stackIcons';

const Container = styled.section`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  // align-content: center;
  min-height: 100vh;
  width: 100vw;
`;

const Banner = styled.div`
  position: relative;

  background-image: url(${Fac});
  width: 100vw;
  height: 80vh;
  background-size: cover;
  color: white;
  opacity: 1;
  z-index: 1;
  margin-bottom: 2em;
`;

const BannerOverlay = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(5, 121, 52, 0.6);
  display: flex;
  align-items: flex-end;
`;

const BannerContent = styled.div`
  padding: 1em;
  width: 30em;
  display: flex;
  flex-direction: column;
`;
const P = styled.p`
max-width: 20em;
  font-size: 1.5em;
  font-weight bolder;
`;
const Title = styled.h1`
  margin: 0.5em 0 0.5em 0;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
`;

const Bio = styled.div`
  margin: 1em;
  font-size: 1.2em;
  max-width: 20em;
  text-align: center;
`;

const StyledP = styled.div`
  font-weight: bold;
`;

const TechStack = styled.div`
  text-align: center;
  width: 100%;
  // background: white;
`;
const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: solid yellow 1px;
  background: black;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 1em;
  width: 4.5em;
  margin: 1em;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 3em;
  object-fit: scale-down;
`;

const IconTitle = styled.span`
  padding-top: 5px;
  color: white;
`;

const AboutPage = () => (
  <Container>
    <Banner>
      <BannerOverlay>
        <BannerContent>
          <h1>ABOUT ME</h1>
          <P>
            A tech curious junior full stack developer, and graduate from
            Founders & Coders. This program taught me the principles around web
            development, exploring beyond the scope of coding.
          </P>
        </BannerContent>
      </BannerOverlay>
    </Banner>

    <TechStack>
      <h2>Tech Stack</h2>
      <IconsContainer>
        {stack.map((obj, key) => {
          ++key;
          return (
            <Link key={key} href={obj.url} target="_blank">
              <Icon src={obj.icon} title={obj.name} alt={`${obj.name} icon`} />
              <IconTitle>{obj.name}</IconTitle>
            </Link>
          );
        }, 0)}
      </IconsContainer>
    </TechStack>
  </Container>
);

export default AboutPage;
