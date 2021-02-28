import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(242, 243, 245, 0.8);
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  background: ${props => props.theme.colors.white};

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${props => props.theme.colors.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${props => props.theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text};
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    border: 0;
    background: transparent;
    font-size: 0px;
  }
`;
