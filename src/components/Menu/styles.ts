import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;
    padding: 0 ${theme.spacings.medium};
    justify-content: space-between;
    z-index: ${theme.layers.menu};
    border-bottom: solid 0.5rem ${theme.colors.secondary};

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
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    margin-left: ${theme.spacings.small};
  `}
`
