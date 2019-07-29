import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import hi from '';
import { ReactComponent as SuccessIcon } from '../../../../assets/success.svg';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  border: solid black 0.5em;
  border-radius: 5%;
  min-width: 20em;
  // padding: 1em black;
  // background: black;
`;

const IconContainer = styled.div`
  background: black;
  text-align: center;
  padding: 1em;
`;

const MessageContainer = styled.div`
  padding: 1em;
`;
const Title = styled.h1`
  margin-top: 0;
  // color: white;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: lightblue;
`;

const Message = styled.p`
  // color: white;
`;

const SuccessPage = props => {
  return (
    <Container>
      <IconContainer>
        <SuccessIcon />
      </IconContainer>
      <MessageContainer>
        <Title>Great!</Title>
        <Message>
          To go back to home page <br />
          <StyledLink to="/">click here </StyledLink>
        </Message>
      </MessageContainer>
    </Container>
  );
};

export default SuccessPage;
