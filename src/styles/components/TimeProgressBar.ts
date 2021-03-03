import styled from 'styled-components';

export const Container = styled.div`
  div:first-child {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 4px solid ${props => props.theme.colors.grayLine};
  }
  div:last-child {
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 4px solid ${props => props.theme.colors.green};
    transition: width 0.2s;
  }
`;
