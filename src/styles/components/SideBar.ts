import styled from 'styled-components';

export const Container = styled.aside`
  width: 90px;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > svg {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 980px) {
    width: 100%;
    height: 90px;
    bottom: 0;
    left: 0;

    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    position: fixed;

    > svg {
      visibility: hidden;
      display: none;
    }
  }
`;

export const TabSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: row;
  }
`;

export const LogoutSection = styled.div`
  @media (max-width: 980px) {
    visibility: hidden;
    display: none;
  }
`;
