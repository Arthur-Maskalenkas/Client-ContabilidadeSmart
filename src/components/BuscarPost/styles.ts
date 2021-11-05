import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow.card};
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    & > * {
      text-decoration: none;
    }

    padding: ${theme.spacings.large} ${theme.spacings.small}
      ${theme.spacings.small} ${theme.spacings.small};

    ${media.greaterThan('large')`
      min-height: 14rem;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family.raleway};
    font-weight: ${theme.font.family.raleway.weight.bold};
    font-size: 2.4rem;
    cursor: pointer;

    transition: color 0.5s;

    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('large')`
    width: max-content;
    `}

    &:hover {
      animation-name: pulse;
      animation-duration: 0.6s;
      animation-fill-mode: both;

      color: ${theme.colors.secondary};
    }

    @keyframes pulse {
      0% {
        transform: scale3d(1, 1, 1);
      }
      50% {
        transform: scale3d(1.02, 1.02, 1.02);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: ${theme.font.family.poppins.weight.normal};
  `}
`
