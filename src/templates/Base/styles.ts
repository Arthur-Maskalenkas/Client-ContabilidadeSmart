import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
    background-color: #0e1423;
    border-bottom: solid 0.5rem ${theme.colors.secondary};

    ${media.greaterThan('large')`
      background-color: none;
      border-bottom: none;
    `}
  `}
`
