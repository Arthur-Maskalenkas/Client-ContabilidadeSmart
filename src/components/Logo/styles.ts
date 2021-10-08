import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

type ImgWrapperProps = {
  widthImg: string
  heightImg: string
}

export const ImgWrapper = styled.div<ImgWrapperProps>`
  ${({ theme, widthImg, heightImg }) => css`
    flex-shrink: 0;

    width: ${widthImg};
    height: ${heightImg};

    ${media.lessThan('medium')`
      width: 100%;
    `}

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  `}
`
