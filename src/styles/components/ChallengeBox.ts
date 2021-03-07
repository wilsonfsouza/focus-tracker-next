import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;

  background: ${props => props.theme.colors.light50};
  border-radius: 5px;
  box-shadow: ${props => props.theme.colors.boxShadow};
  padding: 2.4rem 3.2rem;

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
    font-size: 2.4rem;
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
    margin-top: 2.8rem;

    svg {
      height: 60%;
      margin-right: 2.24rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  header {
    color: ${props => props.theme.colors.blue300};
    font-weight: 600;
    font-size: 2rem;
    padding: 0 3.2rem 2.4rem;
    border-bottom: 1px solid ${props => props.theme.colors.borderBottom};
  }
`;

export const ChallengeActiveMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media screen and (max-width: 980px) {
    padding: 3rem 0;
  }

  strong {
    font-size: 3.2rem;
    font-weight: 600;
    color: ${props => props.theme.colors.title};
    margin: 2.4rem 0 1.6rem;
  }

  p {
    line-height: 2.4rem;
  }
`;

export const ChallengeActiveFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
`;

interface ChallengeButtonProps {
  success?: boolean;
  fail?: boolean;
}

export const ChallengeButton = styled.button<ChallengeButtonProps>`
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  color: ${props => props.theme.colors.textButton};

  font-size: 1.6rem;
  font-weight: 600;
  transition: opacity .2s;

  &:hover {
    opacity: 0.9;
  }

  ${props => props.fail && css`
    background: ${props => props.theme.colors.lgRed500}
  `}

  ${props => props.success && css`
    background: ${props => props.theme.colors.lgGreen500}
  `}
`;
