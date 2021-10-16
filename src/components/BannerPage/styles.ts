import styled, { css } from 'styled-components'

type WrapperProps = {
  backgroundImage: string
}

export const Wrapper = styled.article<WrapperProps>`
  ${({ backgroundImage }) => css`
    position: relative;

    cursor: pointer;

    display: flex;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    height: 45rem;

    /* Efeitos */
    ${DetailsWrapper}, ${Overlay} {
      transition: 0.7s all;
    }

    /* Details */
    ${DetailsWrapper} {
      transform: translateY(3rem);
    }

    &:hover ${DetailsWrapper} {
      opacity: 1;
      transform: translateY(0);
    }

    /* Overlay */
    ${Overlay} {
      transform: scale(0);
    }

    &:hover ${Overlay} {
      opacity: 0.85;
      visibility: visible;
      transform: scale(1);
    }
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: ${theme.colors.black};
    visibility: hidden;
  `}
`

export const DetailsWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    pointer-events: none;

    top: 2rem;
    align-self: flex-end;
    margin: 0 auto 0 auto;
    z-index: ${theme.layers.base};
    padding ${theme.spacings.xxsmall}
      ${theme.spacings.medium};
    background-color: ${theme.colors.secondary};

    border-bottom-left-radius: 2rem;
    border-top-right-radius: 2rem;
    width: 80%;

    opacity: 0;
  `}
`

export const Details = styled.p`
  ${({ theme }) => css`
    font-size: 1.7rem;
    text-align: center;
    font-weight: ${theme.font.family.poppins.weight.normal};
    color: ${theme.colors.white};
  `}
`
