import styled, { css } from 'styled-components'

export const ContainerAside = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 2rem;
  `}
`
