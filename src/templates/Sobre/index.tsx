import Base from 'templates/Base'
import * as S from './styles'

type imagemProps = {
  src: string
  alt: string
}

export type SobreTemplateProps = {
  imagem: imagemProps
  description: string
}

const Sobre = ({ imagem, description }: SobreTemplateProps) => (
  <Base>
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.ImgWrapper>
          <img {...imagem} />
        </S.ImgWrapper>
        <S.NameWrapper>Arthur Maskalenkas</S.NameWrapper>
      </S.ProfileWrapper>

      <S.Content>
        <S.Title>O porquê desse site</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Wrapper>
  </Base>
)

export default Sobre
