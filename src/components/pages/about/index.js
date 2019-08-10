import React from 'react';
import styled from 'styled-components';

//image of me
import BurhanImage from '../../../assets/me1.JPG';

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
    <Bio>
      <Title>About Me</Title>
      <p>
        A <b>tech curious junior full stack developer</b>, and graduate from
        Founders & Coders. This program taught me the principles around web
        development, exploring beyond the scope of coding.
      </p>
      <p>
        I enjoyed how versatile my time was on the course, I began with a
        mentor, and finished, giving back by planning resources, then mentoring
        the new cohort. During the program I attended meet-ups and interesting
        conferences, <b> something which our group continues to do</b>.
      </p>
      <p>
        Being given the opportunity to work as <b>QA</b> in our team to build an
        application for a product owner has given me {''}
        <b>
          client facing and team based experience of working in an agile
          environment
        </b>
        , from this I am very aware of processes and understand the importance
        of clear communication.
      </p>

      <p>
        As <b>an aspiring</b> Junior Full Stack developer I am interested in
        many aspects across the stack. The interaction between the client-side
        and server-side made me really curious about how data is handled.
      </p>
      <p>
        Nonetheless, I have a strong interest in <b>React</b> because of the way
        it makes managing things a lot easier with features like the{' '}
        <b>virtual DOM</b>, handling data with <b>states</b> and its{' '}
        <b>component based structure</b>. I am also currently taking an online
        course ‘Intro to <b>Redux</b>’ and would like to work with React in a
        new role.
      </p>
      <StyledP>PS This is a React portfolio!</StyledP>
    </Bio>
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
