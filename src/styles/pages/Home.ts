import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Main = styled.main`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 980px) {
    height: 90vh;
    width: 95%;
  }
`;

export const Section = styled.section`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
`;

export const LeftContainer = styled.div``;
export const RightContainer = styled.div`
  @media (max-width: 980px) {
    margin-bottom: 8rem;

  }
`;
