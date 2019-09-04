import React from 'react';
import styled from 'styled-components';

import GithubIcon from '../../../assets/icons/github.png';
import Internet from '../../../assets/icons/internet.png';
import CloseButton from '../../../assets/icons/close-button.png';

import projectsInfo from './info/projects.js';

const BgModal = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(192, 192, 192, 0.6);
  color: white;
`;

const Modal = styled.div`
  width: 20em;
  border: solid rgb(16, 61, 16) 0.5em;
  // padding: 0 1em 1em 1em;
  background: rgb(5, 121, 52);
  border-radius: 5%;
`;

const Close = styled.div`
  background-color: rgb(16, 61, 16);
  text-align: right;
  padding: 0.5em 0.5em 0.5em 0;
  color: rgb(247, 245, 124);
  color: white;
  font-size: 1.5em;
`;

const ModalContent = styled.div`
  padding: 1em;
`;

const Title = styled.h1`
  color: rgb(247, 245, 124);
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // margin: 1em
`;
const Link = styled.div`
  display: flex;
  align-items: center;
  margin: 1em;
  width: 100%;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  :hover {
    color: rgb(247, 245, 124);
  }
`;

const Img = styled.img`
  height: 2em;
  width: 2em;
  margin-right: 0.5em;

  object-fit: scale-down;
`;

const Img2 = styled.img`
  // height: 1.5em;
  width: 1.5em;
  margin-right: 0.5em;
  object-fit: scale-down;
  cursor: pointer;
`;

const ModalContainer = ({ setModal, tileKey }) => {
  return (
    <BgModal>
      <Modal>
        <Close>
          <Img2
            onClick={() => setModal(false)}
            src={CloseButton}
            title="Close"
          />
        </Close>
        <ModalContent>
          <Title>{projectsInfo[tileKey - 1].project_name}</Title>
          <p>{projectsInfo[tileKey - 1].description}</p>

          <Links>
            <Link>
              <Img src={GithubIcon} />
              <A href={projectsInfo[tileKey - 1].repo_link} target="_blank">
                {' '}
                See code base here →
              </A>
            </Link>

            <Link>
              <Img src={Internet} />{' '}
              <A href={projectsInfo[tileKey - 1].live_version} target="_blank">
                See live version here →{' '}
              </A>
            </Link>
          </Links>
        </ModalContent>
      </Modal>
    </BgModal>
  );
};

export default ModalContainer;
