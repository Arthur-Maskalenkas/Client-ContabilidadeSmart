import Button from 'components/Button'
import React from 'react'
import * as S from './styles'

import { ArrowRightCircleFill } from '@styled-icons/bootstrap'

export type TextDirectionType = 'left' | 'right' | 'center'

export type BannerProps = {
  isOpen?: boolean
  img: string
  title: string
  titleWithColor?: string
  titleImage: string
  subtitle: string
  buttonLabel: string
  buttonLink: string

  textDirection?: TextDirectionType
}

const Banner = ({
  img,
  title,
  titleWithColor,
  subtitle,
  buttonLabel,
  buttonLink,
  titleImage,
  textDirection = 'left',
  isOpen = false
}: BannerProps) => (
  <S.Wrapper
    src={img}
    role="img"
    aria-label={titleImage}
    textDirection={textDirection}
    isOpen={isOpen}
  >
    <S.Caption>
      <S.Title isOpen={isOpen}>{title}</S.Title>
      {!!titleWithColor && (
        <S.TitleWithColor isOpen={isOpen}>{titleWithColor}</S.TitleWithColor>
      )}
      <S.Subtitle isOpen={isOpen}>{subtitle}</S.Subtitle>

      <Button icon={<ArrowRightCircleFill />} href={buttonLink} size="small">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
