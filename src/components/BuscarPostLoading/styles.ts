import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 63.8rem;

    animation-name: flash;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;

    background-color: ${theme.colors.gray};

    @keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0.5;
      }
    }
  `}
`
