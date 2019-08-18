import React from 'react';
import styled from 'styled-components';

//common component
import Header from '../../common/header';
import Tiles from '../../common/projectsTiles';

//projects data
import projects from './projectsData';

//background image
import Skyline from '../../../assets/day.jpg';

const Page = styled.section`
  width: 100vw;
  min-height: 100vh;
  // background: white;
  // background-image: url(${Skyline});
  // background-repeat: no-repeat;
  // background-size: cover;
  // box-shadow: inset 1px 2000px rgba(20, 10, 10, 0.6);
  color: white;
  // color: black;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const PageTitle = styled.h1`
  margin: 0em 0 0.5em 0;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
`;

const StyledP = styled.p`
  font-size: 1.5em;
  padding: 0.5em;
`;

const ProjectContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProjectsPage = () => {
  return (
    <Page>
      <Header />
      <Container>
        <PageTitle>Projects</PageTitle>
        <StyledP>Here are some fun projects I have worked on.</StyledP>
        <ProjectContainer>
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
        </ProjectContainer>
      </Container>
    </Page>
  );
};

export default ProjectsPage;
