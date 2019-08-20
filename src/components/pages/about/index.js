import React from 'react';
import styled from 'styled-components';

//image of me
import Fac from '../../../assets/fac.jpeg';
import Me from '../../../assets/me2.jpg';

// array of objects containing techstack Icons, url and info
import stack from './stackIcons';

const Container = styled.section`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`;

const Banner = styled.div`
  position: relative;
  background-image: url(${Fac});
  width: 100vw;
  height: 75vh;
  background-size: cover;
  color: white;
  opacity: 1;
  z-index: 0;
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
  max-width: 20em;
  font-size: 1.5em;
  font-weight bolder;
`;

const PageTitle = styled.h1`
  color: rgb(247, 245, 124);
`;

const PageContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  width: 80vw;
  align-content: center;
  align-items: center;
`;

const Paragraph1Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  width: 80vw;
  align-items: center;
`;
const P1 = styled.p`
  padding: 0em;
  padding: 0;
  margin: 0.5em;
  max-width: 25em;
  font-size: 1.5em;
  line-height: 1.4;
`;

const IMG = styled.img`
  max-width: 20em;
  max-height: 19em;
  padding: 1em;
`;

const P2 = styled.p`
  padding: 0em;
  margin: 0.5em;
  font-size: 1.3em;
  line-height: 1.4;
`;

const TechStack = styled.div`
  text-align: center;
  width: 100%;
  color: black;
`;
const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: rgb(5, 121, 52);
  border-top: solid 4px rgb(68, 166, 187);
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
`;

const Icon = styled.img`
  width: 100%;
  height: 3em;
  object-fit: scale-down;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;

const IconTitle = styled.span`
  padding-top: 5px;
  color: white;
  opacity: 1;
`;

const AboutPage = () => (
  <Container id="about-me">
    <Banner>
      <BannerOverlay>
        <BannerContent>
          <PageTitle>ABOUT ME</PageTitle>
          {/* <P> */}A tech curious junior full stack developer, and graduate
          from Founders & Coders. This program taught me the principles around
          web development, exploring beyond the scope of coding.
          {/* </P> */}
        </BannerContent>
      </BannerOverlay>
    </Banner>

    <PageContent>
      <Paragraph1Container>
        <P1>
          I enjoyed how versatile my time was on the course, I began with a
          mentor, and finished, giving back by planning resources, then
          mentoring the new cohort. During the program I attended meet-ups and
          interesting conferences, something which our group continues to do.
        </P1>
        <IMG src={Me} />
      </Paragraph1Container>

      <P2>
        Being given the opportunity to work as QA in our team to build an
        application for a product owner has given me client facing and team
        based experience of working in an agile environment, from this I am very
        aware of processes and understand the importance of clear communication.
      </P2>
      <P2>
        As an aspiring Junior Full Stack developer I am interested in many
        aspects across the stack. The interaction between the client-side and
        server-side made me really curious about how data is handled.
      </P2>
      <P2>
        Nonetheless, I have a strong interest in React because of the way it
        makes managing things a lot easier with features like the virtual DOM,
        handling data with states and its component based structure. I am also
        currently taking an online course ‘Intro to Redux’ and would like to
        work with React in a new role.
        <br />
        <br />
        <b>PS This is a React portfolio!</b>
      </P2>
    </PageContent>

    <TechStack>
      <h1>Tech Stack</h1>
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
