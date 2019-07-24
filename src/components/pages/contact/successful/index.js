import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  border: solid black 0.5em;
  width: 20em;
  padding: 1em;
`;
const Title = styled.h1`
  margin-top: 0;
`;

const SuccessPage = props => {
  return (
    <Container>
      <Title>Message Sent.</Title>
      <p>
        To go back to home page <Link to="/">click here </Link>
      </p>
    </Container>
  );
};

export default SuccessPage;
