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

export { left, right };
