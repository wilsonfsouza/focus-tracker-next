import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${props => props.theme.colors.blue};

  padding: 5rem 0;
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

  @media (max-width: 765px) {
    overflow-x: hidden;
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
  color: ${props => props.theme.colors.white};
  position: inherit;
  padding: 7.4rem 0;

  h2 {
    font-weight: 600;
    font-size: 2.25rem;
    margin-top: 6rem;
    color: ${props => props.theme.colors.white};
  }

  div {
    max-width: 18.5rem;
    margin: 1.5rem 0;
    display: flex;
    color: ${props => props.theme.colors.textHighlight};

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    p {
      margin-left: 1.5rem;
      line-height: 1.4;
      font-weight: 500;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 7.4rem 2rem;

    > svg {
      transform: scale(0.7);
      align-self: center;
    }
  }
`;

export const SignInButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.blueDark};
  border: 0;
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  padding: 1.4rem 0;
  width: 100%;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

