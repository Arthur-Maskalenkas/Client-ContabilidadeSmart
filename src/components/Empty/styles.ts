import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: ${theme.spacings.medium} 0;
  `}
`

export const Image = styled.img`
  max-width: 50rem;
  margin-bottom: 3rem;
`
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.family.poppins.weight.light};
    margin-bottom: ${theme.spacings.medium};
  `}
`
