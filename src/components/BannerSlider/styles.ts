import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as BannerStyles from 'components/Banner/styles'

// https://react-slick.neostack.com/docs/get-started

// Estilos pego do:
// <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      /* Retirando o espaço entre as imagens e fazendo elas ocuparem totalmente o espaço do height*/
      margin: 0 0 !important;
      flex: 1 0 auto;
      height: 100vh;
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
      color: ${theme.colors.green};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
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
