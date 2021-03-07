import styled from 'styled-components';
import Animations from '../animations'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors.background};
`;

export const LoadingContainer = styled.div`
  margin-top: 2rem;
  position: relative;
  height: 2px;
  width: 10em;
  background: ${props => props.theme.colors.light300};
`;

export const LoadingBar = styled.div`
  animation: ${Animations.sideToSide} 2s ease-in-out infinite;
  background: ${props => props.theme.colors.blue400};
  width: 50%;
  height: 100%;
  position: absolute;
`;
