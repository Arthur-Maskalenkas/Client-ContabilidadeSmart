import * as S from './styles'

import Image from 'next/image'

type SizeType = 'smallNegativo' | 'medium' | 'small'

export type LogoProps = {
  size: SizeType
}

const Logo = ({ size }: LogoProps) => {
  const Logos = {
    smallNegativo: (
      <S.ImgWrapper widthImg="17rem" heightImg="17rem">
        <Image
          alt="Logo Contabilidade Smart"
          src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635828132/Contabilidade-Smart-negativo-172_swyhjt.png"
          layout="fill"
          objectFit="cover"
        />
      </S.ImgWrapper>
    ),
    medium: (
      <S.ImgWrapper widthImg="15rem" heightImg="9rem">
        <Image
          alt="Logo Contabilidade Smart"
          src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635828132/Contabilidade-Smart_pinyjz.png"
          layout="fill"
          objectFit="cover"
        />
      </S.ImgWrapper>
    ),
    small: (
      <S.ImgWrapper widthImg="15rem" heightImg="9rem">
        <Image
          alt="Logo Contabilidade Smart"
          src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635828132/Contabilidade-Smart_pinyjz.png"
          layout="fill"
          objectFit="cover"
        />
      </S.ImgWrapper>
    )
  }

  return <S.Wrapper>{Logos[size]}</S.Wrapper>
}

export default Logo
