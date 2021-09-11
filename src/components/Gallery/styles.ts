import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 60rem;
    margin: 10px auto;
    position: relative;

    ${media.lessThan('medium')`
      width: 100%;
    `}

    a {
      color: #666;
    }

    /* Seta */
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    /* Os filhos em baixo */
    .slick-dots {
      display: flex !important;
      justify-content: center;
      flex-wrap: wrap;

      li {
        list-style: none;
        max-width: 10rem;

        img {
          opacity: 0.5;
          width: 80%;
          height: auto;
        }

        /* Vai iluminar o filho selecionado */
        &.slick-active {
          img {
            opacity: 1;
          }
        }
      }
    }

    .slick-prev {
      position: absolute;
      z-index: 99;
      top: 150px;
      left: -50px;
    }
    .slick-next {
      position: absolute;
      z-index: 99;
      top: 150px;
      right: -50px;
    }
  `}
`
