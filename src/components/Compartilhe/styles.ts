import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.family.poppins.weight.bold};
    color: ${theme.colors.black};
  `}
`

export const ListIconsWrapper = styled.div`
  display: flex;

  a:not(:first-child) {
    margin-left: 20px;
  }
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: 25%;
    padding: 0 0.9rem;
    color: ${theme.colors.white};
    background-color: #3dafed;

    svg:last-child {
      width: 2rem;
      color: ${theme.colors.white};
      background-color: #3dafed;
    }
    &:hover {
      animation-name: shake;
      animation-duration: 0.8s;
      animation-fill-mode: both;
    }

    @keyframes shake {
      0%,
      100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translate3d(-2px, 0, 0);
        transform: translate3d(-2px, 0, 0);
      }
      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translate3d(2px, 0, 0);
        transform: translate3d(2px, 0, 0);
      }
    }
  `}
`
