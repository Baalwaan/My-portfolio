import React from 'react';
import styled from 'styled-components';

//common component
import Tiles from '../../common/projectsTiles';

//projects data
import projects from './projectsData';

//background image
import Code from '../../../assets/code.png';

const Page = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: white;
  // background-image: url(${Code});
  // background-repeat: no-repeat;
  // background-size: cover;
  // box-shadow: inset 1px 2000px rgba(20, 10, 10, 0.6);
  color: white;
  // color: black;
`;

const Banner = styled.div`
  position: relative;
  background-image: url(${Code});
  width: 100vw;
  height: 75vh;
  background-size: cover;
  color: white;
  opacity: 1;
  z-index: 0;
  margin-bottom: 2em;
`;

const BannerOverlay = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(5, 121, 52, 0.6);
  display: flex;
  align-items: flex-end;
`;

const BannerContent = styled.div`
  padding: 1em;
  width: 30em;
  display: flex;
  flex-direction: column;
  max-width: 20em;
  font-size: 1.5em;
  font-weight bolder;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const PageTitle = styled.h1`
  color: rgb(247, 245, 124);
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
      <Banner>
        <BannerOverlay>
          <BannerContent>
            <PageTitle>Projects</PageTitle>
            On this page you will find some interesting projects that I have
            worked on. Some of which are personal projects and some group group
            projects. Feel free to visit The github repositories where you can
            see both the code base and live versions.
          </BannerContent>
        </BannerOverlay>
      </Banner>

      <Container>
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
