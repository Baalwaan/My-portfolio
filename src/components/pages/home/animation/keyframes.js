import { keyframes } from 'styled-components';

const typing = keyframes`
{
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    // border-right: 1px solid orange;
    width: 16em;
    opacity: 1;
  }
}
`;
const blink = keyframes` {
  50% {
    border-color: transparent;
  }
}`;

export { typing, blink };
