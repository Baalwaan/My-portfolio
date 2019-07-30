import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as SuccessIcon } from '../../../../assets/icons/success.svg';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid black 0.5em;
  border-radius: 5%;
  min-width: 20em;

  @media (max-width: 320px) {
    //for iphone 5
    min-width: 17em;
    top: 57%;
  }
`;

const IconContainer = styled.div`
  background: black;
  text-align: center;
`;

const MessageContainer = styled.div`
  padding: 1em;
`;
const Title = styled.h1`
  margin-top: 0;
  text-align: center;
`;

const Message = styled.p`
  font-size 1.5em;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
`;

const Button = styled.button`
  color: ${props => props.color};
  border: solid black 1px;
  background: ${props => props.background};
  border-radius: 5%;
  padding: 0.5em;
  font-size: 1.2em;
  width: 10em;
  outline: none;
  cursor: pointer;
  margin: 5px;
`;
const SuccessPage = () => {
  const buttonStyles = {
    homeButton: {
      color: 'white',
      background: 'black'
    },
    FormButton: {
      background: 'white'
    }
  };

  return (
    <Container>
      <IconContainer>
        <SuccessIcon />
      </IconContainer>
      <MessageContainer>
        <Title>Great!</Title>
        <Message>Message sent. </Message>
      </MessageContainer>
      <ButtonsContainer>
        <Link to="/">
          <Button
            background={buttonStyles.homeButton.background}
            color={buttonStyles.homeButton.color}
          >
            Home
          </Button>
        </Link>
        <Link to="/contact">
          <Button background={buttonStyles.FormButton.background}>
            New Message
          </Button>
        </Link>
      </ButtonsContainer>
    </Container>
  );
};

export default SuccessPage;
