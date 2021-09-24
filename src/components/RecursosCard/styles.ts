import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1.5rem;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: 1.6rem;
    font-weight: ${theme.font.family.poppins.weight.normal};
    line-height: 2.8rem;
  `}
`
