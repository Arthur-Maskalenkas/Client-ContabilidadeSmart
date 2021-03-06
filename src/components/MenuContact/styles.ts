import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    z-index: ${theme.layers.menu};
  `}
`

export const ContactInfoWrapper = styled.div`
  ${({ theme }) => css`
    z-index: 20;
    display: flex;
    align-items: center;

    padding-right: 2rem;
    padding-left: 2rem;

    height: 100%;

    &:nth-child(2) {
      border-right: 1px solid #686b75;
      border-left: 1px solid #686b75;
    }

    ${IconWrapper}, ${ContactInfo} {
      cursor: pointer;
      transition: 0.5s all;
    }

    ${IconWrapper}:hover {
      background-color: ${theme.colors.secondary};
    }
    ${ContactInfo}:hover {
      color: ${theme.colors.secondary};
    }
  `}
`

export const ContactInfo = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.family.poppins.weight.light};
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1.2rem;
    border-radius: 50%;

    margin-right: ${theme.spacings.xxsmall};
    background: rgb(255 255 255 / 9%);

    & > svg {
      width: 2rem;
      color: white;
    }
  `}
`

export const WrapperContent = styled.div`
  position: relative;
  height: 7.5rem;
  display: flex;
`
