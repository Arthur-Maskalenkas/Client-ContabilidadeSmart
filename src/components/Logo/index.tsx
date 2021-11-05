import Link from 'next/link'

import * as S from './styles'

import Image from 'next/image'
import { LINK_SITE } from 'utils/globalVars'

type SizeType = 'smallNegativo' | 'medium' | 'small'

export type LogoProps = {
  size: SizeType
}

const Logo = ({ size }: LogoProps) => {
  const Logos = {
    smallNegativo: (
      <Link href={LINK_SITE} passHref>
        <a>
          <S.ImgWrapper widthImg="17rem" heightImg="17rem">
            <Image
              alt="Logo Contabilidade Smart"
              src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635828132/Contabilidade-Smart-negativo-172_swyhjt.png"
              layout="fill"
              objectFit="cover"
            />
          </S.ImgWrapper>
        </a>
      </Link>
    ),
    medium: (
      <Link href={LINK_SITE} passHref>
        <a>
          <S.ImgWrapper widthImg="15rem" heightImg="9rem">
            <Image
              alt="Logo Contabilidade Smart"
              src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635637148/oie_nCSTx3nxueCx_j5pgdc.png"
              layout="fill"
              objectFit="cover"
            />
          </S.ImgWrapper>
        </a>
      </Link>
    ),
    small: (
      <Link href={LINK_SITE} passHref>
        <a>
          <S.ImgWrapper widthImg="15rem" heightImg="9rem">
            <Image
              alt="Logo Contabilidade Smart"
              src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635637148/oie_nCSTx3nxueCx_j5pgdc.png"
              layout="fill"
              objectFit="cover"
            />
          </S.ImgWrapper>
        </a>
      </Link>
    )
  }

  return <S.Wrapper>{Logos[size]}</S.Wrapper>
}

export default Logo
