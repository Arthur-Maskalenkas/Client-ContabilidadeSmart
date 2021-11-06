import styled, { css } from 'styled-components'

export const ImageWrapper = styled.a`
  ${({ theme }) => css`
    position: relative;
    height: 45rem;

    display: flex;
    cursor: pointer;

    ${ImageDetails}, ${Overlay} {
      transition: 0.7s all;
    }
    /* Details */
    ${ImageDetails} {
      bottom: -4rem;
    }

    &:hover ${ImageDetails} {
      opacity: 1;
      bottom: -0.5rem;
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

export const ImageDetails = styled.p`
  ${({ theme }) => css`
    font-size: 1.7rem;
    text-align: center;
    font-weight: ${theme.font.family.poppins.weight.normal};
    color: ${theme.colors.white};


    position: absolute;
    pointer-events: none;

    left: 50%;
    transform: translateX(-50%);

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
