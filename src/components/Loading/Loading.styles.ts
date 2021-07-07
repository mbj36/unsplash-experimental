import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 4px solid #ffe72a;
    border-right: 4px solid #ffe72a;
    border-bottom: 4px solid #ffe72a;
    border-left: 4px solid #1e5af6;
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 0 auto;
`;

export default Loader;
