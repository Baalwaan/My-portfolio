import React from 'react';
import styled from 'styled-components';

//image of me
import a from '../../../assets/me3.jpg';

import stack from './stackIcons';

const Container = styled.section`
  min-height: 100vh;
  background-color: pink;
  background-image: url(${a});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 1px 2000px rgba(20, 10, 10, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // align-content: center;
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
  // width: 18em;
  max-width: 18em;
  // background: black;
  // border: solid black 5px;
  text-align: center;
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
        application for a product owner Square Circle has given me an insight of
        working in an agile environment, which I enjoy.
      </p>

      <p>
        As a Junior Full Stack developer I am interested in many aspects across
        the stack, however I have a strong interest in React and would like to
        develop that further. Ps This is a React portfolio!
      </p>
    </Bio>
  </Container>
);

export default AboutPage;
