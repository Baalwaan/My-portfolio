import React from 'react';
import styled from 'styled-components';

// squarecircle, github profile cards , quiz app, authentication, smoothie, workout, workout, remindly, dipict, image carousel

import auth from '../../../assets/projects/auth.png';

const AnchorContainer = styled.div`
position: relative
  width: 20em;
  height: 20em;
  background-image: url(${props => props.auth});
  background-repeat: none;
  background-size: 100%;
//   border: solid black 1px;

`;

const Anchor = styled.a`
  position: absolute;
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: black;
    opacity: 0.8;
  }
`;

const Tiles = ({ auth }) => (
  <AnchorContainer auth={auth}>
    <Anchor href="http://google.com" target="_blank" rel="noopener noreferrer">
      Hello
      {/* project nam  */}
    </Anchor>
  </AnchorContainer>
);

export default Tiles;

// <div class="projects-container">
// <div class=" projects" id="square-circle-app">
//   <a class="project-link" href="https://github.com/FAC-Sixteen/square-circle">Square-Circle</a>
// </div>
