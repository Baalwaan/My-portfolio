import React from 'react';
import styled from 'styled-components';

import socials from './socials';

const Container = styled.div`
  padding: 1em;
  display: flex;
`;
const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 1em;
  width: 4.5em;
  margin: 1em;
  cursor: pointer;
  font-weight: bold;
  color: white;
  :hover {
    color: rgb(247, 245, 124);
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 3em;
  margin: 0 0.5em 0.5em 0.5em;
  object-fit: scale-down;
`;

const SocialMediaContainer = () => (
  <Container>
    {socials.map((obj, key) => {
      ++key;
      return (
        <Link key={key} href={obj.url} target="_blank">
          <Icon src={obj.icon} title={obj.name} alt={`${obj.name} icon`} />
          {obj.name}
        </Link>
      );
    }, 0)}
  </Container>
);

export default SocialMediaContainer;
