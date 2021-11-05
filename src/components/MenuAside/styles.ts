import styled, { css } from 'styled-components'

export const Wrapper = styled.aside``

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    background-color: ${theme.colors.white};

    box-shadow: ${theme.shadow.card};

    margin-bottom: ${theme.spacings.small};
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    padding: 1rem 2rem;
    position: relative;
    background-color: #f7f1ee;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background-color: ${theme.colors.secondary};
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.family.poppins.weight.bold};
  `}
`
export const ContentWrapper = styled.div`
  padding: 1rem 2rem 1rem 2rem;
`
