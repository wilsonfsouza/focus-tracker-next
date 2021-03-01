import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;

    > div {
      height: 4px;
      border-radius: 4px;
      background: ${props => props.theme.colors.green};
      transition: width 0.5s ease;
    }

    span {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
      transition: left 0.5s ease;
      width: fit-content;
    }
  }

  @media (max-width: 980px) {
    margin-bottom: 3.5rem;
  }
`;
