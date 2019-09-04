import React from 'react';
import styled from 'styled-components';

const Project = styled.div`
  width: 18em;
  height: 18em;
  background-image: url(${props => props.projectImg});
  background-repeat: no-repeat;
  background-size: 95% 95%;
  background-position: center;
  margin: 1em auto;
  border: solid 2px darkgrey;
  cursor: pointer;
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
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

const Tiles = ({ projectName, projectImg, setModal, setTileKey, id }) => {
  const handleModal = () => {
    setModal(true);
    console.log('key', id);
    setTileKey(id);
  };

  return (
    <Project projectImg={projectImg}>
      <Title onClick={handleModal} title={projectName}>
        {projectName}
      </Title>
    </Project>
  );
};

export default Tiles;
