import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  /* -webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none; */

  span {
    font-size: 1.6rem;
  }

  > div {
    flex: 1;
    height: 0.8rem;
    border-radius: 4px;
    background: ${props => props.theme.colors.light300};
    margin: 0 2.4rem;
    position: relative;

    > div {
      height: 0.8rem;
      border-radius: 4px;
      background: ${props => props.theme.colors.lgGreen300};
      transition: width 0.5s ease;
    }

    span {
      background-color: ${props => props.theme.colors.light300};
      padding: 0.5rem 0.9rem;
      border-radius: 9rem;

      position: absolute;
      top: 3rem;
      transform: translateX(-50%);
      transition: left 0.5s ease;
      width: fit-content;

      display: flex;
      align-items: center;
      justify-content: center;

      &:before {
        content: '';
        display: block;
        position: absolute;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 10px solid ${props => props.theme.colors.light300};
        margin-top: -3.25rem;
      }
    }
  }

  @media (max-width: 980px) {
    margin-bottom: 5.6rem;
  }
`;
