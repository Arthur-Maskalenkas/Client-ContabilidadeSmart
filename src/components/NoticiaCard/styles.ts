import styled, { css, DefaultTheme } from 'styled-components'
import { Wrapper as RibbonStyles } from 'components/Ribbon/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: 0.2s all;
  cursor: pointer;
  background: white;

  &:hover {
    box-shadow: 0px 0px 50px 11px #e8e8e8;
    transition: box-shadow 0.2s ease-in-out 0s;
  }

  ${media.lessThan('medium')`
      ${RibbonStyles} {
        right: 0;

        :before {
          border: 0;
        }
      }
    `}
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    min-height: 14rem;
    width: 100%;
    padding-bottom: 0.2rem;
    border-bottom: 0.2rem solid ${theme.colors.gray};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${media.lessThan('medium')`
      height: 8rem;
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-align: center;
    margin-top: ${theme.spacings.xxsmall};
    color: ${theme.colors.gray};
    padding: 0 ${theme.spacings.xsmall} ${theme.spacings.xsmall}
      ${theme.spacings.xsmall};
  `}
`

export const Pobremetro = styled.h5``
