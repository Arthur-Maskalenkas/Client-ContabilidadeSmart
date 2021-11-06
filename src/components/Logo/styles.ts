import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: max-content;
  margin-left: auto;
  margin-right: auto;
`

type ImgWrapperProps = {
  widthImg: string
  heightImg: string
}

export const ImgWrapper = styled.div<ImgWrapperProps>`
  ${({ widthImg, heightImg }) => css`
    position: relative;
    width: ${widthImg};
    height: ${heightImg};
    cursor: pointer;
  `}
`
