import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 5.6rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.borderBottom};

  font-weight: 500;

  span:first-child {
    font-size: 2rem;
  }

  span:last-child {
    font-size: 2.4rem;
  }
`;
