import { keyframes } from 'styled-components';

const left = keyframes`
0% {
 margin-left: -1000vw;
}

25%{
  margin-left: -500vw
}
100% {
  margin-left: 0;
  // background: orange;
}
`;

const right = keyframes`
0% {
  margin-left: 1000vw;
 }
 
 25%{
   margin-right: 500vw
 }
 100% {
   margin-right: 0;
   // background: orange;
 }
`;

const type = keyframes` {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: 0.15em solid orange;
  }
  100% {
    opacity: 1;
    border: none;
  }
}
`;

const type2 = keyframes`
{
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
`;

const blink = keyframes` {
  50% {
    border-color: transparent;
  }
}`;

export { left, right, type, type2, blink };
