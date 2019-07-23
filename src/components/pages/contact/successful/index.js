import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  border: solid black 1px;
  height: 10em;
  width: 20em;
`;

const SuccessPage = props => {
  return (
    <Container>
      <p>
        To go back to home page <Link to="/">click here </Link>
      </p>
    </Container>
  );
};

export default SuccessPage;
