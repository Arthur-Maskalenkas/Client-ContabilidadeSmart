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
      <S.ImgWrapper widthImg="35rem" heightImg="35rem">
        <img
          alt="Logo Contabilidade Smart"
          src="https://contabilidadesmart.com.br/wp-content/uploads/2021/06/Contabilidade-Smart.jpg"
        />
      </S.ImgWrapper>
    ),
    small: (
      <S.ImgWrapper widthImg="25rem" heightImg="25rem">
        <img
          alt="Logo Contabilidade Smart"
          src="https://contabilidadesmart.com.br/wp-content/uploads/2021/06/Contabilidade-Smart.jpg"
        />
      </S.ImgWrapper>
    )
  }

  return <S.Wrapper>{Logos[size]}</S.Wrapper>
}

export default Logo
