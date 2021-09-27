import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as LinkMenuDesktopStyles from 'components/LinkMenuDesktop/styles'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;
    padding: 0 ${theme.spacings.medium};
    justify-content: space-between;
    z-index: ${theme.layers.menu};

    ${media.greaterThan('large')`
      position: absolute;
      width: 114rem;
      left: 50%;
      transform: translateX(-50%);

      border-bottom: none;
    `}
  `}
`

export const LogoWrapper = styled.div`
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    /* Essencial */
    object-fit: cover;
  }
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    top: -0.9rem;
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    & > ${LinkMenuDesktopStyles.Wrapper} {
      margin-right: ${theme.spacings.medium};
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`

export const MenuFullContent = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    overflow-x: auto;
    overflow-y: none;
  `}
`
