import styled, { css } from 'styled-components'

import { ContainerAside } from 'components/AsideStyles'

export const Wrapper = styled(ContainerAside)`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
`

export const TagWrapper = styled.div``

export const TagLink = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.black};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    font-weight: ${theme.font.family.poppins.weight.normal};
    font-size: ${theme.font.sizes.xsmall};
    border-radius: 0 2rem 0 2rem;
    border: 0.1rem solid ${theme.colors.lightGray};

    transition: 0.2s all;

    &:hover {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
    }
  `}
`
