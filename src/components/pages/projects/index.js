import React from 'react';
import styled from 'styled-components';

//common component
import Tiles from '../../common/projectsTiles';

//projects data
import projects from './projectsData';

const Page = styled.section`
  width: 80vw;
  margin: auto;
`;

const PageTitle = styled.h1`
  margin: 0.5em 0 0.5em 0;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
`;

const StyledP = styled.p`
  font-size: 1.5em;
  padding: 0.5em;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProjectsPage = () => {
  return (
    <Page>
      <PageTitle>Projects</PageTitle>
      <StyledP>Here are some fun projects I have worked on.</StyledP>
      <Container>
        {projects.map((project, id) => {
          ++id;
          return (
            <Tiles
              projectName={project.name}
              projectImg={project.image_path}
              projectUrl={project.repo_url}
              key={id}
            />
          );
        }, 0)}
      </Container>
    </Page>
  );
};

export default ProjectsPage;
