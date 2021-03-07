import styled from 'styled-components';
import Animations from '../animations';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Main = styled.main`
  height: 100vh;
  max-width: 99.2rem;
  margin: 0 auto;
  padding: 4rem;

  display: flex;
  flex-direction: column;

  animation: ${Animations.fadeIn} 0.5s ease-in-out, ${Animations.zoom} 0.4s ease-in-out;

  @media (max-width: 980px) {
    height: 90vh;
    width: 95%;
  }
`;

export const Section = styled.section`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;

  align-content: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 5.6rem;
  }
`;

export const LeftContainer = styled.div``;
export const RightContainer = styled.div`
  @media (max-width: 980px) {
    margin-bottom: 12.8rem;
  }
`;
