import * as S from './styles'

export type ArtigoTemplateProps = {
  title: string
}

const Artigo = ({ title }: ArtigoTemplateProps) => (
  <S.Wrapper>
    <h1>{title}</h1>
  </S.Wrapper>
)

export default Artigo
