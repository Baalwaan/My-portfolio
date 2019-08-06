import React from 'react';
import styled from 'styled-components';

//image of me
import BurhanImage from '../../../assets/me3.jpg';

// array of objects containing techstack Icons, url and info
import stack from './stackIcons';

const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  background-color: pink;
  background-image: url(${BurhanImage});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 1px 2000px rgba(20, 10, 10, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.h1`
  margin: 0.5em 0 0.5em 0;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
`;

const Bio = styled.div`
  margin: 1em;
  font-size: 1.5em;
  max-width: 18em;
  text-align: center;
`;

const StyledP = styled.div`
  font-weight: bold;
`;

const TechStack = styled.div`
display: flex;
justify: content: center;
flex-direction: column;
align-items: center;
min-width: 100%;
`;
const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  border: solid yellow 1px;
  background: black;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 1.2em;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;

const IconTitle = styled.p`
  font-size: 1em;
  color: white;
`;

const Img = styled.img`
  padding: 1px;
  width: 4em;
  height: 4em;
  object-fit: contain;
`;

const AboutPage = () => (
  <Container>
    <Bio>
      <Title>About Me</Title>
      <p>
        Graduate Junior Full Stack Developer from Founders & Coders. This
        programme taught me beyond the scope of coding.
      </p>
      <p>
        I enjoyed the versatility within the course, from attending meet-ups and
        interesting conferences, having a mentor, and giving back by teaching /
        mentoring the new cohort.
      </p>
      <p>
        Being given the opportunity to work within a team to build an
        application for a product owner has given me an insight of working in an
        agile environment, which I enjoy.
      </p>

      <p>
        As a Junior Full Stack developer I am interested in many aspects across
        the stack, however I have a strong interest in React and would like to
        develop that further.
      </p>
      <StyledP>PS This is a React portfolio!</StyledP>
    </Bio>
    <TechStack>
      <h2>Tech Stack</h2>
      <IconsContainer>
        <br />
        <br />
        {stack.map((obj, key) => {
          ++key;
          return (
            <Link key={key} href={obj.url} target="_blank">
              <Icon>
                <Img src={obj.icon} title={obj.name} alt={`${obj.name} icon`} />

                <IconTitle>{obj.name}</IconTitle>
              </Icon>
            </Link>
          );
        }, 0)}
      </IconsContainer>
    </TechStack>
  </Container>
);

export default AboutPage;
