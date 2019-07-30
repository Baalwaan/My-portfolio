import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import hi from '';
import { ReactComponent as SuccessIcon } from '../../../../assets/icons/success.svg';

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

const Message = styled.p`
  font-size 1.5em;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HomeButton = styled.button`
  color: white;
  background: black;
  border-radius: 5%;
  padding: 0.5em;
  font-size: 1.2em;
  width: 10em;
  outline: none;
  cursor: pointer;
`;

const FormButton = styled.button`
  color: black;
  border: solid black 1px;
  background: white;
  border-radius: 5%;
  padding: 0.5em;
  font-size: 1.2em;
  width: 10em;
  outline: none;
  cursor: pointer;
`;

const SuccessPage = props => {
  return (
    <Container>
      <IconContainer>
        <SuccessIcon />
      </IconContainer>
      <MessageContainer>
        <Title>Great!</Title>
        <Message>Message sent. </Message>
        <ButtonsContainer>
          <Link to="/">
            <HomeButton>Home</HomeButton>{' '}
          </Link>
          <Link to="/contact">
            <FormButton>New Message</FormButton>{' '}
          </Link>
        </ButtonsContainer>
      </MessageContainer>
    </Container>
  );
};

export default SuccessPage;
