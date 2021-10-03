import * as S from './styles'

type ItemType = {
  title: string
  slug: string
}

export type MaisVistosProps = {
  items: ItemType[]
}

const MaisVistos = () => (
  <S.Wrapper>
    <h1>MaisVistos</h1>
  </S.Wrapper>
)

export default MaisVistos
