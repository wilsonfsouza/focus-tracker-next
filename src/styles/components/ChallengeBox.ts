import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;

  background: ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    display: flex;
    align-items: center;
    text-align: left;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    svg {
      height: 60%;
      margin-right: 1.4rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  header {
    color: ${props => props.theme.colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};
  }
`;

export const ChallengeActiveMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.colors.title};
    margin: 1.5rem 0 1rem;
  }

  p {
    line-height: 1.5rem;
  }
`;

export const ChallengeActiveFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

interface ChallengeButtonProps {
  success?: boolean;
  fail?: boolean;
}

export const ChallengeButton = styled.button<ChallengeButtonProps>`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  color: ${props => props.theme.colors.white};

  font-size: 1rem;
  font-weight: 600;
  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }

  ${props => props.fail && css`
    background: ${props => props.theme.colors.red}
  `}

  ${props => props.success && css`
    background: ${props => props.theme.colors.green}
  `}

`;
