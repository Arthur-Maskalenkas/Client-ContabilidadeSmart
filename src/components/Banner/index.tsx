import Button from 'components/Button'
import React from 'react'
import * as S from './styles'

export type TextDirectionType = 'left' | 'right' | 'center'

export type BannerProps = {
  img: string
  title: string
  titleImage: string
  subtitle: string
  buttonLabel: string
  buttonLink: string

  textDirection?: TextDirectionType
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  titleImage,
  textDirection = 'left'
}: BannerProps) => (
  <S.Wrapper src={img} role="img" aria-label={titleImage} textDirection={textDirection}>
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button href={buttonLink} size="small">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
