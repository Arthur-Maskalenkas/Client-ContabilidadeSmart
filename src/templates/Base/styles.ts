import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  ${({ theme }) => css`
    /* Teria caso o menu não fosse fixo */
    /* margin-top: ${theme.spacings.large}; */
    flex: 1 0;
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    background-color: ${theme.colors.brown};
  `}
`

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-bottom: solid 0.5rem ${theme.colors.secondary};

    ${media.greaterThan('large')`
      border-bottom: none;
    `}
  `}
`

export const MenuContactWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 20;
    border-bottom: 1px solid ${theme.colors.darkGray};
  `}
`

export const MenusContainer = styled.div`
  position: absolute;

  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${media.lessThan('large')`
    position: relative;

    ${Container}{
      padding: 0;
    }
  `}
`
