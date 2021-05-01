import styled from 'styled-components';
import Animations from '../animations';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${props => props.theme.colors.blue400};

  padding: 8rem 0;
  position: inherit;

  overflow: hidden;


  @media (max-width: 1125px) {
    position: relative;
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BackgroundContainer = styled.section`
  width: 100%;

  animation: ${Animations.fadeIn} 1s;

  @media (max-width: 765px) {
    overflow: hidden;
  }

  @media (max-width: 500px) {
    visibility: hidden;
    display: none;
  }
`;

export const LoginContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Animations.fadeIn} 1s;

  @media (max-width: 1125px) {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  @media (max-width: 500px) {
    position: initial;
    width: 100%;
  }
`;

export const MainSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  color: ${props => props.theme.colors.textButton};
  position: inherit;
  padding: 11.84rem 0;
  margin: 0 auto;

  h2 {
    font-weight: 600;
    font-size: 3.6rem;
    margin-top: 9.6rem;
    color: ${props => props.theme.colors.textButton};
  }

  div {
    max-width: 29.6rem;
    margin: 2.4rem 0;
    display: flex;
    color: ${props => props.theme.colors.blue200};

    svg {
      width: 4rem;
      height: 4rem;
    }

    p {
      margin-left: 2.4rem;
      line-height: 1.4;
      font-weight: 500;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 11.84rem 6rem;

    > svg {
      transform: scale(0.6);
      align-self: center;
    }
  }
`;

export const SignInButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.blue500};
  border: 0;
  border-radius: 5px;
  color: ${props => props.theme.colors.textButton};
  font-weight: 600;
  padding: 2.24rem 0;
  width: 100%;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

