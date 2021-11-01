import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

type ImgWrapperProps = {
  widthImg: string
  heightImg: string
}

export const ImgWrapper = styled.div<ImgWrapperProps>`
  ${({ widthImg, heightImg }) => css`
    position: relative;
    width: ${widthImg};
    margin-left: auto;
    margin-right: auto;
    height: ${heightImg};
    cursor: pointer;
  `}
`
