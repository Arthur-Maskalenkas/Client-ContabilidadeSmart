import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.family.poppins.weight.bold};
    color: ${theme.colors.black};
  `}
`

export const ListIconsWrapper = styled.div`
  display: flex;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: max-content;
    border-radius: 25%;
    padding: 0.4rem;
    color: ${theme.colors.white};
    background-color: #3dafed;

    cursor: pointer;

    &:not(:first-child) {
      margin-left: ${theme.spacings.xxxsmall};
    }
    svg {
      position: absolute;
      width: 3rem;
      top: -0.2rem;
    }
  `}
`
