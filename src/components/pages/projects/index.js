import React from 'react';
import styled from 'styled-components';

import Tiles from '../../common/projectsTiles';

//Project images for tiles
import SquareCircleImg from '../../../assets/projects/square-circle.png';
import GithubCardsImg from '../../../assets/projects/github-cards.png';
import QuizAppImg from '../../../assets/projects/react-quiz.png';
import RemindlyImg from '../../../assets/projects/remindly.png';
import AuthProjectImg from '../../../assets/projects/auth.png';
import SmoothieImg from '../../../assets/projects/smoothie-bar.png';
import FavWorkoutImg from '../../../assets/projects/fav-workout.png';

// project urls

const squareCircleUrl = 'https://github.com/FAC-Sixteen/square-circle';
const githubCardsUrl = 'https://github.com/Baalwaan/Github-profile-cards';
const quizApp = 'https://github.com/Baalwaan/b-b';
const remindlyUrl = 'https://github.com/Baalwaan/Remindly';
const authUrl = 'https://github.com/Baalwaan/Authentication-By-Me';
const smootieUrl = 'https://github.com/Baalwaan/Smoothie-bar';
const favWorkoutUrl = 'https://github.com/Baalwaan/exp-hbs-project';

const Page = styled.section`
  width: 80vw;
  margin: auto;
`;

const PageTitle = styled.h1`
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
  const projects = [
    {
      name: 'Square Circle',
      image_path: SquareCircleImg,
      repo_url: squareCircleUrl
    },
    {
      name: 'Github Cards Profile',
      image_path: GithubCardsImg,
      repo_url: githubCardsUrl
    },
    {
      name: 'React Quiz App (TRVIA)',
      image_path: QuizAppImg,
      repo_url: quizApp
    },
    { name: 'Remindly App', image_path: RemindlyImg, repo_url: remindlyUrl },
    {
      name: 'Authentication Project',
      image_path: AuthProjectImg,
      repo_url: authUrl
    },
    { name: 'Smoothie Bar App', image_path: SmoothieImg, repo_url: smootieUrl },
    {
      name: 'Post Ur Fav Workout',
      image_path: FavWorkoutImg,
      repo_url: favWorkoutUrl
    }
  ];
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
