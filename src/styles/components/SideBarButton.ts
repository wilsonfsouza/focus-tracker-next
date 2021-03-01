import styled, { css } from 'styled-components';

interface ContainerProps {
  isActive?: boolean;
}

export const Container = styled.a<ContainerProps>`
  width: 90px;
  height: 56px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.isActive && css`
    color: ${props => props.theme.colors.blue};
  `}
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.blue};
  }

  & + a {
    margin-top: 1rem;
  }

  @media (max-width: 980px) {
    display: flex;
    flex-direction: row;
    height: 90px;
    width: 90px;

    & + a {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

export const Content = styled.div<ContentProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;

    @media (max-width: 980px) {
      display: flex;
      flex-direction: row;
    }
`;

export const ActiveBar = styled.div`
  width: 5px;
  height: 56px;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 0 5px 5px 0;

  position: absolute;
  left: 0;

  @media (max-width: 980px) {
    width: 90px;
    height: 5px;
    background-color: ${props => props.theme.colors.blue};
    border-radius: 5px 5px 0 0;

    position: absolute;
    bottom: 0;
  }
`;
