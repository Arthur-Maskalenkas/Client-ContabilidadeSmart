import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

type ImgWrapperProps = {
  widthImg: string
  heightImg: string
}

export const ImgWrapper = styled.div<ImgWrapperProps>`
  ${({ widthImg, heightImg }) => css`
    flex-shrink: 0;

    margin-left: auto;
    margin-right: auto;

    width: ${widthImg};
    height: ${heightImg};

    img {
      cursor: pointer;
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  `}
`
