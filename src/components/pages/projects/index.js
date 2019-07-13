import React from 'react';
import styled from 'styled-components';

import Tiles from '../../common/projectsTiles';

const Container = styled.section`
  min-height: 100vh;
  background-color: blue;
`;

const ProjectsPage = () => (
  <Container>
    Projects page
    <Tiles />
  </Container>
);

export default ProjectsPage;
