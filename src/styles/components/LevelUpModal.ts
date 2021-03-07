import styled from 'styled-components';
import Animation from '../animations';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.overlay};
  backdrop-filter: blur(0.4rem);
  -webkit-backdrop-filter: blur(0.4rem);
  box-shadow: 0 0 1.6rem rgba(0, 0, 0, 0.6), 0 0 0.8rem rgba(0, 0, 0, 0.6);
  animation: ${Animation.glass} 0.5s ease-in-out;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 40rem;
  padding: 3.2rem 4.8rem;
  text-align: center;
  border-radius: 5px;
  box-shadow: ${props => props.theme.colors.boxShadow};
  background: ${props => props.theme.colors.light50};

  header {
    font-size: 14rem;
    font-weight: 600;
    color: ${props => props.theme.colors.blue400};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 3.6rem;
    color: ${props => props.theme.colors.title};
  }

  p {
    font-size: 2.4rem;
    color: ${props => props.theme.colors.text};
    margin-top: 0.4rem;
  }

  button {
    position: absolute;
    right: 0.8rem;
    top: 0.8rem;
    border: 0;
    background: transparent;
    font-size: 0px;
  }
`;
