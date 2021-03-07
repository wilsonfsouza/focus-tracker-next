import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;
  }

  div {
    margin-left: 2.4rem;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${props => props.theme.colors.title}
    }

    p {
      font-size: 1.6rem;
      margin-top: 0.8rem;

      svg {
        margin-right: 0.8rem;
      }
    }
  }
`;
