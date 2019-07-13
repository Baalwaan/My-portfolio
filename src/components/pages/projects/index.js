import React from 'react';
import styled from 'styled-components';

import Tiles from '../../common/projectsTiles';

//images for tiles
import auth from '../../../assets/projects/auth.png';

const Container = styled.div`
  min-height: 100vh;
  background-color: blue;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
`;

const ProjectsPage = () => {
  return (
    <Container>
      <Tiles auth={auth}>IEWNOIWEN</Tiles>
      <Tiles auth={auth} />
      <Tiles auth={auth} />
      <Tiles auth={auth} />
      <Tiles auth={auth} />
      <Tiles auth={auth} />
    </Container>
  );
};

export default ProjectsPage;
