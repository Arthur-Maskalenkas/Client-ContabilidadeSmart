import * as S from './styles'

type SizeType = 'smallNegativo' | 'medium' | 'small'

export type LogoProps = {
  size: SizeType
}

const Logo = ({ size }: LogoProps) => {
  const Logos = {
    smallNegativo: (
      <S.ImgWrapper widthImg="17rem" heightImg="17rem">
        <img
          alt="Logo Contabilidade Smart"
          src="https://contabilidadesmart.com.br/wp-content/uploads/2021/06/Contabilidade-Smart-negativo.png"
        />
      </S.ImgWrapper>
    ),
    medium: (
      <S.ImgWrapper widthImg="100%" heightImg="13rem">
        <img
          alt="Logo Contabilidade Smart"
          src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635628772/Contabilidade-Smart_e7dpud.png"
        />
      </S.ImgWrapper>
    ),
    small: (
      <S.ImgWrapper widthImg="100%" heightImg="12rem">
        <img
          alt="Logo Contabilidade Smart"
          src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635628772/Contabilidade-Smart_e7dpud.png"
        />
      </S.ImgWrapper>
    )
  }

  return <S.Wrapper>{Logos[size]}</S.Wrapper>
}

export default Logo
