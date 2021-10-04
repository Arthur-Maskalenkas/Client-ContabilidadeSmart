import * as S from './styles'

type SizeType = 'smallNegativo' | 'medium' | 'small'

export type LogoProps = {
  size: SizeType
}

const Logo = ({ size }: LogoProps) => {
  const Logos = {
    smallNegativo: (
      <S.ImgWrapper widthImg="25rem" heightImg="25rem">
        <img
          alt="Logo Contabilidade Smart"
          src="img/logo/Contabilidade-Smart-negativo-172.png"
        />
      </S.ImgWrapper>
    ),
    medium: (
      <S.ImgWrapper widthImg="35rem" heightImg="35rem">
        <img alt="Logo Contabilidade Smart" src="img/logo/Contabilidade-Smart-255.jpg" />
      </S.ImgWrapper>
    ),
    small: (
      <S.ImgWrapper widthImg="25rem" heightImg="25rem">
        <img alt="Logo Contabilidade Smart" src="img/logo/Contabilidade-Smart-350.jpg" />
      </S.ImgWrapper>
    )
  }

  return <S.Wrapper>{Logos[size]}</S.Wrapper>
}

export default Logo
