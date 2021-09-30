import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    /* Fazendo com que não crie barra caso ocupe mais espaço do que deveria */
    overflow-x: hidden;

    width: 100%;

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide img {
      cursor: crosshair;
      transition: all 0.3s;
    }

    /* Deixando a imagem centralizada */
    .slick-slide > div > div {
      margin-right: auto;
      margin-left: auto;
    }

    .slick-slide img:hover {
      border: 1px solid #ff5d00;
      opacity: 0.8;
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
  `}
`
