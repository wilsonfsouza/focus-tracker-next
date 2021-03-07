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

    background: ${props => props.theme.colors.light50};
    box-shadow: ${props => props.theme.colors.boxShadow};
    border-radius: 5px;
    font-size: 13.6rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid ${props => props.theme.colors.light100};
    }

    span:last-child {
      border-left: 1px solid ${props => props.theme.colors.light100};
    }
  }

  > span {
    font-size: 10rem;
    margin: 0 0.8rem;
  }
`;

export const CountdownButton = styled.button<CountdownButtonProps>`
  width: 100%;
  height: 8rem;

  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${props => props.theme.colors.lgBlue400};
  color: ${props => props.theme.colors.textButton};

  font-size: 2rem;
  font-weight: 600;
  transform: background-color .2s;

  &:not(:disabled):hover {
    background: ${props => props.theme.colors.lgBlue200};
  }

  ${props => props.isActive && css`
    background: ${props => props.theme.colors.light50};
    color: ${props => props.theme.colors.title};

    &:not(:disabled):hover {
      background: ${props => props.theme.colors.lgRed500};
      color: ${props => props.theme.colors.textButton};
    }
  `}

  &:disabled {
    background: ${props => props.theme.colors.light50};
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;
    border-bottom: 4px solid ${props => props.theme.colors.green500}
  }

  svg {
    margin-left: 0.8rem;
  }
`;
