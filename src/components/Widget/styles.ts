import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.li`
  text-decoration: none;
  list-style: none;
  & * {
    text-decoration: none;
    list-style: none;
  }
`

export const Title = styled.h2`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxxsmall};
    border-left: 0.2rem solid ${theme.colors.secondary};
    font-family: ${theme.font.family.raleway.weight.bold};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const ListWrapper = styled.ul``

export const WidgetLinkWrapper = styled.li`
  ${({ theme }) => css`
    position: relative;
    border-top: 1px solid ${theme.colors.lightGray};
    width: 95%;
    &:hover > ${WidgetLink} {
      color: ${theme.colors.secondary};
    }
    &:nth-child(1) {
      border-top: none;
    }
    ${media.greaterThan('medium')`
      width: 25rem;
    `}
  `}
`

const widgetModifiers = {
  moreWeight: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.family.poppins.weight.bold};
    font-size: 1.8rem;
  `
}

type WidgetProps = {
  moreWeight: boolean
}

export const WidgetLink = styled.a<WidgetProps>`
  ${({ theme, moreWeight }) => css`
    color: ${theme.colors.black};
    font-size: 1.6rem;
    font-weight: ${theme.font.family.poppins.weight.light};
    position: relative;
    align-items: center;
    display: flex;
    padding: ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall}
      ${theme.spacings.xsmall};
    transition: 0.2s all;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto 0;
      height: 10px;
      width: 10px;
      background: ${theme.colors.secondary};
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
    ${moreWeight && widgetModifiers.moreWeight(theme)}
  `}
`
