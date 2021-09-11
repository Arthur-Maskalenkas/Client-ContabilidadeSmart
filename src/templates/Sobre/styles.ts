import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(Container).attrs({ as: 'section' })``

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: ${theme.spacings.medium};
  `}
`

export const ImgWrapper = styled.div`
  ${({ theme }) => css`
    /* Essencial */
    flex-shrink: 0;
    width: 15.6rem;
    height: 12rem;

    img {
      border-radius: 100px;
      width: 100%;
      height: 100%;
    }

    ${media.greaterThan('medium')`
      margin-right: ${theme.spacings.xsmall};
      width: 23rem;
      height: 20rem;

    `};
  `}
`

export const NameWrapper = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};

    ${media.greaterThan('medium')`
      padding:${theme.spacings.medium};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
`}
  `}
`

export const Description = styled.p``
