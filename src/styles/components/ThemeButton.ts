import styled, { css } from 'styled-components';

interface ContainerProps {
  isActive?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 90px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.6rem;

  border: 0;
  background-color: transparent;
  color: ${props => props.theme.colors.text};

  ${props => props.isActive && css`
    color: ${props => props.theme.colors.blue400};
  `}
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.blue400};
  }

  @media (max-width: 980px) {
    display: flex;
    flex-direction: row;
    height: 10vh;
    width: 90px;
    margin-top: 0;
    margin-left: 3.2rem;
  }
`;

export const Content = styled.div`
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
  background-color: ${props => props.theme.colors.blue400};
  border-radius: 0 5px 5px 0;

  position: absolute;
  left: 0;

  @media (max-width: 980px) {
    width: 90px;
    height: 5px;
    background-color: ${props => props.theme.colors.blue400};
    border-radius: 5px 5px 0 0;

    position: absolute;
    bottom: 0;
  }
`;
