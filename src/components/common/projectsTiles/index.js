import React from 'react';
import styled from 'styled-components';

const AnchorContainer = styled.div`
  width: 18em;
  height: 18em;
  background-image: url(${props => props.projectImg});
  background-repeat: no-repeat;
  background-size: 95% 95%;
  background-position: center;
  margin: 1em auto;
  border: solid 2px darkgrey;
`;

const Anchor = styled.a`
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
    background: rgb(5, 121, 52);
    opacity: 0.9;
  }
`;

const Tiles = ({ projectName, projectImg, projectUrl }) => (
  <AnchorContainer projectImg={projectImg}>
    <Anchor
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={projectName}
    >
      {projectName}
    </Anchor>
  </AnchorContainer>
);

export default Tiles;
