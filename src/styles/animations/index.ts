import { keyframes } from 'styled-components';

export default {
  sideToSide: keyframes`
    0%, 100% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(100%);
    }
  `,

  zoom: keyframes`
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1.0);
    }
  `,

  glass: keyframes`
    0% {
      background-color: rgba(0, 0, 0, 0);
      backdrop-filter: blur(0);
      -webkit-backdrop-filter: blur(0);
    } 100% {
      background-color: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(0.7rem);
      -webkit-backdrop-filter: blur(0.7rem);
    }
  `,

  moveUp: keyframes`
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-150px);
      opacity: 0;
    }
  `,

  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `,
}
