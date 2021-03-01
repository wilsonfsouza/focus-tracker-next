import styled, { css } from 'styled-components';

interface CountdownButtonProps {
  isActive?: boolean;
}

export const Container = styled.div`
  @media (max-width: 980px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.colors.title};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid #F0F1F3;
    }

    span:last-child {
      border-left: 1px solid #F0F1F3;
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button<CountdownButtonProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-bottom: 4px solid ${props => props.theme.colors.blue};

  font-size: 1.25rem;
  font-weight: 600;
  transform: background-color .2s;

  &:not(:disabled):hover {
    background: ${props => props.theme.colors.blueDark};
    border-bottom: 4px solid ${props => props.theme.colors.blueDark};
  }

  ${props => props.isActive && css`
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.title};
    border-bottom: 4px solid ${props => props.theme.colors.white};

    &:not(:disabled):hover {
      background: ${props => props.theme.colors.red};
      color: ${props => props.theme.colors.white};
      border-bottom: 4px solid ${props => props.theme.colors.red};
    }
  `}

  &:disabled {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;
    border-bottom: 4px solid ${props => props.theme.colors.green}
  }

  img {
    margin-left: 0.5rem;
  }
`;
