import styled, { css, DefaultTheme } from 'styled-components'
import { LinkLiProps } from '.'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;

    list-style: none;

    padding: ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall}
      ${theme.spacings.xxsmall};

    list-style: none;

    cursor: pointer;

    &:hover ${LinkTitle} {
      color: ${theme.colors.secondary};
    }
  `}
`

const linkTitleModifier = {
  moreWEight: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.family.poppins.weight.bold};
    font-size: 1.8rem;
  `
}

export const LinkTitle = styled.a<Pick<LinkLiProps, 'moreWeight'>>`
  ${({ theme, moreWeight }) => css`
    color: ${theme.colors.black};
    font-size: 1.6rem;
    font-weight: ${theme.font.family.poppins.weight.light};
    text-decoration: none;
    transition: 0.4s all;
    padding-left: 1rem;

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

    ${moreWeight && linkTitleModifier.moreWEight(theme)}
  `}
`
