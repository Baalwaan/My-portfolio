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
  border-radius: 5%;
  width: 15em;
  padding: 1em;
  background: black;
`;
const Title = styled.h1`
  margin-top: 0;
  color: white;
`;

const StyledLink = styled(Link)`
  color: lightblue;
`;

const Message = styled.p`
  color: white;
`;

const SuccessPage = props => {
  return (
    <Container>
      <Title>Message Sent.</Title>
      <Message>
        To go back to home page <br />
        <StyledLink to="/">click here </StyledLink>
      </Message>
    </Container>
  );
};

export default SuccessPage;
