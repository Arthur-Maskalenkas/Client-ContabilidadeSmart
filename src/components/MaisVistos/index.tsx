import LinkLi from 'components/LinkLi'
import * as S from './styles'

type ItemType = {
  title: string
  slug: string
}

export type MaisVistosProps = {
  items: ItemType[]
}

const MaisVistos = ({ items }: MaisVistosProps) => (
  <S.Wrapper>
    {items?.map((item, index) => (
      <LinkLi key={index} moreWeight title={item.title} path={`artigo/${item.slug}`} />
    ))}
  </S.Wrapper>
)

export default MaisVistos
