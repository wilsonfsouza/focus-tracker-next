import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors.background};
`;

const sideToSide = keyframes`
  0%, 100% { transform: translateX(0%);}
  50% { transform: translateX(100%); }
`;

export const LoadingContainer = styled.div`
  margin-top: 2rem;
  position: relative;
  height: 2px;
  width: 10em;
  background: ${props => props.theme.colors.grayLine};
`;

export const LoadingBar = styled.div`
  animation: ${sideToSide} 2s ease-in-out infinite;
  background: ${props => props.theme.colors.blue};
  width: 50%;
  height: 100%;
  position: absolute;
`;
