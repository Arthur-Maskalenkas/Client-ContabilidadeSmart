import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as BannerStyles from 'components/Banner/styles'

// https://react-slick.neostack.com/docs/get-started

// Estilos pego do:
// <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

export const Wrapper = styled.section`
  ${({ theme }) => css`
    /* Fazendo com que não crie barra caso ocupe mais espaço do que deveria */
    overflow-x: hidden;

    width: 100%;

    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      /* Retirando o espaço entre as imagens e fazendo elas ocuparem totalmente*/
      margin: 0 0 !important;
      flex: 1 0 auto;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }
    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 4.5rem;
      height: 4.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: ${theme.spacings.xxlarge};
      z-index: ${theme.layers.alwaysOnTop};
    }
    .slick-next {
      right: ${theme.spacings.xxlarge};
      z-index: ${theme.layers.alwaysOnTop};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
